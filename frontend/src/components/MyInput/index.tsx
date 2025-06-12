import { Form } from "antd";
import type { ReactNode } from "react";

interface InputProps {
	name: string;
	label: string;
	children: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export default ({ children, name, label }: InputProps) => {
	return (
		<Form.Item name={name} label={label}>
			{children}
		</Form.Item>
	);
};
