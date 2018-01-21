import React from 'react'
import styled from 'styled-components'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import codester from '../images/codester.png'
import 爱自驾 from '../images/爱自驾.png'
import unify from '../images/unify.png'
import 咔咔 from '../images/kaka.png'
import 百姓缘 from '../images/百姓缘.png'
import ascars from '../images/ascars.png'
import jdcart from '../images/jdcart.png'
import cnode from '../images/cnode.png'

class Project extends React.Component {
  state = {
    project:[
      {
        id: 1,
        title: 'Codester',
        photo: codester,
        add: '源码地址',
        demo: '演示demo',
        introduce: '响应式布局网站',
        addhref: 'https://github.com/april-tal/codester',
        demohref: 'https://april-tal.github.io/codester'
      },
      {
        id: 2,
        title: '爱自驾',
        photo: 爱自驾,
        add: '源码地址',
        demo: '演示demo',
        introduce: '旅游App，包含基本的逻辑功能，购物车、轮播、标签页等等。',
        addhref: 'https://github.com/april-tal/zijiayou',
        demohref: 'https://april-tal.github.io/zijiayou'
      },
      {
        id: 3,
        title: 'unify',
        photo: unify,
        add: '源码地址',
        demo: '演示demo',
        introduce: 'PC端购物网站，jquery开发，',
        addhref: 'https://github.com/april-tal/unify',
        demohref: 'https://april-tal.github.io/unify'
      },
      {
        id: 4,
        title: '百姓缘大药房',
        photo: 百姓缘,
        add: '源码地址',
        demo: '演示demo',
        introduce: 'Jquery',
        addhref: 'https://github.com/april-tal/baixingyuan',
        demohref: 'https://april-tal.github.io/baixingyuan'
      },
      {
        id: 5,
        title: '咔咔APP',
        photo: 咔咔,
        add: '源码地址',
        demo: '演示demo',
        introduce: 'React',
        addhref: 'https://github.com/april-tal/kakaApp',
        demohref: 'https://april-tal.github.io/kakaApp'
      },
      {
        id: 6,
        title: 'ascars',
        photo: ascars,
        add: '源码地址',
        demo: '演示demo',
        introduce: 'Jquery',
        addhref: 'https://github.com/april-tal/ascars',
        demohref: 'https://april-tal.github.io/ascars'
      },
      {
        id: 7,
        title: 'JD购物车',
        photo: jdcart,
        add: '源码地址',
        demo: '演示demo',
        introduce: 'Jquery',
        addhref: 'https://github.com/april-tal/jdcart',
        demohref: 'https://april-tal.github.io/jdcart'
      },
      {
        id: 8,
        title: 'cnode',
        photo: cnode,
        add: '源码地址',
        demo: '演示demo',
        introduce: 'Jquery',
        addhref: 'https://github.com/april-tal/cnode',
        demohref: 'https://april-tal.github.io/cnode'
      }
    ]
  }
  render () {
    const { project } = this.state
    return (
      <MuiThemeProvider>
        <Wrap>
          {project.map((item,index) => (

              <Blogdesc>
                <ProductImg>
                  <Img src={ item.photo } alt=""/>
                </ProductImg>
                <Introduce>
                  <H3>{ item.title }</H3>
                  <p>
                    { item.introduce }
                  </p>
                </Introduce>
                <LinkTo>
                  <RaisedButton href={ item.addhref } target="_blank" label={ item.add } />
                  <RaisedButton href={ item.demohref } target="_blank" label={ item.demo } />
                </LinkTo>
              </Blogdesc>

          ))}
        </Wrap>
      </MuiThemeProvider>
    )
  }
}

export default Project;

const Wrap = styled.div`
  background: #fff;
  width: 84vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  padding: 2% 3%;
`
const Blogcard = styled.div`
  width: 20%;
  margin: 0 auto;
  margin: 0 2%;
  margin-top: 10px;
  padding: 1rem 0;
`
const Introduce = styled.div`
  margin: 0 2rem;
  height: 35%;
  overflow: hidden;
`
const Blogdesc = styled.div`
  box-shadow: 1px 2px 9px 1px #9ea8dd;
  color: #777;
  position: relative;
  width: 21%;
  height: 48%;
  margin: 0 2%;
  margin-bottom: 2%;
`
const H3 = styled.h3`
  text-align: center;
  color: #31374a;
`
const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`
const LinkTo = styled.div`
  margin: 0 1rem;
  margin-top: 15px;
  overflow: hidden;
  display: flex;
  position: absolute;
  bottom: 5px;
  RaisedButton {
    margin-right: 5px;
  }
`
const ProductImg = styled.div`
  width: 100%;
  height: 60%;
  margin: 0 auto;
  overflow: hidden;
`
