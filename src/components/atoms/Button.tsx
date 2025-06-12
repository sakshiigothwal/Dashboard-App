import React from "react"

type ButtonProps = {
    label: string
    onClick: ()=> void
    type?: "button" | "submit" | "reset"
}
const Button = (props: ButtonProps) => {
    return <button type={props.type} onClick={props.onClick}>{props.label}</button>
}

export default Button