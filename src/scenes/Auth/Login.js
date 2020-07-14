import React, { useState, useEffect } from 'react';
import { Form, Icon, Input, Button, Spin, notification, Alert, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import linkedin from "../../assets/image/in.png";
import facebook from "../../assets/image/facebook.png";
import twitter from "../../assets/image/twitter.png";
import gmail from "../../assets/image/gmas.png";


export const Login = ({ form, rol }) => {

	const onFinish = values => {
		console.log('Received values of form: ', values);
	};


	return (
		<div className="Login">

			<div className="circle-top">
				<div className="circle-dow"></div>
			</div>

			<div className="circle-bottom">
				<div className="circle-dow2"></div>
			</div>

			<div className="Login_content">
				<div className="Login_content--box1 box">
					<div className="Login_content--box1_title">
						Bienvenido
					</div>
					<div className="Login_content--box1_sub-title">
						Renta Autos
					</div>
					<div className="Login_content--box1_slogan">
						La mejor empresa para alquilar un auto en temporadas vacacionales
					</div>


					<Form
						name="normal_login"
						className="login-form"
						initialValues={{ remember: true }}
						onFinish={onFinish}
					>
						<Form.Item
							name="username"
							rules={[{ required: true, message: 'Por favor ingrese su correo electronico.' }]}
						>
							<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Correo electronico" />
						</Form.Item>
						<Form.Item
							name="password"
							rules={[{ required: true, message: 'Por favor ingrese su contraseña.' }]}
						>
							<Input
								prefix={<LockOutlined className="site-form-item-icon" />}
								type="password"
								placeholder="Contraseña"
							/>
						</Form.Item>
						<Form.Item>
							<Form.Item name="remember" valuePropName="checked" noStyle>
								<Checkbox>Recuerdane</Checkbox>
							</Form.Item>

							<Link className="login-form-forgot" href="">
								Olvide mi contraseña
        			</Link>
						</Form.Item>

						<Form.Item className="cont-btn">
							<Button type="primary" htmlType="submit" className="login-form-button">
								Iniciar Sesion
        			</Button>
						</Form.Item>
					</Form>
					<Link href="">Registrarse</Link>
					<div className="lin">
						<div className="lin_line"></div>
						O
						<div className="lin_line"></div>
					</div>

					<div className="net">
						<div className="net_line">
							<Link>
								<img src={facebook} />
							</Link>
						</div>
						<div className="net_line">
							<Link>
								<img src={twitter} />
							</Link>
						</div>
						<div className="net_line">
							<Link>
								<img src={gmail} />
							</Link>
						</div>
						<div className="net_line">
							<Link>
								<img src={linkedin} />
							</Link>
						</div>
					</div>
 
				</div>
				<div className="Login_content--box2 box">
					<div className="Login_content--box2--title">
						Renta tu Auto Ahora
					</div>
					<div className="Login_content--box2--slogan">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
					</div>
        </div>
			</div>
		</div>
	);
}

