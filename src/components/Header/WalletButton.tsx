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
import { Provider, constants } from "starknet";

const provider = new Provider();
const starknetIdNavigator = new StarknetIdNavigator(
    provider,
    constants.StarknetChainId.SN_MAIN
);


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
        const handleConnect = async () => {
            if (walletService.isConnected()) {
                // setConnectText(walletService.getShortWalletAddress());
                const address = walletService.getWalletAddress();
                if (address) {
                    const { provider } = useProvider();
                    const { chain } = useNetwork();
                    const { address } = useAccount();
                    const starknetIdNavigator = new StarknetIdNavigator(
                        provider,
                        chain?.id as constants.StarknetChainId
                    );
                    const starkname = await starknetIdNavigator.getStarkName(address ?? "");
                    setConnectText(starkname);
                    // if (result.isLoading) setConnectText('Loading...');
                    // if (result.isError) setConnectText('Error fetching name...');
                    // if (result.data) setConnectText(result.data);
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