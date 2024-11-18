import MovieSmallBox from "@/components/home/movie-box/movie-smallbox";
import FlexColWrapper from "@/components/utilities/flexcol-wrapper";
import HeadingLabel from "@/components/utilities/text-label";

export default function SearchDropdown() {
    return (
        <div className="p-5 rounded-xl flex flex-col items-start text-sm shadow-md text-primary-foreground bg-card-foreground z-50">
            <HeadingLabel className="text-xl font-bold">Search</HeadingLabel>   
            <FlexColWrapper className="w-full items-start pt-5 max-h-96 overflow-y-scroll scrollbar-hide">
               {[1, 2, 3, 4, 5].map((item) => (
                 <MovieSmallBox key={item}/>
               ))}
            </FlexColWrapper>
        </div>
    )
}