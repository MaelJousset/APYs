import { Flex } from "@chakra-ui/react";

import Top from "./Top";

function TopList() {
    return (
        <Flex
            flexDir={{ base: "column", md: "row" }}
            justifyContent={"space-between"}
            w={"full"}
            gap={{ base: 3, md: "" }}
        >
            <Top title={"Best Weekly APY"} pool={"ETH/USD"} origin={"ekubo"} apy={15}></Top>
            <Top title={"Best Weekly APY"} pool={"ETH/USD"} origin={"ekubo"} apy={15}></Top>
            <Top title={"Best Weekly APY"} pool={"ETH/USD"} origin={"ekubo"} apy={15}></Top>
        </Flex>
    )
}

export default TopList;