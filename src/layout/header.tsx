import React from "react";
import { toast } from "react-toastify";
import { useWallet } from "@solana/wallet-adapter-react";

export default function Header() {
  const { select, wallets, publicKey, disconnect } = useWallet();

  const onWalletConnect = () => {
    if (!publicKey) {
      const installedWallets = wallets.filter(
        (wallet) => wallet.readyState === "Installed"
      );
      if (installedWallets.length <= 0) {
        toast.warning("Phantom wallet is not installed yet.");
        return;
      }
      select(wallets[0].adapter.name);
    } else {
      disconnect();
    }
  };

  return (
    <div className="flex flex-row justify-center">
      <div className="w-full max-w-[1440px] px-5 py-9 relative">
        <div className="flex flex-row items-center justify-start h-24 gap-4 sm:h-32 md:justify-center">
          <img alt="logo" src="/logo.png" className="h-full" />
          <div className="flex-col items-start hidden sm:flex">
            <span className="font-jolly-lodger text-[#a38e18] text-6xl font-normal">
              DIVINE
            </span>
            <span className="font-finger-paint text-[#000000] text-xl font-normal">
              PRESALE
            </span>
          </div>
        </div>
        <div className="absolute top-0 flex flex-row items-center h-full right-5">
          <button
            onClick={onWalletConnect}
            className="px-5 py-2 bg-[#a38e18] rounded-full text-[#eff3f6] font-inter text-sm font-bold"
          >
            {!publicKey
              ? "CONNECT WALLET"
              : publicKey.toBase58().slice(0, 6) +
                " ... " +
                publicKey.toBase58().slice(-6)}
          </button>
        </div>
      </div>
    </div>
  );
}
