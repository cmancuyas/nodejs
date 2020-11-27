const greeter = (name = 'user', age) => {
  console.log('Hello ' + name + '!');
  console.log('Your age is ' + age);
};

greeter('Kobe');
greeter();
