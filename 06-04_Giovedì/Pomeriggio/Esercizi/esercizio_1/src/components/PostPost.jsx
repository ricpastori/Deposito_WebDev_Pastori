import axios from "axios"

export function PostPost({ newPost }) {
  const sendPost = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)

    const post = {
      title: formData.get("title"),
      body: formData.get("body"),
      userId: Number(formData.get("userId"))
    }

    axios.post(`https://jsonplaceholder.typicode.com/posts`, post)
      .then(response => {
        console.log(`POST: ${response.status} ${response.statusText}`)
          newPost(response.data)
      })
  }

  return (
    <section>
      <h2>Aggiungi Post</h2>

      <form onSubmit={sendPost}>
        <label>
          Titolo
          <input
            type="text"
            name="title"
            required
          />
        </label>

        <label>
          Body
          <textarea
            name="body"
            required
          />
        </label>

        <label>
          User ID
          <input
            type="number"
            name="userId"
            min="1"
            required
          />
        </label>

        <button type="submit">Invia post</button>
      </form>
    </section>
  )
}

export default PostPost
