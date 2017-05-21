<template>
	<div class="project-container">
		<el-form :model="form" label-width="80px">
			<h3 class="title" v-text="message"></h3>
			<el-form-item label="活动名称">
				<el-select v-model="form.selected" class="fl" placeholder="请选择">
					<el-option
							v-for="item in options"
							:key="item.value"
							:lable="item.label"
							:value="item.value">

					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="性别">
				<el-radio class="radio fl" v-model="form.gender" label="male">男</el-radio>
				<el-radio class="radio fl" v-model="form.gender" label="femal">女</el-radio>
			</el-form-item>

			<el-form-item label="标题">
				<el-input v-model="title" placeholder="请输入内容">
					<el-button slot="append" icon="close"></el-button>
				</el-input>
			</el-form-item>

			<el-form-item>
				<el-button type="primary" @click="onSumit">提交</el-button>
			</el-form-item>

		</el-form>

		<el-table :data="tableData" style="width: 100%">
			<el-table-column prop="date" label="日期" width="180"></el-table-column>
			<el-table-column prop="name" label="姓名" width="180"></el-table-column>
			<el-table-column prop="address" label="地址" width="250"></el-table-column>
		</el-table>
	</div>
</template>
<script>
	import ElRadio from "../../../node_modules/element-ui/packages/radio/src/radio";
	import ElForm from "../../../node_modules/element-ui/packages/form/src/form";
	import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item";
	import ElButton from "../../../node_modules/element-ui/packages/button/src/button";
	import ElInput from "../../../node_modules/element-ui/packages/input/src/input";
	export default{
		data(){
			return {
				message: 'hello world!',
				form: {
					selected: '',
					gender: 'femal',
					title:''
				},
				options: [
					{
						value: '选项1',
						label: '黄金糕'
					}, {
						value: '选项2',
						label: '双皮奶'
					}, {
						value: '选项3',
						label: '蚵仔煎'
					}, {
						value: '选项4',
						label: '龙须面'
					}, {
						value: '选项5',
						label: '北京烤鸭'
					}],
				tableData: [
					{
						date: '2016-05-02',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1518 弄'
					}, {
						date: '2016-05-04',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1517 弄'
					}, {
						date: '2016-05-01',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1519 弄'
					}, {
						date: '2016-05-03',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1516 弄'
					}]
			}
		},
		mounted(){

		},
		components: {
			ElInput,
			ElButton,
			ElFormItem,
			ElForm,
			ElRadio
		},
		computed: {},
		methods: {
			onSumit(){
				console.log('submit!');
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import 'src/style/mixin';

	.project-container {
		/*@include center();*/
		.title {
			color: #333333;
		}
		.content {

		}
		.footer {
		}
	}

	.el-table{
		background-color: #3190e8;
	}

</style>