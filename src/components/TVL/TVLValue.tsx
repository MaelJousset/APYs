import {
    Box,
    Flex,
    Image,
    Text,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
} from "@chakra-ui/react"

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
        <Stat>
            <StatNumber>{getTVLvalue()}</StatNumber>
            <StatHelpText>
                {getPercent() >= 0 ? <StatArrow type='increase' /> : <StatArrow type='decrease' />

                }
                {Math.abs(getPercent()).toFixed(2) + '%'}
            </StatHelpText>
        </Stat>
    )
}

export default TVLValue;