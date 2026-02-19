'use client'

import { useEffect, useState } from 'react'

interface Post {
  id: number
  title: string
}

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log("Posts")
    
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data: Post[] = await response.json()
        setPosts(data)
      } catch (error) {
        console.error('Error fetching posts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return (
      <div className="py-8">
        <h1 className="text-3xl font-bold mb-6">Posts</h1>
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <ul className="space-y-3">
        {posts.map((post) => (
          <li key={post.id} className="border p-3 rounded-lg shadow-sm">
            <div className="font-medium">{post.title}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
