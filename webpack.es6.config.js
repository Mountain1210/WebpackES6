var htmlWebpackPlugin = require('html-webpack-plugin');
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require("path");

//测试插件用的
// var HelloCompilationPlugin=require('./webpackPlus/hellocompilationPlugin.js')
module.exports = {
	entry:{
		vendor: ['jquery', 'lodash'],
		index:"./es6/index.js",
		list:"./es6/list.js"
		,detail:"./es6/detail.js"
	},
	output:{
		path:"./es6_build/",
		filename:"[name].js"
	},

	resolve:{
		extensions:['','.js',".css",'jsx','vue'],  //自动补全识别后缀
		//加入模块短命名
		alias: {
		            // "echarts": "../plus/echarts.common.min.js"   
		            "daterangepicker":"../plus/daterangepicker/1.0.0/daterangepicker.js",
		            "bootstrap":"../plus/fonts/bootstrap.min.css"
		        }
	},
	externals: {
	      $:"jquery",

	             jQuery:"jquery",

	             "window.jQuery":"jquery"
	},
	module:{
		loaders:[
			{ 
				test: require.resolve('jquery'),
   				 loader: 'expose?jQuery!expose?$'
   			},
   			{ 
   				test: require.resolve("jquery"), 
   				loader: "expose-loader?$!expose-loader?jQuery" 
   			},
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
		            },
		            //需找下一个elm工程 中的utils
		            // {
		            //             test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
		            //             loader: 'url',
		            //             query: {
		            //                 limit: 10000,
		            //                 name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
		            //             }
		            //         }
		            
		]
	},
	devServer:{

	},
	
	vue: {
	        loaders: {
	            js: 'babel', 
	            css: ExtractTextPlugin.extract("css"),
	            sass: ExtractTextPlugin.extract("css!sass")            
	        },
    	},
	plugins:[
	//全局公用插件开始
	new webpack.ProvidePlugin({
		  $: 'jquery',
		  jQuery: 'jquery',
		  _:"lodash"
	}),
	//全局公用插件结束
	new webpack.optimize.CommonsChunkPlugin('vendor',  'vendor.js'),
		new htmlWebpackPlugin({
			title:"首密度",
			filename: 'index.html',
			inject: 'body',
			template: 'es6html/index.tepl',
			chunks: ["vendor","index"],
			// excludeChunks: ['detail','list'],
			  inject:'true',
		            hasg:'true',
		             hash: true,
		            minify:{
		                            caseSensitive: false, //是否大小写敏感
		                            removeComments:true, // 去除注释
		                            removeEmptyAttributes:true, // 去除空属性
		                            collapseWhitespace: true //是否去除空格
		                        }
		})
		,new htmlWebpackPlugin({
			title:"列表",
		            filename: 'list.html',
		            inject: 'body',
		            template: 'es6html/list.tepl',
		            chunks: ["vendor","list"],
		            // excludeChunks: ['index','detail'],
		            inject:'true',

		            hash: true,
		            minify:{
		                           caseSensitive: false, //是否大小写敏感
		                           removeComments:true, // 去除注释
		                           removeEmptyAttributes:true, // 去除空属性
		                           collapseWhitespace: true //是否去除空格
		                        }
		        })
		,new htmlWebpackPlugin({
			title:"详情页",
		          filename: 'detail.html',
		          inject: 'body',
		          template: 'es6html/detail.tepl',
		           chunks: ["vendor","detail"],
		           // excludeChunks: ['index','list'],
		           inject:'true',
		           hash: true,
		           minify:{
		                           caseSensitive: false, //是否大小写敏感
		                           removeComments:false, // 去除注释
		                           removeEmptyAttributes:false, // 去除空属性
		                           collapseWhitespace: false //是否去除空格
		                       }
		        })
		,new LodashModuleReplacementPlugin({
		      path: true,
		      flattening: true
		    })
		//下面是测试webpack插件
		// ,new HelloCompilationPlugin({options: "nada"})
	]
	
}