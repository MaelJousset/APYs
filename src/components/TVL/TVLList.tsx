import TVLBox from "./TVLBox";

import {
    Box,
    Flex,
    Image,
    Text,
} from "@chakra-ui/react"


function TVLList() {
    return (
        <Box
            paddingLeft={12}
        >
            <Flex
                flexDir={"column"}
                bgColor={"blue.50"}
                borderRadius={15}
                paddingBottom={5}
                paddingRight={5}
                paddingLeft={5}
                paddingTop={3}
                gap={2}
                boxShadow='base'
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
                    flexDir={"row"}

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