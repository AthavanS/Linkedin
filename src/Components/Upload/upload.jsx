import 'antd/dist/antd.css';
import './custom.css'
import { UploadOutlined } from '@ant-design/icons';
import React from 'react';
import { Button,Upload,Card,Col,Row ,Input,Form,Select} from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';


const { Option } = Select;

const Page = () => {

  return (
    <div className='main'>
      <Card className='maincard'>
    <h3 className='pageheader'>2-Entity Details Capture</h3>
   <br></br> 

            <Row className="documentuploadrow1">
            <Col md={{span: 5 }}sm={5} xs={24} lg={5} >
   <Upload  className="upload">

    <Button className='uploadbtn'showUploadList={false} name="logo" listType="picture" beforeUpload={() => false} accept="image/x-png,image/jpeg">
      <div className='uploadicon'>  <UploadOutlined /></div>
      <div className='insidelabel-one'>Entity PAN<span style={{color:"black"}}>*</span></div>
    <div className='insidelabel-two'>
   (PNG/JPEG maximum size 3MB)</div></Button>
     </Upload>
    </Col>

    </Row>

    <Row className='documentuploadrow2'>
      <Col>
    <div className='antd-icon'>
    <CheckCircleFilled/>
    </div>
    </Col>
      <Col md={6} lg={6}>
 <br></br>

 <h3 >CO-APPLICANT DETAILS</h3>


 <br></br>
 </Col>

 <Col md={17} lg={17}>
 <hr className='coapplicanthr' ></hr>
 <br></br>
 

 </Col>
 </Row>
 
<br></br>
<Row  className='documentuploadrow1'>
  <Col className='collone'md={{span: 5 }}   sm={12} xs={24} lg={5}>
    <br></br>
    <Upload  className="upload">

<Button className='uploadbtn'showUploadList={false} name="logo" listType="picture" beforeUpload={() => false} accept="image/x-png,image/jpeg">
  <div className='uploadicon'>  <UploadOutlined /></div>
  <div className='insidelabel-one'>Co-Applicant 2 PAN<span style={{color:"black"}}>*</span></div>
<div className='insidelabel-two'>
(PNG/JPEG maximum size 3MB)</div></Button>
 </Upload>

    </Col>
    
    
    
    
    
    
   
  <Col  className='colltwo'  md={{span: 5, offset: 1 }}   sm={12} xs={24} lg={5}>
    <br></br>
    <Upload  className="upload">

<Button className='uploadbtn'showUploadList={false} name="logo" listType="picture" beforeUpload={() => false} accept="image/x-png,image/jpeg">
  <div className='uploadicon'>  <UploadOutlined /></div>
  <div className='insidelabel-one'>Co-Applicant 2 Aadhaar<span style={{color:"black"}}>*</span></div>
<div className='insidelabel-two'>
(PNG/JPEG maximum size 3MB)</div></Button>
 </Upload>

    

  </Col>
  </Row>
    </Card>
    </div>
);
};
export default Page;