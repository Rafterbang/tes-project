// Define an object representing a person
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    email: 'john.doe@example.com',
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
    },
    hobbies: ['reading', 'gardening', 'cooking'],
    // Method to get full name
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};

// Accessing properties of the person object
console.log(person.firstName); // Output: John
console.log(person.age); // Output: 30
console.log(person.address.city); // Output: Anytown

// Calling the fullName method
console.log(person.fullName()); // Output: John Doe

// Looping through hobbies array
console.log('Hobbies:');
person.hobbies.forEach(hobby => {
    console.log('- ' + hobby);
});
