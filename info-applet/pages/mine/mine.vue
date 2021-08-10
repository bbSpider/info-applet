<!-- 我的 页面 -->
<template>
	<view class="container" :style="{ 'height': setHeight + 'px' }">
		<view class="title">
			<view class="title-conten" @tap="skipToContent">
				<image class="head-img" src="/static/image/headImg.png"></image>
				<view class="title-center">
					<view class="user-name">想看会儿书</view>
					<view class="user-info" @click.stop="skipToPerson">编辑个人资料</view>
				</view>
				<view class="title-right">
					<view class="right-text">主页</view>
					<image class="skip" src="/static/image/skipTo.png"></image>
				</view>
			</view>
		</view>
		<view class="label">
			<view class="label-content">
					<view class="content-top">
						<view class="top-left">小商店购买书籍</view>
						<view class="top-right">
							<image class="right-img-content" src="/static/image/skipTo.png"></image>
						</view>
					</view>
					<view class="content-bottom">
						<view class="bottom-num">
							<view class="num-text">10</view>
							<view class="num-text">20</view>
						</view>
						<view class="bottom-num">
							<view class="num-font">电子书</view>
							<view class="num-font">纸质书</view>
						</view>
					</view>
			</view>
		</view>
		<view class="list">
			<view class="list-content">
				<view class="list-content-tab">
					<view class="tab-left">
						<view class="tab-left-text">阅读记录</view>
					</view>
					<view class="tab-right">
						<image class="right-img" src="/static/image/skipTo.png"></image>
					</view>
					
				</view> 
				<view class="list-content-tabT">
					<view class="tab-left">
						<view class="tab-left-text">我的收藏</view>
					</view>
					<view class="tab-right">
						<image class="right-img" src="/static/image/skipTo.png"></image>
					</view>
				</view> 
				<view class="list-content-tabT">
					<view class="tab-left">
						<view class="tab-left-text">我的书架</view>
					</view>
					<view class="tab-right">
						<image class="right-img" src="/static/image/skipTo.png"></image>
					</view>
				</view> 
			</view>
			
			<view class="list-contentDown">
				<view class="list-content-tab">
					<view class="tab-left">
						<view class="tab-left-text">联系我们</view>
					</view>
					<view class="tab-right">
						<image class="right-img" src="/static/image/skipTo.png"></image>
					</view>
					
				</view> 
				<view class="list-content-tabT">
					<view class="tab-left">
						<view class="tab-left-text">帮助中心</view>
					</view>
					<view class="tab-right">
						<image class="right-img" src="/static/image/skipTo.png"></image>
					</view>
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
				_this.setHeight = res.windowHeight;
			  }
			})
		},
		
		methods: {
			
			 skipToPerson: function(){
			 	uni.navigateTo({
			 		url:'../person/person'
			 	})
			 },
			 skipToContent:function(){
				 uni.navigateTo({
				 	url:'../content/content'
				 })
			 }
			
		}
	}
</script>

<style>

.container{
	width: 100%;
	background: #efefef;
}
.title{
	width: 100%;
	/* height: 20%; */
	height: 200rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #ffffff;
}
.title-conten{
	width: 100%;
	height: 200rpx;
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin-left: 12rpx;
}
.label{
	width: 100%;
	height: 200rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 20rpx;
	background: #ffffff;
}
.label-content{
	width: 100%;
	height: 200rpx;
}
.content-top{
	width: 100%;
	height: 40%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
}
.top-left{
	width: 80%;
	height: 100%;
	display: flex;
	align-items: center;
	padding-left: 30rpx;
	font-weight: 500;
	letter-spacing: 5rpx;
	font-size: 40rpx;
}
.top-right{
	width: 20%;
	height: 100%;
	display: flex;
	align-items: center;
}

.right-img{
	padding-left: 60%;
	width: 32rpx;
	height: 32rpx;
}
.right-img-content{
	padding-left: 65%;
	width: 32rpx;
	height: 32rpx;
}
.content-bottom{
	width: 100%;
	height: 60%;
	/* background: #007B7D; */
}
.bottom-num{
	width: 80%;
	height: 40%;
	display: flex;
	flex-direction: row;
	padding-left: 10rpx;
}
.num-text{
	width: 30%;
	height: 100%;
	display: flex;
	align-items: center;
	padding-left: 20rpx;
}
.num-font{
	width: 30%;
	height: 100%;
	display: flex;
	align-items: center;
	padding-left: 20rpx;
	color: #3B4144;
	/* background: #00e8ec; */
}
.list{
	width: 100%;
	/* height: 550rpx; */
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	/* margin-top: 20rpx; */
}
.list-content{
	width: 100%;
	height: 300rpx;
	/* box-shadow: 0rpx 10rpx 50rpx 10rpx rgba(72, 74, 85, 0.2); */
	/* border-radius: 20rpx; */
	margin-top: 20rpx;
	background: #ffffff;
}
.list-contentDown{
	width: 100%;
	height: 200rpx;
	/* box-shadow: 0rpx 10rpx 50rpx 10rpx rgba(72, 74, 85, 0.2); */
	/* border-radius: 20rpx; */
	margin-top: 20rpx;
	background: #ffffff;
}
.list-content-tab{
	width: 100%;
	height: 100rpx;
	display: flex;
	align-items: center;
	/* border-radius: 20rpx 20rpx 0rpx 0rpx; */
	/* background: #3F536E; */
}
.list-content-tabT{
	width: 100%;
	height: 100rpx;
	display: flex;
	align-items: center;
	border-top: #e5e5e5 1rpx solid;
	/* background: #ffff7f; */
}
.tab-left{
	width: 100%;
	height: 80rpx;
	display: flex;
	align-items: center;
	padding-left: 20rpx;
}
.tab-left-text{
	width: 60%;
	height: 80rpx;
	font-size: 30rpx;
	display: flex;
	align-items: center;
}
.tab-right{
	width: 20%;
	height: 80rpx;
	display: flex;
	align-items: center;
	/* background: #2C405A; */
	/* margin-left: 110rpx; */
}
.head-img{
	width: 150rpx;
	height: 150rpx;
}
.title-center{
	width: 50%;
	height: 180rpx;
	display: flex;
	justify-content: center;
	flex-direction: column;
}
.title-right{
	width: 20%;
	height: 180rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	/* background: #2C405A; */
}
.user-name{
	font-weight: 600;
}
.user-info{
	width: 170rpx;
	margin-top: 20rpx;
	font-size: 25rpx;
}
.skip{
	width: 32rpx;
	height: 32rpx;
	
}
.right-text{
	margin-left: 40rpx;
}
</style>
