import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Prism from "prismjs"
import Seo from "../components/Seo"
import { Disqus } from "gatsby-plugin-disqus"
import JamComments from "@jam-comments/gatsby/ui"
import moment from "moment"
import { DotsCircleHorizontalIcon } from "@heroicons/react/solid"
import FMK from "../../FrontmatterKitchen.config"
import { Wrapper } from "../components/core"

export default function BlogPostTemplate({ data, pageContext }) {
	const post = data.markdownRemark

	const disqusConfig = {
		url: pageContext.pagePath,
		identifier: post.id,
		title: post.frontmatter.title,
	}

	useEffect(() => {
		Prism.highlightAll()
	})

	return (
		<article>
			<Seo
				title={post.frontmatter.title}
				description={post.frontmatter.description}
			/>
			<div className="relative py-16 bg-white overflow-hidden">
				<div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
					<div
						className="relative h-full text-lg max-w-prose mx-auto"
						aria-hidden="true"
					>
						<svg
							className="absolute top-12 left-full transform translate-x-32"
							width={404}
							height={384}
							fill="none"
							viewBox="0 0 404 384"
						>
							<defs>
								<pattern
									id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
									x={0}
									y={0}
									width={20}
									height={20}
									patternUnits="userSpaceOnUse"
								>
									<rect
										x={0}
										y={0}
										width={4}
										height={4}
										className="text-gray-200"
										fill="currentColor"
									/>
								</pattern>
							</defs>
							<rect
								width={404}
								height={384}
								fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
							/>
						</svg>
						<svg
							className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
							width={404}
							height={384}
							fill="none"
							viewBox="0 0 404 384"
						>
							<defs>
								<pattern
									id="f210dbf6-a58d-4871-961e-36d5016a0f49"
									x={0}
									y={0}
									width={20}
									height={20}
									patternUnits="userSpaceOnUse"
								>
									<rect
										x={0}
										y={0}
										width={4}
										height={4}
										className="text-gray-200"
										fill="currentColor"
									/>
								</pattern>
							</defs>
							<rect
								width={404}
								height={384}
								fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
							/>
						</svg>
						<svg
							className="absolute bottom-12 left-full transform translate-x-32"
							width={404}
							height={384}
							fill="none"
							viewBox="0 0 404 384"
						>
							<defs>
								<pattern
									id="d3eb07ae-5182-43e6-857d-35c643af9034"
									x={0}
									y={0}
									width={20}
									height={20}
									patternUnits="userSpaceOnUse"
								>
									<rect
										x={0}
										y={0}
										width={4}
										height={4}
										className="text-gray-200"
										fill="currentColor"
									/>
								</pattern>
							</defs>
							<rect
								width={404}
								height={384}
								fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
							/>
						</svg>
					</div>
				</div>
				<Wrapper className="relative px-4 sm:px-6 lg:px-8">
					<div className="text-lg max-w-prose mx-auto">
						{post.frontmatter.categories.length > 1 ? (
							<span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
								{post.frontmatter.categories[0].name}
							</span>
						) : null}
						<h1 className="my-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
							{post.frontmatter.title}
						</h1>
						<div className="flex flex-row flex-nowrap justify-center items-center text-base text-center">
							<div>
								<span className="font-semibold text-gray-500">
									Written by
								</span>
								{` `}
								<span className="text-primary font-bold">
									{post.frontmatter.author}
								</span>
							</div>
							<DotsCircleHorizontalIcon
								color="#d1d1d1"
								className="mx-2 w-[20px]"
							/>
							<div>
								<span className="font-semibold text-gray-500">
									Published on
								</span>
								{` `}
								<time
									dateTime={post.frontmatter.date}
									className="text-primary font-bold"
								>
									{moment(post.frontmatter.date).format(
										"MMMM DD, YYYY"
									)}
								</time>
							</div>
						</div>
					</div>
					<div
						className="mt-6 prose prose-primary prose-lg text-gray-500 mx-auto"
						dangerouslySetInnerHTML={{ __html: post.html }}
					></div>
					{FMK.commentSystem ? (
						<div className="block px-2 lg:px-0 lg:mx-auto mt-16 w-full lg:w-1/2">
							{FMK.commentSystem === "disqus" ? (
								<Disqus config={disqusConfig} />
							) : null}
							{FMK.commentSystem === "jamcomments" ? (
								<JamComments
									pageContext={pageContext}
									apiKey={process.env.JAM_COMMENTS_API_KEY}
									domain={process.env.JAM_COMMENTS_DOMAIN}
								/>
							) : null}
						</div>
					) : null}
				</Wrapper>
			</div>
		</article>
	)
}

export const query = graphql`
	query BlogPostQuery($id: String) {
		markdownRemark(id: { eq: $id }) {
			id
			html
			excerpt(pruneLength: 280, format: PLAIN)
			frontmatter {
				categories
				date
				description
				lastmod
				slug
				tags
				title
				author
			}
		}
	}
`
