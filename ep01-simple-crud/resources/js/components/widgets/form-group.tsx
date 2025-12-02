import { cn } from "@/lib/utils"
import React from "react"
import { Field, FieldError, FieldLabel } from "../ui/field"

type FormGroupProps = {
    label : string
    className?: string
    orientation? : "vertical" | "horizontal" | "responsive"
    children? : React.ReactNode
    error? : string
}
export default function FormGroup({label, children, orientation, className, error} : FormGroupProps) {
    return (
        <Field orientation={orientation} className={className}>
            <FieldLabel>{label}</FieldLabel>
            {children}
            {error && 
                <FieldError>{error}</FieldError>
            }
        </Field>
    )
}