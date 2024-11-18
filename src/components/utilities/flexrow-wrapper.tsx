import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function FlexRowWrapper({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <div className={cn("flex items-center gap-2", className)}>
            {children}
        </div>
    )   
}