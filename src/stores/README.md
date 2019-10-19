### redux

redux是状态存储容器


##### state 初始的状态，最好规定其数据结构,其数据关系[范式化](https://github.com/paularmstrong/normalizr)
  
```
const state = {
  loading: false,
  list: [],
}
```
##### reducer 是一个像 reduce 一样的纯函数，接收 prevState , action; 返回新state

```
function loginInfo (state = initState, action) {
  if(action.type === 'CHANGE_STATE') {
    return {
      ...state,
      loading: action.state,
    }
  } else {
    return state;
  }
} 
```

拆分reducer，可以减小函数内部的复杂度，否则会一次性操作一棵非常庞大的数据树;最终使用combineReducers构建成一个树

```
combineReducers({
  a,
  b
  c,
})
```


##### action是一个普通对象，包括 type 和 payload，行为类型，有效载荷，用来描述“进行什么操作”


``` action
{
  type: 'CHANGE_LOADING',
  loading: true,
}
```

为了更加灵活传参，可以使用 action创建函数（action Builder），返回action对象

```
function changeLoading(loading) {
  return {
    type: 'CHANGE_LOADING',
    loading,
  }
}
```

action中可以多个属性

```
{
  type: 'MARK',
  id: 1,
  name: 'ranck',
}
```

##### 一切状态都应该放在同一个数据源中，通过store.getState()读取

```
store.getState()
```

##### dispatch(action) 是改变state的唯一方式

```
dispatch(changeLoading(true))
```


##### store

```
const store = createStore(reducers[，initialState]) 
```

- 维持应用的 state；
- 提供 getState() 方法获取 state；
- 提供 dispatch(action) 方法更新 state；
- 通过 subscribe(listener) 注册监听器;
- 通过 subscribe(listener) 返回的函数注销监听器。



### 拓展

- 乐观更新：发送请求时就渲染
- 悲观更新：请求返回后才渲染
- 