import Background from "../../components/Background";
import { Flex, Form, Input, Space, Typography } from "antd";

import { FaRegUser } from "react-icons/fa6";

import "./style.css";
import Logo from "../../components/Logo";
import MyInput from "../../components/MyInput";
import MyButton from "../../components/MyButton";

// eslint-disable-next-line react-refresh/only-export-components
export default () => {
	const { Text, Link } = Typography;

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

							<MyButton
								type="primary"
								size="large"
								block
								style={{marginTop: '2rem'}}
							>
								ENTRAR
							</MyButton>
							<Space style={{ marginTop: "1rem" }}>
								<Text strong>
									Não tem conta?
									<Link style={{ marginLeft: "5px" }}>Inscreva-se</Link>
								</Text>
							</Space>
						</div>
					</Form>
				</div>
			</Flex>
		</Background>
	);
};
