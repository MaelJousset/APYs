import React, { useState } from "react"
import {
  Box,
  ChakraProvider,
  Flex,
  theme,
} from "@chakra-ui/react"

import Sidebar from "./components/Sidebar/Sidebar"
import DashboardPage from "./pages/DashboardPage";
import MySwapPage from "./pages/MySwapPage";
import JediSwapPage from "./pages/JediSwapPage";
import EkuboPage from "./pages/EkuboSwap";
import MyWalletPage from "./pages/MyWalletPage";
import PageHeader from "./components/Header/PageHeader";

function App() {
  const [activePage, setActivePage] = useState('dashboard_page'); // Initialize activePage with a default value

  return (
    <ChakraProvider theme={theme}>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        fontFamily={"Plus Jakarta Sans, sans-serif"}
        width="full"
      >
        <Sidebar setCurrentPage={setActivePage} />
        <Flex
          flexDirection={"column"}
          width={"full"}
        >
          {activePage === 'dashboard_page' && <PageHeader page_name={"Dashboard"} />}
          {activePage === 'myswap_page' && <PageHeader page_name={"MySwap"} />}
          {activePage === 'jediswap_page' && <PageHeader page_name={"JediSwap"} />}
          {activePage === 'ekubo_page' && <PageHeader page_name={"Ekubo"} />}
          {activePage === 'mywallet_page' && <PageHeader page_name={"My Wallet"} />}

          {activePage === 'dashboard_page' && <DashboardPage />}
          {activePage === 'myswap_page' && <MySwapPage />}
          {activePage === 'jediswap_page' && <JediSwapPage />}
          {activePage === 'ekubo_page' && <EkuboPage />}
          {activePage === 'mywallet_page' && <MyWalletPage />}
        </Flex>

      </Flex>
    </ChakraProvider>
  )
}

export default App;