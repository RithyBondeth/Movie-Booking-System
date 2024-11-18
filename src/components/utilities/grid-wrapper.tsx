import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function GridWrapper({ children, className }: { children: ReactNode, className?: string }) {
    return <div className={cn("w-full grid grid-cols-4", className)}>{children}</div>
}