import { ReactNode } from "react";
import FlexRowWrapper from "../utilities/flexrow-wrapper";

export default function IconButton({ label, className, children }: { label?: string, className?: string, children: ReactNode }) {
    return (
        <FlexRowWrapper className={className}>
            {children}
            <p>{label}</p>
        </FlexRowWrapper>
    );
}