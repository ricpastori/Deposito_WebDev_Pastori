import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function PostList() {
	const [posts, setPosts] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
			setPosts(response.data.slice(0, 6));
		});
	});

	return (
		<>
			{posts.map((post) => (
				<article key={post.id}>
					<header>{post.title}</header>
					<p>{post.body.substring(0, 50)}...</p>
					<footer>
						<button type="button" onClick={() => navigate(`/posts/${post.id}`)}>
							Vedi dettaglio
						</button>
					</footer>
				</article>
			))}
		</>
	);
}

export default PostList;
