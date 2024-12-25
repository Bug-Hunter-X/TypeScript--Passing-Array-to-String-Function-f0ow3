function greeter(person: string | string[]): string {
  if (Array.isArray(person)) {
    return "Hello, " + person.join(" ");
  } else {
    return "Hello, " + person;
  }
}

let user = ["Jane", "Doe"];
console.log(greeter(user)); //This will correctly handle the array

let user2 = "John";
console.log(greeter(user2)); //This will also work correctly