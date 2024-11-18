import FlexColWrapper from "@/components/utilities/flexcol-wrapper";
import FlexRowWrapper from "@/components/utilities/flexrow-wrapper";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { MovieBoxProps } from "./type";

export default function MovieBox(props: MovieBoxProps) {
    return (
        <FlexColWrapper className={cn("items-start cursor-pointer", props.className)}>
             <div className="min-w-full rounded-xl bg-muted overflow-hidden">
                <Image src={props.movie.poster} alt="movie-poster" width={250} height={300} className="min-w-full"/>
             </div>
            <FlexColWrapper className="px-1 gap-1 items-start">         
                <FlexRowWrapper className="text-muted-foreground">
                    <p>{props.movie.date}</p>
                    <p>{props.movie.type}</p>    
                </FlexRowWrapper> 
                <p className="text-sm">{props.movie.title}</p>          
            </FlexColWrapper>
        </FlexColWrapper>
    )
}