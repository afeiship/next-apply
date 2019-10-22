# next-apply
> Faster apply for next.

## installation
```bash
npm install -S afeiship/next-apply --registry=https://registry.npm.taobao.org
```

## usage
```js
import 'next-apply';

function create2(tag, cls) {
  const el = document.createElement(tag);
  el.className = cls;
  el['data-cls'] = cls;
  el['data-tag'] = tag;
  return el;
}

nx.apply(create2, null,['span','my-class1'])
```

## resources
- https://github.com/JayceTDE/fast-apply/blob/master/index.js
- https://www.cnblogs.com/lijiayi/p/callandapply.html
- https://blog.csdn.net/zhengyinhui100/article/details/7837127/
