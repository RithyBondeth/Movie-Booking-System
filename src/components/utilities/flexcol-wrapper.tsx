import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function FlexColWrapper({ children, onClick, className }: { children: ReactNode, onClick?: () => void, className?: string }) {
    return (
        <div className={cn("flex flex-col items-center gap-2", className)} onClick={onClick}>
            {children}
        </div>
    )   
}