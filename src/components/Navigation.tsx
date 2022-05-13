import React from "react"
import { Link } from "gatsby"

const links = [
    {
        id: 1,
        internal: true,
        path: '/',
        title: 'Home'
    },
    {
        id: 2,
        internal: true,
        path: '/blog',
        title: 'Blog'
    },
    {
        id: 3,
        internal: false,
        url: 'https://github.com/crock/gatsby-starter-frontmatter-kitchen',
        target: '_blank',
        title: 'GitHub'
    },
]

export default function Navigation() {


    return (
        <div className="px-4 lg:px-0 lg:container mx-auto">
            <nav className="my-2 flex flex-row flex-nowrap justify-start items-center">
                { links.length ? links.map(link => {

                    return link.internal ? (
                        <Link
                            key={link.id}
                            className="underline font-semibold text-primary hover:text-primary-light py-1 px-2"
                            to={link.path}
                        >
                            {link.title}
                        </Link>
                    ) : (
                        <a
                            key={link.id}
                            className="underline font-semibold text-primary hover:text-primary-light py-1 px-2"
                            target={link.target}
                            href={link.url}
                        >
                        {link.title}
                        </a>
                    )
                }) : null }
            </nav>
        </div>
    )
}