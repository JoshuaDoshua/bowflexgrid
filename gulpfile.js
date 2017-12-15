var gulp = require('gulp')
var $ = require('gulp-load-plugins')()
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
		.pipe($.debug({showCount: false}))
		.pipe($.sass())
		.pipe($.postcss(processors))
		.pipe($.rename('bowflex.min.css'))
		.pipe(gulp.dest('./dist'))
		.pipe($.debug({showCount: false}))
		.pipe($.notify('BowFlex System Updated'))
})

gulp.task('docs', () => {
	gulp.src('./src/**/*.{sass,scss}')
		.pipe($.plumber({errorHandler: onError}))
		.pipe(require('sassdoc')({
			dest: './docs/',
			groups: { slug: "Title", helpers: "Helpers" }
		}))
		.pipe($.notify('BowFlex Docs Updated'))
})

gulp.task('demo:styles', () => {
	gulp.src('demo/_demo.scss')
		.pipe($.plumber({errorHandler: onError}))
		.pipe($.debug({showCount: false}))
		.pipe($.postcss(processors))
		.pipe($.rename('demo.min.css'))
		.pipe(gulp.dest('./demo'))
		.pipe($.debug({showCount: false}))
		.pipe($.notify('Demo Styles Updated'))
})

gulp.task('demo:pug', () => {
	gulp.src('demo/_index.pug')
		.pipe($.plumber({errorHandler: onError}))
		.pipe($.debug({showCount: false}))
		.pipe($.rename('index.html'))
		.pipe($.pug())
		.pipe(gulp.dest('./demo'))
		.pipe($.debug({showCount: false}))
		.pipe($.notify('Demo Template Updated'))
})

gulp.task('demo', ['demo:styles','demo:pug'])
gulp.task('default', ['grid','docs'])

gulp.task('watch', () => {
	gulp.watch('./src/**/*.{sass,scss}', ['grid'])
	gulp.watch('./demo/_demo.scss', ['demo:styles'])
	gulp.watch('./demo/_index.pug', ['demo:pug'])
})
