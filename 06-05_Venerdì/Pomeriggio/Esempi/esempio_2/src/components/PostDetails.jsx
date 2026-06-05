import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function PostDetails() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [post, setPost] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then((response) => {
				setPost(response.data);
				setLoading(false);
			});
	});

	return (
		<>
			{loading ? (
				<h3>Caricamento in corso...</h3>
			) : (
				<>
					<button type="button" onClick={() => navigate(-1)}>
						Torna indietro
					</button>
					<article>
						<h1>{post.title}</h1>
						<p>{post.body}</p>
						<footer>
							<p>Id autore: {post.userId}</p>
						</footer>
					</article>
				</>
			)}
		</>
	);
}

export default PostDetails;
