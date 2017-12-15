var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry:{//入口文件
		build:"./app/index.js",
		abc:"./app/abc.js"
	},
	output:{//打包后的
		path:"./build/",//打包后的目录
		filename:"[name].js"//打包后的文件名
	},
	module:{
		loaders:[
			{
				test:/.css$/,//对于使用css的文件
				loaders:["style","css"],//从右往左依次使用
				exclude:"/node_modules/" //排除node_modeules目录
			}
		]
	},
	devServer:{

	},
	resolve:{//自动补全识别后缀
		extensions:['','.js',".css",'jsx']  //自动补全识别后缀
	},
	plugins:[
		new htmlWebpackPlugin({
			title:"欢迎",
			chunks:["build"]
		})
	]
}


/*
热加载
webpack-dev-server --port 3000 --hot --inline 必须全是两个横线，少一个也不能热加载

*/