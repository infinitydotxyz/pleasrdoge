import * as ethers from 'ethers';

export const initEthers = async () => {
  try {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  } catch (err) {
    console.log(err);
    return;
  }
  const ethersProvider = new ethers.providers.Web3Provider(window.ethereum);

  ethersProvider.on('pending', (tx) => {
    // Emitted when any new pending transaction is noticed
    console.log('- ethersProvider - PENDING:', tx);
  });

  ethersProvider.on('error', (tx) => {
    // Emitted when any error occurs
    console.log('- ethersProvider - ERROR:', tx);
  });

  return ethersProvider;
};

export const getAccount = async () => {
  try {
    const res = await initEthers();

    if (res && res.getSigner) {
      // await saveAuthHeaders(await res.getSigner().getAddress());
      // router.push('/explore');
    } else {
      console.log('failed to get initEthers');
      // showAppError('Failed to connect');
    }

    const ethersProvider = new ethers.providers.Web3Provider(window.ethereum);
    if (!ethersProvider) {
      return '';
    }
    return await ethersProvider.getSigner().getAddress();
  } catch (err) {
    console.error(err);
    return '';
  }
};

export const getChainId = async () => {
  try {
    const chainIdLoc = await window.ethereum.request({ method: 'eth_chainId' });

    if (chainIdLoc === '0x1') {
      // eth main
      return '1';
    } else if (chainIdLoc === '0x89') {
      // polygon
      return '137';
    }
  } catch (err) {
    console.error('eth_chainId failed', err);
  }
  return '';
};

export const getAddressBalance = async (address) => {
  try {
    const ethersProvider = new ethers.providers.Web3Provider(window.ethereum);
    const balance = await ethersProvider.getBalance(address);
    const ret = ethers.utils.formatEther(balance);
    return ret;
  } catch (err) {
    console.error('ERROR:', err);
  }
  return null;
};
