import { Loader } from "lucide-react";
import React from "react";

export default function loading() {
  return (
    <div className="text-center flex justify-center items-center gap-3 mt-12 min-h-[60vh]">
      <Loader size={32} className="animate-spin" ></Loader>
      <Loader size={32} className="animate-spin" ></Loader>
      <Loader size={32} className="animate-spin" ></Loader>
    </div>
  );
}
