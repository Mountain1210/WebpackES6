var path = require("path");
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


//测试插件用的
//var FileListPlugin=require('./webpackPlus/FileListPlugin.js')



module.exports = {
	entry:{
		vendor: ['jquery', 'lodash'],
		index:"./es6/index.js",
		list:"./es6/list.js"
		,detail:"./es6/detail.js"
	},
	output:{
		// path:"./es6_build/",
		filename:"js/[name].js",

		path:path.resolve(__dirname,"dist",'assets'),
		publicPath:"/assets/"
	},
	watch: true,

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
		            },
		            {
			         test: /\.(png|svg|jpg|gif)$/,
			        
			           loader:"file-loader?name=img/[name]00000[hash].[ext]"
			        
			  },
			  {test:/\.(eot|ttf|woff|woff2|svg)$/,loader:'file?name=fonts/[name].[ext]'}
		            
		            
		]
	},
	// 此时你可以在浏览器中访问http://localhost:8080/webpack-dev-server/来打开的你开发应用，此时它认为你的应用路径是根目录/（这里的根目录是指运行npm run dev的地方，项目的根目录）。
	// 如果你的根目录下有一个名为index.html的文件，那么访问上面那个网址是则会直接打开那么网页
	// 如果你的根目录下没有index.html，则会展示你根目录下的所有文件列表
	// 如果你想改变展现的静态文件目录路径，可以在配置文件中添加devServer参数，并在这个参数的对象里添加contentBase参数指定静态文件目录。比如:
	// devServer:{
		// contentBase: path.join(__dirname)
	// },
	devServer:{
		// contentBase: path.join(__dirname)
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

		//,new FileListPlugin({options: "nada"})

	]
	
}