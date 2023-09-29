import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Flex,
    Text,
} from '@chakra-ui/react'

interface PageLinkProps {
    page_name: string;
}

const PageLink: React.FC<PageLinkProps> = ({ page_name }) => {
    return (
        <Flex
            flexDirection={"column"}
            fontFamily={"Plus Jakarta Sans, sans-serif"}
        >
            <Breadcrumb fontSize={"12px"}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#' color={"gray.400"}>
                        Pages
                    </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#' color={"gray.700"}>
                        {page_name}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Text fontSize={"14px"} fontWeight={"bold"}>{page_name}</Text>
        </Flex>
    )
}

export default PageLink;