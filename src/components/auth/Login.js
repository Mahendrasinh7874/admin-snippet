import React, { useEffect } from 'react'
import logo from '../../assets/img/logo.svg';
import { Form, Image, Input, Button, Select, Checkbox, Layout, Flex, Row, Col, Card, Typography, DatePicker } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { actionLogin } from '../../store/services/authService';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loginLoader } = useSelector(state => state.auth);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);


  const onFinish = values => {
    console.log('Received values of form: ', values);
    dispatch(actionLogin({ values, navigate }))
  };


  return (
    <Flex id="login-container" className='min-h-screen h-full' align='center' justify='center'>
      <Card className='min-w-[30%]  border border-1-[#443527] shadow-md rounded-md'>
        <Flex vertical className=' pb-4' align='center'>
          <Image width={100} preview={false} alt="Logo" src={logo} />
          <Typography.Title level={3} className='text-xl tracking-widest	'>Login</Typography.Title>

        </Flex>
        <Form
          name="normal_login"
          className="login-form"
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your Email!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon pr-2" />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon pr-2" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Row align={'middle'} className='mb-7'>
            <Col xl={12} md={24} >

              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox size="small">Remember me</Checkbox>
              </Form.Item>
            </Col>
            <Col xl={12} md={24} align="right">


              <Form.Item noStyle>  <a className="login-form-forgot" href="">
                Forgot password?
              </a>
              </Form.Item></Col>
          </Row>

          <Form.Item >
            <Button loading={loginLoader} htmlType="submit" className="login-form-button">
              Login
            </Button>

          </Form.Item>
        </Form>
      </Card>
    </Flex>
  )
}
export default Login
