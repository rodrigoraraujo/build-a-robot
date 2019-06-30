let v1 = 10;

const o = [
  { name: "Test 1", val: 987 },
  { name: "Test 2", val: 225 },
  { name: "Test 3", val: 0 }
];
//const c = Object.assign({}, ...o);

let [first, ...others] = o;

f = Object.assign({}, first);

first.name = "TTTT";

console.log(f, others);



function d(name, val) {
  console.log(name, val);
}

//console.log(c);
//console.log(v1);
