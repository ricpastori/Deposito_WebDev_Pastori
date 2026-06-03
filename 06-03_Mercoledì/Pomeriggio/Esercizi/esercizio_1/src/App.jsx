import './App.css'
import marioAvatar from './assets/avataaars.png'
import giovanniAvatar from './assets/avataaars-2.png'
import luisaAvatar from './assets/avataaars-3.png'
import saraAvatar from './assets/avataaars-4.png'
import Footer from './components/Footer'
import Header from './components/Header'
import TeamCard from './components/TeamCard'

function App() {
  const linksList = {
    home: '#home',
    team: '#team',
    contacts: '#contacts',
  }

  const members = [
    {
      id: 1,
      firstName: 'Mario',
      lastName: 'Rossi',
      role: 'Sviluppatore Frontend',
      avatar: marioAvatar,
      skills: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 2,
      firstName: 'Luisa',
      lastName: 'Bianchi',
      role: 'Sviluppatrice Backend',
      avatar: luisaAvatar,
      skills: ['Node.js', 'Express', 'MongoDB']
    },
    {
      id: 3,
      firstName: 'Giovanni',
      lastName: 'Verdi',
      role: 'Designer',
      avatar: giovanniAvatar,
      skills: ['Figma', 'UI Design', 'UX Design']
    },
    {
      id: 4,
      firstName: 'Sara',
      lastName: 'Neri',
      role: 'Project Manager',
      avatar: saraAvatar,
      skills: ['Agile', 'Scrum', 'Coordinamento']
    },
  ]

  return (
    <>
      <Header linksList={linksList} />
      <main className="container">
        <section id="home" className="page-section welcome-section">
          <h1>Benvenuti nella nostra vetrina</h1>
          <p>
            Scopri il team che ogni giorno trasforma idee semplici in progetti
            concreti.
          </p>
        </section>

        <section id="team" className="page-section team-section">
          <h2>Il nostro team</h2>
          <div className="team-grid">
            {members.map((member) => (
              <TeamCard
                key={member.id}
                firstName={member.firstName}
                lastName={member.lastName}
                role={member.role}
                avatar={member.avatar}
                skills={member.skills}
              />
            ))}
          </div>
        </section>

        <section id="contacts" className="page-section contacts-section">
          <h2>Contatti</h2>
          <p>Scrivici a info@nomeazienda.it per conoscere meglio il team.</p>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
