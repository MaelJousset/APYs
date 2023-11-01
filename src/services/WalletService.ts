import { connect, disconnect } from 'starknetkit'
import { Provider, constants } from "starknet";
// import { StarknetIdNavigator } from "starknetid.js";
// import { useStarkName } from '@starknet-react/core';


class WalletService {
    private walletAddress: string | null = null;
    private isconnected: boolean = false;
    private provider: Provider = new Provider(undefined);
    private chainId: any = constants.StarknetChainId.SN_MAIN;

    // Callback functions for when connected or disconnected
    private onConnectCallback: ((address: string) => void) | null = null;
    private onDisconnectCallback: (() => void) | null = null;

    connectWallet = async () => {
        // Logic to connect the wallet
        // After connecting, set the wallet address
        const connection = await connect();

        console.log("connected");

        if (connection && connection.isConnected) {
            this.walletAddress = connection.selectedAddress;
            this.isconnected = connection.isConnected;
            this.onConnectCallback?.(this.walletAddress); // Call the connect callback
            this.provider = connection.provider;
            this.chainId = connection.chainId;
        }
    }

    disconnectWallet = async () => {
        await disconnect({ clearLastWallet: true });

        this.walletAddress = null;
        this.isconnected = false;
        this.provider = new Provider(undefined);
        this.chainId = null;
        this.onDisconnectCallback?.(); // Call the disconnect callback
    }

    // Callback registration functions
    registerOnConnectCallback(callback: () => void) {
        this.onConnectCallback = callback;
    }

    registerOnDisconnectCallback(callback: () => void) {
        this.onDisconnectCallback = callback;
    }

    getWalletAddress() {
        return this.walletAddress;
    }

    getShortWalletAddress() {
        if (this.walletAddress == null) {
            return '';
        }
        else {
            return this.walletAddress.substring(0, 5) + "..." + this.walletAddress.slice(-4);
        }
    }

    isConnected() {
        return this.isconnected;
    }

    getProvider() {
        return this.provider;
    }

    getChainId() {
        return this.chainId;
    }
}


export default WalletService;