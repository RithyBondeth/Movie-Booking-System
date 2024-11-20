"use client"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuContent} from "@/components/ui/dropdown-menu";
import FlexRowWrapper from "@/components/utilities/flexrow-wrapper";
import { MapPin } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavDropdown() {
    const [cinema, setCinema] = useState<string>("");
    const pathname = usePathname();

    return (
        <>
        {pathname === "/" && <DropdownMenu>
            <DropdownMenuTrigger className="curved-button">
                <FlexRowWrapper>
                    <MapPin/>
                    <p>All Cinemas</p>
                </FlexRowWrapper>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-primary text-muted border-transparent">
                <DropdownMenuRadioGroup value={cinema} onValueChange={setCinema}>
                    {["Phnom Penh", "Battambang", "Siem Reap"].map((item) => (
                        <DropdownMenuRadioItem value={item} key={item} className={`py-3 px-6 ${item === cinema && "bg-primary-foreground text-primary"}`}>
                            {item}
                        </DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>}
        </>
    );
}