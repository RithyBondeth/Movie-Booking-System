import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function CardWrapper({ children, className }: { children: ReactNode, className?: string }) {
    return <div className={cn("w-full p-2 shadow bg-white", className)}>{children}</div>   
}