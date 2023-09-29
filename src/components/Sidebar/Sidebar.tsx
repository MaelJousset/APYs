import React, { useState } from 'react'
import {
    Flex,
    Text,
    Divider,
    Avatar,
    Heading
} from '@chakra-ui/react'

import { IoIosHome } from 'react-icons/io'
import { FaWallet } from 'react-icons/fa'

import NavItem from './NavItem'
import NavImageItem from './NavImageItem'
import Title from './Title'

interface SidebarProps {
    setCurrentPage: (page: string) => void;
}

export default function Sidebar({ setCurrentPage }: SidebarProps) {
    const [navSize, changeNavSize] = useState("large")

    const [activePage, setActivePage] = useState('dashboard_page');

    const handleButtonClick = (pageName: string) => {
        setActivePage(pageName);
        setCurrentPage(pageName);
    };

    return (
        <Flex
            pos="sticky"
            h="100vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            //borderRadius={navSize === "small" ? "15px" : "30px"}
            w={navSize === "small" ? "75px" : "280px"}
            flexDir="column"
            justifyContent="space-between"
            bg={"gray.100"}
        >
            <Flex
                p="7%"
                flexDir="column"
                w="100%"
                alignItems={navSize === "small" ? "center" : "flex-start"}
                as="nav"
            >
                <Title
                    logo="/assets/APY_logo.png"
                    title="APY DASHBOARD"
                    onClick={() => {
                        if (navSize === "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                    navSize={navSize}
                />
                <Flex
                    paddingTop={navSize === "small" ? "17%" : "5%"}
                    paddingLeft="5%"
                    flexDir="column"
                    w="100%"
                    alignItems={navSize === "small" ? "center" : "flex-start"}
                    as="nav"
                >
                    <Divider w="80%" />
                    <NavItem navSize={navSize} icon={IoIosHome} title="Dashboard" active={activePage === 'dashboard_page'}
                        onClick={() => handleButtonClick('dashboard_page')}
                    />
                    <NavImageItem navSize={navSize} image={"/assets/myswap.png"} title="MySwap" active={activePage === 'myswap_page'}
                        onClick={() => handleButtonClick('myswap_page')}
                    />
                    <NavImageItem navSize={navSize} image={"/assets/jediswap.jpg"} title="JediSwap" active={activePage === 'jediswap_page'}
                        onClick={() => handleButtonClick('jediswap_page')}
                    />
                    <NavImageItem navSize={navSize} image={"/assets/ekubo.png"} title="Ekubo" active={activePage === 'ekubo_page'}
                        onClick={() => handleButtonClick('ekubo_page')}
                    />
                    <NavItem navSize={navSize} icon={FaWallet} title="My Wallet" active={activePage === 'mywallet_page'}
                        onClick={() => handleButtonClick('mywallet_page')}
                    />
                </Flex>
            </Flex>

            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize === "small" ? "center" : "flex-start"}
                mb={4}
            >
                <Divider display={navSize === "small" ? "none" : "flex"} />
                <Flex mt={4} align="center">
                    <Avatar size="sm" src="avatar-1.jpg" />
                    <Flex flexDir="column" ml={4} display={navSize === "small" ? "none" : "flex"}>
                        <Heading as="h3" size="sm">Sylwia Weller</Heading>
                        <Text color="gray">Admin</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}