// YourComponent.stories.tsx

import React, { ComponentProps } from "react"
import { Story } from "@storybook/react/types-6-0"

import { VStack } from "../components/core/"
import "../styles/globals.css"
// This default export determines where your story goes in the story list
export default {
	title: "VStack",
	component: VStack,
}

const Template: Story<ComponentProps<typeof VStack>> = (args) => (
	<VStack {...args}>
		<p>
			This components puts everything inside it into a flexbox column. It
			uses tailwind classes.
		</p>
		<span>Inline Element</span>
		<span>Inline Element</span>
	</VStack>
)

export const VStackStory = Template.bind({})
VStackStory.args = {
	/* the args you need here will depend on your component */
}
