import React from "react";
import {
  Button,
  Menu,
  Image,
  List,
  Card,
  Empty,
  Collapse,
  Badge,
  Avatar,
  Pagination,
  Dropdown,
  Breadcrumb,
  Typography,
  Popover,
  Alert,
  message,
  Statistic,
  Row,
  Col,
  AutoComplete,
  Input,
  Cascader,
  Checkbox,
  DatePicker

} from 'antd';
import {DownloadOutlined} from '@ant-design/icons';
import {HashRouter as Router, Route, Switch, Link, withRouter} from 'react-router-dom';


import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
  HeartTwoTone
} from '@ant-design/icons';

const {Title, Paragraph, Text} = Typography
const {Panel} = Collapse;


function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const cities =[
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];


const menu = (
  <Menu>
    <Menu.Item key='1'>
      hello
    </Menu.Item>
    <Menu.Item key='2'>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item key='3'>
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    </Menu.Item>

  </Menu>
)
const Nav = () => {

  return <div className="app-container">
    <Title>Nav</Title>

    <Breadcrumb>
      <Breadcrumb.Item key="home">
        <Link to="/">Home3</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item key="home1">
        <Link to="/">Home2</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item key="home2">
        <Link to="/">Home1</Link>
      </Breadcrumb.Item>
    </Breadcrumb>

    <DatePicker
      onChange={(date, dateString) => {console.log('value', date, dateString)}}
      showTime
      allowClear
      format={['DD/MM/YYYY']}
    />

    <Dropdown overlay={menu} trigger={['click']}>
      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        Click me
      </a>
    </Dropdown>

    <Pagination
      showTitle
      showQuickJumper
      defaultCurrent={6} total={500} onChange={(page, pageSize) => console.log('page', page, pageSize)}/>
    <Avatar>xxxx</Avatar>
    <Badge count={3}>
      <Avatar shape="square" size="large"/>
    </Badge>

    <Card
      title={"default size card"}
      size={'default'}
      bordered
      hoverable
      loading={false}
      bodyStyle={{backgroundColor: 'red'}}

      extra={<div>
        <a href="https://baidu.com">baidu</a>
      </div>}
    >
      <p>xxxx</p>
      <p>xxxx</p>
      <p>xxxx</p>
      <p>xxxx</p>
      <p>xxxx</p>
    </Card>

    <Collapse defaultActiveKey={['1', '2', '3']} onChange={callback}>
      <Panel header="This is panel header 1" key="1">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 2" key="2">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 3" key="3">
        <p>{text}</p>
      </Panel>
    </Collapse>


    <Empty
      imageStyle={{
        height: 60,
      }}
      description={'xxxx'}
    />

    <Image
      width={200}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    >
    </Image>

    <List
      header={<div>Header</div>}
      footer={<div>footer</div>}
      bordered
      dataSource={['a', 'b']}
      renderItem={item => {
        return <List.Item>
          <Typography.Text copyable> item </Typography.Text>
        </List.Item>
      }}
    />

    <Popover content={<div><Button onClick={() => message.error('xxxx')}>xxxxx</Button><p>2</p></div>} title={'hover'}>
      <Button>Hover me</Button>
    </Popover>

    <Row gutter={16}>
      <Col span={6}>
        <Card>
        <Statistic title={'users'} value={1111} precision={2}
                   prefix={'%'}
                   suffix={'$'}
        ></Statistic>
        </Card>
      </Col>
    </Row>

    <AutoComplete
    options={[{value: 'xxx'}, {value: 'xxxxxx'}]}
    style={{width: 200}}
    allowClear
    autoFocus
    defaultOpen
    defaultValue={'xxx'}
    onSelect={(data) => {console.log(data)}}
    onChange={(data) => console.log('onchange', data)}
    >
      <Input.Search size="large" placeholder="input here" />
    </AutoComplete>

    <Cascader options={cities} onChange={(d) => console.log('d', d)} placeholder="Please select" />,

    <Checkbox onChange={(x) => console.log('x', x.target.checked)} >checkbox</Checkbox>


  </div>;
};

export default Nav;
