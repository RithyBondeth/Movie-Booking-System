"use client"
import { Separator } from "@/components/ui/separator";
import FlexColWrapper from "@/components/utilities/flexcol-wrapper";
import FlexRowWrapper from "@/components/utilities/flexrow-wrapper";
import HeadingLabel from "@/components/utilities/text-label";
import { useState } from "react";
import UsernamePage from "../_subpages/username";
import PhonenumberPage from "../_subpages/phonenumber";
import SingupPage from "../_subpages/signup";

export default function AuthPage() {
    const [authMode, setAuthMode] = useState<"username" | "phonenumber">("username");
    const [subPage, setSubPage] = useState<"signin" | "signup">("signin");

    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <FlexRowWrapper className="h-2/3 tablet-md:h-fit items-stretch w-[70%] tablet-lg:w-[90%] bg-card-foreground rounded-2xl overflow-hidden">
                <div className="h-full w-1/2 tablet-md:hidden">
                    <div 
                        className="size-full bg-center bg-cover bg-no-repeat rounded-tl-2xl rounded-bl-2xl" 
                        style={{ backgroundImage: "url(/assets/auth/login-banner.png)" }}
                    />
                </div>
                <FlexColWrapper className="h-full w-1/2 p-10 gap-5 tablet-md:w-full">
                    <FlexRowWrapper className="gap-5">
                        <FlexColWrapper className="items-end" onClick={() => setSubPage("signin")}>
                            <HeadingLabel className="cursor-pointer text-4xl tablet-xl:text-2xl tablet-lg:text-xl">Sign In</HeadingLabel>
                            <Separator className={`h-1 rounded-xl duration-500 bg-main ${subPage === 'signin' ? 'w-full' : 'w-0'}`}/>
                        </FlexColWrapper>
                        <Separator orientation="vertical" className="h-10"/>
                        <FlexColWrapper className="items-start" onClick={() => {
                            setSubPage("signup");
                            setAuthMode("username");
                        }}>
                            <HeadingLabel className="cursor-pointer text-4xl tablet-xl:text-2xl tablet-lg:text-xl">Sign Up</HeadingLabel>
                            <Separator className={`h-1 rounded-xl duration-500 bg-main ${subPage === 'signup' ? 'w-full' : 'w-0'}`}/>
                        </FlexColWrapper>
                    </FlexRowWrapper>
                    {subPage === "signin" ? (<FlexColWrapper className="w-full">
                        <p className="text-muted-foreground">You can use your username or your phone number</p>
                        <FlexRowWrapper className="bg-secondary-foreground rounded-3xl mb-5 gap-1">
                            <div className={`auth-button ${authMode === 'username' && 'bg-main'}`} onClick={() => setAuthMode("username")}>
                                Username
                            </div>
                            <div className={`auth-button ${authMode === 'phonenumber' && 'bg-main'}`} onClick={() => setAuthMode("phonenumber")}>
                                Phone Number
                            </div> 
                        </FlexRowWrapper>
                        {/* Auth Mode Section: Username and Phone Number */}
                        {authMode === "username" && <UsernamePage/>}
                        {authMode === "phonenumber" && <PhonenumberPage/>}
                    </FlexColWrapper>) : <SingupPage/>}
                </FlexColWrapper>
            </FlexRowWrapper>
        </div>
    )   
}