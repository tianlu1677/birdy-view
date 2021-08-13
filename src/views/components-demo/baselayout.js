import React from "react";
import {Button, Space, Popconfirm, Col, Row, Divider, Typography} from 'antd';
import { DownloadOutlined } from '@ant-design/icons';


const { Title, Paragraph, Text} = Typography
const style = { background: '#0092ff', padding: '8px 0' };


const Baselayout = () => {

  return <div className="app-container">
    <Title>Layout</Title>
    普通的hr
    <hr/>

    divider

    <Divider style={{color: 'red', borderColor: 'blue'}} orientation={'center'}>divider</Divider>

    <div>hello</div>

    <Row gutter={32} justify={'center'} align={'top'} wrap={false}>
      <Col span={6} flex='100px'>
        <div style={style}>col-6</div>
      </Col>
      <Col span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col span={6} offset={3}>
        <div style={style}>col-6</div>
      </Col>
      <Col flex="auto">
        <div style={style}>reset</div>
      </Col>



      <Row gutter={16}>
        <Col span={24}>

          <Space>
            space
            <Button>xxxx</Button>
            <Popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No">
              <Button>Confirm</Button>
            </Popconfirm>
          </Space>
        </Col>
      </Row>

    </Row>
  </div>;
};

export default Baselayout;
