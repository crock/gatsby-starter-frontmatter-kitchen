import React from "react"
import { IStack } from "../../@interfaces/"

const HStack = ({ children, style, className }: IStack) => (
	<div style={style} className={`flex flex-row ${className}`}>
		{children}
	</div>
)

HStack.defaultProps = {
	className: "",
	style: {},
} as Partial<IStack>

export default HStack
