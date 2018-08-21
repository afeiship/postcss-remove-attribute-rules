# postcss-px2rpx
> Postcss plugin transform px to rpx for weapp.

## usage:
```js
var ATTR_SELECTOR_RE = /\[.*\]/;


module.exports = {
  plugins: [
    // require('autoprefixer')({
    //   browsers: [
    //     'last 1 version'
    //   ],
    //   remove: true
    // }),
    require('postcss-px2rpx'),
    require("postcss-remove-rules")({
      callback(inSelector,inRule){
        return ATTR_SELECTOR_RE.test(inSelector);
      }
    })
  ]
};


```

```css
body{
  color: #f00;
}


body[data-dpr=1]{
  font-size:12px;
}

body[data-dpr=2]{
  font-size:24px;
}

/* after process */
body{
  color: #f00;
}

```
## options
| Name     | Default               | Description |
|:---------|:----------------------|:------------|
| callback | remove attribute rule | remove atrribute |

