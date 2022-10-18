import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    LinkedinOutlined,
    HomeOutlined,
    UsergroupAddOutlined,
    GlobalOutlined,
    MessageOutlined,
    BellOutlined,
    HolderOutlined,
    UserOutlined,
    
  } from '@ant-design/icons';
  import { Layout, Menu } from 'antd';
  import React, { useState } from 'react';
  const { Header, Sider, Content } = Layout;
  
  const Head = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
                {
                    key: '1',
                    icon: <LinkedinOutlined />,
                    label: 'LinkedIn',
                  },
                {
                key: '2',
                icon: <HomeOutlined />,
                label: 'Home',
              },
              {
                key: '3',
                icon: <UsergroupAddOutlined />,
                label: 'My Network',
              },
              {
                key: '4',
                icon: <GlobalOutlined />,
                label: 'Jobs',
              },
              {
                key: '5',
                icon: <MessageOutlined />,
                label: 'Messaging',
              },
              {
                key: '6',
                icon: <BellOutlined />,
                label: 'Notification',
              },
              {
                key: '7',
                icon: <HolderOutlined />,
                label: 'Work',
              },
              {
                key: '8',
                icon: <UserOutlined />,
                label: 'Me',
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 500,
            }}
          >
            Looking for a Job
          </Content>
        </Layout>
      </Layout>
    );
  };
  export default Head;