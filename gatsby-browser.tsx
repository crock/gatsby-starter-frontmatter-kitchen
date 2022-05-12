import * as React from "react"
import type { GatsbyBrowser } from "gatsby"
import { Layout } from "./src/layouts/"
import "./src/styles/globals.css"

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
	element,
}) => <Layout>{element}</Layout>
export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
	element,
}) => <>{element}</>
