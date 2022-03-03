module.exports = parseInput;

// FIXES TODO
// I cant think any easy to implement way to send any king of command, i will have to think something

function parseInput(data) {
    let parts = data.split("/");
    let partsWithoutQuotes = [];
    parts.forEach( part => {
        partsWithoutQuotes.push(part.replace("\"",""));
    })
    return partsWithoutQuotes;
}