module.exports = {
	devServer: {
		proxy: {
			'/api': {
				target: 'http://localhost:8181',
				changeOrigin: true
			}
		}
	},
	css: {
		loaderOptions: {
			sass: {
				//data: `@import '@/styles/_variables.scss';`
			}
		}
	}
};
