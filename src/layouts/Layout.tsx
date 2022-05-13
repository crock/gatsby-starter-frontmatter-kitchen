import React from "react"
import { ILayout } from "../@interfaces/"
import Navigation from "../components/Navigation"
import { createGlobalStyle } from "styled-components"
import tw from "twin.macro"

const GlobalStyles = createGlobalStyle`
  html { 
    font-family: 'Inter', sans-serif; 
    ${tw`h-full`}
  }

  body {
    ${tw`text-black dark:text-white bg-gray-50 dark:bg-gray-900`}
  }

  a {
    ${tw`text-primary hover:text-primary-light`}
  }
`

const Layout = ({ children }: ILayout) => {
	return (
		<>
      <Navigation />
      <div className="px-4 lg:px-0 lg:container mx-auto relative">
			  <main>{children}</main>
      </div>
			<GlobalStyles />
		</>
	)
}

export default Layout
