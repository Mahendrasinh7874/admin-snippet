import { PlusOutlined } from "@ant-design/icons";
import {
    Button,
    Card,
    Col,
    Divider,
    Form,
    Input,
    Row,
    Select,
    Space,
    Typography,
} from "antd";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";


const { Text } = Typography;

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
};

const CreateUser = (props) => {


    const [disable, setDisable] = useState(true);
    const [selectedOption, setSelectedOption] = useState(null);
    const [areaConcernValue, setAreaConcernValue] = useState("");
    const [roles, setRoles] = useState();
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const inputRef = useRef(null);
    const Navigate = useNavigate();

    const [form] = Form.useForm();




    const handleChange = (value, KeyValuePair) => {
        setSelectedOption(KeyValuePair);
        setAreaConcernValue(KeyValuePair);
    };



    const onNameChange = (event, index) => {
        setName(event.target.value);
    };


    const onFinish = (values) => {
        console.log({ values });
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <Fragment>
            <Row gutter={[0, 24]}>
                <Col span={24}>
                    <Card
                        className="main-card "
                        title={
                            <>
                                <Row align="middle" justify="">
                                    <Col span={2}>
                                        <h2 className="text-black text-base">Create User</h2>
                                    </Col>
                                </Row>
                            </>
                        }
                        style={{
                            width: "100%",
                            minHeight: "60vh",
                        }}
                    >
                        <Row gutter={[16, 16]}>
                            <Col span={24}>
                                <Form
                                    autoComplete="off"
                                    requiredMark={true}
                                    form={form}
                                    layout="vertical"
                                    size="large"
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                >
                                    <Row gutter={[32, 0]}>
                                        <Col span={12}>
                                            <Form.Item
                                                colon={false}
                                                label="First Name"
                                                name="first_name"
                                                normalize={(value) =>
                                                    value.replace(/[^a-zA-Z]/g, "").trim()
                                                }
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: "Please input your first name!",
                                                    },
                                                ]}

                                            >
                                                <Input
                                                    autoFocus="none"
                                                    type={"text"}
                                                    placeholder="first name"
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>
                                            <Form.Item
                                                label="Last Name"
                                                colon={false}
                                                name="last_name"
                                                normalize={(value) =>
                                                    value.replace(/[^a-zA-Z]/g, "").trim()
                                                }
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: "Please enter last name!",
                                                    },
                                                ]}
                                            >
                                                <Input
                                                    autoFocus="none"
                                                    type={"text"}
                                                    placeholder="last name"
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>
                                            <Form.Item
                                                label="Email"
                                                normalize={(value) => value.trim()}
                                                colon={false}
                                                name="email"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: "Please enter email!",

                                                    },
                                                    ({ getFieldValue }) => ({
                                                        validator(_, value) {
                                                            const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
                                                            if (value && (!isEmail)) {
                                                                return Promise.reject('Please enter a valid email!');
                                                            }
                                                            return Promise.resolve();
                                                        },
                                                    }),
                                                ]}
                                            >
                                                <Input
                                                    autoFocus="none"
                                                    type={"text"}
                                                    placeholder="Email"
                                                />
                                            </Form.Item>
                                        </Col>

                                        <Col span={12}>
                                            <Form.Item
                                                label="Mobile"
                                                normalize={(value) => value.trim()}
                                                colon={false}
                                                name="phone"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: "Please enter mobile!",
                                                    },
                                                    ({ getFieldValue }) => ({
                                                        validator(_, value) {
                                                            if (value && value.length !== 10) {
                                                                return Promise.reject(
                                                                    new Error("Invalid Mobile Number!")
                                                                );
                                                            }
                                                            return Promise.resolve();
                                                        },
                                                    }),
                                                ]}
                                            >
                                                <Input
                                                    maxLength={2}
                                                    autoFocus="none"
                                                    type={"number"}
                                                    placeholder="Mobile"
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>
                                            <Form.Item
                                                normalize={(value) => value.trim()}
                                                label="Password"
                                                colon={false}
                                                name="password"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: "Please enter password!",
                                                    },
                                                    ({ getFieldValue }) => ({
                                                        validator: (_, value) => {
                                                            if (value && value.length < 8) {
                                                                return Promise.reject(
                                                                    new Error(
                                                                        "Please enter minimum 8 characters for Password"
                                                                    )
                                                                )
                                                            }
                                                            return Promise.resolve()
                                                        }
                                                    })
                                                ]}
                                            >
                                                <Input.Password placeholder="Password" />
                                            </Form.Item>
                                        </Col>


                                        <Col span={24}>
                                            <Form.Item normalize={(value) => value.trim()}>
                                                <Button
                                                    // loading={addUserLoading}
                                                    align="center"
                                                    htmlType="submit"
                                                    className="primary"
                                                    size="large"
                                                    style={{ width: 140, marginTop: "30px" }}
                                                >
                                                    Save
                                                </Button>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};



export default CreateUser;
