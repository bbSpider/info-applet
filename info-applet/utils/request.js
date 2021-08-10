const baseUrl = 'https://www.szearth.cn/'; //接口域名

const request = (options) => {

	return new Promise((resolve, reject) => {
		uni.showLoading({
			title: '加载中...',
			mask: true, //是否显示透明蒙版，防止触摸穿透
		});
		uni.request({
			method: options.method,
			url: baseUrl + options.url,
			data: options.data,
			header: options.header, //如需其他配置可在此添加或先转换options.url，然后 ...options
			success: (res) => {
				resolve(res.data);
			},
			fail: (err) => {
				reject(err.data);
				let code = err.data.code;
				switch (code) {
					case 1000:
						break;
					case 2000:
						break;
				}
			},
			complete: () => {
				uni.hideLoading();
			}
		})
	});
}
export default request
