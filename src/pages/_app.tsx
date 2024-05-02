import Header from "@/layout/header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WalletProvider } from "@solana/wallet-adapter-react";
import { useMemo } from "react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { WalletConnectProvider } from "@/components/WalletConnectProvider";

export default function App({ Component, pageProps }: AppProps) {
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  return (
    <>
      <WalletConnectProvider>
        <Header />
        <Component {...pageProps} />
        <ToastContainer autoClose={3000} draggableDirection="x" />
      </WalletConnectProvider>
    </>
  );
}
