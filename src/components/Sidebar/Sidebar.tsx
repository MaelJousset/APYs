'use client'

import React, { useState } from 'react'
import {
    IconButton,
    Box,
    CloseButton,
    Flex,
    useColorModeValue,
    Divider,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    BoxProps,
    FlexProps,
} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import { IoIosHome } from 'react-icons/io'
import { FaWallet } from 'react-icons/fa'

import NavItem from './NavItem'
import NavImageItem from './NavImageItem'
import Title from './Title'


interface SimpleSidebarProps {
    setCurrentPage: (page: string) => void,
}

const SimpleSidebar: React.FC<SimpleSidebarProps> = ({ setCurrentPage }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box>
            <SidebarContent setCurrentPage={setCurrentPage} onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerOverlay />
                <DrawerContent>
                    <SidebarContent setCurrentPage={setCurrentPage} onClose={onClose} />
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
            <Box ml={{ base: 0, md: 60 }}>
                {/* Content */}
            </Box>
        </Box>
    )
}

interface SidebarProps extends BoxProps {
    onClose: () => void,
    setCurrentPage: (page: string) => void,
}

const SidebarContent = ({ onClose, setCurrentPage, ...rest }: SidebarProps) => {

    const [activePage, setActivePage] = useState('dashboard_page');

    const handleButtonClick = (pageName: string) => {
        setActivePage(pageName);
        setCurrentPage(pageName);
    };

    return (
        <Box
            bgColor={"blue.50"}
            paddingLeft={5}
            paddingRight={5}
            paddingTop={{ base: 2, md: 4 }}
            shadow={"base"}
            w={{ base: 'full', md: 60 }
            }
            pos="fixed"
            h="full"
            {...rest}>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Title logo="/assets/APY_logo.png"
                    title="STARK VIEWER" />
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            <Divider w="80%" />
            <NavItem icon={IoIosHome} title="Dashboard" active={activePage === 'dashboard_page'}
                onClick={() => handleButtonClick('dashboard_page')}
            />
            <NavImageItem image={"/assets/myswap.png"} title="MySwap" active={activePage === 'myswap_page'}
                onClick={() => handleButtonClick('myswap_page')}
            />
            <NavImageItem image={"/assets/jediswap.jpg"} title="JediSwap" active={activePage === 'jediswap_page'}
                onClick={() => handleButtonClick('jediswap_page')}
            />
            <NavImageItem image={"/assets/ekubo.png"} title="Ekubo" active={activePage === 'ekubo_page'}
                onClick={() => handleButtonClick('ekubo_page')}
            />
            <NavItem icon={FaWallet} title="My Wallet" active={activePage === 'mywallet_page'}
                onClick={() => handleButtonClick('mywallet_page')}
            />
        </Box >
    )
}

interface MobileProps extends FlexProps {
    onOpen: () => void,
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 24 }}
            height="20"
            w="full"
            alignItems="center"
            bgColor={"blue.50"}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent="flex-start"
            {...rest}>
            <IconButton
                variant="outline"
                onClick={onOpen}
                aria-label="open menu"
                icon={<FiMenu />}
            />
            <Title logo="/assets/APY_logo.png"
                title="STARK VIEWER" />
        </Flex>
    )
}

export default SimpleSidebar;