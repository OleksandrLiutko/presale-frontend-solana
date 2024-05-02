import { Icon, IconType } from "@/components/icons";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import usePresale from "@/hooks/usePresale";
import {
  BUYER_HARDCAP,
  BUYER_SOFTCAP,
  BUYER_TOKEN_HARDCAP,
  PRICE_PER_TOKEN,
  TOKEN_DECIMAL,
} from "@/constants/constants";

export default function BuyLayout() {
  const { buyToken, transactionPending, startTime, endTime, buyAmount } =
    usePresale();
  const [canBuy, setCanBuy] = useState(true);

  const [solBalance, setSolBalance] = useState(0);
  const [remainBuyAmount, setRemainBuyAmount] = useState(BUYER_TOKEN_HARDCAP);

  useEffect(() => {
    const current = Date.now();
    if (startTime * 1000 < current && endTime * 1000 > current) {
      setCanBuy(true);
    } else {
      setCanBuy(false);
    }
  }, [startTime, endTime]);

  // useEffect(() => {
  //   setRemainBuyAmount(BUYER_TOKEN_HARDCAP - buyAmount / 10 ** TOKEN_DECIMAL);
  // }, [buyAmount]);

  const onBuyToken = async () => {
    if (solBalance < BUYER_SOFTCAP || solBalance > BUYER_HARDCAP) {
      toast.warning("Please check SOL balance again.");
      return;
    }
    buyToken(solBalance, solBalance / PRICE_PER_TOKEN);
  };

  return (
    <div className="w-full h-[540px] sm:h-96 max-w-[700px] rounded-3xl bg-[#dae3eaa0] px-8 sm:px-12 py-8 flex flex-col gap-3 sm:gap-6">
      <span className="font-inter font-bold text-[#000000] text-sm sm:text-lg">
        Please Enter The DVN Amount
      </span>
      <div className="flex flex-col items-center gap-2 sm:flex-row">
        <div className="h-32 rounded-[20px] bg-[#e6f1fa] flex flex-col justify-between px-5 py-5 shadow-[0_0_50px_0_#00000010]">
          <div className="font-inter text-sm text-[#000000] flex flex-row items-center justify-between">
            <span className="font-bold">From</span>
          </div>
          <div>
            <button className="font-inter font-bold bg-[#d00711] text-[#ffffff] text-[9px] px-2 py-1 rounded-full">
              MAX
            </button>
          </div>
          <div className="flex flex-row items-center justify-between">
            <input
              type="number"
              value={solBalance}
              onChange={(e) => {
                setSolBalance(Number(e.target.value));
              }}
              className="w-full h-10 outline-none px-2 font-inter font-bold text-[#000000] text-xl bg-transparent"
            />
            <div className="w-36 h-10 px-2 py-1 flex flex-row items-center justify-between rounded-full bg-[#c1cfd7]">
              <img alt="sol" src="/images/sol.png" className="h-full" />
              <span className="font-inter font-bold text-[#000000] text-sm">
                SOL
              </span>
            </div>
          </div>
        </div>
        <Icon
          type={IconType.RIGHT}
          className="w-10 h-10 fill-[#00000080] min-w-10 rotate-90 sm:rotate-0"
        />
        <div className="h-32 rounded-[20px] bg-[#e6f1fa] flex flex-col justify-between px-5 py-5 shadow-[0_0_50px_0_#00000010]">
          <div className="font-inter text-sm text-[#000000] flex flex-row items-center justify-between">
            <span className="font-bold">To</span>
          </div>
          <div className="flex flex-row items-center justify-between">
            <input
              value={solBalance / PRICE_PER_TOKEN}
              className="w-full h-10 outline-none px-2 font-inter font-bold text-[#000000] text-xl bg-transparent"
            />
            <div className="w-40 h-10 px-2 py-1 flex flex-row items-center justify-between rounded-full bg-[#c1cfd7]">
              <img alt="sol" src="/images/club.png" className="h-full" />
              <span className="font-inter font-bold text-[#000000] text-sm">
                DVN
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center font-inter font-normal text-[#000000] text-xs sm:text-sm">
        <span className="text-center">
          DVN remaining for your wallet limit:{" "}
          {remainBuyAmount.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 4,
          })}{" "}
          (
          {(remainBuyAmount * PRICE_PER_TOKEN).toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 4,
          })}{" "}
          SOL)
        </span>
        <span className="text-center">
          Minimum Per Transaction is {BUYER_SOFTCAP} SOL, Maximum For Presale is{" "}
          {BUYER_HARDCAP} SOL
        </span>
      </div>
      <div className="flex flex-row justify-center">
        {canBuy && !transactionPending && (
          <button
            className={`px-5 py-2 bg-[#d00711] rounded-full text-[#eff3f6] font-inter text-sm font-bold`}
            onClick={onBuyToken}
          >
            BUY DVN
          </button>
        )}
        {transactionPending && (
          <Icon type={IconType.LOADING} className="w-14 h-14" />
        )}
      </div>
    </div>
  );
}
