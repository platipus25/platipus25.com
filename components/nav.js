import React from 'react'
import Link from 'next/link'

const links = [
  { href: 'https://github.com/segmentio/create-next-app', label: 'Github' },
  { href: '/create', label: 'Create'}
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = ({thispage, pages}) => (
    {pages = pages.map(link => { // it's okay to be in the render because it only renders once?
    link.key = `nav-link-${link.href}-${link.label}`
    return link
    })}
  <nav>
    <ul>
      <li>
        <Link prefetch href="/">
          <a>{thispage.label}</a>
        </Link>
      </li>
      <ul>
        {pages.map(({ key, href, label }) => (
          <li key={key}>
            <Link prefetch href={href}>
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
)

export default Nav
