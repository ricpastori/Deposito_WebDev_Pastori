import { useParams } from "react-router-dom";

export function NameDetails() {
	const { name } = useParams();

	return (
		<div>
			<h2>Ciao {name}</h2>
		</div>
	);
}

export default NameDetails;
