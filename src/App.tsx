import React, { useState } from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"

import Sidebar from "./components/Sidebar/Sidebar"


function App() {
  const [activePage, setActivePage] = useState('dashboard_page'); // Initialize activePage with a default value

  return (
    <ChakraProvider theme={theme}>
      <Sidebar />
      {/*{activePage === 'dashboard_page' && <DashboardPage />}
      {activePage === 'myswap_page' && <MySwapPage />}
      {activePage === 'jediswap_page' && <JediPage />}
      {activePage === 'ekubo_page' && <EkuboPage />}
  {activePage === 'mywallet_page' && <MyWalletPage />}*/}
    </ChakraProvider>
  )
}

export default App;