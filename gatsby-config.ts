import { GatsbyConfig } from "gatsby"
import colors from 'tailwindcss/colors'
import FMK from './FrontmatterKitchen.config'

const config: GatsbyConfig = {
	siteMetadata: {
		title: "gatsby-starter-frontmatter-kitchen",
		tagline: "Gatsby.js v4.x.x Starter Site",
		description:
			"A Typescript starter blog styled with Tailwind and sourced from markdown files",
		author: "@gatorverse",
		siteUrl: FMK.siteUrl,
	},
	plugins: [
		(!FMK.analytics.disableAll && FMK.analytics.services.google.tagManagerGlobalId) ? {
			resolve: "gatsby-plugin-google-tagmanager",
			options: {
				id: FMK.analytics.services.google.tagManagerGlobalId,
				includeInDevelopment: false,
				defaultDataLayer: { platform: "gatsby" },
				enableWebVitalsTracking: true,
			}
		} : null,


		(!FMK.analytics.disableAll && FMK.analytics.services.google.universalTrackingId) ? {
			resolve: "gatsby-plugin-google-analytics",
			options: {
				trackingId: FMK.analytics.services.google.universalTrackingId,
			},
		} : null,

		(!FMK.advertising.disableAll && FMK.advertising.services.adsense.clientId) ? {
			resolve: `gatsby-plugin-google-adsense`,
			options: {
				googleAdClientId: FMK.advertising.services.adsense.clientId,
				head: true,
			},
		} : null,

		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/blog`,
				name: `blog`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/page`,
				name: `page`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/data`,
				name: `data`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/images`,
				name: `images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/static`,
				name: `images`,
			},
		},
		`gatsby-plugin-image`,
		"gatsby-plugin-sharp",
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
			  extensions: [`.mdx`, `.md`],
			},
		},
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					`gatsby-remark-copy-linked-files`,
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 1200,
							backgroundColor: "transparent",
							disableBgImageOnAlpha: true,
							withWebp: true,
							linkImagesToOriginal: false,
							quality: 70,
						},
					},
				],
			},
		},
		`gatsby-transformer-json`,
		`gatsby-plugin-postcss`,
		`gatsby-plugin-styled-components`,

		// JamComments.com
		 FMK.commentSystem === "jamcomments" ? {
			resolve: '@jam-comments/gatsby',
			options: {
			  api_key: process.env.JAM_COMMENTS_API_KEY,
			  domain: process.env.JAM_COMMENTS_DOMAIN
			}
		} : null,

		// Disqus Comments
		FMK.commentSystem === "disqus" ? {
			resolve: `gatsby-plugin-disqus`,
			options: {
				shortname: `example`,
			},
		} : null,

		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-advanced-sitemap`,
		{
			resolve: "gatsby-plugin-robots-txt",
			options: {
				host: FMK.siteUrl,
				sitemap: `${FMK.siteUrl}/sitemap.xml`,
				env: {
					development: {
						policy: [{ userAgent: "*", disallow: ["/"] }],
					},
					production: {
						policy: [{ userAgent: "*", allow: "/" }],
					},
				},
			},
		},
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: "Frontmatter Kitchen",
				short_name: "FM Kitchen",
				start_url: "/",
				background_color: colors.gray[50],
				theme_color: colors.blue[500],
				display: "minimal-ui",
				icon: `${__dirname}/src/images/icon.png`,
				cache_busting_mode: "none",
			},
		},
		`gatsby-plugin-gatsby-cloud`,
		`gatsby-plugin-netlify`,
	].filter(Boolean),
}

export default config
