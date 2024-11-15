"use client"
import FlexRowWrapper from "@/components/utilities/flexrow-wrapper";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
import SearchDropdown from "./search-dropdown";

export default function Search() {
    const [isSearch, setIsSearch] = useState<boolean>(false);

    return (
        <div className="w-1/4 flex flex-col items-stretch gap-3 absolute top-0 right-0">
            <FlexRowWrapper className="justify-between py-3 px-5 rounded-3xl text-sm text-muted-foreground bg-muted">
            <input 
                type="text" 
                placeholder="Search Movies..." 
                className="outline-none bg-transparent" 
                onFocus={() => setIsSearch(true)} 
                onBlur={() => setIsSearch(false)}
            />
                <SearchIcon/>
            </FlexRowWrapper>
            {isSearch && <SearchDropdown/>}
        </div>
    )   
}