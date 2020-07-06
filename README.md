# 环保设施智能检测PC端管理系统

#### 介绍
环保设施智能检测PC端管理系统


#### 开发注意事项
1. baseUrlConfig 该文件用来配置接口地址 与config.js中的layui.define中配置的BASEURL功能相同，如果要改变接口路径，则这两个地方都需要修改
2. common.css 为公共样式，开发的时候将自己需要用到的公共样式放在以自己名字注释的代码块中，提交代码的时候不要提交，只留在本地开发测试，最后统一合并提交。
	【注意】: 在给common.css中书写类名的时候，将自己名字的首字母作为前缀防止合并后样式覆盖。 例：l-card-title 、c-card-title 、z-card-title


#### 开发中页面跳转

如果需要页面间的跳转，比如'实时监测'中点击'当前在线企业'就会跳转到设备状态列表。关于跳转的源码在admin.js 766行。
简易操作：在按钮点击事件中执行左侧菜单点击事件，直接调用admin.js中的方法。
代码： window.parent.document.getElementById("自己在左侧菜单中目标页面的a链接中加一个ID").click(); 

#### 接口异常处理方式

统一用这个弹窗提示出来异常信息
vm.$notify.error({
	title: '错误',
	message: res.data.msg
})

#### axios使用body传值
```
axios({
	method: "post",
	url: BASEURL,
	data: {
	    
	},
	headers: {
	    "Content-Type": "application/json;charset=UTF-8"
	}
}).then(function (res) {
	if (res.data.code == 0) {
	    
	} else {
	    vm.$notify.error({
	        title: '错误',
	        message: res.data.msg
	    });
	}
})
```
#### 刷新指定的页面

如果要刷新指定的页面，需要调用index.js中的refreshTab函数，该函数接受一个参数index，是当前tab的下标
例如：'总体监控'中点击地图上的点然后点击弹窗会跳转到'企业监控';
```
var tabsheaderDomList = window.parent.document.getElementById("LAY_app_tabsheader").getElementsByTagName("li")
for(var i = 0; i < tabsheaderDomList.length; i++){
	if(tabsheaderDomList[i].attributes[0].value == "firmAbnormal_qyyc/normalQuery/firmMonitor.html"){
		// 该页面已经打开了，只需要刷新就好
		console.log("已经打开该页面了");
		parent.layui.index.refreshTab(i);
	}else{
		// 没有打开的情况下直接新增tab
		 window.parent.document.getElementById("yincang").click(); 
	}
}
```

#### 连续关闭当前弹框和父级弹框
``` 
	layer.close(index);
	parent.layer.close(index);
```
