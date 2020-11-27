const greeter = (name = 'user', age = 18) => {
  console.log('Hello ' + name + '!');

  console.log('Your age is ' + age);
};

greeter('Kobe', 27);
greeter();
