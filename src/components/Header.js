import React from 'react';
import { Menu, Button, Carousel } from 'antd';
import {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,

    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,

} from '@ant-design/icons';

import './index.css';

const { SubMenu } = Menu;

class Header extends React.Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };
    state = {
        collapsed: false,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <>
                <div className="header">
                    <Menu onClick={this.handleClick} className="nav1" selectedKeys={[this.state.current]} mode="horizontal">

                        <Menu.Item key="app" >
                            <AppstoreOutlined />
                         Inicio
                         </Menu.Item>
                        <SubMenu
                            title={
                                <span className="submenu-title-wrapper">
                                    <SettingOutlined />
              Tienda Online
            </span>
                            }
                        >
                            <Menu.ItemGroup title="Item 1">
                                <Menu.Item key="setting:1">Nenas</Menu.Item>
                                <Menu.ItemGroup title="Item 2">
                                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                                </Menu.ItemGroup>
                                <Menu.Item key="setting:2">Nenes</Menu.Item>
                            </Menu.ItemGroup>

                        </SubMenu>
                        <Menu.Item key="alipay">
                            <a href="https://www.facebook.com/bblandiabolsos" target="_blank" rel="noopener noreferrer">
                                Facebook
                         </a>
                        </Menu.Item>
                        <Menu.Item key="mail">
                            <MailOutlined />
          Contacto
        </Menu.Item>

                        <Button type="primary" ghost>
                            Registrate
                         </Button>

                    </Menu>
                </div>

                <Carousel autoplay>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                </Carousel>
                <div style={{ width: 256 }}>
                    <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                    </Button>
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={this.state.collapsed}
                    >
                        <Menu.Item key="1">
                            <PieChartOutlined />
                            <span>Option 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <DesktopOutlined />
                            <span>Option 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <ContainerOutlined />
                            <span>Option 3</span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <MailOutlined />
                                    <span>Navigation One</span>
                                </span>
                            }
                        >
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                                <span>
                                    <AppstoreOutlined />
                                    <span>Navigation Two</span>
                                </span>
                            }
                        >
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <SubMenu key="sub3" title="Submenu">
                                <Menu.Item key="11">Option 11</Menu.Item>
                                <Menu.Item key="12">Option 12</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                    </Menu>
                </div>
            </>
        );
    }
}


export default Header