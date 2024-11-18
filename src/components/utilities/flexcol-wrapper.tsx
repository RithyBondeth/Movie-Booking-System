import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function FlexColWrapper({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <div className={cn("flex flex-col items-center gap-2", className)}>
            {children}
        </div>
    )   
}