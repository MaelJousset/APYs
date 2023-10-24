import PageLink from "./PageLink";
import SearchBar from "./SearchBar"
import WalletButton from "./WalletButton";

import {
    Flex,
    useBreakpointValue,
} from "@chakra-ui/react"


interface PageHeaderProps {
    active_page: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ active_page }) => {

    const isLargeScreen = useBreakpointValue({ base: false, md: true });

    const handleSearch = (query: string) => {
        // Implement your search logic here with the 'query' parameter.
        console.log(`Searching for: ${query}`);
    };

    return (
        <>
            {
                isLargeScreen ?
                    <Flex
                        width={"100%"}
                        height={"100%"}
                        flexDirection={"row"}
                        alignItems={"center"}
                        gap={{ base: 3, md: 0 }}
                        justifyContent={"space-between"}
                        paddingTop={{ base: 0, md: 8 }}
                        paddingLeft={{ base: 2, md: 14 }}
                        paddingRight={{ base: 2, md: 14 }}
                    >
                        <PageLink page_name={active_page}></PageLink>
                        <Flex gap={5} >
                            <SearchBar onSearch={handleSearch} />
                            <WalletButton />
                        </Flex>
                    </Flex>
                    :
                    <Flex
                        width={"100%"}
                        height={"100%"}
                        flexDirection={{ base: "column", md: "row" }}
                        alignItems={"center"}
                        gap={{ base: 5, md: 0 }}
                        justifyContent={"space-between"}
                        paddingTop={3}
                        paddingLeft={{ base: 4, md: 14 }}
                        paddingRight={{ base: 4, md: 14 }}
                        paddingBottom={{ base: 3, md: 0 }}
                    >
                        <Flex
                            flexDirection={"row"}
                            justifyContent={"space-between"}
                            width={"full"}
                        >
                            <PageLink page_name={active_page}></PageLink>
                            <WalletButton />
                        </Flex>
                        <SearchBar onSearch={handleSearch} />
                    </Flex>
            }

        </>
    )
}

export default PageHeader;