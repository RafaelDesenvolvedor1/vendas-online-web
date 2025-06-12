import Background from "../../components/Background";
import { Button, Flex, Form, Input, Space, theme, Typography } from "antd";

import { FaRegUser } from "react-icons/fa6";

import "./style.css";
import Logo from "../../components/Logo";
import MyInput from "../../components/MyInput";

const { useToken } = theme;

// eslint-disable-next-line react-refresh/only-export-components
export default () => {
	const { Text, Link } = Typography;
	const { token } = useToken();

	return (
		<Background>
			<Flex vertical align="flex-end" justify="center">
				<div className="containerLogin">
					<Logo title="Login" />

					<Form layout="vertical" autoComplete="off">
						<div className="containerInputs">
							<MyInput name="user" label="Usuário:">
								<Input size="large" prefix={<FaRegUser />} />
							</MyInput>

							<MyInput name="password" label="Password:">
								<Input.Password size="large" />
							</MyInput>

							<Button
								type="primary"
								size="large"
								block
								style={{ marginTop: "2rem" }}
							>
								ENTRAR
							</Button>
							<Space style={{ marginTop: "1rem" }}>
								<Text strong>
									Não tem conta?
									<Link style={{ marginLeft: '5px' }}>
										Inscreva-se
									</Link>
								</Text>
							</Space>
						</div>
					</Form>
				</div>
			</Flex>
		</Background>
	);
};
