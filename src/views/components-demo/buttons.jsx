import React from "react";
import {Button, Typography} from 'antd';
import { DownloadOutlined } from '@ant-design/icons';


import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
  HeartTwoTone
} from '@ant-design/icons';

const { Title, Paragraph, Text} = Typography

const Buttons = () => {

  return <div className="app-container">
    <Button type="primary" block>primary</Button>
    <Button>default button</Button>
    <Button type='text' size="small">text</Button>
    <Button type='link' size={"middle"}>link</Button>
    <Button type='dashed' size={"large"}>dashed</Button>
    <Button shape="circle">circle</Button>
    <Button shape={'round'}>round</Button>

    <Button danger disabled>danger disabled</Button>

    <Button type={'primary'} icon={<DownloadOutlined />}>primary with icon</Button>

    <Button loading={true} onClick={() => alert('good')}>loading</Button>


    <div style={{fontSize: '30px'}}>

      <HomeOutlined />
      <SettingFilled />
      <SmileOutlined twoToneColor="#eb2f96"  />
      <HeartTwoTone twoToneColor="#eb2f96" />

      <SyncOutlined spin />
      <SmileOutlined rotate={180} />
      <LoadingOutlined />

    </div>


    <div style={{marginTop: '30px'}}>
      <Title>Introduction</Title>
      <Paragraph mark>
        Goood

        <Text strong>
          uniform the user interface specs for internal background projects, lower the unnecessary
          cost of design differences and implementation and liberate the resources of design and
          front-end development
        </Text>.

      </Paragraph>

      <Title level={2} code copyable>设计资源111</Title>
      <Paragraph copyable>This is a copyable text.</Paragraph>
      <Paragraph copyable={{ tooltips: false }}>Hide Copy tooltips.</Paragraph>
      <Text editable copyable ellipsis>ellipsisellipsisellipsisellipsisellipsisellipsisellipsisellipsisellipsisellipsisellipsisellipsisellipsisellipsisellipsisellipsisellipsisellipsisellipsis</Text>
    </div>
  </div>;
};

export default Buttons;
