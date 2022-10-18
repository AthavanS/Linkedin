// import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import React from 'react';
const { Footer } = Layout;

const Foot = () =>{
    return(
        <Layout>
        <Footer
        style={{
          textAlign: 'center',
         
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
      </Layout>
    )
}
export default Foot;