import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd';
import menuList from '../../config/menuConfig'
import './index.less'
import nezha from '../../assets/images/nezha.png'
const pic = nezha
const { SubMenu } = Menu
export default class SideBar extends Component {
  getMenuNodes = (menuList) => {
    return menuList.map((item) => {
      console.log(item)
      /**
        icon: "pie-chart"
        key: "/home"
        title: "首页"
       */
      return item.children ? 
      <SubMenu key={item.key}
        title={item.title}
        icon={item.icon}>
        {/* <Menu.Item key={item.key}>
          <Link to={item.key}>
            <Icon type={item.icon} />
            <span>{item.title}</span>
          </Link>
        </Menu.Item> */}
      </SubMenu> 
      : 
      (
      <Menu.Item key={item.key}>
        <Link to={item.key}>
          <Icon type={item.icon} />
          <span>{item.title}</span>
        </Link>
      </Menu.Item>
      )
    })
  }
  render() {
    return (
      <div className="side-bar-box">
        <Link to="/" className="side-bar-header">
          <img src={pic} alt="" className="pic"/>
          <span className="system-name">没想好叫啥管理后台</span>
        </Link>

        <Menu
          defaultSelectedKeys={['home']}
          // defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
        >
        {/* 
          <Menu.Item key="home">
            <Link to="/home">
              <Icon type="pie-chart" />
              <span>首页</span>
            </Link>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>商品</span>
              </span>
            }
          >
            <Menu.Item key="category">
              <Link to="/category">
                <span>
                  <Icon type="mail" />
                  <span>品类管理</span>
                </span>
              </Link>
            </Menu.Item>
            <Menu.Item key="product">
            <Link to="/product">
              <span>
                <Icon type="mail" />
                <span>商品管理</span>
              </span>
            </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="user">
            <Link to="/user">
              <Icon type="pie-chart" />
              <span>用户管理</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="role">
            <Link to="/role">
              <Icon type="pie-chart" />
              <span>角色管理</span>
            </Link>
          </Menu.Item> */}

          {this.getMenuNodes(menuList)}
        </Menu>
      </div>

    )
  }
}