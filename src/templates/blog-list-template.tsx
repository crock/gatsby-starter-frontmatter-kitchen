import React from "react"
import { graphql, Link } from "gatsby"
import Seo from "../components/Seo"
import Pagination from "../components/Pagination"
import moment from "moment"

const BlogList = ({ data, pageContext }) => {
	const posts = data.allMarkdownRemark.edges.map((edge) => edge.node)

	return (
		<>
			<Seo title={`Blog`} />
			<div className="px-4 lg:px-0 lg:container mx-auto relative">
				<h1 className="text-black dark:text-white font-black text-4xl md:text-6xl mb-8">
					Blog
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{posts.length
						? posts.map((post) => (
								<div
									key={post.id}
									className="relative bg-white dark:bg-gray-800 text-black dark:text-white rounded shadow p-4 h-auto min-h-[300px]"
								>
									<h3 className="font-bold text-xl mb-2">
										{post.frontmatter.title}
									</h3>
									<div className="flex flex-col flex-nowrap justify-start items-start mb-4">
										<div className="mr-1 font-normal">Written by <span className="text-primary font-semibold">{post.frontmatter.author}</span></div>
										{` `}
										<div className="mr-1 font-normal">Published on <span className="text-primary font-semibold"><time dateTime={post.frontmatter.date}>{moment(post.frontmatter.date).format("MMMM DD, YYYY")}</time></span></div>
									</div>
									<p
										className="font-light text-sm leading-8"
									>{post.excerpt}</p>
									<Link
										to={`/blog/${post.frontmatter.slug}`}
										className="bg-primary-light hover:bg-primary text-white py-2 px-3 text-lg font-semibold uppercase rounded-sm mt-4 absolute bottom-4"
									>
										Read More
									</Link>
								</div>
						  ))
						: null}
				</div>
				<Pagination {...pageContext} />
			</div>
		</>
	)
}

export const query = graphql`
	query blogListQuery($skip: Int!, $limit: Int!) {
		allMarkdownRemark(limit: $limit, skip: $skip) {
			edges {
				node {
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
		}
	}
`

export default BlogList
