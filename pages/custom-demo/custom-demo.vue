<!-- 自定义下拉刷新与上拉加载演示(vue) -->
<template>
	<view class="content">
		<z-paging ref="paging" v-model="dataList" @query="queryList">
			<!-- 需要固定在顶部不滚动的view放在slot="top"的view中，如果需要跟着滚动，则不要设置slot="top" -->
			<!-- 注意！此处的z-tabs为独立的组件，可替换为第三方的tabs，若需要使用z-tabs，请在插件市场搜索z-tabs并引入，否则会报插件找不到的错误 -->
			<!-- <template #top>
				<z-tabs :list="tabList" @change="tabChange" />
			</template> -->
			<uni-search-bar slot="top" clearButton="auto" cancelButton="none" 
			@confirm="search" :focus="true" v-model="searchValue" @blur="blur" @focus="focus" @input="input"
				@cancel="cancel" @clear="clear">
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
			:title="item.title" :sub-title="item.org" :extra="额外信息" thumbnail="/static/hec.png" @click="goPage(item.h5URL)">
				<text v-if="item.title">标题：{{item.title}}<br></text>
				<text>发起人：{{item.ownerName}}<br></text>
				<text>发起部门：{{item.org}}<br></text>
				<text>时间：{{item.time}}<br></text>
			</uni-card>
		</z-paging>
	</view>
</template>

