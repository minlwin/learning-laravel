import { cn } from "@/lib/utils"
import React from "react"

type FormGroupProps = {
    label : string
    className?: string
    type? : "vertical" | "horizontal"
    children? : React.ReactNode
}
export default function FormGroup({label, children, type, className} : FormGroupProps) {
    return (
        <div className={cn('flex', 'gap-2', className, type == 'horizontal' ? 'flex-row items-center' : "flex-col")}>
            <label>{label}</label>
            {children}
        </div>
    )
}