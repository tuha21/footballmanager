import React, { Component } from 'react'
import {
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    CodeSandboxOutlined,
    SolutionOutlined,
    HomeOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import {
    Link
} from 'react-router-dom';
import * as loginAc from "../../redux/action/login"
import { connect } from 'react-redux';

const { Sider } = Layout;
const { SubMenu } = Menu;
class NavLeft extends Component {

    logout = () => {
        this.props.setIsLogin(false);
        alert("Logout successfull !");
        localStorage.removeItem("token")
    }

    render() {

        return (
            <Sider>
                <div className="logo">  <CodeSandboxOutlined spin={true} style={{ fontSize: '32px', color: '#ffffff' }} />
                    <b className="logo-text"> Clubs</b></div>
                <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline">
                    <Menu.Item key="0" icon={<HomeOutlined />}>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="1" icon={<SolutionOutlined />}>
                        <Link to="/players">Players</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<TeamOutlined />}>
                        <Link to="/clubs">Clubs</Link>
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="Account">
                        <Menu.Item key="3"><Link to="/login">Login</Link></Menu.Item>
                        <Menu.Item key="4" onClick={this.logout}><Link to="/login">Logout</Link></Menu.Item>
                        <Menu.Item key="5">Register</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9" icon={<PieChartOutlined />}>
                        Report
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        setIsLogin: (isLogin) => {
            dispatch(loginAc.setIsLogin(isLogin))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavLeft)