"use client";

import { priceFormatter } from "@/lib/util";
import { useEffect, useState } from "react";

interface CurrencyProps {
  value: string | number;
}
const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <span className="font-semibold">
      {priceFormatter.format(Number(value))}
    </span>
  );
};

export default Currency;
