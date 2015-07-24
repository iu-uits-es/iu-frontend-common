var srcdir = './components',
	destdir = './build';

require('gulp-lifecycle')({
	scripts: {
        srcdir: srcdir,
        watch: srcdir+'/**/*.js',
        dest: destdir
	}
});

