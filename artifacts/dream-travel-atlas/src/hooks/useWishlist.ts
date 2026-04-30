import { useState, useEffect } from "react";

export function useWishlist() {
  const [wishlist, setWishlist] = useState<Set<string>>(() => {
    try {
      const stored = localStorage.getItem("dta-wishlist");
      return new Set(stored ? JSON.parse(stored) : []);
    } catch {
      return new Set();
    }
  });

  useEffect(() => {
    localStorage.setItem("dta-wishlist", JSON.stringify([...wishlist]));
  }, [wishlist]);

  const toggle = (id: string) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const isWishlisted = (id: string) => wishlist.has(id);

  return { wishlist, toggle, isWishlisted };
}
