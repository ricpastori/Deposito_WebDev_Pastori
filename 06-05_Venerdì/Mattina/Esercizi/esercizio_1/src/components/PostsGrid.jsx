import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import PostPost from "./PostPost";

export function PostsGrid() {
	const [posts, setPosts] = useState([]);
	const [postToSend, setPostToSend] = useState(null);

	// React Hook Form gestisce i campi, la validazione, gli errori e il reset.
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			title: "",
			body: "",
			userId: "",
		},
	});

	useEffect(() => {
		// Al caricamento del componente recuperiamo i primi 3 post e li salviamo nello stato.
		const postsData = [];
		for (let i = 1; i <= 3; i++) {
			axios
				.get(`https://jsonplaceholder.typicode.com/posts/${i}`)
				.then((response) => {
					console.log(`GET: ${response.status} ${response.statusText}`);
					postsData.push(response.data);
					if (postsData.length === 3) {
						setPosts(postsData);
					}
				});
		}
	}, []);

	const onValid = (data) => {
		// Se il form è valido, prepariamo l'oggetto post e lo passiamo a PostPost.
		const post = loadPost(data);
		setPostToSend(post);
	};

	const onInvalid = (error) => console.log(error);

	const loadPost = (formData) => {
		// Normalizziamo i dati del form nel formato atteso dalla chiamata POST.
		const post = {
			title: formData.title,
			body: formData.body,
			userId: formData.userId,
		};

		// Dopo aver letto i dati, svuotiamo il form.
		reset();

		return post;
	};

	const addPost = (newPost) => {
		// Quando la POST va a buon fine, aggiungiamo il nuovo post alla griglia.
		setPosts((prevPosts) => [...prevPosts, newPost]);
		setPostToSend(null);
	};

	return (
		<>
			<section>
				<h2>Aggiungi Post</h2>

				<form onSubmit={handleSubmit(onValid, onInvalid)} noValidate>
					{/* register collega ogni input a React Hook Form e alle sue regole. */}
					<label>
						Titolo
						<input
							{...register("title", {
								required: "Il titolo è richiesto",
							})}
							type="text"
						/>
					</label>
					{errors.title && (
						<p style={{ color: "red" }}>{errors.title.message}</p>
					)}

					<label>
						Body
						<textarea
							{...register("body", {
								required: "Il body è richiesto",
							})}
						/>
					</label>
					{errors.body && (
						<p style={{ color: "red" }}>{errors.body.message}</p>
					)}

					<label>
						User ID
						<input
							{...register("userId", {
								valueAsNumber: true,
								required: "Lo User ID è richiesto",
								min: {
									value: 1,
									message: "Lo User ID deve essere almeno 1",
								},
							})}
							type="number"
							min="1"
						/>
					</label>

					<button type="submit">Carica dati post</button>
					{errors.userId && (
						<p style={{ color: "red" }}>{errors.userId.message}</p>
					)}
				</form>
				{/* PostPost riceve il post preparato e si occupa dell'invio. */}
				<PostPost newPost={addPost} postData={postToSend} />
			</section>
			<section className="container">
				<h1>Posts</h1>
				<p>Risultato delle chiamate Get e POST a JSONPlaceholder.</p>

				{posts.length === 0 ? (
					<article aria-busy="true">Caricamento post...</article>
				) : (
					<div className="grid">
						{posts.map((post) => (
							<article key={post.id}>
								<header>Post: {post.id}</header>
								<h2>{post.title}</h2>
								<p>{post.body}</p>
							</article>
						))}
					</div>
				)}
			</section>
		</>
	);
}

export default PostsGrid;
