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

export default function Home2() {
  // * State variables
  const web3modalRef = useRef();
  const [walletConnected, setWalletConnected] = useState(false);

  // * Get a provider or signer object
  const getProviderOrSigner = async (Signer = false) => {
    const provider = await web3modalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    // * different chainIds for different blockchains
    const chainId = await web3Provider.getNetwork();

    if (Signer) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };

  // * Get a contract instance
  const getContractInstance = (providerOrSigner) => {
    return new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, providerOrSigner);
  };

  // * Connect to wallet whenever there occurs a state change in "connectWallet"
  useEffect(() => {
    if (!walletConnected) {
      web3modalRef.current = new Web3Modal({
        network: "",
        providerOptions: {},
        disableInjectedProvider: false,
      });
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

  // *
  const steps = [
    { title: "Initialized", description: "Contact Info" },
    { title: "On going", description: "Date & Time" },
    { title: "Delivered", description: "Select Rooms" },
  ];

  // * Return a process stepper
  const Example = () => {
    const { activeStep } = useSteps({
      index: 2,
      count: steps.length,
    });

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

          <Example />
        </ChakraProvider>
      </div>
    </>
  );
}
