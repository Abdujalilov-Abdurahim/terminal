import { useState } from "react";

export function useCopyToClipboard(resetDelay = 1600) {
  const [copied, setCopied] = useState(false);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), resetDelay);
    } catch {
      // clipboard mavjud bo'lmasa jimgina o'tkazib yuboriladi
    }
  };

  return { copied, copy };
}
