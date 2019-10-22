(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var FUNC = 'function';

  nx.apply = function(inFunction, inContext, inArgs) {
    if (typeof inFunction !== FUNC) return;
    switch (inArgs ? inArgs.length : 0) {
      case 0:
        return inFunction.call(inContext);
      case 1:
        return inFunction.call(inContext, inArgs[0]);
      case 2:
        return inFunction.call(inContext, inArgs[0], inArgs[1]);
      case 3:
        return inFunction.call(inContext, inArgs[0], inArgs[1], inArgs[2]);
      default:
        return inFunction.apply(inContext, inArgs);
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.apply;
  }
})();
