import React, { useState, useEffect } from 'react';

import WalletService from '../../services/WalletService';

import {
    Button,
    Stack,
} from "@chakra-ui/react"

import { FaWallet } from 'react-icons/fa'
import { GoSignOut } from "react-icons/go";


function WalletButton() {
    const [connectText, setConnectText] = useState('Connect');
    const [connectIcon, setConnectIcon] = useState(<FaWallet />);
    const walletService = new WalletService();

    const handleClick = () => {
        if (walletService.getWalletAddress() != null) {
            walletService.disconnectWallet();
            //setConnectText('Connect');
            //setConnectIcon(<FaWallet />);
        } else {
            walletService.connectWallet();
        }
    };

    // Register callbacks when the component is mounted
    useEffect(() => {
        const handleConnect = (address: string) => {
            if (address != null) {
                setConnectText('Disconnect');
                setConnectIcon(<GoSignOut />);
            }
        };

        const handleDisconnect = () => {
            setConnectText('Connect');
            setConnectIcon(<FaWallet />);
        };

        // Register the callbacks for connection changes
        walletService.registerOnConnectCallback(handleConnect);
        walletService.registerOnDisconnectCallback(handleDisconnect);

        // Unregister the callbacks when the component is unmounted
        return () => {
            walletService.registerOnConnectCallback(() => { });
            walletService.registerOnDisconnectCallback(() => { });
        };
    }, []);

    return (
        <Stack direction='row' spacing={4}>
            <Button
                leftIcon={connectIcon}
                onClick={() => handleClick()}
                colorScheme='blue'
                variant='solid'
                size={{ base: 'sm', md: 'md' }}
            >
                {connectText}
            </Button>
        </Stack>
    );
}

export default WalletButton;