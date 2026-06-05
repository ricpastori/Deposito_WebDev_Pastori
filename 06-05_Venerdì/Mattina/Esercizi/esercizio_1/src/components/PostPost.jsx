import axios from "axios";
import { useState } from "react";

export function PostPost({ newPost, postData }) {
	// message controlla il testo mostrato dopo il tentativo di invio.
	const [message, setMessage] = useState(null);

	const sendPost = () => {
		// Se il form non ha ancora preparato un post valido, non facciamo la chiamata.
		if (!postData) {
			return;
		}

		// Rimuoviamo eventuali messaggi precedenti prima di iniziare una nuova POST.
		setMessage(null);

		axios
			.post(`https://jsonplaceholder.typicode.com/posts`, postData)
			.then((response) => {
				console.log(`POST: ${response.status} ${response.statusText}`);

				// Passiamo il post creato al padre, che lo aggiunge alla griglia.
				newPost(response.data);
				setMessage({
					text: "Post inviato correttamente",
					color: "green",
				});
			})
			.catch((error) => {
				console.log(error);

				// In caso di errore mostriamo un feedback semplice sotto al bottone.
				setMessage({
					text: "Errore durante l'invio del post",
					color: "red",
				});
			});
	};

	return (
		<section>
			<h2>Aggiungi Post</h2>
			<button onClick={sendPost} type="button" disabled={!postData}>
				Invia post
			</button>
			{/* Usiamo un <p> per mostrare conferma o errore, come nel form. */}
			{message && <p style={{ color: message.color }}>{message.text}</p>}
		</section>
	);
}

export default PostPost;
