# el-table-transfer
基于element-ui的表格穿梭框

### version 0.1.2
增加插槽功能，可自定义列模板（左右两边的列模板都会变化）

### version 0.1.3
添加禁用勾选功能，通过传递selectable参数(要求为Function类型)来进行判断是否可勾选

### version 0.1.4
解决多余引入element字体文件问题

## 安装
`npm install el-table-transfer`
## 使用
在main.js文件中引入插件并注册
``` js
import elTableTransfer from 'el-table-transfer'
Vue.use(elTableTransfer)
```


在项目中使用el-table-transfer
```html
<template>
        <div id="app">
        <el-table-transfer
            leftTitle="总数据"
            rightTitle="已选数据"
            :columns='columns'
            :dataLeft="data1"
            :dataRight="data2"
        >
            <!-- 可以使用插槽获取到列信息和行信息，从而进行数据的处理 -->
            <template v-slot:default="{scope}">
                <div>
                    <span v-if="scope.col.value === 'gender'">{{scope.row.gender === '男' ? '♂' : '♀'}}</span>
                    <span v-else>{{scope.row[scope.col.value]}}</span>
                </div>
            </template>
        </el-table-transfer>
    </div>
</template>
 
<script>
 
 
export default {
    name: 'app',
    data() {
        return {
            columns: [
                {name: '姓名', value: 'name', width: '120px'},
                {name: '性别', value: 'gender', width: '120px'},
                {name: '年龄', value: 'age',},
            ],
            data1: [
                {name: '张三', gender: '男', age: '18'},
                {name: '李四', gender: '男', age: '18'},
                {name: '王五', gender: '男', age: '18'},
                {name: '乙亥', gender: '男', age: '18'},
            ],
            data2: [
                {name: '帕克', gender: '女', age: '18'},
                {name: '克里斯蒂娜', gender: '女', age: '18'},
            ]
        }
    },
    // components: {
    // 	'el-table-transfer': elTableTransfer
    // }
}
</script> 
```

npm地址： [https://www.npmjs.com/package/el-table-transfer](https://www.npmjs.com/package/el-table-transfer)