import { Component, State, h } from '@stencil/core';
import Web3 from 'web3';

@Component({
  tag: 'web3-dashboard',
  styleUrl: 'web3-dashboard.css',
  shadow: true
})
export class Web3Dashboard {
  @State() account: string = "Not connected";
  @State() balance: string = "0 ETH";

  async connectWallet() {
    if ((window as any).ethereum) {
      const web3 = new Web3((window as any).ethereum);
      await (window as any).ethereum.enable();
      const accounts = await web3.eth.getAccounts();
      this.account = accounts[0];
      this.getBalance(web3, this.account);
    } else {
      alert("Please install MetaMask to connect your wallet.");
    }
  }

  async getBalance(web3: Web3, account: string) {
    const balance = await web3.eth.getBalance(account);
    this.balance = web3.utils.fromWei(balance, "ether") + " ETH";
  }

  render() {
    return (
      <div class="web3-box">
        <h2>AI-Powered Web3 Dashboard</h2>
        <button onClick={() => this.connectWallet()}>Connect Wallet</button>
        <p>Account: {this.account}</p>
        <p>Balance: {this.balance}</p>
      </div>
    );
  }
}
