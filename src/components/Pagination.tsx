import React from "react"
import { Link } from "gatsby"

export default function Pagination({
	currentPage,
	numPages,
	limit,
	skip,
	totalPosts,
}) {
	return (
		<nav
			className="flex items-center justify-between my-4"
			aria-label="Pagination"
		>
			<div className="hidden sm:block">
				<p className="text-sm text-gray-700 dark:text-white">
					Showing{" "}
					<span className="font-medium">{skip === 0 ? 1 : skip}</span>{" "}
					to{" "}
					<span className="font-medium">
						{totalPosts < limit ? totalPosts : skip + limit}
					</span>{" "}
					of <span className="font-medium">{totalPosts}</span> posts
				</p>
			</div>
			<div className="flex-1 flex justify-between sm:justify-end">
				{currentPage >= 3 ? (
					<Link
						to={`/blog/${currentPage - 1}`}
						className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
					>
						Previous
					</Link>
				) : (
					<Link
						to={`/blog`}
						className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
					>
						Previous
					</Link>
				)}
				{currentPage < numPages ? (
					<Link
						to={`/blog/${currentPage + 1}`}
						className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
					>
						Next
					</Link>
				) : null}
			</div>
		</nav>
	)
}
