"use client";
import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  const cartCount = cart.products.length;

  if (!isMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        className="flex items-center rounded-full bg-black px-3 lg:px-4 py-2"
        onClick={() => router.push("/cart")}
      >
        <ShoppingBag size={16} color="white" />
        <span className="ml-2 text-sm font-medium text-white">{cartCount}</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
