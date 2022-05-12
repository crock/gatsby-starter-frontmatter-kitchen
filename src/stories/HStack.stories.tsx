// YourComponent.stories.tsx

import React, { ComponentProps } from "react"
import { Story } from "@storybook/react/types-6-0"

import { HStack } from "../components/core/"
import "../styles/globals.css"

// This default export determines where your story goes in the story list
export default {
	title: "HStack",
	component: HStack,
}

const Template: Story<ComponentProps<typeof HStack>> = (args) => (
	<HStack {...args}>
		<p>
			This components puts everything inside it into a flexbox row. It
			uses tailwind classes.
		</p>
		<span>Inline Element</span>
		<span>Inline Element</span>
	</HStack>
)

export const HStackStory = Template.bind({})
HStackStory.args = {
	/* the args you need here will depend on your component */
}