<script>
	var globalDataList = [
    {
        "id": 16352,
        "perID": "5664853",
        "sysName": "xcoa",
        "org": "中再集团/",
        "title": "呈批件相关文件隐藏测试1014-01",
        "state": 0,
        "ownerLoginName": "fengj",
        "ownerName": "冯键",
        "currentLoginName": "fujx",
        "currentName": "符杰翔",
        "url": "http://172.16.19.96:8889/servlet/com.zotn.webservices.foura.screens.SsoLoginController?loginName=fujx&cmpyCode=2&to=thirdApp&toPage=com.zotn.screens.msv.GongwenServlet%3Ffunc%3Ddistribute%26distId%3D2624094",
        "time": "2021-12-26 20:13:22"
    },
    {
        "id": 16158,
        "perID": "4664832",
        "sysName": "oa",
        "org": "中再集团/",
        "title": "呈批件相关文件隐藏测试1014-01",
        "state": 0,
        "ownerLoginName": "fengj",
        "ownerName": "冯键",
        "currentLoginName": "fujx",
        "currentName": "符杰翔",
        "url": "http://172.16.19.96:8889/servlet/com.zotn.webservices.foura.screens.SsoLoginController?loginName=fujx&cmpyCode=2&to=thirdApp&toPage=com.zotn.screens.msv.GongwenServlet%3Ffunc%3Ddistribute%26distId%3D2624094",
        "h5URL": "http://172.16.19.96:8443/servlet/com.zotn.login.SsoEzLoginController?loginName=fujx&cmpyCode=2&to=thirdApp&toPage=com.zotn.screens.msv.GongwenServlet%3Ffunc%3Ddistribute%26distId%3D2624094",
        "time": "2021-10-14 10:21:16"
    },
	{
	        "id": 1235988,
	        "perID": "305182",
	        "sysName": "hec",
	        "org": "中再寿险",
	        "title": "OA系统信创改造项目中再寿险验收款报销,合同总金额2,560,000.00元。\n本合同金额由集团公司、中再产险和中再寿险按照预算5:4:4的分摊比例,其中,中再寿险承担人民币 787,692.31 元,计划分3笔支付,分别占比30%,60%,10%。\n本次报销第2笔款,按照合同付款条件是甲方完成项目验收且上线后15个工作日内,用户已经完成验收,符合付款条件。",
	        "state": 0,
	        "ownerLoginName": "shawn",
	        "ownerName": "沙威宁",
	        "currentLoginName": "shawn",
	        "currentName": "沙威宁",
	        "url": "http://ecuat.chinare.com.cn:8080/ZZ_HEC/ssologin.jsp?recordId=305182&instanceId=62228&nodeId=820&workflowCategory=EXP_REPORT",
	        "h5URL": "http://ecmuat.chinare.com.cn:4567/dist/#/list-detail?docTypeCode=EXP_REPORT&documentNumber=BX130000012022100178&recordId=305182&instanceId=62228&workflowType=TODO",
	        "time": "2022-11-01 15:28:50"
	    },
	    {
	        "id": 1236094,
	        "perID": "304428",
	        "sysName": "hec",
	        "org": "中再集团",
	        "title": "OA系统信创改造项目集团公司验收款报销,合同总金额2,560,000.00元。\n本合同金额由集团公司、中再产险和中再寿险按照预算5:4:4的分摊比例,其中,集团公司承担人民币 984,615.38 元,计划分3笔支付,分别占比30%,60%,10%。\n本次报销第2笔款,按照合同付款条件是甲方完成项目验收且上线后15个工作日内,用户已经完成验收,符合付款条件。\n\n",
	        "state": 0,
	        "ownerLoginName": "shawn",
	        "ownerName": "沙威宁",
	        "currentLoginName": "shawn",
	        "currentName": "沙威宁",
	        "url": "http://ecuat.chinare.com.cn:8080/ZZ_HEC/ssologin.jsp?recordId=304428&instanceId=62169&nodeId=840&workflowCategory=EXP_REPORT",
	        "h5URL": "http://ecmuat.chinare.com.cn:4567/dist/#/list-detail?docTypeCode=EXP_REPORT&documentNumber=BX110000012022100125&recordId=304428&instanceId=62169&workflowType=TODO",
	        "time": "2022-10-28 16:41:20"
	    },
	{
	        "perID": "02ea3dd691ae4fbbe8f15c80f3680002",
	        "sysName": "hec",
	        "org": "信息技术中心/创新孵化中心",
	        "title": "1",
	        "state": 0,
	        "ownerLoginName": "zhal",
	        "ownerName": "查亮",
	        "currentLoginName": "yaod",
	        "currentName": "姚頔",
	        "url": "http://172.16.92.154/console/console/v2/sso/ecstodo_pccase?todoUrl=LyMvZXhwZW5zZWNsYWltP2JpbGxEZWZpbmVJZD0wMmNkYTZkNjJlMjliYTBhMDMyYTRhYWIyMzcyMDAwMSZiaWxsTWFpbklkPTAyZWEzZGIzYTA3ZTRmYmJlOGYxNWM4MGYzNjgwMDAxJnRhc2tJZD0wMmVhM2RkNjkxYWU0ZmJiZThmMTVjODBmMzY4MDAwMiZiaWxsRGVmaW5lSGlzdG9yeUlkPTAyZWEwMDE1NzJhYzYyNGUwZTQyM2ZhOTEyODgwMDAxJnNjZW5lPUVYQU1JTkVfQVBQUk9WQUw=",
	        "time": "2023-03-08 11:48:12"
	    },
	    {
	        "id": 1238032,
	        "perID": "305871",
	        "sysName": "hec",
	        "org": "中再集团",
	        "title": "1",
	        "state": 0,
	        "ownerLoginName": "zhal",
	        "ownerName": "查亮",
	        "currentLoginName": "yaod",
	        "currentName": "姚頔",
	        "url": "http://ecuat.chinare.com.cn:8080/ZZ_HEC/ssologin.jsp?recordId=305871&instanceId=62528&nodeId=542&workflowCategory=EXP_REPORT",
	        "h5URL": "http://ecmuat.chinare.com.cn:4567/dist/#/list-detail?docTypeCode=EXP_REPORT&documentNumber=BX110000012022120009&recordId=305871&instanceId=62528&workflowType=TODO",
	        "time": "2022-12-27 10:12:00"
	    },
	    {
	        "id": 1236265,
	        "perID": "305752",
	        "sysName": "hec",
	        "org": "中再集团",
	        "title": "1",
	        "state": 0,
	        "ownerLoginName": "admin1",
	        "ownerName": "admin1",
	        "currentLoginName": "yaod",
	        "currentName": "姚頔",
	        "url": "http://ecuat.chinare.com.cn:8080/ZZ_HEC/ssologin.jsp?recordId=305752&instanceId=62449&nodeId=542&workflowCategory=EXP_REPORT",
	        "h5URL": "http://ecmuat.chinare.com.cn:4567/dist/#/list-detail?docTypeCode=EXP_REPORT&documentNumber=BX110000012022110031&recordId=305752&instanceId=62449&workflowType=TODO",
	        "time": "2022-11-09 09:41:26"
	    },
	    {
	        "id": 1236230,
	        "perID": "305751",
	        "sysName": "hec",
	        "org": "中再集团",
	        "title": "1【超预算说明：1】",
	        "state": 0,
	        "ownerLoginName": "admin1",
	        "ownerName": "admin1",
	        "currentLoginName": "yaod",
	        "currentName": "姚頔",
	        "url": "http://ecuat.chinare.com.cn:8080/ZZ_HEC/ssologin.jsp?recordId=305751&instanceId=62448&nodeId=542&workflowCategory=EXP_REPORT",
	        "h5URL": "http://www.baidu.com",
	        "time": "2022-11-08 16:23:05"
	    }
];
	export default {
		data() {
			return {
				//v-model绑定的这个变量不要在分页请求结束中自己赋值！！！
				dataList: globalDataList,
				// tabList: ['测试1','测试2','测试3','测试4'],
				tabIndex: 0
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
				this.$request.queryList(params).then(res => {
					//将请求的结果数组传递给z-paging
					// this.$refs.paging.complete(res.data.list);
					this.$refs.paging.complete(globalDataList);
				}).catch(res => {
					//如果请求失败写this.$refs.paging.complete(false);
					//注意，每次都需要在catch中写这句话很麻烦，z-paging提供了方案可以全局统一处理
					//在底层的网络请求抛出异常时，写uni.$emit('z-paging-error-emit');即可
					this.$refs.paging.complete(false);
				})
			},
			itemClick(item) {
				console.log('点击了', item.title);
			},
			search(){
				
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
