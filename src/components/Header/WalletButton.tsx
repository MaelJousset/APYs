


import {
    Button,
    Stack,
} from "@chakra-ui/react"

import { FaWallet } from 'react-icons/fa'


function WalletButton() {
    return (
        <Stack direction='row' spacing={4}>
            <Button leftIcon={<FaWallet />} colorScheme='teal' variant='solid'>
                Connect Wallet
            </Button>
        </Stack>
    )
}

export default WalletButton;