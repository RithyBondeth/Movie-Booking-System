"use client"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem} from "@/components/ui/dropdown-menu";
import FlexRowWrapper from "@/components/utilities/flexrow-wrapper";
import { navbarMenu } from "@/constants/header-constant";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import NavItem from "../navbar/nav-item";

export default function ResponsiveDropdown({ className }: { className?: string }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="curved-button hidden tablet-lg:block">
                <FlexRowWrapper> 
                    <MenuIcon/>
                </FlexRowWrapper>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={cn("bg-primary text-muted border-transparent", className)}>
                <DropdownMenuGroup>
                    {navbarMenu.map((item) => (
                        <DropdownMenuItem key={item.id} className="py-3 px-6">
                            <NavItem key={item.id} icon={item.icon} link={item.link} label={item.label}/>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}