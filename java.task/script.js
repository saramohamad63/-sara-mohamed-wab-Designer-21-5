// Array to store users
let users = [];

// Function to add a new user
function addUser() {
  let id = parseInt(prompt("Enter user ID:"));
  let name = prompt("Enter user name:");
  let balance = parseFloat(prompt("Enter initial balance:"));

  let user = {
    id: parseInt(prompt("Enter user ID:")),
    name: prompt("Enter user name:"),
    balance: parseFloat(prompt("Enter initial balance:")),

  };

  users.push(user);
  console.log(" User added:", user);
}

// Function to update balance by user ID
function updateUserBalanceById(id, newBalance) {
  let found = false;
  for (let user of users) {
    if (user.id === id) {
      user.balance = newBalance;
      found = true;
      console.log(" Balance updated:", user);
      break;
    }
  }
  if (!found) {
    console.log(" No user found with this ID.");
  }
}

// Function to delete a user by ID
function deleteUserById(id) {
  let index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    let deletedUser = users.splice(index, 1)[0];
    console.log(" User deleted:", deletedUser);
  } else {
    console.log(" No user found with this ID.");
  }
}

// Function to display all users
function displayUsers() {
  console.log("📋 List of all users:");
  for (let user of users) {
    console.log(`ID: ${user.id}, Name: ${user.name}, Balance: ${user.balance}`);
  }
}

// --- Run the system ---
addUser();
addUser();

let idToUpdate = parseInt(prompt("Enter user ID to update balance:"));
let newBalance = parseFloat(prompt("Enter the new balance:"));
updateUserBalanceById(idToUpdate, newBalance);

let idToDelete = parseInt(prompt("Enter user ID to delete:"));
deleteUserById(idToDelete);

displayUsers();
