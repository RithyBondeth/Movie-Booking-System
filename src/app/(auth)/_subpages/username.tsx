import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FlexColWrapper from "@/components/utilities/flexcol-wrapper";
import FlexRowWrapper from "@/components/utilities/flexrow-wrapper";
import { KeyRoundIcon, UserIcon } from "lucide-react";

export default function UsernamePage() {
    return (
        <FlexColWrapper className="w-full gap-5">
            <div className="grid w-full max-w-s items-center gap-2">
                <Label htmlFor="username">Username</Label>
                <Input type="text" id="username" name="username" placeholder="Enter username..." autoComplete="off" icon={UserIcon}/>
            </div>           
            <FlexColWrapper className="w-full items-end">
                <div className="grid w-full max-w-s items-center gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" name="password" placeholder="Enter password..." autoComplete="off" password={true} icon={KeyRoundIcon}/>
                </div>      
                <p className="text-xs cursor-pointer duration-300 hover:text-main" onClick={() => {}}>Forgot Password?</p>
            </FlexColWrapper>         
            <FlexRowWrapper className="w-full mt-3">
                <Button className="w-1/2 bg-main" onClick={() => {}}>Continue</Button>   
                <Button className="w-1/2 bg-main" onClick={() => {}}>Visit as guest</Button>         
            </FlexRowWrapper>
        </FlexColWrapper>
    );
}      