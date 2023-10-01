import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    Box,
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
        <Box
            padding={12}
            width="100%"
        >
            <Table
                style={{
                    borderCollapse: 'separate',
                    borderSpacing: '3px'
                }}
                border="2px solid"
                borderColor="blue.100"
                rounded="md"
                width={"100%"}

                variant='striped'
                colorScheme='blue'
            >
                <Thead>
                    <Tr>
                        <Th>Pool</Th>
                        <Th>Provider</Th>
                        <Th isNumeric>TVL</Th>
                        <Th isNumeric>APR</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {pools.map((pool) => (
                        <Tr>
                            <Td>{pool.name}</Td>
                            <Td>{pool.origin}</Td>
                            <Td isNumeric>{pool.tvl}</Td>
                            <Td isNumeric>{pool.apr}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    )
}

export default TopPools;