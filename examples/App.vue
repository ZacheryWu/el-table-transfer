<template>
        <div id="app">
        <el-table-transfer
            leftTitle="总数据"
            rightTitle="已选数据"
            :columns='columns'
            :dataLeft="data1"
            :dataRight="data2"
			:selectable="selectable"
        >
            <!-- 可以使用插槽获取到列信息和行信息，从而进行数据的处理 -->
            <template v-slot:default="{scope}">
                <div>
                    <span v-if="scope.col.id === 'gender'">{{scope.row.gender === '男' ? '♂' : '♀'}}</span>
                    <span v-else>{{scope.row[scope.col.id]}}</span>
                </div>
            </template>
        </el-table-transfer>
    </div>
</template>
 
<script>
 
import elTableTransfer from '../packages/elTableTransfer'
export default {
    name: 'app',
    data() {
        return {
            columns: [
                {label: '姓名', id: 'name', width: '120px'},
                {label: '性别', id: 'gender', width: '120px'},
                {label: '年龄', id: 'age',},
            ],
            data1: [
                {name: '张三', gender: '男', age: 12},
                {name: '李四', gender: '男', age: 13},
                {name: '王五', gender: '男', age: 14},
            ],
            data2: [
                {name: '帕克', gender: '女', age: 15},
                {name: '克里斯蒂娜', gender: '女', age: 10},
            ]
        }
    },
    components: {
		'el-table-transfer': elTableTransfer
	},
	methods: {
		selectable(row) {
			return row.age < 13;
		}
	}
}
</script> 

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
