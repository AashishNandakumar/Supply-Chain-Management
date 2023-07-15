import { ChakraProvider, Select, border } from "@chakra-ui/react";
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
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "@/constants";
import styles from "../styles/SupplierInfoIllustration.module.css";
import Head from "next/head";

export default function Home2() {
  // * State variables
  const web3modalRef = useRef(null);
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
  // * Save the parsed transactions
  const [parsedTrxs, setParsedTrxs] = useState([]); //!
  // * Save which step our process is in
  const [activeStep, setActiveStep] = useState(null);
  // * Record the selected value of the "select" element
  const [selectedValue, setSelectedValue] = useState("");
  // * Choose whether to display status change options or not
  const [displayStatusChangeOptions, setdisplayStatusChangeOptions] =
    useState(false);
  // *
  const [ContributeRequested, setContributeRequested] = useState(false);
  // *
  const [processName, setProcessName] = useState("");
  const [nameOfCreator, setNameOfCreator] = useState("");
  const [update, setUpdate] = useState(false);
  const [status, setStatus] = useState(0);
  // *
  const [processes, setProcesses] = useState([]);

  useEffect(() => {
    const fetchProcesses = async () => {
      const fetchedProcesses = await getAllProcesses();
      if (!Array.isArray(fetchedProcesses)) console.log("Not an array!");
      else setProcesses([...fetchedProcesses]);
    };
    fetchProcesses();
  }, []);

  useEffect(() => {
    console.log(processes);
  }, [processes]);

  // *
  const [pidNo, setPidNo] = useState(0);
  const [GenerateDescriptionSelected, setGenerateDescriptionSelected] =
    useState(false);
  //
  //
  //
  // * Get a provider or signer object
  const getProviderOrSigner = async (Signer = false) => {
    try {
      const provider =
        web3modalRef.current && (await web3modalRef.current.connect());
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const signer = await getProviderOrSigner(true);
      const contract = getContractInstance(signer);

      const trx = await contract.setProcess(
        processName,
        nameOfCreator,
        pidNo,
        0,
        status,
        update
      );
      setLoadingScreen(true);
      await trx.wait();
      setLoadingScreen(false);
    } catch (error) {
      console.error(error);
    }
  };

  // * Connect to the contract and invoke the getter method
  const getData = async (_category, _pid) => {
    try {
      const provider = await getProviderOrSigner();
      const contract = getContractInstance(provider);

      const trx = await contract.getProcess(_category, _pid);

      const parsedTrx = {
        processName: trx.processName,
        nameOfCreator: trx.nameOfCreator,
        addressOfCreator: trx.addressOfCreator,
        pid: trx.pid,
        processTime: new Date(parseInt(trx.processTime.toString()) * 1000)
          .toLocaleString,
        // * Category holds now for (ex) Supplier
        Category: indexToCategory.get(trx.category),
        Status: indexToStatus.get(trx.status),
      };
      console.log(parsedTrx);
      return parsedTrx;
    } catch (E) {
      console.error(E);
    }
  };
  // *
  const getAllProcesses = async () => {
    try {
      const provider = await getProviderOrSigner();
      const contract = getContractInstance(provider);

      // returning a bignumber
      const noOfProcessIdsBigNumber = await contract.getNoOfProcessIds();
      // convert to an integer
      const noOfProcessIds = noOfProcessIdsBigNumber.toNumber();
      const processes1 = [];
      console.log(noOfProcessIds);
      for (let i = 0; i < noOfProcessIds; i++) {
        const process = await contract.getProcess(0, i);
        console.log(process);
        const parsedProcess = {
          processName: process.processName,
          nameOfCreator: process.nameOfCreator,
          addressOfCreator: process.addressOfCreator,
          pid: process.pid.toNumber(),
          processTime: new Date(
            parseInt(process.processTime.toString()) * 1000
          ).toLocaleString(),
          Category: indexToCategory.get(process.category),
          Status: indexToStatus.get(process.status),
        };
        console.log(parsedProcess);
        processes1.push(parsedProcess);
      }
      // console.log(processes1);
      return processes1;
    } catch (error) {
      console.error(error);
    }
  };

  // * CHAKRA-UI: Stepper UI
  const steps = [
    { title: "Initialized", description: "Initiated successfully" },
    { title: "In Process", description: "Currently in progress" },
    { title: "Delivered", description: "Completed and delivered" },
  ];

  // * Return a process stepper

  const Example = ({ processes }) => {
    const [parsedTrxs, setParsedTrxs] = useState([]);
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
      const fetchData = async (processId) => {
        try {
          const parsedTrx = await getData(0, processId);
          setParsedTrxs(parsedTrx);
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

      // Fetch data for each process
      processes.forEach((process) => {
        fetchData(process.pid);
      });
    }, [processes]);

    return (
      <Stepper index={activeStep} colorScheme="red" size="lg">
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

  const Contribute = () => {
    setContributeRequested(true);
  };

  const GenerateDescription = () => {
    setGenerateDescriptionSelected(true);
  };

  return (
    <section className={styles.page}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div>
        <section className={styles.suppliersHeaderSection}>
          <h1>Welcome to Suppliers Market</h1>
          <h2>Join us in this amazing decentralized world of suppliers!</h2>
          <h2>Start Contributing today.</h2>
          {
            <div>
              {ContributeRequested ? (
                <section id={styles.ContributeSection}>
                  <form
                    onSubmit={handleSubmit}
                    className={styles.ContributeForm}
                  >
                    <div>
                      <input
                        placeholder="Description"
                        type="text"
                        value={processName}
                        onChange={(e) => setProcessName(e.target.value)}
                      />

                      <input
                        placeholder="Name of Creator"
                        type="text"
                        value={nameOfCreator}
                        onChange={(e) => setNameOfCreator(e.target.value)}
                      />
                    </div>
                    <div>
                      <input
                        placeholder="Pid"
                        type="number"
                        value={pidNo}
                        onChange={(e) => setPidNo(e.target.value)}
                      />

                      <input
                        placeholder="Update(true/false)"
                        type="text"
                        value={update}
                        onChange={(e) => setUpdate(e.target.value)}
                      />
                    </div>
                    <div>
                      <input
                        placeholder="Status(0,1,2)"
                        type="number"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                      />
                    </div>

                    <button id={styles.StepperBtn1} type="submit">
                      Submit
                    </button>
                  </form>
                </section>
              ) : (
                <button id={styles.StepperBtn2} onClick={Contribute}>
                  Contribute
                </button>
              )}
            </div>
          }
        </section>
        <ChakraProvider>
          <section id={styles.stepperSection}>
            {processes.map((process) => (
              <div key={process.pid} id={styles.stepperSectionDiv}>
                <h1>Process Id - {process.pid}</h1>
                <Example processes={[process]} />
                <div>
                  {GenerateDescriptionSelected ? (
                    <section className={styles.GenerateDescriptionSection}>
                      <div>
                        <p>Category:&emsp; {process.Category}</p>
                        <p>Pid:&emsp; {process.pid}</p>

                        <p>Status:&emsp; {process.Status}</p>
                      </div>
                      <div>
                        <p>Name of Creator:&emsp; {process.nameOfCreator}</p>
                        <p>Description:&emsp; {process.processName}</p>
                      </div>
                      <div>
                        <p>
                          Transaction address:&emsp; {process.addressOfCreator}
                        </p>
                      </div>

                      <div>
                        <p>Time mark:&emsp; {process.processTime}</p>
                      </div>
                    </section>
                  ) : (
                    <div id={styles.stepperSectionDivBtn}>
                      <button onClick={() => GenerateDescription(process)}>
                        More details
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </section>
        </ChakraProvider>
      </div>
    </section>
  );
}
