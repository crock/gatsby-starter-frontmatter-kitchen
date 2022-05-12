import React from "react"
import { IStack } from "../../@interfaces/"

const VStack = ({ children, style, className }: IStack) => (
	<div style={style} className={`flex flex-col ${className}`}>
		{children}
	</div>
)

VStack.defaultProps = {
	className: "",
	style: {},
} as Partial<IStack>

export default VStack
