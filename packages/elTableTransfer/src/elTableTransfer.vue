<template>
	<div>
		<el-row>
			<el-col :span="11">
				<el-card :body-style="{ padding: '0px' }">
					<div slot="header">
						<span>{{leftTitle}}</span>
					</div>
					<el-table 
					@selection-change="handleLeftSelectionChange"
					max-height="500px"
					:data="dataLeft" 
					border stripe>
						<el-table-column :selectable="selectable" width="40px" type="selection"></el-table-column>
						<el-table-column v-for="col in columns"
							:prop="col.id"
							:key="col.id"
							:label="col.label">
							<template slot-scope="scope">
                                <slot v-bind:scope="{row: scope.row, col: col}">
                                    
                                </slot>
                            </template>
						</el-table-column>
					</el-table>
				</el-card>
			</el-col>
			<el-col :span="2">
				<div class="opration-container">
					<i @click="clickToRight" class="el-icon-arrow-right"></i>
					<i @click="clickToLeft" class="el-icon-arrow-left"></i>
				</div>
			</el-col>
			<el-col :span="11">
				<el-card :body-style="{ padding: '0px' }">
					<div slot="header">
						<span>{{rightTitle}}</span>
					</div>
					<el-table 
					@selection-change="handleRightSelectionChange"
					max-height="500px"
					:data="dataRight" 
					border stripe>
						<el-table-column :selectable="selectable" width="40px" type="selection"></el-table-column>
						<el-table-column v-for="col in columns"
							:prop="col.id"
							:key="col.id"
							:label="col.label">
							<template slot-scope="scope">
                                <slot v-bind:scope="{row: scope.row, col: col}">
                                    
                                </slot>
                            </template>
						</el-table-column>
					</el-table>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	props: {
		leftTitle: String,
		rightTitle: String,
		columns: Array,
		dataLeft: Array,
		dataRight: Array,
		selectable: Function
	},
	data() {
		return {
			leftSelection: [],
			rightSelection: [],
		}
	},
	methods: {
		handleLeftSelectionChange(val) {
			this.leftSelection = val;
		},
		handleRightSelectionChange(val) {
			this.rightSelection = val;
		},
		clickToRight() {
			this.dataRight.push(...this.leftSelection);
			for(let i = 0; i < this.leftSelection.length; i++) {
				let index = this.dataLeft.indexOf(this.leftSelection[i]);
				if(index !== -1) {
					this.dataLeft.splice(index, 1);
				}
			}
			this.leftSelection = [];
		},
		clickToLeft() {
			this.dataLeft.push(...this.rightSelection);
			for(let i = 0; i < this.rightSelection.length; i++) {
				let index = this.dataRight.indexOf(this.rightSelection[i]);
				if(index !== -1) {
					this.dataRight.splice(index, 1);
				}
			}
			this.rightSelection = [];
		}
	}
}
</script>

<style scoped>
.el-icon-arrow-right, .el-icon-arrow-left {
	font-size: 40px;
	padding: 30px;
	cursor: pointer;
}
.opration-container {
	height: 200px;
}
</style>