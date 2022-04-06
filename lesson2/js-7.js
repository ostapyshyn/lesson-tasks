function bind(fn, context) {
  function res() {
    return fn.apply(context, arguments);
  }
  return res;
}
