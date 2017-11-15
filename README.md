# object-shift
renames object properties


```
Object.prototype.shift = require('../object-shift');

let my_object = {
  name: 'John',
  last: 'Doe'
};

console.log(Object.shift(my_object, {
  name: 'firstName'
  // May also rename property "last"
}));

/*  Returns:
 *  {
 *     firstName: 'John',
 *     last: 'Doe'
 *  }
 */
```
