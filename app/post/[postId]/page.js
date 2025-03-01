 // Ensure this is a Client Component
// import {useSearchParams } from "next/navigation";

async function Posts({params}) {
  // const serachParams = useSearchParams();
  // const title = serachParams.get('title');
  // const body = serachParams.get('body');
  const postId = params.postId 
  
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const data = await response.json();

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-200 flex-col">
      <h1 className="text-center font-semibold text-4xl">Post {data.id}</h1>
        <div className='bg-slate-400 p-4 m-8 rounded-xl gap-5 flex flex-col'>
          <h2 className='text-2xl font-semibold'>{data.title || 'No Data Fetched'}</h2>
          <p>{data.body || 'No Data Fetched'}</p>
        </div>
    </div>
  );
}

export default Posts;
