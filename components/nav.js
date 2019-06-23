import React from 'react'
import Link from 'next/link'

const links = [
  { href: 'https://github.com/platipus25', label: 'Github' },
  { href: '/create', label: 'Create'},
  { href: '/whatsnext', label: 'Whatsnext'},
  { href: '/static/STEM%20Camp%202019/index.html', label:'Unity Game: STEM Camp 2019'},
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => {
 return <nav>
   {console.log()}
    <ul>
      <ul>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link prefetch href={href}>
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </ul>

    <style jsx>{`
      /*:global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }*/
      nav {
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
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
}

export default Nav
