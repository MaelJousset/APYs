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
import { useStarkName } from "@starknet-react/core";
import { connect } from 'http2';

function WalletButton() {
    const [connectText, setConnectText] = useState('Connect');
    const [connectIcon, setConnectIcon] = useState(<FaWallet />);
    const [connected, setConnected] = useState(false);

    const walletService = useMemo(() => new WalletService(), []);

    const temp_addr = walletService.getWalletAddress();
    const address = temp_addr ? temp_addr : "";
    const { data, isLoading, isError } = useStarkName({ address });



    const handleClick = () => {
        if (walletService.isConnected()) {
            walletService.disconnectWallet();
        } else {
            walletService.connectWallet();
        }
    };

    const handleConnect = async () => {

        if (walletService.isConnected()) {
            setConnected(true);
            setConnectText(walletService.getShortWalletAddress());
            setConnectIcon(<GoSignOut />);
        }
    };

    const handleDisconnect = () => {
        setConnected(false);
        setConnectText('Connect');
        setConnectIcon(<FaWallet />);
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
                {!connected ?
                    connectText :
                    isLoading ? "Loading..." :
                        data ? data : connectText}
            </Button>
        </Stack>
    );
}

export default WalletButton;