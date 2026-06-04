import axios from "axios"
import { useState } from "react"

export function DeletePost() {
  const [deletedPost, setDeletedPost] = useState({id: "", deleted: false})

  const deletePost = () => {
    event.preventDefault()
    const formData = new FormData(event.target)

    const postId = Number(formData.get("postId"))

    axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => {
        console.log(`DELETE: ${response.status} ${response.statusText}`)
        setDeletedPost({id: postId, deleted: true})
      })
  }

  return (
    <section className="container">
      <h1>Risposta DELETE</h1>
      <p>Valore restituito dalla chiamata DELETE a JSONPlaceholder.</p>

      <article>
      {deletedPost.deleted === false ? (
        <form onSubmit={deletePost}>
          <label>
            Post ID
            <input
              type="number"
              name="postId"
              min="1"
              required
            />
          </label>

          <button type="submit">Cancella post</button>
        </form>) : (
         <p>Post eliminato #{deletedPost.id}</p>
        )}
      </article>
    </section>
  )
}

export default DeletePost
