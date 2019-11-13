# react-test
react基础练习


### Hooks 验证


- 父组件setCount子组件就会被更新，哪怕子组件没用到父组件的任何props


### 迁移到typescript


- 安装依赖 npm i react-script-ts
- 配置tsconfig.json

```
npm i react-script-ts
npm i @types/react-dom -s

```
``` tsconfig.json
{
  "compileOnSave": true,
  "compilerOptions": {
      "target": "es6",
      "outFile": "Content/app.js",
      "sourceMap": true,
      "jsx": "react"
  }
}
```


```
 
```

### 写写antd的几个重要组件

- [ ] Form
- [ ] Input
- [ ] Select
- [ ] Switch
- [ ] Modal
- [ ] Button
- [ ] Table
- [ ] 