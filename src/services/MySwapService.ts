

class MySwapService {
    private crypto1: string;
    private crypto2: string;

    constructor(crypto1: string, crypto2: string) {
        this.crypto1 = crypto1;
        this.crypto2 = crypto2;
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
}



export default MySwapService;