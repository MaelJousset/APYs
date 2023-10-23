import React, { useState } from 'react';

import WalletService from '../../services/WalletService';

import {
    Button,
    Stack,
} from "@chakra-ui/react"

import { FaWallet } from 'react-icons/fa'
import { GoSignOut } from "react-icons/go";


function WalletButton() {
    //const [disconnected, setDisconnected] = useState(false); // State to store connection status
    const [connectText, setConnectText] = useState("Connect"); // State to store connection status
    const [connectIcon, setConnectIcon] = useState(<FaWallet />); // State to store connection status
    const walletService = new WalletService(); // Create a WalletService instance

    const handleClick = () => {
        if (walletService.getWalletAddress()) {
            walletService.disconnectWallet();
            //setDisconnected(true); // Update state
            setConnectText("Connect");
            setConnectIcon(<FaWallet />);
        } else {
            walletService.connectWallet();
            //setDisconnected(false); // Update state
            setConnectText("Disconnect");
            setConnectIcon(<GoSignOut />);
        }
    };

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
            </Button >
        </Stack >
    )
}

export default WalletButton;