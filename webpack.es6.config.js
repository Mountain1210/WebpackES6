var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");
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
			}
		]
	},
	devServer:{

	},
	resolve:{
		extensions:['','.js',".css",'jsx']  //自动补全识别后缀
	},
	plugins:[
		new htmlWebpackPlugin({
			filename: 'index.html',
			inject: 'body',
			template: 'index.html_vm'

		})
	]
}