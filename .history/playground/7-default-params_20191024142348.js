const greeter = (name = 'user', age = 18) => {
  console.log('Hello ' + name + '!');
  if (!age) {
    console.log('Your age must be over ' + age);
  } else {
    console.log('Your age is ' + age);
  }
};

greeter('Kobe', 27);
greeter();
