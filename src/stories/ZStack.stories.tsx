// YourComponent.stories.tsx

import React, { ComponentProps } from "react"
import { Story } from "@storybook/react/types-6-0"

import { ZStack } from "../components/core/"
import "../styles/globals.css"

// This default export determines where your story goes in the story list
export default {
	title: "ZStack",
	component: ZStack,
}

const Template: Story<ComponentProps<typeof ZStack>> = (args) => (
	<ZStack {...args}>
		<p>
			This components puts everything inside a relative container with
			everything inside positioned absolutely.
		</p>
		<span>Element</span>
		<span>Element</span>
		<span>Element</span>
	</ZStack>
)

export const ZStackStory = Template.bind({})
ZStackStory.args = {
	/* the args you need here will depend on your component */
}
