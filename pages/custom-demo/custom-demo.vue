<!-- 自定义下拉刷新与上拉加载演示(vue) -->
<template>
	<view class="content">
		<z-paging ref="paging" v-model="dataList" @query="queryList(1,4)">
			<!-- 需要固定在顶部不滚动的view放在slot="top"的view中，如果需要跟着滚动，则不要设置slot="top" -->
			<!-- 注意！此处的z-tabs为独立的组件，可替换为第三方的tabs，若需要使用z-tabs，请在插件市场搜索z-tabs并引入，否则会报插件找不到的错误 -->
			<!-- <template #top>
				<z-tabs :list="tabList" @change="tabChange" />
			</template> -->
			<uni-search-bar slot="top" clearButton="auto" cancelButton="none" 
			@confirm="search(searchValue)" v-model="searchValue" @blur="search(searchValue)" @input="search(searchValue)"
				@cancel="clear()" @clear="clear()">
			</uni-search-bar>
			
			<!-- 自定义下拉刷新view(如果use-custom-refresher为true且不设置下面的slot="refresher"，此时不用获取refresherStatus，会自动使用z-paging自带的下拉刷新view) -->

			<!-- 注意注意注意！！字节跳动小程序中自定义下拉刷新不支持slot-scope，将导致custom-refresher无法显示 -->
			<!-- 如果是字节跳动小程序，请参照sticky-demo.vue中的写法，此处使用slot-scope是为了减少data中无关变量声明，降低依赖 -->
			<template #refresher="{refresherStatus}">
				<custom-refresher :status="refresherStatus" />
			</template>
			<!-- 自定义没有更多数据view -->
			<template #loadingMoreNoMore>
				<custom-nomore></custom-nomore>
			</template>
			
			<!-- 如果希望其他view跟着页面滚动，可以放在z-paging标签内 -->
			<uni-card v-for="item in dataList" :key="item.id" 
			:title="item.title" :sub-title="item.org" extra="额外信息" thumbnail="/static/hec.png" @click="goPage(item.h5URL)">
				<text v-if="item.title">系统：{{item.sysName}}<br></text>
				<text>发起人：{{item.ownerName}}<br></text>
				<text>发起部门：{{item.org}}<br></text>
				<text>时间：{{item.time}}<br></text>
			</uni-card>
		</z-paging>
	</view>
</template>

<script>
	var globalDataList = [];
	export default {
		data() {
			return {
				//v-model绑定的这个变量不要在分页请求结束中自己赋值！！！
				dataList: [],
				// tabList: ['测试1','测试2','测试3','测试4'],
				tabIndex: 0,
				token : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ3ZWNoYXQiLCJzdWIiOiJzZXJ2aWNlOndlY2hhdCIsImlzcyI6Imh0dHBzOi8vY2FzLXVhdC5jaGluYXJlLmNvbS5jbiIsInB0eXBlIjoic2VydmljZSIsImV4cCI6MTY3ODM2Nzk3NiwiaWF0IjoxNjc4MzY0Mzc2fQ.LAWUcAakt2rxI5Vjs3yWaOD4PAjPu96IbnehIAA4f2iG4fRZLsLNYkNnT3zCljWbYfTD6Th1PBJLOBnaPbSWQPJVosevghLJt6GMHuq5uMgiR3yKlC4yLHfzi2zYBV9HMVtznV-pDQlhp9jucS5D3JKJJTJA8w-IpfvRRaO_BcAgZR58YMutesBzYa3ObDSF_B6SldTVDa4tuqQ2VzpEI8oSSBqgX5CVzpE1Pu_IJJiHHrg_YXVi2ykl9onAvZQheBkCzPxUSR0Z8ftrJbozQbKckEyozROYu1sWywGXNvBccQo-xOYOxrsiTsuMaiYy2oA-t0b1NojX_bkDL3ZvDA",
				searchValue: [],
			}
		},
		methods: {
			tabChange(index) {
				this.tabIndex = index;
				//当切换tab或搜索时请调用组件的reload方法，请勿直接调用：queryList方法！！
				//调用reload时参数传true则代表reload时触发下拉刷新效果，不传或false则代表取消此效果
				this.$refs.paging.reload(true);
			},
			queryList(pageNo, pageSize) {
				var that = this;
				//组件加载时会自动触发此方法，因此默认页面加载时会自动触发，无需手动调用
				//这里的pageNo和pageSize会自动计算好，直接传给服务器即可
				//模拟请求服务器获取分页数据，请替换成自己的网络请求
				const params = {
					pageNo: pageNo,
					pageSize: pageSize,
					type: this.tabIndex + 1
				}
				// TODO：（1）token的动态获取；（2）分页
				var requestTask = uni.request({
					url: 'https://todo-uat.chinare.com.cn/api/v1/todo/user/zhal',
					method:'GET',
					header:{
						'Authorization': that.token,
					},
					success: (res) => {
						console.log(res.data);
						globalDataList = res.data;
						this.$refs.paging.complete(globalDataList);
					}
				})
				this.dataList = JSON.parse(JSON.stringify(globalDataList));
				console.log("打印dataList：：：：：");
				console.log(this.dataList);
				console.log(globalDataList);
			},
			itemClick(item) {
				console.log('点击了', item.title);
			},
			search(searchValue){
				let searchList = JSON.parse(JSON.stringify(globalDataList));
				this.dataList = JSON.parse(JSON.stringify(globalDataList));
				if(searchValue == null || searchValue == "") {
					return;
				}
				for(let index in this.dataList) {
					index = this.dataList.length - index -1;
					let item = this.dataList[index];
					console.log(item);
					// TODO:目前只有ownerLoginName的搜索，待完善
					if(item.ownerLoginName != searchValue) {
						searchList.splice(index,1);
					}
					console.log(searchList);
				}
				this.dataList = searchList;
			},
			clear() {
				this.dataList = JSON.parse(JSON.stringify(globalDataList));
				this.$refs.paging.complete(this.dataList);
			},
			goPage(h5url) {
				console.log(h5url);
				window.location.href = h5url;
			}
		}
	}
</script>

<style>
	.item {
		position: relative;
		height: 150rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0rpx 30rpx;
	}

	.item-detail {
		padding: 5rpx 15rpx;
		border-radius: 10rpx;
		font-size: 28rpx;
		color: white;
		background-color: #007AFF;
	}

	.item-line {
		position: absolute;
		bottom: 0rpx;
		left: 0rpx;
		height: 1px;
		width: 100%;
		background-color: #eeeeee;
	}
</style>
