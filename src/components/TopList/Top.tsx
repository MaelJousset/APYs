


import {
    Box,
    Flex,
    Image,
    Text,
} from "@chakra-ui/react"

interface TopProps {
    title: string;
    pool: string;
    origin: string;
    apy: number;
}
const Top: React.FC<TopProps> = ({ title, pool, origin, apy }) => {
    return (
        <Box
            bgColor={"blue.50"}
            borderRadius={"15px"}
            w={"380px"}
            h={"80px"}
            boxShadow='base'
        >
            <Flex
                flexDir={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                width={"100%"}
                height={"100%"}
            >
                <Flex
                    paddingLeft={5}
                    flexDir={"column"}
                    gap={1}
                >
                    <Text
                        fontWeight={"bold"}
                        fontFamily={"Plus Jakarta Sans, sans-serif"}
                        fontSize={"12px"}
                        color={"blue.400"}
                    >
                        {title}
                    </Text>
                    <Text
                        fontFamily={"Plus Jakarta Sans, sans-serif"}
                        fontSize={"18px"}
                        fontWeight={"bold"}
                        color={"blue.800"}
                    >
                        {pool}
                    </Text>
                </Flex>
                <Flex
                    flexDir={"row"}
                    alignItems={"center"}
                    gap={4}
                    paddingRight={5}
                >
                    <Text
                        color={"green.400"}
                        fontFamily={"Plus Jakarta Sans, sans-serif"}
                        fontWeight={"bold"}
                        fontSize={"16px"}
                    >
                        {apy + '%'}
                    </Text>
                    <Image
                        src={origin === "Ekubo" ? "/assets/ekubo.png" : origin === "MySwap" ? "/assets/myswap.png" : "/assets/jediswap.jpg"}
                        alt={origin}
                        borderRadius={"22px"}
                        w={"44px"}
                        h={"44px"}
                    >
                    </Image>
                </Flex>


            </Flex>
        </Box>
    )
}

export default Top;