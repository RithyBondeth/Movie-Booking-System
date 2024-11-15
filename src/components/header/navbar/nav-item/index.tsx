"use client"
import { buttonVariants } from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
    icon: LucideIcon,
    label: string,
    link: string,
    className?: string,
    size?: number,
    color?: string,
}

export default function NavItem({ icon: Icon, label, link, className, size = 20, color }: NavItemProps) {
    const pathname = usePathname();

    return (
        <Link href={link}>
            <IconButton label={label} className={cn(buttonVariants({variant: `${pathname === link ? "destructive" : "ghost"}`}), className)}>
                <Icon size={size} color={pathname === link ? "white" : "black"}/>
            </IconButton>
        </Link>
    )   
}