module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
		jest: true,
		webextensions: true,
	},
	extends: [
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"airbnb",
		"prettier",
	],
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly",
		window: true,
		document: true,
		localStorage: true,
		FormData: true,
		FileReader: true,
		Blob: true,
		navigator: true,
		Headers: true,
		Request: true,
		fetch: true,
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: "module",
	},
	plugins: ["preact", "@typescript-eslint", "prettier"],
	rules: {
		"no-use-before-define": "off",
		"@typescript-eslint/no-use-before-define": ["error"],
		"@typescript-eslint/explicit-member-accessibility": 0,
		"@typescript-eslint/indent": ["error", "tab"],
		"@typescript-eslint/no-explicit-any": 0,
		"@typescript-eslint/explicit-function-return-type": 0,
		"@typescript-eslint/no-var-requires": 0,
		"react/prop-types": 0,
		"no-underscore-dangle": 0,
		"import/imports-first": ["error", "absolute-first"],
		"import/newline-after-import": "error",
		"import/prefer-default-export": 0,
		"react/jsx-filename-extension": [
			"error",
			{
				extensions: [".js", ".jsx", ".ts", ".tsx"],
			},
		],
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		"react/jsx-props-no-spreading": "off",
		"import/extensions": [
			"error",
			"ignorePackages",
			{
				js: "never",
				jsx: "never",
				ts: "never",
				tsx: "never",
			},
		],
		"no-param-reassign": ["error", { props: true, ignorePropertyModificationsFor: ["draftState"] }],
		"no-unused-expressions": 0,
	},
	settings: {
		"import/parsers": {
			"@typescript-eslint/parser": [".ts", ".tsx"],
		},
		"import/resolver": {
			typescript: {
				project: "./",
			},
			node: {
				extensions: [".js", ".jsx", ".ts", ".tsx"],
				moduleDirectory: ["node_modules", "src/"],
			},
		},
	},
};
