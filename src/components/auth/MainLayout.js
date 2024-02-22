import {
    LogoutOutlined,
    LockOutlined, DashboardOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, DownOutlined, EditOutlined
} from '@ant-design/icons';
import { Dropdown, Image, Layout, Menu, Popconfirm, Space, } from 'antd';
import React, { useMemo, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../store/services/authService';
const { Header, Sider, Content } = Layout;



function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}


const MainLayout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [key, setKey] = useState('1');
    const history = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);

    useMemo(() => {
        const currentPath = history.pathname;
        const pathToKeyMapping = {
            '': '1',
            'user': '2',
        };
        const currentPathWithoutParams = currentPath && currentPath.split('/');
        setKey(pathToKeyMapping[currentPathWithoutParams[1]] || '1');
    }, [history.pathname]);

    const items = [
        getItem(<NavLink to={'/'}>Dashboard</NavLink>, '1', <DashboardOutlined />),
        getItem(<NavLink to={'/user'}>User</NavLink>, '2', <UserOutlined />),
    ];

    const menuItems = [
        {
            key: '1',
            label: (
                <Link to="/">
                    Edit Profile
                </Link>
            ),
            icon: <EditOutlined />,
        },
        {
            key: '2',
            label: (
                <Link to="/">
                    Change Password
                </Link>
            ),
            icon: <LockOutlined />,
        },
        {
            key: '3',
            label: (
                <Popconfirm
                    title="Delete the task"
                    description="Are you sure you want to Logout?"
                    onConfirm={() => dispatch(logoutUser({ navigate }))}
                    onCancel={() => console.log("cancel")}
                    okText="Yes"
                    cancelText="No"
                >
                    <LogoutOutlined className='pr-2.5' />Logout
                </Popconfirm>
            ),
        },

    ];

    return (
        <Layout className='overflow-hidden h-screen'>
            <Sider
                breakpoint="xxl"
                trigger={null}
                collapsible
                collapsed={collapsed}
                onCollapse={(collapsed, type) => {
                    setCollapsed(collapsed);
                }}
                className={`transition-all duration-500 h-screen overflow-auto`} style={{ background: '#fff', height: "100vh" }}>

                <div className={` text-center py-4 pb-2 mx-auto`}>
                    <Image width={collapsed ? 60 : 80} preview={false} src={logo} alt='Logo' />
                </div>
                <Menu
                    theme={"light"}
                    mode="inline"
                    defaultSelectedKeys={[key]}
                    items={items}
                />
            </Sider>
            <Layout className='custom-scrollbar'>
                <Header className="p-0 flex justify-between items-center px-2 bg-white" >
                    <div className='flex items-center'>
                        {React.createElement(
                            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                            {
                                className: "trigger",
                                onClick: () => setCollapsed(!collapsed),
                            }
                        )}
                    </div>
                    <Dropdown className='pr-4'
                        menu={{
                            items: menuItems,
                        }}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                {user && user.first_name + " " + user.last_name}
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                    className='overflow-auto'
                >
                    {children}
                </Content>
            </Layout>
        </Layout >
    );
};
export default MainLayout;