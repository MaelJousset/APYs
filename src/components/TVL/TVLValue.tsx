import {
    Flex,
    Text,
    Icon,
} from "@chakra-ui/react"

import { ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";

interface TVLValueProps {
    values: {
        x: Date;
        y: number;
    }[];
}
const TVLValue: React.FC<TVLValueProps> = ({ values }) => {

    function getTVLvalue() {
        const tvl_value = values.length >= 1 ? values[values.length - 1].y : 0;
        if (tvl_value > 1000000) {
            return '$' + (tvl_value / 1000000).toString() + 'M';
        }
        else if (tvl_value > 1000) {
            return '$' + (tvl_value / 1000).toString() + 'K';
        }
        else {
            return '$' + (tvl_value).toString();
        }
    }

    function getPercent() {
        return values.length >= 2 ? (values[values.length - 1].y - values[values.length - 2].y) / values[values.length - 2].y * 100 : 0;
    }


    return (
        <Flex
            fontFamily={"Plus Jakarta Sans, sans-serif"}

            fontWeight={"bold"}
            color={"gray.700"}
            flexDir={"column"}
            alignItems={"flex-end"}
        >
            <Text
                fontSize={"18px"}
            >
                {getTVLvalue()}
            </Text>
            <Flex
                flexDir={"row"}
                alignItems={"center"}
                fontSize={"14px"}
            >
                {getPercent() >= 0 ? <Icon as={ArrowUpIcon} color={"green.400"} /> : <Icon as={ArrowDownIcon} color={"red.400"} />}
                <Text
                    color={getPercent() >= 0 ? "green.400" : "red.400"}
                >
                    {Math.abs(getPercent()).toFixed(2) + '%'}
                </Text>
            </Flex>
        </Flex>
    )
}

export default TVLValue;