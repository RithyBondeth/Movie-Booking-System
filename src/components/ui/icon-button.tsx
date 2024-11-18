import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function IconButton({ label, className, children, onClick }: { label?: string, className?: string, onClick?: () => void, children: ReactNode }) {
    return (
        <div className={cn("flex items-center gap-2", className)} onClick={onClick}>
            {children}
            <p>{label}</p>
        </div>
    );
}