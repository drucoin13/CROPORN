import { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './app.css'
import Web3 from 'web3';
import croporn_icon from './Images/Croporn.ico'
import croporn from './Images/Croporn.jpg'
import contractAbi, { contractAddress } from './contractabi';
import dividendAbi, { contractAddress2 } from './dividendabi';


import { contractAddresss, contractabii } from './constant';
import { contractAddresss2, dividendabii } from './constantd';
import WalletConnectProvider from "@walletconnect/web3-provider";
import { getByDisplayValue, queryByDisplayValue } from '@testing-library/react';

function App() {
  const [account, setAccount] = useState("Metamask")
  const [connectWallet, setConnectWallet] = useState("WalletConnect")
  const [claimrewards, setClaimRewards] = useState('0')
  const [showrewards, setShowRewards] = useState('0')
  const [balance, setBalance] = useState("0");
  const [show, setShow] = useState()
  const [showmeta, setShowMeta] = useState(true);
  const [showwallet, setShowWallet] = useState(true);
  // console.log(account);
  let contractabi = contractAbi;
  let dividendabi = dividendAbi;

  let accountAd;




  const loadWeb3 = async () => {
    setShowWallet(false)
    let isConnected = false;
    try {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        isConnected = true;
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        isConnected = true;
      } else {
        isConnected = false;
        console.log("Metamask is not installed, please install it on your browser to connect.");
      }
      if (isConnected === true) {
        let accounts = await getAccounts();
        // setAccount(accounts[0]);
        accountAd = accounts[0];
        setAccount(accountAd);
        let accountDetails = null;
        window.ethereum.on("accountsChanged", function (accounts) {
          // setAccount(accounts[0]);
          accountAd = accounts[0];
          setAccount(accountAd);
          // console.log(accounts);
        });
        getData();
        // getmarketwatch();
      }
    } catch (error) {
      console.log("Error while connecting metamask", error);
    }
  };

  const getAccounts = async () => {
    const web3 = window.web3;
    try {
      let accounts = await web3.eth.getAccounts();
      // console.log(accounts);
      return accounts;
    } catch (error) {
      console.log("Error while fetching acounts: ", error);
      return null;
    }
  };


  const getData = async () => {
    try {
      // https://bsc-dataseed.binance.org/
      const web3 = window.web3;
      // const web3 = new Web3('https://bsc-dataseed.binance.org/');
      let contract = new web3.eth.Contract(contractabii,contractAddresss);
      let contract2 = new web3.eth.Contract(dividendabii,contractAddresss2);
     
     

      // console.log("data", web3);
      // claimRewards

      console.log("blanaceof", account, accountAd);
      let blanaceof = await contract.methods.balanceOf(accountAd).call();
      console.log("blanaceof", blanaceof);
      // setClaimRewards(web3.utils.fromWei(claimRewards));
      setBalance(blanaceof / 10 ** 9);


      let claimRewards = await contract2.methods.getUnpaidEarnings(accountAd).call();
      // setclaimRewards(web3.utils.fromWei(claimRewards));
      setClaimRewards(web3.utils.fromWei(claimRewards))
      // showRewards
     // let showRewards = await contract2.methods.totalDividends(queryByDisplayValue).call();
      // setshowRewards(web3.utils.fromWei(showRewards));
      //setShowRewards(web3.utils.fromWei(showRewards))


    } catch (e) {
      console.log("data", e);
      // avoid mask music love history produce print antenna jacket need glad wait
    }
  }
  async function voteForCanidate2() {
    try {
      const web3 = window.web3;
      let contract2 = new web3.eth.Contract(dividendabii, contractAddresss2);
      console.log("response", accountAd, account);
      let accountDetails = await contract2.methods.shares()
        .send({ from: account })
        .then(async (output) => {
          console.log("response", output);
        }).catch((e) => {
          console.log("response", e);
        });
    } catch (error) {
      console.log("Error while fetching acounts: ", error);

    }

  }


  async function voteForCanidatee() {
    try {
      const web3 = window.web3;
      let contract = new web3.eth.Contract(contractabii, contractAddresss);
      console.log("response", accountAd, account);
      let accountDetails = await contract.methods.unpause()
        .send({ from: account })
        .then(async (output) => {
          console.log("response", output);
        }).catch((e) => {
          console.log("response", e);
        });
    } catch (error) {
      console.log("Error while fetching acounts: ", error);

    }

  }

  //walletConnect
  const walletconnect = async () => {
    setShowMeta(false)
    let isConnected = false;
    try {
      // setErrorState(false);
      console.log("This is   setErrorState(false);");
      // const provider = new WalletConnectProvider({
      //   infuraId: "69a5f5dfe1554a2b8ee63cfe8a003d69",
      //   // "6d2b77cc1e1d45a7a12b25035aa39ce2",
      // });

      const provider = new WalletConnectProvider({
        chainId: 56,
        rpc: {
          56: "https://bsc-dataseed.binance.org",
        }
      });

      await provider.enable();

      console.log("walletConnectProvider", provider);

      if (provider.connected) {
        console.log("walletConnectProvider", provider.accounts[0]);
      }
      // const provider = new WalletConnectProvider({
      //   rpc: {
      //     56: "https://bscscan.com/",
      //     // 97: "https://testnet.bscscan.com/",
      //   },
      // });

      //  Enable session (triggers QR Code modal)
      // await provider.enable();

      if (provider) {
        window.web3 = new Web3(provider);
        isConnected = true;
      } else {
        isConnected = false;
        // setErrorState(true);
        console.log("This is setErrorState(true)");
        // let options = {};
        // options = {
        //   place: "tr",
        //   message: "wallet connect is not connected",
        //   type: "primary",
        //   icon: "",
        //   autoDismiss: 7,
        // };
        // notificationAlertRef.current.notificationAlert(options);
        // // "Metamask is not installed, please install it on your browser to connect.",
      }
      if (isConnected === true) {
        const web3 = window.web3;
        let accounts = await web3.eth.getAccounts();
        web3.eth.net.getId().then((netId) => {
          console.log("(accounts[0], 2)", (accounts), netId)

          setAccount(accounts[0])
          setConnectWallet(accounts[0]);
          accountAd = accounts[0];

          console.log("blanaceof", account, accountAd);

          switch (netId) {
            case 1:
              // getData(accounts[0], 2);
              console.log("(accounts[0], 2)", (accounts[0], 2))
              // console.log("This is mainnet");
              break;
            case 2:
              console.log("This is the deprecated Morden test network.");
              break;
            case 3:
              console.log("This is the ropsten test network.");
              break;
            default:
              console.log("(accounts[0], 2)", (accounts[0], 1))
              // getData(accounts[0], 1);
              console.log("This is an unknown network.");
          }
          getData();
        });
        // this.props.dispatch(login(accounts[0]));

        window.ethereum.on("accountsChanged", function (accounts) {
          // this.props.dispatch(login(accounts[0]));
          web3.eth.net.getId().then((netId) => {
            switch (netId) {
              case 1:
                // getData(accounts[0], 2);
                console.log("This is mainnet");
                break;
              case 2:
                console.log("This is the deprecated Morden test network.");
                break;
              case 3:
                console.log("This is the ropsten test network.");
                break;
              default:
                // getData(accounts[0], 1);
                console.log("This is an unknown network.");
            }
          });
        });
      }
    } catch (error) {
      console.log(error);
    }
    // setModal(false)
    console.log("setErrorState(true)");
  };

  useEffect(() => {
    setInterval(() => {
      // getData();
    }, 1000);
  }, []);

  return (
    <>
      <div className="Main_div">
        <div className="container">
          <div className="text-center pt-3 logoMaindiv d-flex justify-content-between">
            <img className=" " src={croporn} alt="logo" />
            {/* <button onClick={loadWeb3} className="btn text-truncate btn-light fw-bolder btnWidth   p-2 fs-5">{account}</button> */}
            {show ?
              <div >
                {showmeta && <button onClick={loadWeb3} className="btn mt-3  mt-md-0 text-truncate mar border border-left-4 btn-light fw-bolder btnWidth   p-2 fs-5">{account}</button>}
                {showwallet && <button onClick={walletconnect} className="btn  mt-3  mt-md-0 marginLeft1  text-truncate btn-light fw-bolder btnWidth   p-2 fs-5">{connectWallet}</button>}
              </div>
              :
              <div>
                <button onClick={() => setShow(true)} className="btn text-truncate btn-light fw-bolder btnWidth   p-2 fs-5">Connect</button>
              </div>
            }
          </div>
          <div className="row d-flex justify-content-center pt-5">
            <div className="col-12 col-lg-6">

              <div className="card  mt-4 mt-md-4">
                <div className="card-body text-center">
                  <div className="d-flex flex-column justify-content-center mt-4">
                    <h1 className=' fw-bolder'>Your CROPORN Balance</h1>
                    <h2 className="text-truncate marginLeft fw-bold">{balance}</h2>
                  </div>
                  <div className="d-flex flex-column justify-content-center mt-4">
                    <h1 className=' fw-bolder'>Upcoming USDC Rewards</h1>
                    <h2 className="text-truncate marginLeft fw-bold">{claimrewards}</h2>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <div className=" mt-5 logoMaindiv2 pb-2 d-flex justify-content-center align-items-center">
            <img src={croporn_icon} alt="logo" />
            <a href="https://t.me/CroPornoffi"target="_blank" rel="noopener noreferrer"><i className="fab fs-3 marginLeft fa-telegram-plane"></i></a>
            <a href="https://twitter.com/CroPorn_Off"target="_blank" rel="noopener noreferrer"><i className="fab fs-3 marginLeft fa-twitter"></i></a>
            <a href="https://www.croporn.cam"target="_blank" rel="noopener noreferrer"><i className="fab fs-3 marginLeft fa fa-link"></i></a>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
