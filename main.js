const arr = ["Nano", "Volvo", "BMW", "Nano", "VW", "Nano"].reduce((a, e, i) => {
  if (e === 'Nano')
    a.push(i);
  return a;
}, []);
console.log(arr)
