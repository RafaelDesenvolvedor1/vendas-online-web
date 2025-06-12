import type { ReactNode } from "react";
import "./style.css";


type Bg = {
	children: ReactNode;
};

// eslint-disable-next-line react-refresh/only-export-components
export default ({ children }: Bg) => {
	return (
		<section>
			{children}
		</section>
	);
};
