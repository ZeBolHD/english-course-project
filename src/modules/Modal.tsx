"use client";
import { useCallback, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};
