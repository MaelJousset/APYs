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
  const [activePage, setActivePage] = useState('Dashboard'); // Initialize activePage with a default value

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
          <PageHeader active_page={activePage} />

          {activePage === 'Dashboard' && <DashboardPage />}
          {activePage === 'MySwap' && <MySwapPage />}
          {activePage === 'JediSwap' && <JediSwapPage />}
          {activePage === 'Ekubo' && <EkuboPage />}
          {activePage === 'My Wallet' && <MyWalletPage />}
        </Flex>

      </Flex>
    </ChakraProvider>
  )
}

export default App;