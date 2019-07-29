import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './login.less'
import imgMap from './images/map.png'
import { Form, Icon, Input, Button, message } from 'antd'
import { login } from '../../../src/api'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'

const Item  = Form.Item // 不能写在import 之前
/**
 * 登录组件  
 */ 
class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault(); // 防止表单自动提交
    const form = this.props.form // 得到form对象
    // 获取表单项的输入数据
    // const values = form.getFieldsValue()
    // console.log(values)
    // 对所有的表单字段进行检验
    form.validateFields(async (err, values) => {
      if (!err) {
        const { data } = await login(values)
        // console.log(data)
        storageUtils.setUser(data) // 保存在local中
        memoryUtils.user = data; // 保存在内存中 admin第一次加载时从内存中取user
        message.success('登录成功', 4)

        // replace() 不需要返回； push()可以返回； goback()返回上一级；
        this.props.history.replace('/')
      }
    });
  }
  pwdValidator = (rule, value, callback) => {
    if(!value) {
      callback('密码不得为空')
    } else if(value.length < 4) {
      callback('密码长度不得小于4位')
    } else if(value.length > 12) {
      callback('密码长度不得大于12位')
    } else {
      callback()
    }
  }
  render() {
    // 判断用户是否登录，如果已经登录，跳转到管理界面
    const user = memoryUtils.user
    if(user && user.username) {
      // this.props.history.replace('/')
      return <Redirect to="/" />
    }
    const form = this.props.form // 得到具有强大功能的的form对象
    const { getFieldDecorator } = form
    return (
      <div className="login">
        <header className="login-header">
        </header>
        <section className="login-content">
          <img src={imgMap} alt="" className="img-map"/>
          <div className="login-box">
            <h2 className="login-title">用户登录</h2>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Item>
              {
                getFieldDecorator('username', { // 配置对象： 属性是特定的一些名称
                  // 声明式验证：直接使用别人定义好的验证规则进行验证
                  rules: [
                    { required: true,message: '请输入用户名' },
                    { min: 4, message: '用户名至少4位' },
                    { max: 12, message: '用户名最多12位' },
                    { pattern:/^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字和下划线组成' }
                  ],
                  // validateTrigger: 'onBlur',
                  // initialValue:'admin' // 初始默认值
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
                  // 自定义验证 validator-验证器
                  rules: [{ validator:this.pwdValidator }],
                  // validateTrigger: 'onBlur'
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
 * 包装Form组件，Login是被包装组件，生成一个新的组件：Form(Login)
 * 新组件会向Form组件传递一个强大的对象属性：form
 */
const WrapLogin = Form.create()(Login)  // 高阶组件：Form.create()返回一个方法，传入Login，得到一个新的组件 
export default WrapLogin 