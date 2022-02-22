export const contractAddresss2 = "0x6Ff121f47b67bb19Aa97C4d86128d22209b46B2d";
export const dividendabii = [{
	"inputs": [{
		"internalType": "address",
		"name": "_router",
		"type": "address"
	}],
	"stateMutability": "nonpayable",
	"type": "constructor"
}, {
	"inputs": [],
	"name": "claimDividend",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"name": "deposit",
	"outputs": [],
	"stateMutability": "payable",
	"type": "function"
}, {
	"inputs": [],
	"name": "dividendsPerShare",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "dividendsPerShareAccuracyFactor",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "shareholder",
		"type": "address"
	}],
	"name": "getUnpaidEarnings",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "minDistribution",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "minPeriod",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "gas",
		"type": "uint256"
	}],
	"name": "process",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "newMinPeriod",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "newMinDistribution",
		"type": "uint256"
	}],
	"name": "setDistributionCriteria",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "shareholder",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}],
	"name": "setShare",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "shares",
	"outputs": [{
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "totalExcluded",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "totalRealised",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "totalDistributed",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "totalDividends",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "totalShares",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}]