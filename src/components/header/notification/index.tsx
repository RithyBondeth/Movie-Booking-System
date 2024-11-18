import { Separator } from "@/components/ui/separator"
import FlexColWrapper from "@/components/utilities/flexcol-wrapper"
import FlexRowWrapper from "@/components/utilities/flexrow-wrapper"
import HeadingLabel from "@/components/utilities/text-label"
import { BellOff } from "lucide-react"
import { LegacyRef } from "react"

export default function NotificationDropdown({ ref }: { ref: LegacyRef<HTMLDivElement> }) {
    return (
        <div ref={ref} className="absolute w-1/3 right-0 top-14 p-6 rounded-2xl border-2 border-muted-foreground bg-card-foreground">
            <FlexColWrapper className="items-start gap-5">
                <HeadingLabel className="text-2xl">Notifications</HeadingLabel>
                <FlexRowWrapper>
                    <div className="curved-button">Annocument</div>
                    <div className="curved-button">Orders</div>
                </FlexRowWrapper>
                <FlexColWrapper className="w-full gap-10 py-12">
                    <BellOff size={70}/>
                    <p>You don't have account yet. Please <span className="text-main underline cursor-pointer">register</span></p>
                </FlexColWrapper>
            </FlexColWrapper>
        </div>
    )
}