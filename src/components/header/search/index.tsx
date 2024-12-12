"use client"
import FlexRowWrapper from "@/components/utilities/flexrow-wrapper";
import { SearchIcon, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import SearchDropdown from "./search-dropdown";

export default function Search() {
    const [isSearch, setIsSearch] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if(isSearch) {
                setIsSearch(false);
                inputRef.current?.blur();
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [isSearch]);

    return (
        <div className="w-1/4 tablet-lg:w-fit phone-xl:max-w-[225px] flex flex-col items-stretch gap-3 absolute top-0 right-0 z-10">
            <FlexRowWrapper className="justify-between px-5 rounded-3xl text-sm border-[1px] border-muted-foreground bg-card-foreground">
                <input 
                    ref={inputRef}
                    type="text" 
                    placeholder="Search Movie..."
                    className="outline-none bg-transparent placeholder-muted py-3"  
                    onFocus={() => setIsSearch(true)} 
                    onBlur={() => setIsSearch(false)}
                />
                {isSearch ? <X className="cursor-pointer tablet-lg:min-w-10"/> : <SearchIcon className="cursor-pointer tablet-lg:min-w-10"/>} 
            </FlexRowWrapper>
            {isSearch && <SearchDropdown/>}
        </div>
    )   
}