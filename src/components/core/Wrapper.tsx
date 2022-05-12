import React from "react"
interface IWrapper {
	className?: string
	style?: React.CSSProperties
	children: React.ReactNode
}

const Wrapper = ({ className, style, children }: IWrapper) => (
	<div className={`container mx-auto ${className}`} style={style}>
		{children}
	</div>
)

Wrapper.defaultProps = {
	className: "",
	style: {},
} as Partial<IWrapper>

export default Wrapper
