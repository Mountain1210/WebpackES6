npm install babel-cli -g 
npm install babel-cli --save-dev
ת�����babel app.js --out-file build.js

��Ҫ����es2015

npm install --save-dev babel-preset-es2015
��Ŀ¼�´���.babelrc�ļ�������Ϊ{"preset":["es-2015","react"]}


var htmlWebpackPlugin = require('html-webpack-plugin');//�Զ�����html���
module.exports = {
/*
	�����Ƕ��ļ����
	======================================
	entry:{//����ļ�
		build:"./app/index.js",
		abc:"./app/abc.js"
	},
	output:{//������
		path:"./build/",//������Ŀ¼
		filename:"[name].js"//�������ļ���
	},
	======================================
	
*/
	//���ļ����
	entry:"./app/index.js",
	output:{//������
		path:"./build/",//������Ŀ¼
		filename:"build.js"//�������ļ���
	},
	module:{
		loaders:[
			{
				test:/.css$/,//����ʹ��css���ļ�
				loaders:["style","css"],//������������ʹ��
				exclude:"/node_modules/" //�ų�node_modeulesĿ¼
			}
		]
	},
	devServer:{//�Է����������
		hot:true,
		inline:true
		
		
		
	},
	resolve:{//�Զ���ȫʶ���׺
		extensions:['','.js',".css",'jsx']  //�Զ���ȫʶ���׺
	},
	plugins:[  //ʹ�ò��
		new htmlWebpackPlugin({  //����һ��html������һ��js��Ŀǰ��build.js
			title:"��ӭ",
			chunks:["build"]
		}),
		new htmlWebpackPlugin({  //����һ��html������һ��js��Ŀǰ��build.js
			title:"��ӭ",
			filename:"class",
			chunks:["abc"]
		})
	]
}


/*
�ȼ���
1��webpack-dev-server --port 3000 --hot --inline ����ȫ���������ߣ���һ��Ҳ�����ȼ���
2��webpack-dev-server --port 3000 --hot --inline --content-base ./build/  //  --content-base ./build/��˵������Ŀ¼���ڵ�ǰ����build���ļ�����
3��npm install html-webpack-plugin --save-dev  //�Զ�����html

4��npm install react react-dom babel-preset-react --save-dev //����React�Ĳ��
5��npm install react-hot-loader --save-dev //react �ȼ���
*/