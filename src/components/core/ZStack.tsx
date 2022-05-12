import React from "react"
import { IStack } from "../../@interfaces/"
import styled from "styled-components"

const ZContainer = styled.div`
	position: relative;
	*:nth-child(1n) {
		position: absolute;
	}
`

const ZStack = ({ children, style, className }: IStack) => (
	<ZContainer style={style} className={className}>
		{children}
	</ZContainer>
)

ZStack.defaultProps = {
	className: "",
	style: {},
} as Partial<IStack>

export default ZStack
