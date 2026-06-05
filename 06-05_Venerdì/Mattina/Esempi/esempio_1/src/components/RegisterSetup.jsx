import { useForm } from 'react-hook-form';

export function RegisterSetup() {
  // Estraiamo la funzione register dal modulo useForm
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onValid = (data) => console.log(data)

  const onInvalid = (error) => console.log(error)

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      {/* Registriamo l'input con la chiave 'email' */}
      <input {...register("email")} type="email" placeholder="Inserisci email" />
      <button type="submit">Conferma</button><br />
      <input {...register("username", {
        required: "Il nome utente è richiesto",
        minLength: {
          value: 4,
          message: "Il nome deve contenere almeno 4 caratteri"
        }
      })} />
      {errors.username && <span style={{ color: "red" }}>{errors.username.message}</span>}
      <button type="submit">Invia</button>
    </form>
  );
}

export default RegisterSetup;