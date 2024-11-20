"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
import FlexRowWrapper from "../utilities/flexrow-wrapper"
import { LockIcon, LucideIcon, UnlockIcon } from "lucide-react";

interface InputProps extends React.ComponentProps<"input"> {
  icon?: LucideIcon;
  size?: number;
  password?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon: Icon, size=20, password=false, ...props }, ref) => {
    const [visible, setVisible] = React.useState<boolean>(false);

    return (
     <FlexRowWrapper className="gap-3 h-12 py-5 px-2 w-full rounded-md border border-input">
        {Icon && <Icon size={size} color="currentColor" className="ml-1"/>}
        <input
          type={password ? (visible ? "text" : "password") : type}
          className={cn(
            "w-full outline-none bg-transparent text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className
          )}
          ref={ref}
          {...props}
        />
        {password && (visible ? <LockIcon onClick={() => setVisible(false)} className="cursor-pointer mr-1"/> : <UnlockIcon onClick={() => setVisible(true)} className="cursor-pointer mr-1"/>)} 
     </FlexRowWrapper>
    )
  }
)
Input.displayName = "Input"

export { Input }
