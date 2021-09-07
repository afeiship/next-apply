(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var FUNC = 'function';

  nx.apply = function (inFunc, inContext, inArgs) {
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
