setTimeout(() => {
  console.log('Two seconds');
}, 2000);

const names = ['Chris', 'Kimbee', 'Kobe'];
const shortNames = names.filter(name => {
  return name.length <= 5;
});


