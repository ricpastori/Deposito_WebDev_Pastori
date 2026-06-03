import Avatar from './Avatar'

export function TeamCard(props) {
  return (
    <article className="team-card">
      <Avatar imageUrl={props.avatar} size={96} />

      <h3>
        {props.firstName} {props.lastName}
      </h3>

      <p>{props.role}</p>

      <ul className="skills-list" aria-label="Competenze">
        {props.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </article>
  )
}

export default TeamCard
