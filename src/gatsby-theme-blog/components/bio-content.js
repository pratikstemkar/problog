import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    This is where <Styled.a href="https://pratikstemkar.me/" target="_blank">Pratik Temkar</Styled.a>
    {` `}
    goes.
    <br />
    Or whatever, you make the rules.
  </Fragment>
)
