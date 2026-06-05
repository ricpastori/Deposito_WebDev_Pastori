export function Figlio({ username, onUpdateNome }) {
	return (
		<>
			<p>Username ricevuto dal padre: {username}</p>
			<button type="button" onClick={() => onUpdateNome("Luigi")}>
				Cambia nome in Luigi
			</button>
		</>
	);
}
