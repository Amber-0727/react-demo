import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import memoryUtils from '../../utils/memoryUtils'
import { Redirect } from 'react-router-dom'
import { Layout } from 'antd';
import Head from '../../components/header'
import SideBar from '../../components/side-bar'
import Category from '../category/category'
import Charts from '../charts/charts'
import Home from '../home/home'
import Product from '../product/product'
import Role from '../role/role'
import User from '../user/user'
const { Header, Footer, Sider, Content } = Layout;


export default class Admin extends Component {
  render() {
    const user = memoryUtils.user
    // console.log(user)
    if(!user.username) {
      console.log('user is not exsit')
      return <Redirect to="/login"/>
    }
    return (
      <Layout style={{height: "100%"}}>
        <Sider width="260px">
          <SideBar></SideBar>
        </Sider>
        <Layout>
          <Header style={{background:"#fff"}}>
            <Head></Head>
          </Header>
          <Content>
            <Switch>
              <Route path="/category" component={Category} />
              <Route path="/charts" component={Charts} />
              <Route path="/home" component={Home} />
              <Route path="/product" component={Product} />
              <Route path="/role" component={Role} />
              <Route path="/user" component={User} />
              <Redirect to="/home"/>
            </Switch>
          </Content>
          <Footer style={{color:"#999",textAlign: "center"}}>亲亲，为减少开发大大的bug数量，这边建议您使用谷歌浏览器呢～
          要是不听，这边考虑给您腿腿打断断呢～</Footer>
        </Layout>
      </Layout>
      // <div>hello,{user.username}</div>
    )
  }
}