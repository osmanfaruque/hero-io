import { Link } from "react-router-dom";

function Error404Page() {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-900 p-6 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="mt-2 text-slate-300">Page not found.</p>
        <Link className="mt-5 inline-block rounded bg-violet-600 px-4 py-2 font-medium" to="/">
          Go Home
        </Link>
      </div>
    </main>
  );
}

export default Error404Page;