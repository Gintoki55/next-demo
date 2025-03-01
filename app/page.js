import { Suspense } from "react";

export const metadata = {
  title: 'Home page',
}
export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <Suspense fallback={
      <div className="flex justify-center items-center h-screen">
        <div className="text-gray-400">Loading...</div>
      </div>
    }>
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-4xl bg-blue-300 rounded-lg font-semibold p-6">Welcome To HomePage</h1>
      </div>
    </Suspense>
  );
}
