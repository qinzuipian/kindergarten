

// 公共函数


// 检验表格中是否只选中一个
function checkOne(selectData){
	if(selectData.length == 0){
		layui.layer.msg("没有选择角色");
		return false;
	}else if(selectData.length > 1){
		layui.layer.msg("只能选择一个去编辑")
		return false;
	}else{
		return true;
	}
}