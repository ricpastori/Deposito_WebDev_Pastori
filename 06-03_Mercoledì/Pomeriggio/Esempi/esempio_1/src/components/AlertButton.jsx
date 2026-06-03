export function AlertButton(props) {
  return (
  // Invocazione della callback passata dal genitore
    <button onClick={props.onAction} className="btn-alert" type="button">
      {props.label}
    </button>
  );
}

export default AlertButton