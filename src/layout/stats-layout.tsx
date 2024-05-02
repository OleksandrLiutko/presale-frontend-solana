import React from "react";
import {
  BUYER_HARDCAP,
  BUYER_SOFTCAP,
  PRICE_PER_TOKEN,
  TOKEN_DECIMAL,
  TOKEN_PRESALE_HARDCAP,
} from "@/constants/constants";
import usePresale from "@/hooks/usePresale";

const buyerTokenHardcap = BUYER_HARDCAP / PRICE_PER_TOKEN;

export default function StatsLayout() {
  const { buyAmount, totalBuyAmount } = usePresale();

  return (
    <div className="flex flex-col items-center gap-8">
      <span className="text-center font-bold font-inter text-base sm:text-lg text-[#000000]">
        With A Presale Price Of{" "}
        {PRICE_PER_TOKEN.toLocaleString(undefined, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 9,
        })}{" "}
        SOL. Our Minimum Limit Will Be {BUYER_SOFTCAP} SOL And A Max Of{" "}
        {BUYER_HARDCAP} SOL. See Our Whitepaper For Further Details.
      </span>
      <div className="flex flex-col items-center justify-between w-full gap-5 sm:flex-row sm:gap-12">
        <div />
        <ProcessBar
          label="Presale Amount received"
          value={Math.floor(
            ((totalBuyAmount / 10 ** TOKEN_DECIMAL) * 100) /
              TOKEN_PRESALE_HARDCAP
          )}
        />
        <ProcessBar
          label="Your Hard Cap Amount"
          value={Math.floor(
            ((buyAmount / 10 ** TOKEN_DECIMAL) * 100) / buyerTokenHardcap
          )}
        />
        <div />
      </div>
      <div className="flex flex-col items-center justify-between w-full gap-5 sm:flex-row font-inter">
        <div />
        <div className="flex flex-col items-center sm:items-start">
          <span className="font-normal text-sm text-[#000000]">
            Presale Amount Received:
          </span>
          <span className="font-normal text-base text-[#000000]">
            {(totalBuyAmount / 10 ** TOKEN_DECIMAL).toLocaleString(undefined, {
              minimumFractionDigits: 0,
              maximumFractionDigits: 2,
            })}{" "}
            DVN
          </span>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <span className="font-normal text-sm text-[#000000]">
            Maximum Presale Amount Allocated:
          </span>
          <span className="font-normal text-base text-[#000000]">
            {TOKEN_PRESALE_HARDCAP.toLocaleString(undefined, {
              minimumFractionDigits: 0,
              maximumFractionDigits: 2,
            })}{" "}
            DVN
          </span>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <span className="font-normal text-sm text-[#000000]">
            DVN Price:
          </span>
          <span className="font-normal text-base text-[#000000]">
            {PRICE_PER_TOKEN.toLocaleString(undefined, {
              minimumFractionDigits: 0,
              maximumFractionDigits: 9,
            })}{" "}
            SOL
          </span>
        </div>
        <div />
      </div>
    </div>
  );
}

interface ProcessBarProps {
  label: string;
  value: number;
}

const ProcessBar: React.FC<ProcessBarProps> = ({ label, value }) => {
  return (
    <div className="relative flex flex-col items-center w-full font-inter">
      <div className="w-full flex flex-row items-end justify-between font-bold text-base text-[#000000]">
        <div />
        <div className="flex flex-col items-center w-1">
          <span>25%</span>
          <div className="w-1 h-4 bg-[#000000]" />
        </div>
        <div className="flex flex-col items-center w-1">
          <span>50%</span>
          <div className="w-1 h-4 bg-[#000000]" />
        </div>
        <div className="flex flex-col items-center w-1">
          <span>75%</span>
          <div className="w-1 h-4 bg-[#000000]" />
        </div>
        <div />
      </div>
      <div className="w-full h-5 sm:h-7 rounded-full bg-[#cccccc] overflow-hidden">
        <div
          className="h-full bg-[#a38e18]"
          style={{
            width: `${value}%`,
          }}
        ></div>
      </div>
      <div
        className="absolute w-0.5 h-0.5 flex flex-row items-center justify-center top-8"
        style={{
          left: `${value}%`,
        }}
      >
        <div className="min-w-11 min-h-11 rounded-full bg-[#a38e18] flex flex-row items-center justify-center">
          <span className="font-bold text-base text-[#ffffff]">{value}%</span>
        </div>
      </div>
      <span className="mt-4 font-bold text-base sm:text-xl text-[#000000] whitespace-nowrap">
        {label}
      </span>
    </div>
  );
};
