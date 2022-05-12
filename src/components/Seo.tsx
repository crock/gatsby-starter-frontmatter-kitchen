import React from "react"
import Helmet from "react-helmet"
import useSiteMetadata from "../hooks/useSiteMetadata"

type HeadMetaItem = {
	name?: string
	property?: string
	content: string
}

interface IHead {
	title: string
	description?: string
	lang?: string
	meta?: [HeadMetaItem]
}

const Seo: React.FC<IHead> = ({
	description,
	lang = "en",
	meta = [],
	title,
}) => {
	const { siteTitle, metaDescription, tagline, author } = useSiteMetadata()

	const md = description || metaDescription || tagline

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={`%s | ${siteTitle}`}
			meta={[
				{
					name: `description`,
					content: md,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: md,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:card`,
					content: `summary_large_image`,
				},
				{
					name: `twitter:creator`,
					content: author,
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: md,
				},
			].concat(meta)}
		/>
	)
}

export default Seo
