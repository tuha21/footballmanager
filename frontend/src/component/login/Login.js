import React, { Component } from 'react'
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import LoginService from '../../service/LoginService';
import { connect } from 'react-redux';
import * as isLoginAc from '../../redux/action/login'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    login = () => {
        var {username, password} = this.state
        LoginService.login(username, password)
        .then(response => response.text())
        .then(result => {
            localStorage.setItem("token", result);
            this.props.setIsLogin(true)
            alert("Login successfull!")
        })
        .catch(error => {
            console.log(error)
            alert("Username or Password is not correct !")
        });
    }

    changeForm = (e) => {
        var { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        var { username, password } = this.state;

        return (
            <Row gutter={16}>
                <Col className="pt-5" span={8} offset={8}>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                    // onFinish={this.onFinish}
                    // onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input name="username" value={username} onChange={this.changeForm} />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password name="password" value={password} onChange={this.changeForm} />
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" onClick={this.login}>
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLogin: state.isLogin
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setIsLogin : isLogin => {
            dispatch(isLoginAc.setIsLogin(isLogin))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)