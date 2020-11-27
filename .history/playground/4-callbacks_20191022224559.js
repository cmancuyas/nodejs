setTimeout(() => {
  console.log('Two seconds');
}, 2000);

const name = ['Chris', 'Kimbee', 'Kobe'];
const shortNames = names.filter(name => {
  return name.length <= 4;
});

console.log(shortNames);
