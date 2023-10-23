import { connect, disconnect } from 'starknetkit'


class WalletService {
    private walletAddress: string | null = null;
    private buttonText: string = 'Connect Wallet'; // Default text

    connectWallet = async () => {
        // Logic to connect the wallet
        // After connecting, set the wallet address
        const connection = await connect();

        if (connection && connection.isConnected) {
            this.walletAddress = connection.selectedAddress;
        }
    }

    disconnectWallet = async () => {
        await disconnect();

        this.walletAddress = null;
    }

    getWalletAddress() {
        return this.walletAddress;
    }

    getButtonText() {
        return this.buttonText;
    }

    isConnected() {
        return this.walletAddress ? true : false;
    }

    // Update button text based on wallet status
    updateButtonText() {
        this.buttonText = this.walletAddress ? 'Disconnect Wallet' : 'Connect Wallet';
    }
}

export default WalletService;