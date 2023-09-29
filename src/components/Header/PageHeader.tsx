

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

    const handleSearch = (query: string) => {
        // Implement your search logic here with the 'query' parameter.
        console.log(`Searching for: ${query}`);
    };

    return (
        <Flex
            width={"100%"}
            height={"100%"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            paddingLeft={12}
            paddingRight={10}
            paddingTop={8}
        >
            <PageLink page_name={page_name}></PageLink>
            <Flex
                gap={5}
            >
                <SearchBar onSearch={handleSearch} />
                <WalletButton />
            </Flex>
        </Flex>
    )
}

export default PageHeader;