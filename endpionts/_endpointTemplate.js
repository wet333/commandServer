// Imports
const { Endpoint } = require('./../core/Endpoint.js');  // Endpoint class to create endpoints
const { Hub } = require('./../core/Hub.js');            // Hub class to get the main instance

// Array of instructions to route
const instructions = ["example", "commands", "array"];

// Action to execute
const action = () => {
    console.log("perform custom activity");
}

// Create endpoint object
const endpoint = Endpoint.new(instructions, action);

// Add endpoint to the Hub endpoint list
(Hub.create()).endpoints.push(endpoint);