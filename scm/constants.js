export const CONTRACT_ADDRESS = "0x6fF088cB35639c194064f0532868d19899Bdb535";

export const CONTRACT_ABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_processName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_nameOfCreator",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "enum SCM.Category",
        name: "_category",
        type: "uint8",
      },
      {
        internalType: "enum SCM.State",
        name: "_status",
        type: "uint8",
      },
      {
        internalType: "bool",
        name: "_update",
        type: "bool",
      },
    ],
    name: "setProcess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getNoOfProcessIds",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
        name: "_processId",
        type: "uint256",
      },
    ],
    name: "getProcess",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "processName",
            type: "string",
          },
          {
            internalType: "string",
            name: "nameOfCreator",
            type: "string",
          },
          {
            internalType: "address",
            name: "addressOfCreator",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "pid",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "processTime",
            type: "uint256",
          },
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
