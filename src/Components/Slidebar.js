import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionLoyalty from 'material-ui/svg-icons/action/loyalty';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {fullWhite} from 'material-ui/styles/colors';
import Img from '../images/photo.jpeg'
import styled from 'styled-components'
import 简历 from '../images/简历.png'
import 作品 from '../images/作品.png'
import {Link} from 'react-router-dom'

class Slidebar extends React.Component {
  render () {
    const style = {
      color: 'white',
      width: '16vw'
    };
    return (
      <MuiThemeProvider>
        <Nav>
          <Myphoto>
            <Photo src={Img} alt=""/>
          </Myphoto>
          <H2>田爱玲的简历</H2>
          <Link to='/'>
            <FlatButton label="我的简历" style={style} icon={<ActionLoyalty color={fullWhite} />} />
          </Link>
          <Link to='/Work'>
            <FlatButton label="作品展示" style={style} icon={<ActionAssignment color={fullWhite} />} />
          </Link>
        </Nav>
      </MuiThemeProvider>
    )
  }
}

export default Slidebar;

const Nav = styled.div`
  background-color: rgb(0, 188, 212);
  width: 16vw;
  height: 100vh;
  color: #fff;
  padding-top: 2rem;
  text-align: center;
`
const Myphoto = styled.div`
  width: 12rem;
  height: 13rem;
  overflow: hidden;
  border-radius: 100%;
  margin: 0 auto;
`
const Photo = styled.img`
  width: 12rem;
`
const H2 = styled.h2`
  border-bottom: 2px solid rgb(255, 226, 0);
  padding-bottom: 1rem;
`
const Label = styled.label`
  font-size: 20px;
`
