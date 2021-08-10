<!-- 主页 -->
<template>
	<view class="container">
		<view class="title">
			<view class="search">
				<image class="search-img" src="/static/image/serch.png"></image>
				<input class="search-input" type="text" />
			</view>
		</view>
		<view class="content">
			<view class="content-column">
				<view class="content-column-title">
					标题
				</view>
				<view class="content-column-main">
					内容概述
				</view>
				<view class="content-column-find">
					<view class="column-find-share">
						<image class="find-share-img" src="/static/image/share.png"></image>
						<view class="find-share-text">
							分享
						</view>
					</view>
					<view class="column-find-discuss">
						<image class="find-discuss-img" src="/static/image/discuss.png"></image>
						<view class="find-discuss-text">
							100
						</view>
					</view>
					<view class="column-find-like" v-if="likeChoose%2===0">
						<image class="find-like-img" src="/static/image/like.png" @tap="like"></image>
						<view class="find-like-text">
							100
						</view>
					</view>
					<view class="column-find-like" v-else>
						<image class="find-like-img" src="/static/image/like-choose.png" @tap="like"></image>
						<view class="find-like-text-choose">
							101
						</view>
					</view>

				</view>
			</view>

			<view class="content-column">
				<view class="content-column-title">
					标题
				</view>
				<view class="content-column-main">
					内容概述
				</view>
				<view class="content-column-find">
					<view class="column-find-share">
						<image class="find-share-img" src="/static/image/share.png"></image>
						<view class="find-share-text">
							分享
						</view>
					</view>
					<view class="column-find-discuss">
						<image class="find-discuss-img" src="/static/image/discuss.png"></image>
						<view class="find-discuss-text">
							100
						</view>
					</view>
					<view class="column-find-like" v-if="likeChoose1===0">
						<image class="find-like-img" src="/static/image/like.png" @tap="like1"></image>
						<view class="find-like-text">
							100
						</view>
					</view>
					<view class="column-find-like" v-else>
						<image class="find-like-img" src="/static/image/like-choose.png" @tap="like1"></image>
						<view class="find-like-text-choose">
							101
						</view>
					</view>

				</view>
			</view>

			<view class="content-column">
				<view class="content-column-title">
					标题
				</view>
				<view class="content-column-main">
					内容概述
				</view>
				<view class="content-column-find">
					<view class="column-find-share">
						<image class="find-share-img" src="/static/image/share.png"></image>
						<view class="find-share-text">
							分享
						</view>
					</view>
					<view class="column-find-discuss">
						<image class="find-discuss-img" src="/static/image/discuss.png"></image>
						<view class="find-discuss-text">
							100
						</view>
					</view>
					<view class="column-find-like" v-if="likeChoose2===0">
						<image class="find-like-img" src="/static/image/like.png" @tap="like2"></image>
						<view class="find-like-text">
							100
						</view>
					</view>
					<view class="column-find-like" v-else>
						<image class="find-like-img" src="/static/image/like-choose.png" @tap="like2"></image>
						<view class="find-like-text-choose">
							101
						</view>
					</view>

				</view>
			</view>

			<view class="content-column">
				<view class="content-column-title">
					标题
				</view>
				<view class="content-column-main">
					内容概述
				</view>
				<view class="content-column-find">
					<view class="column-find-share">
						<image class="find-share-img" src="/static/image/share.png"></image>
						<view class="find-share-text">
							分享
						</view>
					</view>
					<view class="column-find-discuss">
						<image class="find-discuss-img" src="/static/image/discuss.png"></image>
						<view class="find-discuss-text">
							100
						</view>
					</view>
					<view class="column-find-like" v-if="likeChoose3===0">
						<image class="find-like-img" src="/static/image/like.png" @tap="like3"></image>
						<view class="find-like-text">
							100
						</view>
					</view>
					<view class="column-find-like" v-else>
						<image class="find-like-img" src="/static/image/like-choose.png" @tap="like3"></image>
						<view class="find-like-text-choose">
							101
						</view>
					</view>

				</view>
			</view>

		</view>
		<view class="bottom"></view>
	</view>
</template>

