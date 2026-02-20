import { tripsData } from "@/lib/trips-data";
import { TripCard } from "@/components/features/trip-card";
import { Plane } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-svh bg-background pb-20">
      {/* Hero Header */}
      <header className="bg-gradient-to-b from-primary/10 via-primary/5 to-background pt-16 pb-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
            <Plane className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground balance-text">
            Travel Itinerary
          </h1>
          <p className="max-w-md text-lg text-muted-foreground">
            Dashboard for all your upcoming and past adventures.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 space-y-16 -mt-4 relative z-10">
        {tripsData.map((yearGroup) => (
          <section key={yearGroup.year} className="space-y-6">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl font-bold tracking-tight">
                {yearGroup.year}
              </h2>
              <div className="h-px bg-border flex-1"></div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {yearGroup.trips.map((trip) => (
                <TripCard key={trip.id} trip={trip} />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
