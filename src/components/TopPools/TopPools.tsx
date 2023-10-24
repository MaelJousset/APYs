import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
} from '@chakra-ui/react'


interface TopPoolsProps {
    pools: {
        name: string,
        origin: string,
        tvl: number,
        apr: number,
    }[];
}
const TopPools: React.FC<TopPoolsProps> = ({ pools }) => {
    return (
        <Table
            style={{
                borderCollapse: 'separate',
                borderSpacing: '3px'
            }}
            border="2px solid"
            borderColor="blue.100"
            rounded="md"
            width={"100%"}
            size={{ base: "sm", md: "md" }}

            variant='striped'
            colorScheme='blue'
        >
            <Thead>
                <Tr>
                    <Th borderStyle={"hidden"} >Pool</Th>
                    <Th borderStyle={"hidden"} >Provider</Th>
                    <Th borderStyle={"hidden"} isNumeric>TVL</Th>
                    <Th borderStyle={"hidden"} isNumeric>APR</Th>
                </Tr>
            </Thead>
            <Tbody>
                {pools.map((pool) => (
                    <Tr>
                        <Td borderStyle={"hidden"} >{pool.name}</Td>
                        <Td borderStyle={"hidden"} >{pool.origin}</Td>
                        <Td borderStyle={"hidden"} isNumeric>{pool.tvl}</Td>
                        <Td borderStyle={"hidden"} isNumeric>{pool.apr}</Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    )
}

export default TopPools;