import FlexColWrapper from "@/components/utilities/flexcol-wrapper";
import { cn } from "@/lib/utils";

export default function DateBox({ day, numDay, month, className, current }: { day?: string, numDay?: number, month: string, className?: string, current?: boolean }) {
    return (
        <FlexColWrapper className={cn(
            `gap-0 w-fit px-20 ${day && numDay ? 'py-2' : 'py-5'} rounded-xl bg-card-foreground border-[1px] border-muted-foreground cursor-pointer duration-300 
            ${current ? 'border-red-500' : 'hover:border-white' }`, 
            className
        )}>
            <p className="text-md text-muted-foreground">{day}</p>
            <p className="text-xl text-wite font-semibold">{numDay}</p>
            <p className={`${day && numDay ? 'text-md' : 'text-xl'} text-muted-foreground`}>{month}</p>
        </FlexColWrapper>
    )
}