import React from 'react'
import Slidebar from './Slidebar'
import Project from './Project'
import styled from 'styled-components'

class Work extends React.Component {
  render () {
    return (
      <Wrap>
        <Slidebar />
        <Project />
      </Wrap>
    )
  }
}

export default Work;

const Wrap = styled.div`
  display: flex;
`
