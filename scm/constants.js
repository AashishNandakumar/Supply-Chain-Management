export const CONTRACT_ADDRESS = "0x987d957b63D05761618478644EC6ede1D84DfC6C";

export const CONTRACT_ABI = [
  {
    inputs: [
      {
        internalType: "enum SCM.Category",
        name: "_category",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "enum SCM.State",
        name: "_status",
        type: "uint8",
      },
    ],
    name: "setProcess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum SCM.Category",
        name: "_category",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "getProcess",
    outputs: [
      {
        components: [
          {
            internalType: "enum SCM.Category",
            name: "category",
            type: "uint8",
          },
          {
            internalType: "enum SCM.State",
            name: "status",
            type: "uint8",
          },
        ],
        internalType: "struct SCM.Process",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
