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


function App() {
  const [activePage, setActivePage] = useState('dashboard_page'); // Initialize activePage with a default value

  return (
    <ChakraProvider theme={theme}>
      <Flex
        /*flexDirection={{ base: "column", md: "row" }}*/
        fontFamily={"Plus Jakarta Sans, sans-serif"}
      >
        <Sidebar setCurrentPage={setActivePage} />
        {activePage === 'dashboard_page' && <DashboardPage />}
        {activePage === 'myswap_page' && <MySwapPage />}
        {activePage === 'jediswap_page' && <JediSwapPage />}
        {activePage === 'ekubo_page' && <EkuboPage />}
        {activePage === 'mywallet_page' && <MyWalletPage />}
      </Flex>
    </ChakraProvider>
  )
}

export default App;