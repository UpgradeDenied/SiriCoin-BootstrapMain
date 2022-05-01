const isMetaMaskInstalled = () => {
	const ethereum = window.ethereum;
	return Boolean(ethereum && ethereum.isMetaMask);
};

const addToMetamask = () => {
	if (isMetaMaskInstalled()) {
		ethereum.request({
			method: 'wallet_addEthereumChain',
			params:
			[{
				chainId: '0x138d',
				chainName: 'SiriCoin',
				nativeCurrency:
				{
					name: 'SiriCoin',
					symbol: 'SC',
					decimals: 18
				},
				rpcUrls: ['https://node-1.siricoin.tech:5006/web3'],
				blockExplorerUrls: null,
			}]
		}).catch((error) => {
			console.log(error)
			let errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
			errorModal.show();
		})
	}
}
