const input = document.getElementById('input');
const output = document.getElementById('output');

const runButton = document.getElementById('run');
const clearButton = document.getElementById('clear');

runButton.addEventListener('click', () => {
    clear();
    run();
})

clearButton.addEventListener('click', () => {
    clear();
})

const keywords = ['if', 'else', 'for', 'while', 'function', 'var', 'let', 'const', 'return']; //temp

const run = () => {
    let nodes = [];

    if (input.childElementCount > 0) {
        input.childNodes.forEach(line => {
            nodes = nodes.concat(line.innerText.split(/\s+/));
        });
    } 
    else {
        nodes.push(input.innerText.split(/\s+/));
    }
    console.log(nodes);
    nodes.forEach(node => {
        if(node !== "") {
            output.innerText += `${eval(node)}\n`
        }
    })
}

const clear = () => {
    output.innerText = '';
}