var gulp = require('gulp')
var $ = require('gulp-load-plugins')({camelize: true})
require('gulp-stats')(gulp)

var onError = (err) => {
	$.notify.onError({
		title: 'Gulp error in ' + err.plugin,
		message: 'Check console for more information'
	})(err)
	$.util.log($.util.colors.red(err.message))
}

var processors = [
	require('autoprefixer')({
		browsers: '> 2%'
	}),
	require('cssnano')()
]

gulp.task('grid', () => {
	gulp.src('./src/bowflex.scss')
		.pipe($.plumber({errorHandler: onError}))
		.pipe($.debug({title: 'src: ', showCount: false}))
		.pipe($.sass({errLogToConsole: true}))
		.pipe($.postcss(processors))
		.pipe($.rename('bowflex.min.css'))
		.pipe(gulp.dest('./dist'))
		.pipe($.debug({title: 'dest: ', showCount: false}))
		.pipe($.notify({
			message: 'BowFlex System Updated',
			onLast: true
		}))
})

		.pipe($.sizereport())
})

gulp.task('docs', () => {
	gulp.src('./src/**/*.{sass,scss}')
		.pipe($.plumber({errorHandler: onError}))
		.pipe(require('sassdoc')({
			dest: './docs/',
			groups: { 
				"grid-system": 'Grid System',
				utility: 'Utility'
			}
			//groups: { slug: "Title", helpers: "Helpers" }
		}))
		.pipe($.notify('BowFlex Docs Updated'))
})

gulp.task('guide:styles', () => {
	return gulp.src('./guide/guide.scss')
		.pipe($.plumber({errorHandler: onError}))
		.pipe($.debug({title: 'src: ', showCount: false}))
		.pipe($.sass())
		.pipe($.postcss(processors))
		.pipe($.rename('guide.min.css'))
		.pipe(gulp.dest('./guide'))
		.pipe($.debug({title: 'dest: ', showCount: false}))
		.pipe($.notify({
			message: 'Demo Styles Updated',
			onLast: true
		}))
})

gulp.task('guide:pug', () => {
	gulp.src('./guide/index.pug')
		.pipe($.plumber({errorHandler: onError}))
		.pipe($.debug({title: 'src: ', showCount: false}))
		.pipe($.rename('index.html'))
		.pipe($.pug())
		.pipe(gulp.dest('./'))
		.pipe($.debug({title: 'dest: ', showCount: false}))
		.pipe($.notify({
			message: 'Guide Template Updated',
			onLast: true
		}))
})

gulp.task('guide', ['guide:styles','guide:pug'])
gulp.task('default', ['grid','report'])

gulp.task('watch', () => {
	gulp.watch('./src/**/*.{sass,scss}', ['grid'])
	gulp.watch('./guide/guide.scss', ['guide:styles'])
	gulp.watch('./guide/**/*.pug', ['guide:pug'])
})
