const vm = require('vm');
var fs = require("fs");
const { Endpoint } = require('./../core/Endpoint.js');
const parseInput = require('./parseInput.js');

// Constructor
function Hub() {
    this.endpoints = [];
}

// Static variables
Hub.variable = "Im a Hub variable";
Hub.instance = null;

// Static methods
Hub.create = () => {
    if(Hub.instance === null){
        Hub.instance = new Hub();
    }
    return Hub.instance;
}

Hub.process = (data, socket) => {

    data = parseInput(data);
    console.log(data);
    socket.write("ping");

}

Hub.loadEndpoints = () => {
    const endpoints = (Hub.create()).endpoints; // Load main instance endpoint array
    const endpointFiles = fs.readdirSync(__dirname + '/../endpionts');

    endpointFiles.forEach( file => {
        const fileData = fs.readFileSync(__dirname + '/../endpionts/' + file);
        const context= {
            require: require
        }

        vm.createContext(context);
        vm.runInContext(fileData, context);
    })

    console.log(endpoints);
}

Hub.parseData = (data) => {

}

exports.Hub = Hub;