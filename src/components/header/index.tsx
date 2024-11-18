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
                        <IconButton label="Join Now" className="curved-button">
                            <User/>
                        </IconButton>
                        <IconButton label="Ticket" className="curved-button">
                            <Ticket/>
                        </IconButton>
                        <IconButton label="Notification" className="curved-button" onClick={() => setOpenNotification(true)}>
                            <Bell/>
                        </IconButton>
                        {openNotification && <NotificationDropdown ref={dropdownRef}/>}
                    </FlexRowWrapper>
                </FlexRowWrapper>
            </ContainerWrapper>
        </CardWrapper>
        <Navbar/>
        </>
    )
}