"use client"
import { Separator } from "@/components/ui/separator";
import FlexColWrapper from "@/components/utilities/flexcol-wrapper";
import FlexRowWrapper from "@/components/utilities/flexrow-wrapper";
import HeadingLabel from "@/components/utilities/text-label";
import { useState } from "react";

export default function AuthPage() {
    const [authMode, setAuthMode] = useState<"username" | "phonenumber">("username");
    const [subPage, setSubPage] = useState<"signin" | "signup">("signin");

    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <FlexRowWrapper className="w-10/12 h-[600px] bg-card-foreground rounded-lg overflow-hidden">
                <div className="h-full w-1/2 bg-main"></div>
                <FlexColWrapper className="h-full w-1/2 p-10 gap-5">
                    <FlexRowWrapper className="gap-5">
                        <FlexColWrapper className="items-end" onClick={() => setSubPage("signin")}>
                            <HeadingLabel className="cursor-pointer text-4xl">Sign In</HeadingLabel>
                            <Separator className={`h-1 rounded-xl duration-500 bg-main ${subPage === 'signin' ? 'w-full' : 'w-0'}`}/>
                        </FlexColWrapper>
                        <Separator orientation="vertical" className="h-10"/>
                        <FlexColWrapper className="items-start" onClick={() => setSubPage("signup")}>
                            <HeadingLabel className="cursor-pointer text-4xl">Sign In</HeadingLabel>
                            <Separator className={`h-1 rounded-xl duration-500 bg-main ${subPage === 'signup' ? 'w-full' : 'w-0'}`}/>
                        </FlexColWrapper>
                    </FlexRowWrapper>
                    <p className="text-muted-foreground">You can use your username or your phone number</p>
                    <FlexRowWrapper className="bg-secondary-foreground rounded-3xl gap-5">
                        <div 
                            className={`auth-button ${authMode === 'username' ? 'w-52 bg-main' : 'w-0' }`} 
                            onClick={() => setAuthMode("username")}
                        >
                            <p className="absolute h-12 left-0 right-0 top-0 bottom-0 text-sm flex justify-center items-center">Username</p>
                        </div>
                        <div 
                            className={`auth-button ${authMode === 'phonenumber' ? 'w-52 bg-main' : 'w-0'}`} 
                            onClick={() => setAuthMode("phonenumber")}
                        >
                            <p className="absolute h-12 left-0 right-0 top-0 text-sm flex justify-center items-center">Phone</p>
                        </div> 
                    </FlexRowWrapper>
                </FlexColWrapper>
            </FlexRowWrapper>
        </div>
    )   
}