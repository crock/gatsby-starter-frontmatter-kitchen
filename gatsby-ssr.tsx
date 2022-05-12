import * as React from "react"
import type { GatsbySSR } from "gatsby"
import { Layout } from "./src/layouts/"
import "./src/styles/globals.css"

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({ element }) => (
	<Layout>{element}</Layout>
)
export const wrapRootElement: GatsbySSR["wrapRootElement"] = ({ element }) => (
	<>{element}</>
)

export const onRenderBody: GatsbySSR["onRenderBody"] = ({
	setHeadComponents,
}) => {
	if (process.env.NODE_ENV !== `production`) {
		return null
	}

	setHeadComponents([
		<script
			key={"splitbee"}
			async={true}
			data-api="/_croc"
			src="/crocolytics.js"
		></script>,
	])
}
