"use client"
import CardWrapper from "@/components/utilities/card-wrapper";
import ContainerWrapper from "@/components/utilities/container-wrapper";
import FlexRowWrapper from "@/components/utilities/flexrow-wrapper";
import Search from "../search";
import NavDropdown from "./nav-dropdown";
import NavItem from "./nav-item";
import { navbarMenu } from "@/constants/header-constant";
import ResponsiveDropdown from "../responsive-dropdown";

export default function Navbar() {
    return (
        <CardWrapper className="mt-px bg-primary">
            <ContainerWrapper className="flex justify-start">
                <FlexRowWrapper className="w-full justify-between relative p-1.5">
                    <FlexRowWrapper className="gap-5 tablet-lg:hidden">
                        {navbarMenu.map((item) => <NavItem key={item.id} icon={item.icon} link={item.link} label={item.label}/>)}
                        <NavDropdown/>
                    </FlexRowWrapper>
                    <ResponsiveDropdown/>
                    <Search/>
                </FlexRowWrapper>
            </ContainerWrapper>
        </CardWrapper>
    )   
}