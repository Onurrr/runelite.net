import React from 'react'
import { NavLink as ActiveLink } from 'redux-first-router-link'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faCogs, faNewspaper, faFileAlt, faFont, faStar } from '@fortawesome/fontawesome-free-solid'
import { faGithub, faDiscord, faPatreon } from '@fortawesome/fontawesome-free-brands'
import hero from '../_data/hero'
import links from '../_data/links'
import {stargazersSelector} from '../redux/modules/git'
import {connect} from 'react-redux'

class Navigation extends React.Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = { isOpen: false }
  }

  toggle () {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render () {
    return (
      <Navbar color='white' light expand='md' fixed='top'>
        <NavbarBrand tag={ActiveLink} to='/'><img src={hero.logo} alt='Logo' width='30' height='30' /> Home</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink tag={ActiveLink} to='/features'><FontAwesomeIcon icon={faCogs} /> Features</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ActiveLink} to='/blog'><FontAwesomeIcon icon={faNewspaper} /> Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='https://github.com/runelite/runelite/wiki'><FontAwesomeIcon icon={faFileAlt} /> Wiki</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret><FontAwesomeIcon icon={faFont} /> API</DropdownToggle>
              <DropdownMenu >
                <DropdownItem href='https://static.runelite.net/api/runelite-api/'>RuneLite API</DropdownItem>
                <DropdownItem href='https://static.runelite.net/api/runelite-client/'>RuneLite Client API</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href={links.discord}><FontAwesomeIcon icon={faDiscord} /> Discord</NavLink>
            </NavItem>
          </Nav>
          <Nav navbar className='ml-auto'>
            <NavItem>
              <NavLink href={links.patreon}><FontAwesomeIcon icon={faPatreon} /> Become a patron</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='https://github.com/runelite'><FontAwesomeIcon icon={faGithub} /> GitHub</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='https://github.com/runelite/runelite/stargazers'>
                <FontAwesomeIcon icon={faStar} /> {this.props.stars} Stargazers
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default connect(
  (state, props) => ({
    stars: stargazersSelector(state, props)
  })
)(Navigation)
