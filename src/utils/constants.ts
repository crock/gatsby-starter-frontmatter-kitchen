import config from "../../gatsby-config"

export const isBrowser = typeof window !== "undefined"
export const isLocal =
	isBrowser && window.location.host.split(":").shift() === "localhost"

export const siteUrl =
	process.env.NODE_ENV === "development"
		? "http://localhost:8000"
		: config.siteMetadata.siteUrl

export const contentTypes = [
	"application/json",
	"application/x-www-form-urlencoded",
]
