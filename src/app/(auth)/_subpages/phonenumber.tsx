import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import FlexColWrapper from "@/components/utilities/flexcol-wrapper";
import FlexRowWrapper from "@/components/utilities/flexrow-wrapper";
import Image from "next/image";

export default function PhonenumberPage() {
    return (
        <FlexColWrapper className="w-full gap-5">
            <div className="grid w-full max-w-s items-center gap-2">
                <Label htmlFor="username">Phone Number</Label>
                <FlexRowWrapper className="gap-3 h-12 py-5 px-2 w-full rounded-md border border-input">
                    <FlexRowWrapper className="mr-5">
                        <Image src="/assets/auth/khmer-flag.png" alt="" height={35} width={35}/>
                        <p className="text-md">+855</p>
                    </FlexRowWrapper>
                    <input
                        type="text"
                        className="w-full text-md outline-none bg-transparent text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    />
                </FlexRowWrapper>
            </div>                  
            <FlexRowWrapper className="w-full mt-3">
                <Button className="w-1/2 bg-main" onClick={() => {}}>Continue</Button>   
                <Button className="w-1/2 bg-main" onClick={() => {}}>Visit as guest</Button>         
            </FlexRowWrapper>
        </FlexColWrapper>
    );
}     