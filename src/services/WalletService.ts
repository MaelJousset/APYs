import { connect, disconnect } from 'starknetkit'
import { StarknetIdNavigator } from "starknetid.js";
import { useStarkName } from '@starknet-react/core';


class WalletService {
    private walletAddress: string | null = null;
    private isconnected: boolean = false;

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
        }
    }

    disconnectWallet = async () => {
        await disconnect({ clearLastWallet: true });

        this.walletAddress = null;
        this.isconnected = false;
        this.onDisconnectCallback?.(); // Call the disconnect callback
        console.log("disconnected");
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

    async getStarknetId() {
        const address =
            "0x061b6c0a78f9edf13cea17b50719f3344533fadd470b8cb29c2b4318014f52d3";
        return useStarkName({ address });
    }
}


export default WalletService;