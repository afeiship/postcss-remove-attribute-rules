var postcss = require('postcss');
var ATTR_SELECTOR_RE = /\[.*\]/;

module.exports = postcss.plugin('postcss-remove-attribute-rules', function (inOptions) {
  return function (css) {
    var options = Object.assign({
      callback: function (inSelector, inRule) {
        return ATTR_SELECTOR_RE.test(inSelector);
      }
    }, inOptions);
    // console.log(options);
    // Processing code will be added here
    css.walkRules(function (rule) {
      if (options.callback(rule.selector, rule)) {
        rule.remove();
      }
    });
  }
});
