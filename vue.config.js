module.exports = {
	"productionSourceMap": false,
	"css": {
		extract: false,
		// css预处理配置
		loaderOptions: {
			sass: {
				data: `@import '@/style/index.scss';`
			}
		}
	},
	"devServer": {
		"disableHostCheck": true,
		"port": 9090
	},
	"lintOnSave": false
}
