"use client"
import FlexRowWrapper from "@/components/utilities/flexrow-wrapper";
import { SearchIcon, X } from "lucide-react";
import { useState } from "react";
import SearchDropdown from "./search-dropdown";

export default function Search() {
    const [isSearch, setIsSearch] = useState<boolean>(false);

    return (
        <div className="w-1/4 tablet-lg:w-fit flex flex-col items-stretch gap-3 absolute top-0 right-0">
            <FlexRowWrapper className="justify-between py-3 px-5 rounded-3xl text-sm border-[1px] border-muted-foreground bg-card-foreground">
                <input 
                    type="text" 
                    placeholder="Search Movies..." 
                    className="outline-none bg-transparent placeholder-muted" 
                    onFocus={() => setIsSearch(true)} 
                    onBlur={() => setIsSearch(false)}
                />
                {isSearch ? <X className="cursor-pointer tablet-lg:min-w-10"/> : <SearchIcon className="cursor-pointer tablet-lg:min-w-10"/>} 
            </FlexRowWrapper>
            {isSearch && <SearchDropdown/>}
        </div>
    )   
}