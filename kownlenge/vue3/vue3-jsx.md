## slots 插槽
作用域插槽 可以通过v-slots来实现,
```jsx
render(){
    return (
      <div>
        <el-table
          v-loading={this.loading}
          style={{width: '100%'}}
        >
          <el-table-column
	          prop="date" label="Date" width="180"
	          v-slots={{
              default:(scope:any) => {
                return (
                  <div>
                    { scope.row.date }
                  </div>
                )
              }
            }}
          >
          </el-table-column>
          <el-table-column prop="name" label="Name" width="180"/>
        </el-table>
      </div>
    )
  }
```
### v-model
当是单个的时候 使用`v-model`,里面是一个`数组`
当有多个的时候 使用 `v-models`,里面是一个`二维数组`
```jsx
render(){
    return (
      <div>
        <TestVModel
          v-models={[
            [this.title,'title'],
            [this.content,'content']
          ]}
        ></TestVModel>

        <TestVModel
          v-model={[this.title,'title']}
        ></TestVModel>

      </div>
    )
  }
```
