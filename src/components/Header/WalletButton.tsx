import React, { useState, useEffect, useMemo } from 'react';

import WalletService from '../../services/WalletService';

import {
    Button,
    Stack,
} from "@chakra-ui/react"

import { FaWallet } from 'react-icons/fa'
import { GoSignOut } from "react-icons/go";


import { useProvider, useNetwork, useAccount } from "@starknet-react/core";

import { StarknetIdNavigator } from "starknetid.js";
import { constants } from "starknet";

function WalletButton() {
    const [connectText, setConnectText] = useState('Connect');
    const [connectIcon, setConnectIcon] = useState(<FaWallet />);

    const { provider } = useProvider();
    const { chain } = useNetwork();

    const walletService = useMemo(() => new WalletService(), []);

    const handleClick = () => {
        if (walletService.isConnected()) {
            walletService.disconnectWallet();
        } else {
            walletService.connectWallet();
        }
    };

    const handleConnect = async () => {

        if (walletService.isConnected()) {
            const address = walletService.getWalletAddress();
            if (address) {

                const starknetIdNavigator = new StarknetIdNavigator(
                    provider,
                    chain?.id as constants.StarknetChainId
                );
                const starkname = await starknetIdNavigator.getStarkName(address ?? "");
                setConnectText(starkname);
            }

            setConnectIcon(<GoSignOut />);
            console.log('callback connected');
        }
    };

    const handleDisconnect = () => {
        setConnectText('Connect');
        setConnectIcon(<FaWallet />);

        console.log('callback disconnected');
    };


    // Register callbacks when the component is mounted
    useEffect(() => {
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