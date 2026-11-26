"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { EMAIL } from "@/data/site";
export default function CopyEmail() {
  const [ok, setOk] = useState(false);
  return (<button className="btn border border-white/15 hover:border-accent" onClick={async () => {
    try { await navigator.clipboard.writeText(EMAIL); setOk(true); setTimeout(() => setOk(false), 2000); } catch {}
  }}>{ok ? <Check size={16}/> : <Copy size={16}/>}{ok ? "Copied" : "Copy Email"}</button>);
}
