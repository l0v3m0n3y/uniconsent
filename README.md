# uniconsent
JavaScript library for cmp.uniconsent.com
# main
```js
const {uniconsent} = require('./uniconsent');

const cmp = new uniconsent();
cmp.my_ip().then(info => {
    console.log(info);
}).catch(error => {
    console.error('Error:', error);
});

```
