import React from "react"

type ButtonProps = {
    clickHandler: ()=> void
}
const Button = (props: ButtonProps) => {
    return <button onClick={props.clickHandler}>Click</button>
}

export default Button