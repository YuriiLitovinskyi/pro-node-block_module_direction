class PpkData {
    constructor(ppkNumber){
        this.ppkNumber = ppkNumber;
    };

    getBlock(){
        const blockNumber = Math.ceil(this.ppkNumber / 64);    
        return blockNumber;
    };

    getModule(){   
        const moduleNumber = Math.ceil(this.ppkNumber / 8) - (Math.ceil(this.ppkNumber / 64) * 8 - 8);
        return moduleNumber;
    };

    getDirection(){
        let directionNumber = this.ppkNumber - (Math.floor(this.ppkNumber / 8) * 8);

        if(directionNumber === 0){
            directionNumber += 8;
        };

        return directionNumber;
    };
};

module.exports = PpkData;