const square = x => {
  return x * x;
};
//shorthand
const square2 = x => x * x;

console.log(square(5));
console.log(square2(9));

const event = {
  name: 'Birthday Party',
  guestList: ['Kimbee', 'Kobe', 'Luka'],
  printGuestList() {
    console.log('Guest list for ' + this.name);
    this.guestList.forEach(guest => {
      console.log(guest + ' is attending ' + this.name);
    });
  }
};

event.printGuestList();
