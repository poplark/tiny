# tiny

## 使用方法

### 初始化命令
```
lerna bootstrap
```

### 其他命令

* 开发环境中使用，支持自动编译及热更新
```
yarn workspaces run start
```

* 上线前使用，编译并压缩生成线上产物
```
yarn workspaces run build
```

* 对 TS 文件进行代码检查
```
yarn workspaces run lint
```

* 对 TS 文件进行代码修正
```
yarn workspaces run lint:fix
```
