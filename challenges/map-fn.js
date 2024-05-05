// Week 2.6 | filter, map, arrow fns

function map1(arr, fn){
  const resultarr = []
  for(let i=0;i<arr.length;i++){
    resultarr.push(fn(arr[i]))
  }
  return resultarr;
}

const arry1 = [1,2,3,4,5];

const outarr = map1(arry1, (i) => i*0.5)
console.log(outarr);