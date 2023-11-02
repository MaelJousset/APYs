import { useState, useEffect, useMemo } from 'react';

import WalletService from '../../services/WalletService';

import {
    Button,
    Stack,
} from "@chakra-ui/react"

import { FaWallet } from 'react-icons/fa'
import { GoSignOut } from "react-icons/go";

import { useStarkName } from "@starknet-react/core";

function WalletButton() {
    const [connectIcon, setConnectIcon] = useState(<FaWallet />);
    const [connected, setConnected] = useState(false);

    const walletService = useMemo(() => new WalletService(), []);

    const temp_addr = walletService.getWalletAddress();
    const address = temp_addr ? temp_addr : "";
    const { data } = useStarkName({ address });



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
            setConnectIcon(<GoSignOut />);
        }
    };

    const handleDisconnect = () => {
        setConnected(false);
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
                    "Connect" :
                    data ? data : walletService.getShortWalletAddress()}
            </Button>
        </Stack>
    );
}

export default WalletButton;