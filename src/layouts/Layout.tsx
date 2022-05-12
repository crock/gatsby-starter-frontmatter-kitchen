import React from "react"
import { ILayout } from "../@interfaces/"
import { createGlobalStyle } from "styled-components"
import tw from "twin.macro"

const GlobalStyles = createGlobalStyle`
  html { 
    font-family: 'Inter', sans-serif; 
    ${tw`h-full`}
  }

  body {
    ${tw`text-black dark:text-white`}
  }

  a {
    ${tw`text-primary hover:text-primary-light`}
  }
`

const Layout = ({ children }: ILayout) => {
	return (
		<>
			<main>
        {children}
      </main>
			<GlobalStyles />
		</>
	)
}

export default Layout
