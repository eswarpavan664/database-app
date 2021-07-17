/* eslint-disable no-this-before-super */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React, {  Component } from 'react';
import '../App.css';
import { Layout, Avatar, Menu, Breadcrumb, Button } from 'antd';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
import Icon from '@ant-design/icons';
import Questionuploadbox  from '../components/Questionuploadbox';
import 'antd/dist/antd.css';
 
const { Header, Footer, Sider, Content } = Layout;

class Dashboard extends React.Component{
   constructor(props){
      super(props)
      this.state={
        cource:"welcome",
        branch:"",
        option:""
      }

   }
   passprops=(a,b,c)=>{
      this.setState({
        cource:a,
        branch:b,
        option:c
      })
   }
   render(){
     console.log(this.state.cource+" "+this.state.branch+" "+this.state.option )
    return (
      <div className="App">
        <Layout>
          <Header style={{ padding: 10 }}>
            <Avatar style={{ float: 'right' }} src='./dp.png' />
            <Title style={{ color: 'white' }} level={3}>ABCD TEST</Title>
          </Header>
          <Layout>
            <Sider>
              <Menu
                defaultSelectedKeys={['Dashboard']}
                mode="inline"
              >
                <Menu.Item key='Dashboard'>
                  Dashboard
              </Menu.Item>
  
  
  
                <SubMenu
                  title={
                    <span>
                      <Icon type="mail" />
                      <span>GATE</span>
                    </span>
                  }
                >
                   <Menu.ItemGroup key='GATE ECE' title='GATE ECE'>
                    <Menu.Item key='G-pece' onClick={()=>this.passprops("GATE","ECE","practice")}> Practice Question</Menu.Item>
                    <Menu.Item key='G-tece'  onClick={()=>this.passprops("GATE","ECE","test")}> Test Questions</Menu.Item>
                  </Menu.ItemGroup>
                  <Menu.ItemGroup key='GATE IN' title='GATE IN'>
                  <Menu.Item key='G-pin'   onClick={()=>this.passprops("GATE","IN","practice")}> Practice Question</Menu.Item>
                    <Menu.Item key='G-tin'   onClick={()=>this.passprops("GATE","IN","test")}> Test Questions</Menu.Item>
                  </Menu.ItemGroup>
                  <Menu.ItemGroup key='GATE EEE' title='GATE EEE'>
                  <Menu.Item key='G-peee'   onClick={()=>this.passprops("GATE","EEE","practice")}> Practice Question</Menu.Item>
                    <Menu.Item key='G-teee'   onClick={()=>this.passprops("GATE","EEE","test")}> Test Questions</Menu.Item>
                  </Menu.ItemGroup>
                </SubMenu>
  
                <SubMenu
                  title={
                    <span>
                      <Icon type="mail" />
                      <span>ISRO</span>
                    </span>
                  }
                >
                  <Menu.ItemGroup key='ISRO ECE' title='ISRO ECE'>
                    <Menu.Item key='ISRO-pece'   onClick={()=>this.passprops("ISRO","ECE","practice")}> Practice Question</Menu.Item>
                    <Menu.Item key='ISRO-tece'  onClick={()=>this.passprops("ISRO","ECE","test")}> Test Questions</Menu.Item>
                  </Menu.ItemGroup>
  
                   <Menu.ItemGroup key='ISRO EEE' title='ISRO EEE'>
                  <Menu.Item key='ISRO-peee'   onClick={()=>this.passprops("ISRO","EEE","practice")}> Practice Question</Menu.Item>
                    <Menu.Item key='ISRO-teee'   onClick={()=>this.passprops("ISRO","EEE","test")}> Test Questions</Menu.Item>
                  </Menu.ItemGroup>
                </SubMenu>
  
                <SubMenu
                  title={
                    <span>
                      <Icon type="mail" />
                      <span>ESE</span>
                    </span>
                  }
                >
                     <Menu.ItemGroup key='ESE ECE' title='ESE ECE'>
                    <Menu.Item key='ESE-pece'   onClick={()=>this.passprops("ESE","ECE","practice")}> Practice Question</Menu.Item>
                    <Menu.Item key='ESE-tece'   onClick={()=>this.passprops("ESE","ECE","test")}> Test Questions</Menu.Item>
                  </Menu.ItemGroup>
                  <Menu.ItemGroup key='ESE IN' title='ESE IN'>
                  <Menu.Item key='ESE-pin'   onClick={()=>this.passprops("ESE","IN","practice")}> Practice Question</Menu.Item>
                    <Menu.Item key='ESE-tin'  onClick={()=>this.passprops("ESE","IN","test")}> Test Questions</Menu.Item>
                  </Menu.ItemGroup>
                  <Menu.ItemGroup key='ESE EEE' title='ESE EEE'>
                  <Menu.Item key='ESE-peee'   onClick={()=>this.passprops("ESE","EEE","practice")}>  Practice Question</Menu.Item>
                    <Menu.Item key='ESE-teee'  onClick={()=>this.passprops("ESE","EEE","test")}> Test Questions</Menu.Item>
                  </Menu.ItemGroup>
                </SubMenu>
              </Menu>
  
              
  
  
  
            </Sider>
            <Layout>  
              <Content style={{ padding: '0 50px',backgroundColor:'gray',paddingBottom:'20%'}}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff', padding: 24, minHeight: 580,borderRadius:10 }}>
                   <Questionuploadbox cource={this.state.cource} branch={this.state.branch} option={this.state.option} />
                </div>
              </Content>
               
              <Footer style={{ textAlign: 'center' }}>copyright by ABCD TEST </Footer>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
   }
}

export default  Dashboard;
