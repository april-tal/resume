import React from 'react';
import styled from 'styled-components'
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 基本信息 from '../images/基本信息.png'
import 联系方式 from '../images/联系方式.png'
import 技能 from '../images/技能.png'
import 自我评价 from '../images/自我评价-小icon.png'
import 工作经历 from '../images/工作经历.png'

class Content extends React.Component{
  render(){
    return(
      <MuiThemeProvider>
        <Home>
          <div className='home-cover'>
            <UL>
              <Li>
                <dl className='personal'>
                  <H3><IMG src={基本信息} alt=""/>基本信息</H3>
                  <dd><span>个人信息:</span>田爱玲/25岁/女</dd>
                  <dd><span>毕业院校：</span>北京财贸职业学院</dd>
                  <dd><span>学历：</span>大专</dd>
                  <dd><span>专业：</span>电子商务</dd>
                  <dd><span>应聘岗位：</span>web前端工程师</dd>
                  <dd><span>现居住地：</span>河北秦皇岛</dd>
                </dl>
              </Li>
              <Li>
                <dl className='personal'>
                  <H3><IMG src={联系方式} alt=""/>联系方式</H3>
                  <dd><span>联系电话：</span>18230351229</dd>
                  <dd><span>邮箱：</span>741870945@qq.com</dd>
                  <dd><span>笔记：</span><Link href='https://april-tal.github.io/mynote/' target="_blank">
                    https://april-tal.github.io/gitbook/
                  </Link></dd>
                  <dd><span>github：</span>
                    <Link href='https://github.com/april-tal' target="_blank">
                      https://github.com/april-tal
                    </Link>
                  </dd>
                </dl>
              </Li>
              <Li>
                <dl className='personal'>
                  <H3><IMG src={技能} alt=""/>主要技能</H3>
                  <dd>
                    <FlatButton label="HTML" primary={true} />
                    <FlatButton label="CSS" primary={true} />
                    <FlatButton label="JS" primary={true} />
                    <FlatButton label="jquery" primary={true} />
                    <FlatButton label="Bootstrap" primary={true} />
                    <FlatButton label="github" primary={true} />
                    <FlatButton label="React" primary={true} />
                    <FlatButton label="ES6" primary={true} />
                    <FlatButton label="Ajax" primary={true} />
                  </dd>
                </dl>
              </Li>
              <Li>
                <dl className='personal'>
                  <H3><IMG src={工作经历} alt=""/>工作经历</H3>
                  <dd>
                    {/*<p>
                      <Span>2014.07-2015.03</Span>
                      <Span>渤韩商贸</Span>
                      <Span>销售</Span>
                    </p>*/}
                    <p>
                      <Span>2015.06-2017.02</Span>
                      <Span>秦皇岛商之翼网络科技有限公司</Span>
                      <Span>web前端工程师</Span>
                    </p>
                  </dd>
                </dl>
              </Li>
              <Li>
                <dl className='personal'>
                  <H3><IMG src={自我评价} alt=""/>自我评价</H3>
                  <dd>
                    <p>关注前端前沿技术，基本功扎实，熟悉应用jQuery，熟悉HTML、CSS3、ES6、React等；熟练应用常见的前端框架并掌握其原理，有组件化的思想，担当且创新；较强的学习能力和适应能力，良好的独立分析解决问题能力和逻辑分析思维；良好的团队沟通协作力和服务意识，较强的工作执行力和抗压能力，愿与公司一同发展。</p>
                  </dd>
                </dl>
              </Li>
            </UL>
          </div>
        </Home>
      </MuiThemeProvider>
    )
  }
}


export default Content

const Home = styled.div`
  width: 84vw;
  background: #fff;
  padding: 0.4rem 2rem;
`
const DL = styled.dl`
  margin: 0;
`
const UL = styled.ul`
  list-style: none;
`
const Li = styled.li`
  margin-bottom: 1.6rem;
  border-bottom: 1px solid #333;
  padding-left: 1rem;
`
const Link = styled.a`
  color: #333;
  :visited {color: #333};
  :hover { border-bottom: 1px solid #333};
`
const IMG = styled.img`
  width: 2rem;
  margin-bottom: -0.2rem;
  margin-left: -1rem;
  margin-right: 1.4rem;
`
const H3 = styled.h3`
  font-size: 1.4rem;
`
const Span = styled.span`
  margin: 0 1rem;
`
