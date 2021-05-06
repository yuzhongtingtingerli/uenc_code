/*
 * @Author: yaoyuting
 * @Date: 2019-08-25 14:07:20
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-04-24 14:47:29
 * @Descripttion: 
 */
module.exports = {
	outputDir:'dist/admin/',
	// assetsDir:"../",
	publicPath: "/admin/",
	// http://47.115.200.174:8080
	devServer: {
		proxy: {  //配置跨域
		  '/system': {
			target: 'http://47.115.200.174:8080/',  //这里后台的地址模拟的;应该填写你们真实的后台接口
			changOrigin: true,  //允许跨域
			pathRewrite: {
			  /* 重写路径，当我们在浏览器中看到请求的地址为：http://localhost:8080/api/core/getData/userInfo 时
				实际上访问的地址是：http://121.121.67.254:8185/core/getData/userInfo,因为重写了 /api
			   */
			  '^/': '' 
			}
		  },
		}
	  },
};
