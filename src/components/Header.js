import { default as NextLink } from 'next/link'
import { RichText } from 'prismic-reactjs'

import { DocLink } from '@components'

const Header = ({ menu }) => (
  <header className="site-header">
    {/* <NextLink href="/">
      <a><div className="logo">Example Site</div></a>
    </NextLink> */}
    <MenuLinks menu={menu} />
  </header>
)

const MenuLinks = ({ menu }) => {
  if (menu) {
    return (
      <nav>
        <ul>
          {menu.data.menu_links.map((menuLink, index) => (
            <MenuLink
              menuLink={menuLink}
              key={`menulink-${index}`}
            />
          ))}
        </ul>
      </nav>
    )
  }
  return null
}

const MenuLink = ({ menuLink }) => {
  return (
    <li>
      <DocLink link={menuLink.link}>
        {RichText.asText(menuLink.label)}
      </DocLink>
    </li>
  )
}

export default Header
