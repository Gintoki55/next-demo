import React from 'react'
export const metadata = {
    title: 'Article page',
}
export const dynamic = 'force-dynamic';
async function ArticlePage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));  // simulate async call
  return (
    <div
    className='min-h-screen flex justify-center items-center bg-yellow-600 flex-col gap-20'>
        <h1 className='text-4xl bg-yellow-300 rounded-lg font-semibold p-6'>Article Page</h1>
    </div>
  )
}

export default ArticlePage