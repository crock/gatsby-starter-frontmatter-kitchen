// YourComponent.stories.tsx

import React, { ComponentProps } from "react"
import { Story } from "@storybook/react/types-6-0"

import { Wrapper } from "../components/core/"
import "../styles/globals.css"

// This default export determines where your story goes in the story list
export default {
	title: "Wrapper",
	component: Wrapper,
}

const Template: Story<ComponentProps<typeof Wrapper>> = (args) => (
	<Wrapper {...args}>
		<p>
			This generic container components puts everything inside it into a
			container or wrapper div.
		</p>
		<div>Block Element</div>
		<span>Inline Element</span>
	</Wrapper>
)

export const WrapperStory = Template.bind({})
WrapperStory.args = {
	/* the args you need here will depend on your component */
}
