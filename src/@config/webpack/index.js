const Utils = require( "./utils" );

const BuildDir = Utils.root( "build" );


module.exports = () => {
	
	return {
		entry: Utils.root( "index.ts" ),
		output: {
			path: BuildDir,
			filename: "index.js"
		},
		resolve: {
			extensions: [ ".js", ".ts", ".tsx" ],
			alias: {
				"@config": Utils.root( "src", "@config" )
			},
			modules: [
				Utils.root( "node_modules" ),
				Utils.root( "src" )
			]
		},
		module: {
			rules: [
				{
					test: /\.ts(x?)$/,
					use: [ "babel-loader" ],
					exclude: /node_modules/
				},
				{
					test: /\.js$/,
					use: [ "babel-loader" ],
					enforce: "pre",
					exclude: /node_modules/
				}
			]
		},
		plugins: [
		
		]
	}
};