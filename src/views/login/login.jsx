import React, { Component } from 'react'
import './login.less'
import imgMap from './images/map.png'
import { Form, Icon, Input, Button } from 'antd'
const Item  = Form.Item // 不能写在import 之前
/**
 * 登录组件  
 */ 
class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault(); // 防止表单自动提交
    const form = this.props.form // 得到form对象
    // 获取表单项的输入数据
    const values = form.getFieldsValue()
    console.log(values)
  }
  render() {
    const form = this.props.form // 得到具有强大功能的的form对象
    const { getFieldDecorator } = form
    return (
      <div className="login">
        <header className="login-header"></header>
        <section className="login-content">
          <img src={imgMap} alt="" className="img-map fl"/>
          <div className="login-box fr">
            <h2 className="login-title">用户登录</h2>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Item>
              {
                getFieldDecorator('username', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="请输入用户名"
                  />,
                )
              }
              </Item>
              <Item>
              {
                getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="请输入密码"
                  autoComplete="false"
                />
                )
              }
              </Item>
              <Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Login
                </Button>
              </Item>
            </Form>
          </div>
        </section>
      </div>
    )
  }
}
/**
 * 包装Form组件，生成一个新的组件：Form(Login)
 * 新组件会向Form组件传递一个强大的对象属性：form
 */
const WrapLogin = Form.create()(Login)  // 高阶组件：Form.create()返回一个方法，传入Login，得到一个新的组件 
export default WrapLogin 