import React from "react";
import TimerLayout from "@/layout/timer-layout";
import BuyLayout from "@/layout/buy-layout";
import StatsLayout from "@/layout/stats-layout";
import usePresale from "@/hooks/usePresale";

export default function Home() {
  const {
    updateAuth,
    createPresale,
    depositToken,
    updatePresale,
    claimToken,
    withdrawSol,
    withdrawToken,
  } = usePresale();

  const onCreatePresale = async () => {
    await createPresale();
  };

  const onDepositToken = async () => {
    await depositToken();
  };

  const onWithdrawToken = async () => {
    await withdrawToken();
  };

  const onUpdateAuth = async () => {
    await updateAuth();
  };
  const onUpdatePresale = async () => {
    await updatePresale();
  };

  const onClaimClub = async () => {
    await claimToken();
  };

  const onWithdrawSol = async () => {
    await withdrawSol();
  };
  return (
    <div className="flex flex-row justify-center">
      <div className="w-full max-w-[1440px] px-5 py-9 relative flex flex-col gap-12">
        <div className="flex flex-row items-center gap-2">
          <button
            className="px-5 py-2 bg-[#d00711] rounded-full text-[#eff3f6] font-inter text-sm font-bold"
            onClick={onCreatePresale}
          >
            Create Presale
          </button>
          <button
            className="px-5 py-2 bg-[#d00711] rounded-full text-[#eff3f6] font-inter text-sm font-bold"
            onClick={onDepositToken}
          >
            Deposit Token
          </button>
          <button
            className="px-5 py-2 bg-[#d00711] rounded-full text-[#eff3f6] font-inter text-sm font-bold"
            onClick={onUpdatePresale}
          >
            Update Presale
          </button>
          <button
            className="px-5 py-2 bg-[#d00711] rounded-full text-[#eff3f6] font-inter text-sm font-bold"
            onClick={onClaimClub}
          >
            Claim Club
          </button>
          <button
            className="px-5 py-2 bg-[#d00711] rounded-full text-[#eff3f6] font-inter text-sm font-bold"
            onClick={onWithdrawSol}
          >
            Withdraw Sol
          </button>
          <button
            className="px-5 py-2 bg-[#d00711] rounded-full text-[#eff3f6] font-inter text-sm font-bold"
            onClick={onWithdrawToken}
          >
            Withdraw Token
          </button>
          <button
            className="px-5 py-2 bg-[#d00711] rounded-full text-[#eff3f6] font-inter text-sm font-bold"
            onClick={onUpdateAuth}
          >
            Update Auth
          </button>
        </div>
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <TimerLayout />
          <BuyLayout />
        </div>
        <StatsLayout />
      </div>
    </div>
  );
}
