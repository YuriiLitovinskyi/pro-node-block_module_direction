const readline = require('readline');

const PpkData = require('./ppkData');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter Ppk number: ', (value) => {
    const ppkNumber = Number(value);

    if(!Number.isInteger(ppkNumber)){
        console.log('Entered value is not an integer number');
        rl.close();
    } else if(ppkNumber <= 0){
        console.log('Ppk number must be greater then 0');
        rl.close();
    } else {
        const ppkObj = new PpkData(ppkNumber);
        console.log(`
        Block: ${ppkObj.getBlock()}
        Module: ${ppkObj.getModule()}
        Direction: ${ppkObj.getDirection()}
        `);
        rl.close();
    };
});

rl.on('close', () => {
    console.log('\nApplication will be closed in 10 seconds');
    setTimeout(() => {
        process.exit(0);
    }, 10000)
});