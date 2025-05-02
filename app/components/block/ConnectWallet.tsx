"use client";
import Image from "next/image";
import Link from "next/link";
import { useMetaMask } from "metamask-react";
import { MouseEvent } from "react";

export default function ConnectWallet() {
  const { status, connect, account, chainId, ethereum } = useMetaMask();

  let nftStatus;

  if (status === "initializing")
    nftStatus = "Synchronisation with MetaMask ongoing...";

  if (status === "unavailable") {
    nftStatus = "MetaMask not available";
  }

  if (status === "notConnected") {
    nftStatus = <a onClick={connect}>Connect to MetaMask</a>;
  }

  if (status === "connecting") {
    nftStatus = "Connecting...";
  }

  if (status === "connected") {
    nftStatus = "MetaMask Connected";
  }

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    // Add additional logic if needed
  };

  return (
    <>
      <div className="tf-connect-wallet tf-section">
        <div className="ibthemes-container">
          <div className="row">
            <div className="col-12">
              <h2 className="tf-title-heading ct style-2 mg-bt-12">
                Coming Soon!
              </h2>
              <h5 className="sub-title ct style-1 pad-400">
                We’re working hard to bring this page to you. Stay tuned for
                updates!
              </h5>
            </div>
            <div className="col-md-12">
              <div className="sc-box-icon-inner style-2">
                <div className="sc-box-icon">
                  <div className="img">
                    <Image
                      src="/assets/images/icon/icon-1.png"
                      alt="Image"
                      height={50}
                      width={50}
                    />
                  </div>
                  <h4 className="heading">{nftStatus}</h4>
                  <p className="content">
                    Connect with your NFT status to view your latest activities
                    and interactions.
                  </p>
                </div>
                <div className="sc-box-icon">
                  <div className="img">
                    <Image
                      src="/assets/images/icon/icon-6.png"
                      alt="Image"
                      height={50}
                      width={50}
                    />
                  </div>
                  <h4 className="heading">
                    <Link href="/login" onClick={handleClick}>
                      Bitski
                    </Link>
                  </h4>
                  <p className="content">
                    Bitski allows you to securely manage your NFTs and crypto
                    assets in a decentralized way.
                  </p>
                </div>
                <div className="sc-box-icon">
                  <div className="img">
                    <Image
                      src="/assets/images/icon/Vector.png"
                      alt="Image"
                      height={50}
                      width={50}
                    />
                  </div>
                  <h4 className="heading">
                    <Link href="/login" onClick={handleClick}>
                      Fortmatic
                    </Link>
                  </h4>
                  <p className="content">
                    Fortmatic provides an easy-to-use wallet solution for
                    managing your digital assets and NFTs.
                  </p>
                </div>
                <div className="sc-box-icon">
                  <div className="img">
                    <Image
                      src="/assets/images/icon/WalletConnect.png"
                      alt="Image"
                      height={50}
                      width={50}
                    />
                  </div>
                  <h4 className="heading">
                    <Link href="/login" onClick={handleClick}>
                      Wallet Connect
                    </Link>
                  </h4>
                  <p className="content">
                    Wallet Connect lets you seamlessly connect your mobile
                    wallet to various decentralized apps.
                  </p>
                </div>
                <div className="sc-box-icon mgbt-0 mgbt-30">
                  <div className="img">
                    <Image
                      src="/assets/images/icon/icon-2.png"
                      alt="Image"
                      height={50}
                      width={50}
                    />
                  </div>
                  <h4 className="heading">
                    <Link href="/login" onClick={handleClick}>
                      Coinbase Wallet
                    </Link>
                  </h4>
                  <p className="content">
                    Coinbase Wallet is a secure, user-friendly way to manage
                    your crypto assets and NFTs.
                  </p>
                </div>
                <div className="sc-box-icon mgbt-0 mgbt-30">
                  <div className="img">
                    <Image
                      src="/assets/images/icon/icon-3.png"
                      alt="Image"
                      height={50}
                      width={50}
                    />
                  </div>
                  <h4 className="heading">
                    <Link href="/login" onClick={handleClick}>
                      Authereum
                    </Link>
                  </h4>
                  <p className="content">
                    Authereum offers a simple, yet secure solution for managing
                    your NFTs and interacting with blockchain applications.
                  </p>
                </div>
                <div className="sc-box-icon mgbt-0">
                  <div className="img">
                    <Image
                      src="/assets/images/icon/icon-4.png"
                      alt="Image"
                      height={50}
                      width={50}
                    />
                  </div>
                  <h4 className="heading">
                    <Link href="/login" onClick={handleClick}>
                      Kaikas
                    </Link>
                  </h4>
                  <p className="content">
                    Kaikas wallet enables you to easily interact with the Klaytn
                    blockchain and manage your NFTs.
                  </p>
                </div>
                <div className="sc-box-icon">
                  <div className="img">
                    <Image
                      src="/assets/images/icon/icon-5.png"
                      alt="Image"
                      height={50}
                      width={50}
                    />
                  </div>
                  <h4 className="heading">
                    <Link href="/login" onClick={handleClick}>
                      Torus
                    </Link>
                  </h4>
                  <p className="content">
                    Torus is a seamless wallet provider, allowing users to
                    access decentralized applications with ease.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
