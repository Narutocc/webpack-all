var webpack = require('webpack');
module.exports = {
	entry:'./index.js',
	output:{
		path:__dirname + '/public',
		filename:'bundle.js'
	},
	module:{
		loaders:[{
			test:/\.css$/,
			loader:'style-loader!css-loader'
		},{
			test:/\.html$/,
			loader:'html-loader'
		},{
			test:/\.vue$/,
			loader:'vue-loader'
		}]
	},
	// vue 2.0加上此句
	resolve:{
		alias:{
			vue:'vue/dist/vue.js'
		}
	},
	devServer:{
		contentBase:'./public',
		inline:true
		// port:12345
	}
}