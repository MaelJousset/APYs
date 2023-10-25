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
    Center,
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

    const [activePage, setActivePage] = useState('Dashboard');

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
                <CloseButton
                    display={{ base: 'flex', md: 'none' }}
                    onClick={onClose}
                    color={"blue.700"}
                    fontWeight='semibold'
                    fontSize={"sm"}
                />
            </Flex>
            <Center>
                <Divider w="80%" />
            </Center>
            <NavItem icon={IoIosHome} title="Dashboard" active={activePage === 'Dashboard'}
                onClick={() => handleButtonClick('Dashboard')}
            />
            <NavImageItem image={"/assets/myswap.png"} title="MySwap" active={activePage === 'MySwap'}
                onClick={() => handleButtonClick('MySwap')}
            />
            <NavImageItem image={"/assets/jediswap.jpg"} title="JediSwap" active={activePage === 'JediSwap'}
                onClick={() => handleButtonClick('JediSwap')}
            />
            <NavImageItem image={"/assets/ekubo.png"} title="Ekubo" active={activePage === 'Ekubo'}
                onClick={() => handleButtonClick('Ekubo')}
            />
            <NavItem icon={FaWallet} title="My Wallet" active={activePage === 'My Wallet'}
                onClick={() => handleButtonClick('My Wallet')}
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
            //borderBottomWidth="1px"
            //borderBottomColor={useColorModeValue('blue.200', 'blue.700')}
            paddingRight={8}
            justifyContent="space-between"
            //gap={6}
            {...rest}>

            <Title logo="/assets/APY_logo.png"
                title="STARK VIEWER" />
            <IconButton
                variant="unstyled"
                onClick={onOpen}
                aria-label="open menu"
                icon={<FiMenu size="xs" />}
                color={"blue.700"}
                size="xs"
            />
        </Flex>
    )
}

export default SimpleSidebar;