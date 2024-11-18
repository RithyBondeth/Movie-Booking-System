import { Separator } from "@/components/ui/separator";

export default function SearchDropdown() {
    return (
        <div className="p-5 rounded-xl flex flex-col items-start text-sm shadow-md text-primary-foreground bg-primary z-50">
            <p className="text-md font-bold mb-1">Search</p>   
            <Separator/>
        </div>
    )
}