module.exports = function (object, options) {
  if (!object || typeof object !== 'object') throw new Error('First parameter must be an object');
  if (options && typeof options === 'object') {
    Object.keys(options).forEach(old_key => {
      if (Object.keys(object).includes(old_key)) {
        if (typeof options[old_key] !== 'string') throw new Error('option key-values must be strings');
        Object.defineProperty(object, options[old_key], Object.getOwnPropertyDescriptor(object, old_key));
        delete object[old_key];
      }
    });
  }
  return object;
};