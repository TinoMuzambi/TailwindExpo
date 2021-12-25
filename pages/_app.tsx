import { AppProps } from "next/dist/shared/lib/router/router";
import { useEffect, StrictMode } from "react";

import "../styles/globals.css";

const MyApp: Function = ({ Component, pageProps }: AppProps) => {
	useEffect(() => {
		const disableReactDevTools = (): void => {
			const noop = (): void => undefined;
			const DEV_TOOLS = (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__;

			if (typeof DEV_TOOLS === "object") {
				for (const [key, value] of Object.entries(DEV_TOOLS)) {
					DEV_TOOLS[key] = typeof value === "function" ? noop : null;
				}
			}
		};
		if (process.env.NODE_ENV === "production") disableReactDevTools();
	}, []);

	return (
		<StrictMode>
			<Component {...pageProps} />
		</StrictMode>
	);
};

export default MyApp;
