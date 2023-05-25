import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';

enum Gender {
  Male = 'Male',
  Female = 'Female',
  Other = 'Other',
}

interface User {
  name: string;
  age: number;
  email: string;
  gender: Gender;
}

const app = express();
const port = 3000;

// Middleware to parse request bodies as JSON
app.use(bodyParser.json());

// Function to read users from the JSON file
function getUsersFromFile(): User[] {
  const data = fs.readFileSync('./src/users.json', 'utf8');
  return JSON.parse(data);
}

// Function to save users to the JSON file
function saveUsersToFile(users: User[]): void {
  fs.writeFileSync('./src/users.json', JSON.stringify(users));
}

// Endpoint to create a user and save it to users.json
app.post('/users', (req: Request, res: Response) => {
  const newUser: User = req.body;

  // Read existing users from the JSON file
  const users = getUsersFromFile();

  // Check if a user with the same email already exists
  const existingUser = users.find((user: User) => user.email === newUser.email);
  if (existingUser) {
    return res.status(409).send('User with the same email already exists');
  }

  // Add the new user to the users array
  users.push(newUser);

  // Save the updated users array to the JSON file
  saveUsersToFile(users);

  res.send('User created successfully!');
});

// Endpoint to update a user based on email
app.put('/users/:email', (req: Request, res: Response) => {
  const email = req.params.email;
  const updatedUser: User = req.body;

  // Read existing users from the JSON file
  const users = getUsersFromFile();

  // Find the user with the specified email
  const userIndex = users.findIndex((user: User) => user.email === email);

  // Update the user if found
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...updatedUser };
    saveUsersToFile(users);
    res.send('User updated successfully!');
  } else {
    res.status(404).send('User not found');
  }
});

// Endpoint to get a user based on email
app.get('/users/:email', (req: Request, res: Response) => {
  const email = req.params.email;

  // Read existing users from the JSON file
  const users = getUsersFromFile();

  // Find the user with the specified email
  const user = users.find((user: User) => user.email === email);

  // Return the user if found
  if (user) {
    res.send(user);
  } else {
    res.status(404).send('User not found');
  }
});

// Endpoint to delete a user based on email
app.delete('/users/:email', (req: Request, res: Response) => {
  const email = req.params.email;

  // Read existing users from the JSON file
  let users = getUsersFromFile();

  // Filter out the user with the specified email
  users = users.filter((user: User) => user.email !== email);

  // Save the updated users array to the JSON file
  saveUsersToFile(users);

  res.send('User deleted successfully!');
});

// Endpoint to get all users
app.get('/users', (req: Request, res: Response) => {
  // Read existing users from the JSON file
  const users = getUsersFromFile();

  res.send(users);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
