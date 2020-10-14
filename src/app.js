import React from "react";
import { render } from "react-dom";

const pet = (props) => {
	return React.createElement("div", {}, [
		React.createElement("h1", {}, props.name),
		React.createElement("h2", {}, props.animal),
		React.createElement("h3", {}, props.breed),
	]);
};

const App = () => {
	return React.createElement("div", { id: "somthing-important" }, [
		React.createElement("h1", {}, "Adopt Me!"),
		React.createElement("h1", {}, "Adopt Me!"),
		React.createElement(pet, {
			name: "luna",
			animal: "dog",
			breed: "havanese",
		}),

		React.createElement(pet, {
			name: "luna",
			animal: "dog",
			breed: "havanese",
		}),
		React.createElement(pet, {
			name: "luna",
			animal: "dog",
			breed: "havanese",
		}),
	]);
};

render(React.createElement(App), document.getElementById("root"));
