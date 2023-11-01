class MySwapPool {
    private crypto1: string;
    private crypto2: string;
    private tvl: number;
    private id: number;

    constructor(crypto1: string, crypto2: string, tvl: number, id: number) {
        this.crypto1 = crypto1;
        this.crypto2 = crypto2;
        this.tvl = tvl;
        this.id = id;
    }

    getCrypto1() {
        return this.crypto1;
    }
    getCrypto2() {
        return this.crypto2;
    }
    getPair() {
        return this.crypto1 + '/' + this.crypto2;
    }
    getTvl() {
        return this.tvl;
    }
    getId() {
        return this.id;
    }
}



class MySwapPools {
    private pools: MySwapPool[];
    private nbPools: number;

    constructor() {
        this.pools = [];
        this.nbPools = 0;
    }

    setNbPools() {

    }
}



export default MySwapPools;