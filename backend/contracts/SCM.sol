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

    mapping(Category => mapping(uint256 => Process)) categoryToProcessId;

    struct Process {
        Category category;
        State status;
    }

    Process[] private process;

    // should add a modifier to restrict the use of this fxn
    function setProcess(
        Category _category,
        uint256 _pid,
        State _status
    ) public {
        categoryToProcessId[_category][_pid] = Process(_category, _status);
    }

    //
    function getProcess(
        Category _category,
        uint256 _pid
    ) external view returns (Process memory) {
        return categoryToProcessId[_category][_pid];
    }
}
