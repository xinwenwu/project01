// 导入需要的插件
var _gulp = require("gulp");// 导入gulp插件
var _gulpHtmlmin = require("gulp-htmlmin");// 导入gulp-htmlmin插件
var _gulpCssmin = require("gulp-minify-css");// 导入gulp-minify-css插件
var _gulpJsmin = require("gulp-uglify");//导入js压缩插件
var _gulpImagemin = require("gulp-imagemin");//导入图片压缩插件
var _gulpConcat = require("gulp-concat");// 导入文件合并插件

// 创建任务
/*
	第一个参数：任务名称
	第二个参数：任务处理的函数
*/
_gulp.task("cssmin", function() {
	_gulp.src("./css/style.css")// src:表示要处理的文件或者路径
		.pipe(_gulpCssmin())// 调用插件执行插件的功能
		.pipe(_gulp.dest("./disk/css"));// 输出到指定的文件夹下
});
/*压缩指定的 js文件*/
_gulp.task("jsmin", function() {
	_gulp.src("./js/*.js")// 使用通配符*.js表示匹配所有的js文件
		.pipe(_gulpJsmin())
		.pipe(_gulp.dest("./disk/js/"));
});
/*压缩图片:一个优化的过程。如果图片已经按照同样的方式进行优化了，就不会进行二次优化*/
_gulp.task("imagemin", function() {
	_gulp.src("./images/*.jpg")
		.pipe(_gulpImagemin())
		.pipe(_gulp.dest("./disk/images/"));
});

_gulp.task("gulpconcat", function() {
	// _gulp.src(["1.js", "2.js". "3.js"]);导入的js有顺序的情况下
	_gulp.src("./js/*.js")// 合并的所有文件列表
		.pipe(_gulpConcat("all.js"))// 合并文件，并指定合并后的文件名称
		.pipe(_gulp.dest("./disk/js/"));// 合并后的文件输出的地址
});

/*创建一个任务， 在任务中，执行指定的所有任务*/
/*名称为default的任务，表示gulp的默认任务，默认任务在命令行执行时，不需要添加任务名称*/
_gulp.task("default", ["cssmin", "jsmin", "imagemin"]);