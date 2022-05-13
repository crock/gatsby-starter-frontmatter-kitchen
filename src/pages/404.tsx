import React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"

const NotFoundPage = () => {
	return (
		<>
			<Seo
				title="404: Page Not Found"
				description="The page you are trying to reach does not exist. Click the browser's back button to go back."
			/>
			<h1 className="font-black text-2xl mb-3 mt-0">404: Page Not Found</h1>
			<p className="font-normal text-base leading-6">
				Looks like you took a wrong turn, why not{" "}
				<Link to="/" className="underline">
					go back{" "}
				</Link>{" "}
				and try something else?
			</p>
		</>
	)
}

export default NotFoundPage
