<!-- 编辑个人信息 -->
<template>
	<view class="container">
		<view class="content">
			<view class="content-left">
				头像
			</view>
			<view class="content-img">
				<image class="img" src="../../static/image/headImg.png"></image>
			</view>
		</view>
		<view class="content">
			<view class="content-left">昵称</view>
			<view class="content-right">
				<input class="right-text-already" placeholder="想看会儿书"></input>
				<!-- <view class="right-text-already">想看会儿书</view> -->
			</view>
		</view>
		<view class="content">
			<view class="content-left">介绍自己</view>
			<view class="content-right">
<!-- 				<view class="right-text">
					可以说说你的职业或者爱好
				</view> -->
				<input class="right-text" placeholder="可以说说你的职业或者爱好"></input>
			</view>
		</view>
		<view class="content">
			<view class="content-left">我的签名</view>
			<view class="content-right">
				<!-- <view class="right-text">
					请输入签名
				</view> -->
				<input class="right-text" placeholder="请输入签名"></input>
			</view>
		</view>
	</view>
</template>

<style>
	.container{
		width: 100%;
		height: 800rpx;
		/* background: #2C405A; */
	}

	.content{
		width: 100%;
		height: 120rpx;
		display: flex;
		flex-direction: row;
		/* align-items: center; */
		justify-content: space-evenly;
		font-size: 30rpx;
		border-bottom: #d9d9da 1rpx solid;
		/* background: #3c587a; */
	}
	
	.content-left{
		width: 45%;
		height: 120rpx;
		display: flex;
		align-items: center;
		margin-left: 50rpx;
		color: #555555;
		/* background: #6c8fbc; */
	}
	.content-right{
		width: 55%;
		height: 120rpx;
		display: flex;
		align-items: center;
		/* margin-right: 50rpx; */
		color: #555555;
		/* background: #87b4ea; */
	}
	.content-img{
		width: 50%;
		height: 120rpx;
		display: flex;
		align-items: center;
		margin-left: 400rpx;
		/* background: #6586af; */
	}
	.img{
		width: 120rpx;
		height: 120rpx;
	}
	.right-text{
		width: 100%;
		height: 60rpx;
		text-align: right;
		margin-right: 20rpx;
		margin-top: 10rpx;
		/* background: #007AFF; */
	}
	.right-text-already{
		width: 100%;
		height: 60rpx;
		text-align: right;
		margin-right: 20rpx;
		margin-top: 20rpx;
		font-weight: 800;
		/* background: #6fa3e3; */
	}
	input{
		font-size: 30rpx;
		
	}
</style>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>


