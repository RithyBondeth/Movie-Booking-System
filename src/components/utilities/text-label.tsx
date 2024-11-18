import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function HeadingLabel({ children, className }: { children: ReactNode, className?: string }) {
    return <p className={cn("text-3xl font-semibold", className)}>{children}</p>
}