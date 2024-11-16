import CardWrapper from "@/components/utilities/card-wrapper";
import ContainerWrapper from "@/components/utilities/container-wrapper";
import Image from "next/image";
import { Ticket, User, Bell } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import FlexRowWrapper from "@/components/utilities/flexrow-wrapper";
import IconButton from "@/components/ui/icon-button";
import { cn } from "@/lib/utils";
import Navbar from "./navbar";
import { HeaerLogo } from "@/constants/header-constant";

export default function Header() {
    return (
        <>
        <CardWrapper className="sticky top-0 z-50">
            <ContainerWrapper>
                <FlexRowWrapper className="justify-between">
                    <Image src={HeaerLogo} alt="moviehub-logo" width={55} height={55}/>
                    <FlexRowWrapper>  
                        <IconButton label="Join Now" className={cn(buttonVariants({variant: "ghost"}))}>
                            <User/>
                        </IconButton>
                        <IconButton label="Ticket" className={cn(buttonVariants({variant: "ghost"}))}>
                            <Ticket/>
                        </IconButton>
                        <IconButton label="Notification" className={cn(buttonVariants({variant: "ghost"}))}>
                            <Bell/>
                        </IconButton>
                    </FlexRowWrapper>
                </FlexRowWrapper>
            </ContainerWrapper>
        </CardWrapper>
        <Navbar/>
        </>
    )
}