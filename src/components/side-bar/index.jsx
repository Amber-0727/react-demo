import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu, Icon } from 'antd';
import menuList from '../../config/menuConfig'
import './index.less'
import nezha from '../../assets/images/nezha.png'
const pic = nezha
const { SubMenu } = Menu
class SideBar extends Component {
  /**
   *  map + 递归 
   */
  // getMenuNodes = (menuList) => {
  //   return menuList.map((item) => {
  //     // 判断是否存在二级菜单
  //     return item.children ? 
  //     // 有二级菜单
  //     <SubMenu key={item.key}
  //       title={
  //       <span>
  //         <Icon type={item.icon} />
  //         <span>{item.title}</span>
  //       </span>
  //     }>
  //       {/* 递归调用 */}
  //       {this.getMenuNodes(item.children)}
  //     </SubMenu> 
  //     : 
  //     // 无二级菜单
  //     (
  //     <Menu.Item key={item.key}>
  //       <Link to={item.key}>
  //         <Icon type={item.icon} />
  //         <span>{item.title}</span>
  //       </Link>
  //     </Menu.Item>
  //     )
  //   })


  /**
   * reduce + 递归
   */ 
  getMenuNodes = (menuList) => {
    return menuList.reduce((total, curVal) =>{
      // console.log(total, curVal)
      if(!curVal.children) {
        total.push((
          <Menu.Item key={curVal.key}>
            <Link to={curVal.key}>
              <Icon type={curVal.icon} />
              <span>{curVal.title}</span>
            </Link>
          </Menu.Item>
        ))
      } else {
    const path = this.props.location.pathname
        const cItem = curVal.children.find(cItem => cItem.key === path)
        if(cItem) {
          this.openKey = curVal.key
        }
        total.push((
          <SubMenu key={curVal.key}
            title={
            <span>
              <Icon type={curVal.icon} />
              <span>{curVal.title}</span>
            </span>
          }>
            {this.getMenuNodes(curVal.children)}
          </SubMenu> 
        ))
      }
      return total
    }, [])
  }
  /**
   * 在第一次render()之前做准备
   * 为第一个render()准备数据（必须是同步的）
   */
  componentWillMount() {
    this.menuNodes = this.getMenuNodes(menuList)
  }
  render() {
    const path = this.props.location.pathname
    const openKey = this.openKey
    console.log(openKey)
    return (
      <div className="side-bar-box">
        <Link to="/" className="side-bar-header">
          <img src={pic} alt="" className="pic"/>
          <span className="system-name">没想好叫啥管理后台</span>
        </Link>

        <Menu
          selectedKeys={[path]}
          defaultOpenKeys={[openKey]}
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
          </SubMenu>*/}
          {this.menuNodes}
        </Menu>
      </div>

    )
  }
}

export default withRouter(SideBar)