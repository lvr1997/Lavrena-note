## pnpm安装

pnpm介绍 项目使用pnpm包管理器安装依赖

```bash
# 安装
npm install -g pnpm
```

```bash
# 安装
pnpm set registry <https://registry.npmmirror.com>
```

```bash
# 允许设置全局安装包的 bin 文件的目标目录。
pnpm config set global-bin-dir "D:\\Downloads\\pnpm-store"
# 包元数据缓存的位置。
pnpm config set cache-dir "D:\\Downloads\\pnpm-store\\pnpm-cache"
# pnpm 创建的当前仅由更新检查器使用的 pnpm-state.json 文件的目录。
pnpm config set state-dir "D:\\Downloads\\pnpm-store\\pnpm-state"
# 指定储存全局依赖的目录。
pnpm config set global-dir "D:\\Downloads\\pnpm-store\\global"
# 所有包被保存在磁盘上的位置。
#（可选，以下这条命令可以选择不执行也是OK的）
pnpm config set store-dir "D:\\Downloads\\pnpm-store\\pnpm-store"
```

`pnpm setup` 配置环境变量