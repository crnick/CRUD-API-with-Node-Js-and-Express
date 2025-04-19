//have all the logic for your callbaack function in this particular file
// eslint-disable-next-line @typescript-eslint/no-require-imports
const {uuidv4} = require("uuid")

//browsers can only make get request
let users = []; //acting as a database for storing user data

exports.users = users

exports.testingFunction = (name,age) =>{
  return `the user name is ${name} and age is ${age}`
}

exports.createUser = (req, res) => {
  const users = req.body;
  const userId = uuidv4();
  const userWithId = { ...users, id: userId };
  users.push(userWithId);
  res.status(200).json({message:`User added successfully`});
};



exports.getUserById = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  if (!foundUser) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.status(200).json({message:`Found user ${foundUser}`});
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  if (!foundUser) {
    return res.status(404).json({ message: 'User not found' });
  }

  // if condition is true user is kept in array otherwise deleted
  users = users.filter((user) => user.id !== id);
  
  res.status(200).json({message:"User is deleted"});
};

exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  if(!firstName || !lastName || !age){
    res.status(400).json({error:"FirstName/ LastName / Age is required"})
  }

  const user = users.find((user) => user.id === id);

  if (firstName) {
    user.firstName = firstName;
  }

  if (lastName) {
    user.lastName = lastName;
  }

  if (age) {
    user.age = age;
  }

  res.status(200).json({message:"User info has been updated"});
};
