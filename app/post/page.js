import Link from 'next/link'
import React from 'react'

async function PostPage() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',
    {
        /// cashe after 60 seconds SSG To SSR
        next:{
            revalidate: 120
        }
    }    
    );
    const data = await response.json();
    const posts = data.slice(0, 10);
    const postsJsx = posts.map((post) =>{
        return (
            <div key={post.id} className='mt-10 bg-slate-400 p-2 rounded-xl'>
                <h2 className='text-2xl font-semibold'>{post.title}</h2>
                <Link href={{
                    pathname: `/post/${post.id}`,
                    query: {
                        id: post.id,
                        title: post.title,
                        body: post.body,
                    }
                }} className='text-blue-900'>Read More</Link>
            </div>
        )
    }) 
    console.log(posts);
  return (
    <div
    className='min-h-screen flex justify-center items-center bg-gray-600 flex-col gap-5 py-4'>
        <h1 className='text-4xl bg-slate-300 rounded-lg font-semibold p-6 mt-28'>Post Page</h1>
    
        <div className='px-4'>
            {postsJsx}
        </div>
    </div>
  )
}

export default PostPage