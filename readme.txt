npm install babel-cli -g 
npm install babel-cli --save-dev
转换命令：babel app.js --out-file build.js

不要落下es2015

npm install --save-dev babel-preset-es2015
在目录下创建.babelrc文件，设置为{"preset":["es-2015","react"]}


var htmlWebpackPlugin = require('html-webpack-plugin');//自动生成html插件
module.exports = {
/*
	下面是多文件打包
	======================================
	entry:{//入口文件
		build:"./app/index.js",
		abc:"./app/abc.js"
	},
	output:{//打包后的
		path:"./build/",//打包后的目录
		filename:"[name].js"//打包后的文件名
	},
	======================================
	
*/
	//单文件打包
	entry:"./app/index.js",
	output:{//打包后的
		path:"./build/",//打包后的目录
		filename:"build.js"//打包后的文件名
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
	devServer:{//对服务进行配置
		hot:true,
		inline:true
		
		
		
	},
	resolve:{//自动补全识别后缀
		extensions:['','.js',".css",'jsx']  //自动补全识别后缀
	},
	plugins:[  //使用插件
		new htmlWebpackPlugin({  //创建一个html来访问一个js，目前是build.js
			title:"欢迎",
			chunks:["build"]
		}),
		new htmlWebpackPlugin({  //创建一个html来访问一个js，目前是build.js
			title:"欢迎",
			filename:"class",
			chunks:["abc"]
		})
	]
}


/*
热加载
1、webpack-dev-server --port 3000 --hot --inline 必须全是两个横线，少一个也不能热加载
2、webpack-dev-server --port 3000 --hot --inline --content-base ./build/  //  --content-base ./build/是说明将根目录放在当前服务build的文件夹下
3、npm install html-webpack-plugin --save-dev  //自动生成html

4、npm install react react-dom babel-preset-react --save-dev //解释React的插件
5、npm install react-hot-loader --save-dev //react 热加载
*/