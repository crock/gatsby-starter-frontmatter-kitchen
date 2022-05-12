import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
	const { site } = useStaticQuery(
		graphql`
			query SITE_SETTINGS_QUERY {
				site {
					siteMetadata {
						title
						tagline
						description
						siteUrl
						author
					}
				}
			}
		`
	)

	return {
		siteTitle: site.siteMetadata.title,
		tagline: site.siteMetadata.tagline,
		metaDescription: site.siteMetadata.description,
		siteUrl: site.siteMetadata.siteUrl,
		author: site.siteMetadata.author,
	}
}

export default useSiteMetadata
