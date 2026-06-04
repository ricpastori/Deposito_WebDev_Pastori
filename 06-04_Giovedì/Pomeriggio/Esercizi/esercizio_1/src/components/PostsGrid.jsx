import axios from "axios"
import { useEffect, useState } from "react"
import PostPost from './PostPost'



export function GetPosts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const postsData = []
    for (let i = 1; i <= 3; i++) {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${i}`)
        .then(response => {
          console.log(`GET: ${response.status} ${response.statusText}`)
          postsData.push(response.data)
          if (postsData.length === 3) {
            setPosts(postsData)
          }
        })
    }
  }, [])

  const addPost = (newPost) => {
    setPosts(prevPosts => [...prevPosts, newPost])
  }

  return (
    <>
      <section className="container">
        <h1>Posts</h1>
        <p>Risultato delle chiamate Get e POST a JSONPlaceholder.</p>

        {posts.length === 0 ? (
          <article aria-busy="true">Caricamento post...</article>
        ) : (
          <div className="grid">
            {posts.map(post => (
              <article key={post.id}>
                <header>Post: {post.id}</header>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </article>
            ))}
          </div>
        )}
      </section>
      <PostPost newPost={addPost} />
    </>
  )
}

export default GetPosts
