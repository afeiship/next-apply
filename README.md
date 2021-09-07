# next-apply
> Faster apply for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-apply
```

## usage
```js
import '@jswork/next-apply';

function create2(tag, cls) {
  const el = document.createElement(tag);
  el.className = cls;
  el['data-cls'] = cls;
  el['data-tag'] = tag;
  return el;
}

nx.apply(create2, null, ['span','my-class1']);
```

## resources
- https://github.com/JayceTDE/fast-apply/blob/master/index.js
- https://www.cnblogs.com/lijiayi/p/callandapply.html
- https://blog.csdn.net/zhengyinhui100/article/details/7837127/

## license
Code released under [the MIT license](https://github.com/afeiship/next-apply/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-apply
[version-url]: https://npmjs.org/package/@jswork/next-apply

[license-image]: https://img.shields.io/npm/l/@jswork/next-apply
[license-url]: https://github.com/afeiship/next-apply/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-apply
[size-url]: https://github.com/afeiship/next-apply/blob/master/dist/next-apply.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-apply
[download-url]: https://www.npmjs.com/package/@jswork/next-apply
