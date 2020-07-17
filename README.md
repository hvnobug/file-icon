## file-icon

图标来自[vscode-material-icon-theme](https://github.com/PKief/vscode-material-icon-theme/tree/master/icons)

> 根据文件信息获取对应的图标名称

```javascript
const file = {
    name: 'index.html',
    isDirectory : false
};
// icon = 'html'
const icon = fileIcon.getIconByFile(file); 
const icon_path = `./icons/${icon}.csv`;
```

