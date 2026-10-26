"use client";

import { useEffect, useState } from "react";
import { CheckIcon, CopyIcon } from "./Icons";

/** Copies the email address to the clipboard. Hidden if the Clipboard API is unavailable. */
export function CopyEmail({ email }: { email: string }) {
  const [supported, setSupported] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Feature detection must run on the client; this keeps server and client markup identical.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSupported(typeof navigator !== "undefined" && !!navigator.clipboard && window.isSecureContext);
  }, []);

  useEffect(() => {
    if (!copied) return;
    const t = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(t);
  }, [copied]);

  if (!supported) return null;

  return (
    <button
      type="button"
      className="btn btn--ghost"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email);
          setCopied(true);
        } catch {
          setCopied(false);
        }
      }}
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
      <span aria-live="polite">{copied ? "Copied" : "Copy email"}</span>
    </button>
  );
}
