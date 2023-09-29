

import PageLink from "./PageLink";
import SearchBar from "./SearchBar"
import WalletButton from "./WalletButton";


import {
    Box,
    Flex,
} from "@chakra-ui/react"


interface PageHeaderProps {
    page_name: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ page_name }) => {
    return (
        <Flex>
            <PageLink page_name={page_name}></PageLink>
        </Flex>
    )
}

export default PageHeader;