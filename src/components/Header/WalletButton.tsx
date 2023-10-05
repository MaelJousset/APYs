


import {
    Button,
    Stack,
} from "@chakra-ui/react"

import { FaWallet } from 'react-icons/fa'
import { connect, disconnect } from "get-starknet"


function WalletButton() {
    return (
        <Stack direction='row' spacing={4}>
            <Button
                leftIcon={<FaWallet />}
                onClick={() => connect()}
                colorScheme='blue'
                variant='solid'
                size={{ base: 'sm', md: 'md' }}
            >
                Connect Wallet
            </Button>
        </Stack>
    )
}

export default WalletButton;