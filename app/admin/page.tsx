import { barberConfigs } from "@/src/config/index";
import Image from "next/image";
import { isAdminAuthenticated } from "@/src/lib/admin-auth";
import AdminLogin from "./adminLogin";
import Link from "next/link";

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
              key={barber.domain}
              style={{ borderColor: barber.accentColor }}
              className={`flex flex-col sm:flex-row items-center justify-between rounded-xl border border-zinc-800 p-6`}
            >
              <div className="flex flex-row items-center gap-4">
                <Image
                  src={barber.logo}
                  alt={`${barber.name} logo`}
                  width={80}
                  height={80}
                  className="rounded-full"
                />

                <div>
                  <h2 className="text-xl font-semibold">{barber.name}</h2>

                  <p className="mt-1 text-sm text-zinc-500">{barber.city}</p>

                  {barber.domain && (
                    <Link
                      href={barber.mapsUrl}
                      className="mt-1 text-sm text-sky-500 italic hover:underline"
                    >
                      Google Map : {barber.mapsUrl}
                    </Link>
                  )}
                </div>
              </div>
              <div className="flex mt-2 sm:mt-8 items-end gap-2">
                <Link
                  href={`/${barber.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black"
                >
                  Voir le site
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
