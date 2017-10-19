var gulp = require('gulp')
var notify = require('gulp-notify')
require('gulp-stats')(gulp)

var processors = [
	require('autoprefixer')({
		browsers: 'last 2 versions'
	}),
	require('cssnano')()
]

gulp.task('default', () => {
	gulp.src('./src/bowflex.scss')
		.pipe(require('gulp-sass')())
		.pipe(require('gulp-postcss')(processors))
		.pipe(require('gulp-rename')('bowflex.min.css'))
		.pipe(gulp.dest('./dist'))
		.pipe(notify('Bowflex System Updated'))
})

gulp.task('docs', () => {
	gulp.src('./src/**/*.{sass,scss}')
		.pipe(require('sassdoc')({
			dest: 'docs/',
			groups: {
				slug: "Title",
				helpers: "Helpers"
			}
		}))
		.pipe(notify('Bowflex Docs Updated'))
})

gulp.task('watch', () => {
	gulp.watch('./src/**/*', ['default'])
})
