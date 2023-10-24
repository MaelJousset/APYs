import React, { useState, useEffect, useMemo } from 'react';

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
    //const walletService = new WalletService();
    const walletService = useMemo(() => new WalletService(), []);

    const handleClick = () => {
        if (walletService.isConnected()) {
            walletService.disconnectWallet();
        } else {
            walletService.connectWallet();
        }
    };

    // Register callbacks when the component is mounted
    useEffect(() => {
        const handleConnect = () => {
            if (walletService.isConnected()) {
                setConnectText(walletService.getShortWalletAddress());
                setConnectIcon(<GoSignOut />);
                console.log('callback connected');
            }
        };

        const handleDisconnect = () => {
            setConnectText('Connect');
            setConnectIcon(<FaWallet />);

            console.log('callback disconnected');
        };

        // Register the callbacks for connection changes
        walletService.registerOnConnectCallback(handleConnect);
        walletService.registerOnDisconnectCallback(handleDisconnect);

        // Unregister the callbacks when the component is unmounted
        return () => {
            walletService.registerOnConnectCallback(() => { });
            walletService.registerOnDisconnectCallback(() => { });
        };
    }, [walletService]);

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