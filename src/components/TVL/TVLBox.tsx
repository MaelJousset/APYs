import {
    Box,
    Flex,
    Image,
    Text,
} from "@chakra-ui/react"

import TVLChart from "./TVLChart";


interface TVLBoxProps {
    pool: string;
    values: {
        x: Date;
        y: number;
    }[];
}
const TVLBox: React.FC<TVLBoxProps> = ({ pool, values }) => {
    return (
        <Box>
            <TVLChart
                chartData={values} pool={pool}
            />

        </Box>
    )
}

export default TVLBox;