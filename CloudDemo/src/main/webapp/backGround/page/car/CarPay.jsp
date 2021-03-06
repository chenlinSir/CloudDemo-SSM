<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<meta name="renderer" content="webkit">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
		<meta name="apple-mobile-web-app-status-bar-style" content="black">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="format-detection" content="telephone=no">
		<link rel="stylesheet" href="../../css/bootstrap.min.css" />
		<script type="text/javascript" src="../../js/jquery-1.4.1.js" ></script>
		<link rel="stylesheet" href="../../layui1/layui/css/layui.css" />
		<script type="text/javascript" src="../../layui1/layui/layui.js"></script>
		<style type="text/css">
			#shentxt{
				margin-right: 16px;
			}
			#sel{
				margin-left: -100px;
			}
			#tb{
				height: auto;
			}
			.inp{
				width: 80px;
				height: 30px;
				margin: -10px -10px;
			}
		</style>
		<script type="text/javascript">
			layui.use('laydate',function(){
				var laydate = layui.laydate;
				laydate.render({
					elem:'#time',
					type:'date'
				});
			});
			$(function(){
				var a = $(".add").siblings().html();
				var c = 1;
				$("#insert").click(function(){
					c++;
					var $addRow=$("<tr><td>"+c+"</td><td>"+a+"<td><input class='inp' /></td><td><input class='inp' /></td><td><input type='button' name='del' class='layui-btn layui-btn-danger delete' value='删除' /></td></tr>");
					$("input[name=del]").click(function(){
						var b = $(this).parent().parent().remove();
						//alert(b);
					})
					$("#tb").append($addRow);
				});
				
			});
		</script>
	</head>
	<body>
		<form action="">
			<div class="layui-form-item">
				<div class="layui-col-md2">
	   				<label class="layui-form-label">&nbsp;&nbsp;申&nbsp;请&nbsp;人:</label>
			    	<div class="layui-input-block">
		     			<select name="" class="form-control userGrade" lay-filter="userGrade" style="width: 190px;">
		     				<option value="0">请选所属部门</option>
		     			</select>
			    	</div>
		    	</div>
		    	<div class="layui-col-md2">
			    	<div class="layui-input-block">
		     			<select name="" class="form-control userGrade" lay-filter="userGrade" style="width: 190px;">
		     				<option value="0">请选所属部门</option>
		     			</select>
			    	</div>
		    	</div>
		    	<div class="layui-col-md2">
			    	<div class="layui-input-block">
		     			<select name="" class="form-control userGrade" lay-filter="userGrade" style="width: 190px;">
		     				<option value="0">请选所属部门</option>
		     			</select>
			    	</div>
		    	</div>
		    </div>
		    <div class="layui-form-item">
		    	<label id="shentxt" class="layui-form-label" style="width: 94px;">申请时间:</label>
		    	<input placeholder="选择申请时间" id="time" class="layui-input userName"  style="width: 190px;" />
		    </div>
		    <div class="layui-form-item">
		    	<label id="shentxt" class="layui-form-label" style="width: 94px;">备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注:</label>
		    	<textarea style="width: 300px;height: 95px;" ></textarea>
		    </div>
		    <table class="layui-table" id="tb">
		    	<thead>
			    	<tr>
			    		<th>编号</th>
			    		<th style="text-align: center;">采购车辆</th>
			    		<th>采购数量</th>
			    		<th>金额</th>
			    		<th>
			    			操作&nbsp;&nbsp;&nbsp;
			    			<button type="button" class="layui-btn layui-btn-primary layui-btn-sm" id="insert">
								<i class="layui-icon">&#xe654;</i>
							</button>
			    		</th>
			    	</tr>
		    	</thead>
		    	<tr>
		    		<td class="add">1</td>
		    		<td style="width: 60%;">
						<div class="layui-inline" id="sel">
					    	<div class="layui-input-block">
				     			<select name="" class="form-control userGrade" lay-filter="userGrade" style="width: 190px;">
				     				<option value="0">请选品牌</option>
				     			</select>
					    	</div>
				    	</div>
				    	<div class="layui-inline" id="sel">
					    	<div class="layui-input-block">
				     			<select name="" class="form-control userGrade" lay-filter="userGrade" style="width: 190px;">
				     				<option value="0">请选车系</option>
				     			</select>
					    	</div>
				    	</div>
				    	<div class="layui-inline" id="sel" id="sel3">
					    	<div class="layui-input-block">
				     			<select name="" class="form-control userGrade" lay-filter="userGrade" style="width: 190px;">
				     				<option value="0">请选车辆</option>
				     			</select>
					    	</div>
				    	</div>
		    		</td>
		    		<td><input class="inp" /></td>
		    		<td><input class="inp" /></td>
		    		<td><input type="button" name="del" class="layui-btn layui-btn-danger delete" value="删除" /></td>
		    	</tr>
		    </table>
		    <div class="layui-form-item">
		    	<label id="shentxt" class="layui-form-label" style="width: 94px;">申请金额:</label>
		    	<input placeholder="输入申请金额（单位/万元）" class="layui-input userName" style="width: 190px;" />
		    	<input type="submit" value="提交" class="layui-btn" style="margin-top: 10px;" />
		    </div>
		</form>
	</body>
</html>
