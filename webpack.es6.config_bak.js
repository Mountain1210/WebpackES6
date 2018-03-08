var htmlWebpackPlugin = require('html-webpack-plugin');
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require("path");


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
		extensions:['','.js',".css",'jsx','vue'],  

		alias: {

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
			
		           {
		                test: /\.scss$/,
		                loader: ExtractTextPlugin.extract("style", 'css!sass') 
		            }
		            
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

		new webpack.ProvidePlugin({
			  $: 'jquery',
			  jQuery: 'jquery',
			  _:"lodash"
		}),

		new webpack.optimize.CommonsChunkPlugin({ 
			name: 'vendor', filename: 'vendor.bundle.js' 
		}),
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
		                            caseSensitive: false,
		                            removeComments:true,
		                            removeEmptyAttributes:true,
		                            collapseWhitespace: true 
		                        }
		})
		,new htmlWebpackPlugin({
			title:"列表",
		            filename: 'list.html',
		            inject: 'body',
		            template: 'es6html/list.tepl',
		            chunks: ["vendor","list"],
		          
		            inject:'true',

		            hash: true,
		            minify:{
		                           caseSensitive: false,
		                           removeComments:true, 
		                           removeEmptyAttributes:true, 
		                           collapseWhitespace: true 
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
		                           caseSensitive: false, 
		                           removeComments:false, 
		                           removeEmptyAttributes:false,
		                           collapseWhitespace: false 
		                       }
		        })
		,new LodashModuleReplacementPlugin({
		      path: true,
		      flattening: true
		    })

	]
	
}