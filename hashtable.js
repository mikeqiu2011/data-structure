const user = {
  age: 24,
  name: 'mike',
  magix: true,
  scream() {
    console.log('ahhhhh');
  },
};

console.log(user.age); // o(1)

user.spell = 'abra kadabra'; // o(1)

console.log(user);

user.scream(); // o(1)
