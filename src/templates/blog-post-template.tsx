import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Prism from "prismjs"
import Seo from "../components/Seo"
import { Disqus } from "gatsby-plugin-disqus"
import JamComments from "@jam-comments/gatsby/ui"
import moment from "moment"
import { DotsCircleHorizontalIcon } from "@heroicons/react/solid"
import FMK from "../../FrontmatterKitchen.config"

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
			<div className="py-16 overflow-hidden h-full">
				<div className="px-4 lg:px-0 lg:container mx-auto relative">
					<div className="text-lg max-w-prose mx-auto">
						{post.frontmatter.categories.length > 1 ? (
							<span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
								{post.frontmatter.categories[0].name}
							</span>
						) : null}
						<h1 className="my-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
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
						className="mt-6 prose prose-primary prose-lg text-gray-500 dark:text-white mx-auto"
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
				</div>
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
