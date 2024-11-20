"use client"
import CardWrapper from "@/components/utilities/card-wrapper";
import ContainerWrapper from "@/components/utilities/container-wrapper";
import Image from "next/image";
import { Ticket, User, Bell } from "lucide-react";
import FlexRowWrapper from "@/components/utilities/flexrow-wrapper";
import IconButton from "@/components/ui/icon-button";
import Navbar from "./navbar";
import { HeaerLogo } from "@/constants/header-constant";
import NotificationDropdown from "./notification";
import { useRef, useState } from "react";
import { useOnClickOutside } from "@/hooks/use-onclickoutside";
import Link from "next/link";

export default function Header() {
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const [openNotification, setOpenNotification] = useState<boolean>(false);

    useOnClickOutside(dropdownRef, () => setOpenNotification(false));

    return (
        <>
        <CardWrapper className="sticky top-0 z-50 bg-primary">
            <ContainerWrapper>
                <FlexRowWrapper className="justify-between relative">
                    <Image src={HeaerLogo} alt="moviehub-logo" width={55} height={55}/>
                    <FlexRowWrapper> 
                        <Link href="/auth">
                            <IconButton label="Join Now" className="curved-button tablet-sm:[&>p]:hidden">
                                <User/>
                            </IconButton>
                        </Link>
                        <Link href="/">
                            <IconButton label="Ticket" className="curved-button tablet-sm:[&>p]:hidden">
                                <Ticket/>
                            </IconButton>
                        </Link>
                        <Link href="/">
                            <IconButton label="Notification" className="curved-button tablet-sm:[&>p]:hidden" onClick={() => setOpenNotification(true)}>
                                <Bell/>
                            </IconButton>
                        </Link>
                        {openNotification && <NotificationDropdown ref={dropdownRef}/>}
                    </FlexRowWrapper>
                </FlexRowWrapper>
            </ContainerWrapper>
        </CardWrapper>
        <Navbar/>
        </>
    )
}