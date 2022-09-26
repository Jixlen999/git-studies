//Make changes in index.js
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { store } from "./app/store"; //add this
import { Provider } from "react-redux"; //and this

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	//and wrap everything into Provider
	<Provider store={store}>
		<App />
	</Provider>
);
