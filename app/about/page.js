import React from 'react'
export const metadata = {
    title: 'about us',
}
export const dynamic = 'force-dynamic';
async function AboutPage() {
    await new Promise((resolve) => setTimeout(resolve, 2000));  // simulate async call
  
  return (
    <div
    className='min-h-screen flex justify-center items-center bg-red-600 flex-col gap-20'>
        <h1 className='text-4xl bg-red-300 rounded-lg font-semibold p-6'>AboutPage</h1>
    </div>
  )
}

export default AboutPage