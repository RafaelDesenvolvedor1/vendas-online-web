import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ConfigProvider } from "antd";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
	<ConfigProvider
		theme={{
			token: {
				colorPrimary: "#1B6194",

				colorTextSecondary: "#00AABD",
        colorLink: '#00AABD',
        colorLinkHover: '#1B6194'
			},
		}}
	>
		<App />
	</ConfigProvider>,
);
