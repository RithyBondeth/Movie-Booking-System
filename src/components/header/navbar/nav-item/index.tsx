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
}

export default function NavItem({ icon: Icon, label, link, className, size = 20 }: NavItemProps) {
    const pathname = usePathname();

    return (
        <Link href={link} className={cn(className, `${pathname === link ? 'px-6' : 'bg-transparent border-transparent px-0'} duration-200 curved-button`)}>
            <IconButton label={label}>
                <Icon size={size}/>
            </IconButton>
        </Link>
    )   
}