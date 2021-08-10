<template>
	<view class="container">
		<view class="top">
			<view class="top-img">
				<image class="img-style" src="../../static/image/headImg.png"></image>
				<view class="name">想看会儿书</view>
			</view>
			<view class="top-text">
				<view class="top-text-content">
					<view class="content-text">
						<view class="number">10</view>
						时
						<view class="number">11</view>
						分
					</view>
					<view class="content-text">
						<view class="number">1</view>
						个
					</view>
					<view class="content-text">
						<view class="number">0</view>
						个
					</view>
				</view>
				<view class="top-text-down">
					<view class="content-text">读书时长</view>
					<view class="content-text">收到的赞</view>
					<view class="content-text">关注我</view>
				</view>
			</view>
		</view>
		<view class="down">
			<view class="down-top">
				<view class="down-top-left">最近阅读</view>
				<view class="down-top-content">读完 . 1</view>
			</view>
			<view class="down-bottom">
				<view class="down-bottom-content"></view>
				<view class="down-bottom-content"></view>
				<view class="down-bottom-content"></view>
			</view>
		</view>
		<view class="button-style" @tap="skipLook">
			查看书架
		</view>

	</view>
</template>

<style>
	.container {
		width: 100%;
		height: 980rpx;
		margin: 0;
		background: #f0f0f0;
	}

	.top {
		width: 100%;
		height: 400rpx;
		background: #ffffff;
	}

	.down {
		width: 100%;
		height: 450rpx;
		margin-top: 20rpx;
		background: #ffffff;
	}

	.top-img {
		width: 100%;
		height: 260rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.img-style {
		width: 150rpx;
		height: 150rpx;
	}

	.top-text {
		width: 100%;
		height: 120rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}

	.top-text-content {
		width: 100%;
		height: 50%;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		letter-spacing: 3rpx;
		font-size: 20rpx;
	}

	.top-text-down {
		width: 100%;
		height: 50%;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		letter-spacing: 3rpx;
		font-size: 20rpx;
		color: #909093;
	}

	.content-text {
		width: 30%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
	}

	.number {
		font-size: 35rpx;
		letter-spacing: 1rpx;
	}

	.name {
		font-size: 35rpx;
	}

	.down-top {
		width: 100%;
		height: 100rpx;
		display: flex;
		flex-direction: row;
		border-bottom: #e3e3e3 solid 1rpx;
	}

	.down-top-left {
		width: 50%;
		height: 100rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 30rpx;
		color: #599fdc;
	}

	.down-top-content {
		width: 50%;
		height: 100rpx;
		font-size: 30rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.down-bottom {
		width: 100%;
		height: 350rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}

	.down-bottom-content {
		width: 25%;
		height: 280rpx;
		border: #3B4144 1rpx solid;
	}

	.button-style {
		width: 100%;
		height: 80rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 30rpx;
		color: #909093;
		background: #ffffff;
	}
</style>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			skipLook:function(){
				 uni.switchTab({
				 	url:'../find/find'
				 })
			}
		}
	}
</script>
