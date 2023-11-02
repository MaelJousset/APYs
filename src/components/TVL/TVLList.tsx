import DashboardChart from "../Charts/DashboardChart";

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
                paddingRight={{ base: 0, md: 5 }}
                paddingLeft={{ base: 0, md: 5 }}
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
                    paddingLeft={{ base: 6, md: 2 }}
                    paddingBottom={2}
                >
                    TVL
                </Text>
                <Flex
                    flexDir={{ base: "column", md: "row" }}
                    alignItems={"center"}
                    gap={{ base: 5, md: 25 }}
                    justifyContent={"space-between"}
                >
                    <DashboardChart
                        pool="MySwap"
                        values={[
                            { x: new Date('2023-09-01'), y: 100 },
                            { x: new Date('2023-09-02'), y: 150 },
                            { x: new Date('2023-09-03'), y: 100 },
                        ]}
                    />
                    <DashboardChart
                        pool="JediSwap"
                        values={[
                            { x: new Date('2023-09-01'), y: 100 },
                            { x: new Date('2023-09-02'), y: 150 },
                            { x: new Date('2023-09-03'), y: 100 },
                        ]}
                    />
                    <DashboardChart
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