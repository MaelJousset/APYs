import React, { Suspense, lazy, useState, Component, ReactNode } from "react"
import {
  ChakraProvider,
  Flex,
  theme,
  Spinner,
} from "@chakra-ui/react"

import Sidebar from "./components/Sidebar/Sidebar"
import DashboardPage from "./pages/DashboardPage";
// import MySwapPage from "./pages/MySwapPage";
// import JediSwapPage from "./pages/JediSwapPage";
// import EkuboPage from "./pages/EkuboPage";
// import MyWalletPage from "./pages/MyWalletPage";
import PageHeader from "./components/Header/PageHeader";

import PageLoader from "./components/PageLoader"


const MySwapPage = lazy(() => import('./pages/MySwapPage'))
const JediSwapPage = lazy(() => import('./pages/JediSwapPage'))
const EkuboPage = lazy(() => import('./pages/EkuboPage'))
const MyWalletPage = lazy(() => import('./pages/MyWalletPage'))

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <p>Loading failed! Please reload.</p>;
    }

    return this.props.children;
  }
}

const renderLoader = () => <PageLoader />;

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

          <ErrorBoundary>
            <Suspense fallback={renderLoader()}>
              {activePage === 'MySwap' && <MySwapPage />}
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={renderLoader()}>
              {activePage === 'JediSwap' && <JediSwapPage />}
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={renderLoader()}>
              {activePage === 'Ekubo' && <EkuboPage />}
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={renderLoader()}>
              {activePage === 'My Wallet' && <MyWalletPage />}
            </Suspense>
          </ErrorBoundary>
        </Flex>

      </Flex>
    </ChakraProvider>
  )
}

export default App;