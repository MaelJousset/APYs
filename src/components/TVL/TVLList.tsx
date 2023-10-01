import TVLBox from "./TVLBox";

import {
    Box,
    Flex,
    Image,
    Text,
} from "@chakra-ui/react"


function TVLList() {
    return (
        <Flex>
            <TVLBox
                pool="Ekubo"
                values={[
                    { x: new Date('2023-09-01'), y: 100 },
                    { x: new Date('2023-09-02'), y: 150 },
                    { x: new Date('2023-09-03'), y: 100 },
                ]}
            />
        </Flex>
    )
}

export default TVLList;