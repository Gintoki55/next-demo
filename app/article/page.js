import Link from 'next/link'
import React from 'react'
export const metadata = {
    title: 'Article page',
}
function ArticlePage() {
  return (
    <div
    className='min-h-screen flex justify-center items-center bg-yellow-600 flex-col gap-20'>
        <h1 className='text-4xl bg-yellow-300 rounded-lg font-semibold p-6'>Article Page</h1>
    </div>
  )
}

export default ArticlePage