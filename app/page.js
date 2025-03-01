
export const metadata = {
  title: 'Home page',
}
export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <div className="min-h-screen flex justify-center items-center">
      <h1 className="text-4xl bg-blue-300 rounded-lg font-semibold p-6">Welcome To HomePage</h1>
    </div>
  );
}
