import { Flex, theme, Typography } from "antd";
import SVGLogo from "../../assets/SVGLogo";

import "./style.css";

interface Props {
    title ?: string
}

// eslint-disable-next-line react-refresh/only-export-components
export default ({title}: Props) => {
	const { token } = theme.useToken();
    const {Title} = Typography

	return (
		<div className="formTitle">
			<Flex vertical align="center" gap='middle'>
				<SVGLogo />
				<Title
					level={2}
					style={{
						color: token.colorPrimary,
						textTransform: "uppercase",
					}}
				>
					{title}
				</Title>
			</Flex>
		</div>
	);
};
