import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hello
        </h1>
        <p>Welcome to shu marketing associates.</p>
        <p>Now go build something great.</p>
        <Link to={prefixLink('/page-2/')}>Go to page 2</Link>
      </div>
    )
  }
}
