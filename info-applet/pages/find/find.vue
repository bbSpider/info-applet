<template>
	<view class="container">
		<view class="title">
			<view class="title-input">
				<image class="title-img" src="../../static/image/serch.png"></image>
				<input class="input-text" placeholder="输入书名"/>
			</view>
		</view>
		<view class="content" :style="{ 'height': setHeight + 'px' }">
			<view>
				<view class="content-list">
					<view class="list-tab">书籍展示</view>
					<view class="list-tab">书籍展示</view>
					<view class="list-tab">书籍展示</view>
				</view> 
				<view class="content-list">
					<view class="list-tab">书籍展示</view>
					<view class="list-tab">书籍展示</view>
					<view class="list-tab">书籍展示</view>
				</view>
				<view class="content-list">
					<view class="list-tab">书籍展示</view>
					<view class="list-tab">书籍展示</view>
					<view class="list-tab">书籍展示</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				setHeight: 0
			}
		},
		onLoad(){
			
			var _this = this;
			uni.getSystemInfo({
			  success: function (res) {
				_this.setHeight = res.windowHeight-100;
			  }
			})
		},
		methods: {
			
		}
	}
</script>

<style>
	
	.title{
		width: 100%;
		height: 100rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		/* background: #c7ecff; */
	}
	.title-input{
		width: 90%;
		height: 80rpx;
		display: flex;
		align-items: center;
		border-radius: 20rpx;
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(72, 74, 85, 0.2);
		/* background: #007AFF; */
	}
	.title-img{
		margin-left: 20rpx;
		width: 50rpx;
		height: 50rpx;
	}
	.content{
		width: 100%;
		height: 900rpx;
		margin-top: 20rpx;
		/* background: #0057b5; */
	}
	.input-text{
		font-size: 25rpx;
	}
	.content-list{
		width: 100%;
		height: 300rpx;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		/* background: #55aaff; */
	}
	.list-tab{
		width: 25%;
		height: 270rpx;
		border: #333333 1rpx solid;
		/* background: #c8fcf9; */
	}
</style>
