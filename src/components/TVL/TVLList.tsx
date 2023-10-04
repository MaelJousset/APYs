import TVLBox from "./TVLBox";

import {
    Box,
    Flex,
    Text,
} from "@chakra-ui/react"


function TVLList() {
    return (
        <Box w={"full"} >
            <Flex
                flexDir={"column"}
                bgColor={"blue.50"}
                borderRadius={15}
                paddingBottom={5}
                paddingRight={5}
                paddingLeft={5}
                paddingTop={3}
                justifyContent={"space-between"}
                boxShadow='base'
                w="full"
            >
                <Text
                    fontFamily={"Plus Jakarta Sans, sans-serif"}
                    fontSize={"24px"}
                    fontWeight={"bold"}
                    color={"blue.900"}
                    paddingLeft={2}
                >
                    TVL
                </Text>
                <Flex
                    flexDir={{ base: "column", md: "row" }}

                    gap={25}

                >
                    <TVLBox
                        pool="MySwap"
                        values={[
                            { x: new Date('2023-09-01'), y: 100 },
                            { x: new Date('2023-09-02'), y: 150 },
                            { x: new Date('2023-09-03'), y: 100 },
                        ]}
                    />
                    <TVLBox
                        pool="JediSwap"
                        values={[
                            { x: new Date('2023-09-01'), y: 100 },
                            { x: new Date('2023-09-02'), y: 150 },
                            { x: new Date('2023-09-03'), y: 100 },
                        ]}
                    />
                    <TVLBox
                        pool="Ekubo"
                        values={[
                            { x: new Date('2023-09-01'), y: 100 },
                            { x: new Date('2023-09-02'), y: 150 },
                            { x: new Date('2023-09-03'), y: 100 },
                        ]}
                    />
                </Flex>
            </Flex>
        </Box>
    )
}

export default TVLList;