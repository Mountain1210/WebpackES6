var htmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require("path");

var HelloCompilationPlugin=require('./webpackPlus/hellocompilationPlugin.js')
module.exports = {
	entry:{
		build:"./es6/index.js"
	},
	output:{
		path:"./es6_build/",
		filename:"[name].js"
	},
	module:{
		loaders:[
			{
				test:/.css$/,
				loaders:["style","css"],
				 exclude:"/node_modules/"
			},
			{
				test:/.js$/,
				loaders:["babel-loader"],
				exclude:"/node_modules/",
				include:path.resolve(__dirname,"/es6/")
			},
			{
				test:/.html$/,
				loader:'html-loader'
			},
			//解析.scss文件,对于用 import 或 require 引入的sass文件进行加载，以及<style lang="sass">...</style>声明的内部样式进行加载
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style", 'css!sass') //这里用了样式分离出来的插件，如果不想分离出来，可以直接这样写 loader:'style!css!sass'
            }
		]
	},
	devServer:{

	},
	resolve:{
		extensions:['','.js',".css",'jsx','vue']  //自动补全识别后缀
	},
	 vue: {
        loaders: {
            js: 'babel', 
            css: ExtractTextPlugin.extract("css"),
            sass: ExtractTextPlugin.extract("css!sass")            
        },
    },
	plugins:[
		new htmlWebpackPlugin({
			filename: 'index.html',
			inject: 'body',
			template: 'index.html_vm'

		}),
		new HelloCompilationPlugin({options: "nada"})
	]
	
}