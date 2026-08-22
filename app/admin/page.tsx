import { barberConfigs } from "@/src/config/index";

import { isAdminAuthenticated } from "@/src/lib/admin-auth";
import AdminLogin from "./adminLogin";

export default async function AdminPage() {
  const authenticated = await isAdminAuthenticated();

  if (!authenticated) {
    return <AdminLogin />;
  }

  const barbers = Object.values(barberConfigs);

  return (
    <main className="min-h-screen bg-black px-8 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold">Barber Admin</h1>

          <p className="mt-2 text-zinc-400">
            {barbers.length} site
            {barbers.length > 1 ? "s" : ""} actif
            {barbers.length > 1 ? "s" : ""}
          </p>
        </div>

        <div className="space-y-4">
          {barbers.map((barber) => (
            <div
              key={barber.name}
              className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950 p-6"
            >
              <div>
                <h2 className="text-xl font-semibold">{barber.name}</h2>

                <p className="mt-1 text-sm text-zinc-500">/{barber.name}</p>

                {barber.domain && (
                  <p className="mt-1 text-sm text-zinc-400">{barber.domain}</p>
                )}
              </div>

              <a
                href={`/${barber.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black"
              >
                Voir le site
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
