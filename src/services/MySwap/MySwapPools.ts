import { Provider, Contract, Account, ec, json, constants } from "starknet";


class MySwapPool {
    private pool_name: string;
    private token_a_addr: string;
    private token_b_addr: string;
    private token_a_reserves: number;
    private token_b_reserves: number;
    private fee_percent: number;
    private cmff_type: string;
    private liq_token: string;

    constructor(pool_name: string,
        token_a_addr: string, token_b_addr: string,
        token_a_reserves: number, token_b_reserves: number,
        fee_percent: number, cmff_type: string, liq_token: string) {
        this.pool_name = pool_name;
        this.token_a_addr = token_a_addr;
        this.token_b_addr = token_b_addr;
        this.token_a_reserves = token_a_reserves;
        this.token_b_reserves = token_b_reserves;
        this.fee_percent = fee_percent;
        this.cmff_type = cmff_type;
        this.liq_token = liq_token;
    }

    getPoolName() {
        return this.pool_name;
    }
    getTokenAAddress() {
        return this.token_a_addr;
    }
    getTokenBAddress() {
        return this.token_b_addr;
    }
    getTokenAReserves() {
        return this.token_a_reserves;
    }
    getTokenBReserves() {
        return this.token_b_reserves;
    }
    getFeePercent() {
        return this.fee_percent;
    }
    getCmffType() {
        return this.cmff_type;
    }
    getLiqToken() {
        return this.liq_token;
    }
}



class MySwapPools {
    private provider: Provider;
    private address: string;
    private contract: Contract | undefined;

    private version: number;
    private nbPools: number;
    private pools: MySwapPool[];


    constructor() {
        this.address = '0x010884171baf1914edc28d7afb619b40a4051cfae78a094a55d230f19e944a28';
        this.provider = new Provider({ sequencer: { network: constants.NetworkName.SN_MAIN } });

        this.pools = [];
        this.nbPools = 0;
        this.version = 0;
    }

    setContract = async () => {
        const { abi: testAbi } = await this.provider.getClassAt(this.address);
        if (testAbi === undefined) { throw new Error("no abi.") };

        this.contract = new Contract(testAbi, this.address, this.provider);

        console.log("Contract set." + this.contract.functions);
    }


    setVersion = async () => {
        // Interaction with the contract with call
        if (this.contract) {
            const bal1 = await this.contract.get_version();
            this.version = bal1.res.toString();
        }
        else {
            await this.setContract();
        }

        console.log("Version set.");
    }

    setNbPools = async () => {

        // Interaction with the contract with call
        if (this.contract) {
            const bal1 = await this.contract.get_total_number_of_pools();
            console.log(bal1.res.toString() + " pools.");
            this.nbPools = bal1.res.toString();
        }
        else {
            await this.setContract();
        }

        console.log("Nb pools set." + this.nbPools);
    }

    setPools = async () => {
        if (this.contract) {
            for (let i = 0; i < this.nbPools; i++) {
                const bal1 = await this.contract.get_pool(i);
                const pool = bal1.res.toString();

                this.pools.push(new MySwapPool(pool.pool_name, pool.token_a_addr, pool.token_b_addr,
                    pool.token_a_reserves, pool.token_b_reserves, pool.fee_percent,
                    pool.cmff_type, pool.liq_token));
            }
        }
        else {
            await this.setContract();
        }
    }

    getPools() {
        return this.pools;
    }
}



export default MySwapPools;
export { MySwapPool };