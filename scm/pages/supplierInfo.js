import { ChakraProvider, border } from "@chakra-ui/react";
import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import Web3Modal from "web3modal";
import { providers, Contract } from "ethers";
import { Caramel } from "next/font/google";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "@/constants";

export default function Home2() {
  // * State variables
  const web3modalRef = useRef();
  const [walletConnected, setWalletConnected] = useState(false);
  const [loadingScreen, setLoadingScreen] = useState(false);
  // * Map index to a category
  const indexToCategory = new Map();
  indexToCategory.set(0, "suppliers");
  indexToCategory.set(1, "manufacturers");
  indexToCategory.set(2, "logistics");
  indexToCategory.set(3, "wholesalers");
  indexToCategory.set(4, "retailers");
  indexToCategory.set(5, "warehouseProviders");
  indexToCategory.set(6, "serviceProviders");
  indexToCategory.set(7, "finacialInstitutions");
  indexToCategory.set(8, "regulatoryBodies");
  indexToCategory.set(9, "shareHolders");
  // * Map  index to status
  const indexToStatus = new Map();
  indexToStatus.set(0, "initialized");
  indexToStatus.set(1, "onGoing");
  indexToStatus.set(2, "delivered");

  // * Get a provider or signer object
  const getProviderOrSigner = async (Signer = false) => {
    try {
      const provider = await web3modalRef.current.connect();
      const web3Provider = new providers.Web3Provider(provider);

      // * different chainIds for different blockchains
      const { chainId } = await web3Provider.getNetwork();
      if (chainId !== 11155111) {
        window.alert("please change to sepolia testnet");
      }

      if (Signer) {
        const signer = web3Provider.getSigner();
        return signer;
      }
      return web3Provider;
    } catch (E) {
      console.error(E);
    }
  };

  // * Get a contract instance
  const getContractInstance = (providerOrSigner) => {
    return new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, providerOrSigner);
  };

  // * Connect to wallet whenever there occurs a state change in "connectWallet"
  useEffect(() => {
    if (!walletConnected) {
      web3modalRef.current = new Web3Modal({
        network: 11155111,
        providerOptions: {},
        disableInjectedProvider: false,
      });
      connectWallet();
    }
  }, [walletConnected]);

  // * Connect wallet (NOTE: pls use web3modal version: 1.9.7)
  const connectWallet = async () => {
    try {
      await getProviderOrSigner();
      setWalletConnected(true);
    } catch (E) {
      console.error(E);
    }
  };

  // * Connect to the contract and invoke the setter method
  const setData = async (_category, _pid, _status) => {
    try {
      const signer = await getProviderOrSigner(true);
      const contract = getContractInstance(signer);

      const trx = await contract.setProcess(_category, _pid, _status);
      setLoadingScreen(true);
      await trx.wait();
      setLoadingScreen(false);
    } catch (E) {
      console.error(E);
    }
  };

  // * Connect to the contract and invoke the getter method
  const getData = async (_category, _pid) => {
    try {
      const provider = await getProviderOrSigner();
      const contract = getContractInstance(provider);

      const trx = await contract.getProcess(_category, _pid);

      const parsedTrx = {
        // * Category holds now for (ex) Supplier
        Category: indexToCategory.get(trx.category),
        Status: indexToStatus.get(trx.status),
      };

      return parsedTrx;
    } catch (E) {
      console.error(E);
    }
  };

  // * CHAKRA-UI: Stepper UI
  const steps = [
    { title: "Initialized", description: "Contact Info" },
    { title: "On going", description: "Date & Time" },
    { title: "Delivered", description: "Select Rooms" },
  ];

  // * Return a process stepper
  const Example = () => {
    const [activeStep, setActiveStep] = useState(null);

    // const { activeStep } = useSteps({
    //   index: 1,
    //   count: steps.length,
    // });

    useEffect(() => {
      const fetchData = async () => {
        try {
          const parsedTrx = await getData(0, 1);
          const status =
            parsedTrx.Status === "initialized"
              ? 0
              : parsedTrx.Status === "onGoing"
              ? 1
              : 2;
          setActiveStep(status + 1);
        } catch (E) {
          console.error(E);
        }
      };
      fetchData();
    }, []);

    return (
      <Stepper index={activeStep} colorScheme="yellow" size="md">
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    );
  };

  return (
    <>
      <div>
        <button onClick={connectWallet}>Connect</button>
        <hr />

        <ChakraProvider>
          <Example />
        </ChakraProvider>
      </div>
    </>
  );
}
