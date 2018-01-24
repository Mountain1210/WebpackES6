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


var ExtractTextPlugin = require('extract-text-webpack-plugin'); //2017-12-21最新添加



========================================AMD CMD CommonJS规范====================================


//AMD 规范
/**
 * define(id?, dependencies?, factory); id 和 dependencies 是可选的。
 *
 * define(['dep1', 'dep2'], function(dep1, dep2){
 *  return funciton() {};
 * });
 */
 
 define(['./a', './b'], function(a, b) {  // 依赖必须一开始就写好
    a.doSomething()
    // 此处略去 100 行
    b.doSomething()
    ...
 }) 

define(function () {
    var exports = {};
    exprots.sayHello = function () {
        alert('Hello from module:' + module.id);
    };
    return exports;
});


//CMD 规范
/**
 * define(function(require, exports, module){
 *      return funciton() {};
 * });
 * require、exprots 和module 通过形参传递给模块，在需要依赖模块是，随时调用require() 引入即可
 */
 
 define(function(require, exports, module) {   
     var a = require('./a')  
     a.doSomething()   
     // 此处略去 100 行   
     var b = require('./b') 
     // 依赖可以就近书写   b.doSomething()   
     // ... 
})


//commonJs 规范
/**
 * 在模块中，通过require()方法来引入外部的模块。
 * 上下文提供了exports 对象用于到处当前模块的方法和变量， 并且它是唯一导出的出口。
 * 在模块中还存在一个module对象，它代表模块自身，而exports是module的属性。
 * math.js
 */
exports.math = function () {
    var sum = 0, i = 0, args = arguments, len = args.length;
    while(i < 1) {
        sum += args[i];
    }
    return sum;
};

//另外一个文件
var math = require('math');
exports.increment = function (val) {
    return math.add(val, 1);
};

//兼容Node、AMD、CMD以及浏览器常见的浏览器环境
(function(name, definition){
    //检测上下文环境是否为AMD 或 CMD
    var hasDefine = typeof define === 'function',
        //检查上下文环境是否为Node
        hasExports = typeof module !== 'undefined' && module.exports;

    if(hasDefine) {
        //AMD或CMD环境
        define(definition);
    } else if (hasExports) {
        //定义为普通Node 模块
        module.exports == definition();
    } else {
        //将模块的执行结果挂在window变量中，在浏览器中this指向window对象
        this[name] = definition();
    }
}('hello', function () {
    var hello = function () {

    };
    return hello;
}));
