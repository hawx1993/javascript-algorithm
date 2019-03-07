/**
 * deep unique array
 * input: [{a:1,b:1},1,'1',{a:1,b:1},1,false,true,false,NaN,NaN,[1,2],[1,2]]
 * output: [ { a: 1, b: 1 }, 1, '1', false, true, NaN, [ 1, 2 ] ]
 */
function deepDeduplication(array) {
  var n = {}, r = [], len = array.length, val, type;
  for (var i = 0; i < len; i++) {
    val = array[i];
    type = typeof val;
    if (!n[val]) {
      n[val] = [type];
      r.push(val);
    } else if (n[val].indexOf(type) < 0) {
      n[val].push(type);
      r.push(val);
    }
  }
  return r;
}
export { deepDeduplication }
