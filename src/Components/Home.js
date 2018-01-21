import React from 'react'
import Slidebar from './Slidebar'
import Content from './Content'
import styled from 'styled-components'

class Home extends React.Component {
  render () {
    return (
      <Wrap>
        <Slidebar />
        <Content />
      </Wrap>
    )
  }
}

export default Home;

const Wrap = styled.div`
  display: flex;
`
