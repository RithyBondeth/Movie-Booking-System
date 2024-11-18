import FlexColWrapper from "@/components/utilities/flexcol-wrapper";
import FlexRowWrapper from "@/components/utilities/flexrow-wrapper";
import Image from "next/image";

export default function MovieSmallBox() {
    return (
        <FlexRowWrapper className="items-stretch">
           <Image src="https://tickets.legend.com.kh/CDN/media/entity/get/Movies/HO00001625" alt="movie-poster" height={160} width={80}/>
           <FlexColWrapper className="items-start">
                <p className="text-md">Venom: The Last Dance</p>
                <p className="text-xs text-muted-foreground">01-05-2023</p>
           </FlexColWrapper>
        </FlexRowWrapper>
    )
}