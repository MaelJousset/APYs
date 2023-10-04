import { Flex } from "@chakra-ui/react";

import Top from "./Top";

function TopList() {
    return (
        <Flex
            flexDir={{ base: "column", md: "row" }}
            paddingLeft={12}
            gap={25}
        >
            <Top title={"Best Weekly APY"} pool={"ETH/USD"} origin={"ekubo"} apy={15}></Top>
            <Top title={"Best Weekly APY"} pool={"ETH/USD"} origin={"ekubo"} apy={15}></Top>
            <Top title={"Best Weekly APY"} pool={"ETH/USD"} origin={"ekubo"} apy={15}></Top>
        </Flex>
    )
}

export default TopList;