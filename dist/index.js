var postcss = require('postcss');
var ATTR_SELECTOR_RE = /\[.*\]/;

module.exports = postcss.plugin('postcss-remove-attribute-rules', function (inOptions) {
  return function (css) {
    var options = Object.assign({
      callback: function (inSelector, inRule) {
        if (ATTR_SELECTOR_RE.test(inSelector)) {
          var selectors = inSelector.split(',');
          if (selectors.length === 1) {
            return true;
          }

          if (selectors.length > 1) {
            var newSelectors = selectors.filter(function (selector) {
              return !ATTR_SELECTOR_RE.test(selector)
            });
            inRule.selector = newSelectors.join(',');
            return false;
          }
        }

        return false;
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