<style>
	.container {
		width: 100%;
		height: 100vh;
		background: #f0f0f0;
	}

	.title {
		width: 100%;
		height: 100rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #33a4e0;
	}

	.search {
		width: 90%;
		height: 80rpx;
		display: flex;
		align-items: center;
		/* border: solid 1rpx #259ae8; */
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(72, 74, 85, 0.2);
		border-radius: 50rpx;
		background: #FFFFFF;
	}

	.search-img {
		width: 50rpx;
		height: 50rpx;
		margin-left: 10rpx;
	}

	.search-input {
		width: 90%;
		height: 50rpx;
	}

	.content {
		width: 100%;
		/* height: 500rpx; */
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		/* background: #fcf3f5; */
	}

	.content-column {
		width: 100%;
		height: 230rpx;
		margin-top: 20rpx;
		background: #FFFFFF;
		/* border: solid 1rpx #259AE8; */
		/* box-shadow: 0rpx 10rpx 50rpx 10rpx rgba(72, 74, 85, 0.2); */
		/* border-radius: 20rpx; */
	}

	.content-column-title {
		width: 100%;
		height: 50rpx;
		margin-left: 50rpx;
		padding-top: 10rpx;
		/* background: #aaffff; */
	}

	.content-column-main {
		width: 100%;
		height: 100rpx;
		margin-left: 50rpx;
		/* background: #abec78; */
	}

	.content-column-find {
		width: 100%;
		height: 60rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		padding-bottom: 10rpx;
		/* background: #9ad9e8; */
	}

	.column-find-share {
		width: 30%;
		height: 50rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		/* background: #555555; */
	}

	.find-share-img {
		width: 40rpx;
		height: 40rpx;
	}

	.find-share-text {
		margin-left: 10rpx;
	}

	.column-find-discuss {
		width: 30%;
		height: 50rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		/* background: #aaaa54; */
	}

	.find-discuss-img {
		width: 45rpx;
		height: 45rpx;
	}

	.find-discuss-text {
		margin-left: 10rpx;
	}

	.column-find-like {
		width: 30%;
		height: 50rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		/* background: #ffaaff; */
	}

	.find-like-img {
		width: 40rpx;
		height: 40rpx;
	}


	.find-like-text {
		margin-left: 10rpx;
	}

	.find-like-text-choose {
		margin-left: 10rpx;
		color: #d81e06;
	}
</style>
<script>
	import http from "utils/request.js";

	export default {

		data() {
			return {
				likeChoose: 0,
				likeChoose1: 0,
				likeChoose2: 0,
				likeChoose3: 0
			}
		},
		onLoad: function() { 
			console.log("调用 onLoad"); //打印出上个页面传递的参数。
			this.httpTest();
		},
		methods: {

			like: function() {
				if (this.likeChoose == 0) {
					this.likeChoose = this.likeChoose + 1;
				} else {
					this.likeChoose = 0;
				}
			},
			like1: function() {
				if (this.likeChoose1 == 0) {
					this.likeChoose1 = this.likeChoose1 + 1;
				} else {
					this.likeChoose1 = 0;
				}
			},
			like2: function() {
				if (this.likeChoose2 == 0) {
					this.likeChoose2 = this.likeChoose2 + 1;
				} else {
					this.likeChoose2 = 0;
				}
			},
			like3: function() {
				if (this.likeChoose3 == 0) {
					this.likeChoose3 = this.likeChoose3 + 1;
				} else {
					this.likeChoose3 = 0;
				}
			},
			httpTest: function() {

				let params = {
					"article": '',
				}
				uni.showLoading({
					title: '加载中...',
					mask: true, //是否显示透明蒙版，防止触摸穿透
				});
				uni.request({
					method: 'POST',
					// url: 'https://www.szearth.cn/Badminton/servlet/QueryUserInfo',
					// url: 'https://47.106.138.166:8080/article/page',
					url: 'http://192.168.124.15:8090/article/page',
					data: params,
					header: {
						'content-type': 'application/json'
					},
					success: (res) => {
						console.log("成功输出：",res);
					},
					fail: (err) => {
						// reject(err.data);
						console.log("失败输出：",err);
						// let code = err.data.code;
						// switch (code) {
						// 	case 1000:
						// 		break;
						// 	case 2000:
						// 		break;
						// }
					},
					complete: () => {
						uni.hideLoading();
					}
				})
			},
		},


	}
</script>
