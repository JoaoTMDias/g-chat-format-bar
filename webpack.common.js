const path = require("path");

module.exports = {
	entry: {
		popup: path.join(__dirname, "src/popup/index.tsx"),
	},
	output: {
		path: path.join(__dirname, "dist"),
		filename: "[name].js",
	},
	module: {
		rules: [
			{
				// every time webpack sees a TS file (except for node_modules)
				// webpack will use "ts-loader" to transpile it to JavaScript
				test: /\.tsx?$/,
				exclude: [/node_modules/],
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-react", "@babel/preset-typescript"],
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
	},
};
