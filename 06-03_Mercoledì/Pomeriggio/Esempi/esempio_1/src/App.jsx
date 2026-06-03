import AlertButton from './components/AlertButton'
import Avatar from './components/Avatar'
import ProductDisplay from './components/ProductDisplay'
import ProfileCard from './components/ProfileCard'
import Welcome from './components/Welcome'
import './App.css'

const userData = { firstName: "Anna", lastName: "Rossi", role: "Developer" };
const userSkills = ["React", "JavaScript", "CSS"];

function App() {
  const handleAlert = () => {
    alert("Azione rilevata dal componente principale!");
  };

  return (
    <>
      {/* Nome è una stringa statica, messageCount è un numero passato tra graffe */}
      <Welcome name="Mario" messageCount={5} />
      <Welcome name="Luigi" messageCount={0} />
      <ProfileCard user={userData} skills={userSkills} />
      <ProductDisplay name="Laptop" price="1200" />
      <div className="control-panel">
        {/* Passiamo il riferimento alla funzione handleAlert */}
        <AlertButton label="Avvia Processo" onAction={handleAlert} />
      </div>
      <Avatar size={480} isRound={false} imageUrl="./avatar.jpeg" />
    </>
  )
}

export default App
