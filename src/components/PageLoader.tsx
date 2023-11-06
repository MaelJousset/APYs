import {
    Flex,
    Spinner,
} from '@chakra-ui/react'


export default function PageLoader() {
    return (
        <Flex
            pt={{ base: 6, md: 0 }}
            width={"100%"}
            height={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={10}
            paddingLeft={{ base: 3, md: 12 }}
            paddingRight={{ base: 3, md: 12 }}
            paddingTop={{ base: 2, md: 8 }}
        >
            <Spinner />
        </Flex>
    )
}