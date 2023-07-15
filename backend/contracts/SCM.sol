// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

contract SCM {
    enum State {
        initialized,
        onGoing,
        delivered
    }

    enum Category {
        suppliers,
        manufacturers,
        logistics,
        wholesalers,
        retailers,
        warehouseProviders,
        serviceProviders,
        finacialInstitutions,
        regulatoryBodies,
        shareHolders
    }

    mapping(Category => mapping(uint256 => Process)) categoryToProcess;
    uint256 private processId = 0;
    struct Process {
        string processName;
        string nameOfCreator;
        address addressOfCreator;
        uint256 pid;
        uint256 processTime;
        Category category;
        State status;
    }

    Process[] private process;

    modifier onlyAuthorized() {
        require(
            address(msg.sender).balance >= 0.1 ether,
            "You are not eligible to participate, minimum balance should be 1 ether"
        );
        _;
    }

    modifier isSupplier(Category _category) {
        require(uint256(_category) == 0, "Invalid Category");
        _;
    }

    modifier validProcessId(uint256 _processId) {
        require(_processId < processId, "Invalid process Id");
        _;
    }

    // should add a modifier to restrict the use of this fxn
    function setProcess(
        string calldata _processName,
        string calldata _nameOfCreator,
        uint256 _pid,
        Category _category,
        State _status,
        bool _update
    ) public onlyAuthorized isSupplier(_category) {
        uint256 _time = block.timestamp;
        address _addressOfCreator = msg.sender;
        if (_update == true) {
            // removing the zero indexing
            categoryToProcess[_category][_pid] = Process(
                _processName,
                _nameOfCreator,
                _addressOfCreator,
                _pid,
                _time,
                _category,
                _status
            );
        } else {
            categoryToProcess[_category][processId] = Process(
                _processName,
                _nameOfCreator,
                _addressOfCreator,
                processId,
                _time,
                _category,
                _status
            );

            processId++;
        }
    }

    // return the details of the process based on the id
    function getProcess(
        Category _category,
        uint256 _processId
    ) external view validProcessId(_processId) returns (Process memory) {
        return categoryToProcess[_category][_processId];
    }

    // return the no of processes created so far
    function getNoOfProcessIds() public view onlyAuthorized returns (uint256) {
        return processId;
    }
}
