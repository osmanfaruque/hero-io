import { Link } from "react-router-dom";

function NotFoundAppPage() {
  return (
    <section className="rounded bg-slate-800 p-6 text-center">
      <h1 className="text-2xl font-bold">App Not Found</h1>
      <p className="mt-2 text-slate-300">Requested app is not available.</p>
      <Link className="mt-5 inline-block rounded bg-violet-600 px-4 py-2 font-medium" to="/apps">
        Back to Apps
      </Link>
    </section>
  );
}

export default NotFoundAppPage;
