import { useEffect, useState } from "react"
import axios from "axios"

export function JsonPlaceholder() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => setPosts(response.data))
      .catch(error => console.error("Errore durante il fetch dei post:", error))
  }, [])

  return (
    <>
      <h1>Post da JSONPlaceholder</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default JsonPlaceholder