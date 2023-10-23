import { connect, disconnect } from 'starknetkit'


class WalletService {
    private walletAddress: string | null = null;
    private isconnected: boolean = false;
    private buttonText: string = 'Connect'; // Default text

    // Callback functions for when connected or disconnected
    private onConnectCallback: ((address: string) => void) | null = null;
    private onDisconnectCallback: (() => void) | null = null;

    connectWallet = async () => {
        // Logic to connect the wallet
        // After connecting, set the wallet address
        const connection = await connect();

        if (connection && connection.isConnected) {
            this.isconnected = connection.isConnected;
            this.walletAddress = connection.selectedAddress;
            this.onConnectCallback?.(this.walletAddress); // Call the connect callback
        }
    }

    disconnectWallet = async () => {
        await disconnect();

        this.isconnected = false;
        this.walletAddress = null;
        this.onDisconnectCallback?.(); // Call the disconnect callback
    }

    // Callback registration functions
    registerOnConnectCallback(callback: (address: string) => void) {
        this.onConnectCallback = callback;
    }

    registerOnDisconnectCallback(callback: () => void) {
        this.onDisconnectCallback = callback;
    }

    getWalletAddress() {
        return this.walletAddress;
    }

    getButtonText() {
        return this.buttonText;
    }

    isConnected() {
        return this.isconnected;
    }

    // Update button text based on wallet status
    updateButtonText() {
        this.buttonText = this.walletAddress ? 'Disconnect' : 'Connect';
    }
}


export default WalletService;