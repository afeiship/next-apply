/*!
 * name: next-apply
 * url: https://github.com/afeiship/next-apply
 * version: 1.0.0
 * date: 2019-10-22T02:29:33.151Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var FUNC = 'function';

  nx.apply = function(inFunc, inContext, inArgs) {
    if (typeof inFunc !== FUNC) return;
    switch (inArgs ? inArgs.length : 0) {
      case 0:
        return inFunc.call(inContext);
      case 1:
        return inFunc.call(inContext, inArgs[0]);
      case 2:
        return inFunc.call(inContext, inArgs[0], inArgs[1]);
      case 3:
        return inFunc.call(inContext, inArgs[0], inArgs[1], inArgs[2]);
      default:
        return inFunc.apply(inContext, inArgs);
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.apply;
  }
})();

//# sourceMappingURL=next-apply.js.map
