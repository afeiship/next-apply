(function () {
  require('../src');

  function create0() {
    return document.createElement('div');
  }

  function create1(tag) {
    return document.createElement(tag);
  }

  function create2(tag, cls) {
    const el = document.createElement(tag);
    el.className = cls;
    el['data-cls'] = cls;
    el['data-tag'] = tag;
    return el;
  }

  describe('nx api test', () => {
    test('nx.apply 0 args', function () {
      const el = nx.apply(create0);
      expect(el.nodeName).toBe('DIV');
    });

    test('nx.apply 1 args', function () {
      const el = nx.apply(create1, null, ['span']);
      expect(el.nodeName).toBe('SPAN');
    });

    test('nx.apply 2 args', function () {
      const el = nx.apply(create2, null, ['span', 'my-class']);
      expect(el.nodeName).toBe('SPAN');
      expect(el.className).toBe('my-class');
    });
  });

  describe('basic benchmark', () => {
    const count = 10000;
    console.time('apply cost time:');
    for (let index = 0; index < count; index++) {
      create2.apply(null, ['div', `my-class-${index}`]);
    }
    console.timeEnd('apply cost time:');

    console.time('nx.apply cost time:');
    for (let index = 0; index < count; index++) {
      nx.apply(create2, null, ['span', `my-class-${index}`]);
    }
    console.timeEnd('nx.apply cost time:');
  });
})();
