import { NavLink, Route, Routes } from "react-router-dom";
import PostDetails from "./components/PostDetails";
import PostList from "./components/PostList";

import "./App.css";

function App() {
	const highlightActive = ({ isActive }) => ({
		color: isActive ? "gold" : "black",
		fontWeight: isActive ? "bold" : "normal",
	});

	return (
		<>
			<nav>
				<NavLink to="/" style={highlightActive}>
					Home
				</NavLink>
			</nav>
			<Routes>
				<Route path="/" element={<PostList />} />
				<Route path="/posts/:id" element={<PostDetails />} />
			</Routes>
		</>
	);
}

export default App;
