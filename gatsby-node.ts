import { GatsbyNode } from "gatsby"
import path from "path"

export const onCreateBabelConfig: GatsbyNode["onCreateBabelConfig"] = ({
	actions,
}) => {
	actions.setBabelPlugin({
		name: "babel-plugin-prismjs",
		options: {
			languages: [
				"javascript",
				"css",
				"html",
				"python",
				"yaml",
				"bash",
				"jsx",
				"php",
				"tsx",
				"typescript",
			],
			plugins: ["show-language", "line-numbers"],
			theme: "okaidia",
			css: true,
		},
	})
}

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
	getConfig,
	actions,
}) => {
	if (getConfig().mode === "production") {
		actions.setWebpackConfig({
			devtool: false,
		})
	}
}

export const onCreateNode: GatsbyNode["onCreateNode"] = async ({
	node,
	getNode,
	actions,
}) => {
	const { createNodeField } = actions
	if (node.internal.type === `MarkdownRemark`) {
		const parent = getNode(node.parent)
		let collection = parent.sourceInstanceName
		createNodeField({
			node,
			name: "collection",
			value: collection,
		})
	}
}

export const createPages: GatsbyNode["createPages"] = async ({
	graphql,
	actions,
	reporter,
}) => {
	const { createRedirect, createPage } = actions

	createRedirect({
		fromPath: "/crocolytics.js",
		toPath: "https://cdn.splitbee.io/sb.js",
		statusCode: 200,
	})

	createRedirect({
		fromPath: "/_croc/*",
		toPath: "https://hive.splitbee.io/:splat",
		statusCode: 200,
	})

	const { errors, data } = await graphql(`
		{
			posts: allMarkdownRemark(
				filter: {
					fields: { collection: { eq: "blog" } }
					frontmatter: { draft: { eq: false } }
				}
				sort: { fields: frontmatter___date, order: DESC }
			) {
				edges {
					node {
						id
						frontmatter {
							date
							slug
						}
					}
				}
			}
		}
	`)

	if (errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`)
		return
	}

	if (data) {
		const posts = data.posts.edges.map((edge) => edge.node)

		// Create blog-list pages
		const postsPerPage = 6
		const numPages = Math.ceil(posts.length / postsPerPage)
		Array.from({ length: numPages }).forEach((_, i) => {
			createPage({
				path: i === 0 ? `/blog` : `/blog/${i + 1}`,
				component: path.resolve(
					"./src/templates/blog-list-template.tsx"
				),
				context: {
					limit: postsPerPage,
					skip: i * postsPerPage,
					numPages,
					currentPage: i + 1,
					totalPosts: posts.length,
				},
			})
		})

		// Creste post pages
		const postTemplate = path.resolve(
			"./src/templates/blog-post-template.tsx"
		)
		posts.forEach((post) => {
			const path = `/blog/${post.frontmatter.slug}`

			createPage({
				path,
				component: postTemplate,
				context: {
					id: post.id,
					pagePath: path,
				},
			})
		})
	}
}
