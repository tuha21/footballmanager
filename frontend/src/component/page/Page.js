import { Layout, Breadcrumb } from 'antd';
import React from 'react';
import NavLeft from './NavLeft';
import "./page.css"
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import Players from '../player/Players';
import Login from '../login/Login';
import PrivateRouter from '../router/PrivateRouter';
import Clubs from '../club/Clubs';
import * as loginAc from "../../redux/action/login"
import { connect } from 'react-redux';


const { Header, Content, Footer } = Layout;
class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            breadcrumb: ""
        }
    }

    changeBread = (bread) => {
        this.setState({
            breadcrumb: bread
        })
    }

    render() {

        var { breadcrumb } = this.state
        var {isLogin} = this.props

        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Router>
                    <NavLeft />
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{ padding: 0 }} />
                        <Content style={{ margin: '0 16px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>{breadcrumb}</Breadcrumb.Item>
                            </Breadcrumb>
                            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                                <Switch>
                                    <Route exact path="/">
                                        Home
                                    </Route>
                                    {/* <Route exact path="/players">
                                        <Players />
                                    </Route> */}
                                    <PrivateRouter exact path="/players" isLogin={isLogin} component={Players}>
                                    </PrivateRouter>
                                    <PrivateRouter exact path="/clubs" isLogin={isLogin} component={Clubs}>
                                    </PrivateRouter>
                                    <Route exact path="/login">
                                        <Login />
                                    </Route>
                                </Switch>
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Router>
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLogin: state.isLogin
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setisLogin: isLogin => {
            dispatch(loginAc.setIsLogin(isLogin))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)