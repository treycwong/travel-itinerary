import Link from "next/link";
import { tripDetails, accommodations, itineraryData } from "@/lib/winter-data";
import { ItineraryDayCard } from "@/components/features/itinerary-day-card";
import { Accordion } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Plane, Calendar, Wallet, MapPin, ArrowLeft } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-svh bg-background pb-20">
      {/* Hero Header */}
      <header className="bg-gradient-to-b from-primary/10 via-primary/5 to-background pt-16 pb-12 px-6">
        <div className="max-w-3xl mx-auto flex flex-col gap-6 text-center md:text-left">
          <div className="flex items-center gap-4 mx-auto md:mx-0">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md transition-colors hover:bg-primary/10 hover:text-primary h-8 w-8 text-muted-foreground"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Back</span>
            </Link>
            <Badge className="w-fit bg-primary/20 text-primary hover:bg-primary/20 border-primary/20">
              Winter Getaway 2026
            </Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground balance-text">
            {tripDetails.title}
          </h1>

          <div className="flex flex-col md:flex-row flex-wrap gap-4 mt-2 text-sm text-foreground/80 md:items-center">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Calendar className="w-4 h-4 text-primary shrink-0" />
              <span>{tripDetails.dates}</span>
            </div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-border" />
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Wallet className="w-4 h-4 text-primary shrink-0" />
              <span>{tripDetails.budget}</span>
            </div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-border" />
            <div className="flex items-center gap-2 justify-center md:justify-start text-left">
              <Plane className="w-4 h-4 text-primary shrink-0" />
              <span className="max-w-[280px] sm:max-w-none">
                {tripDetails.flight}
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 space-y-12 -mt-4 relative z-10">
        {/* Accommodations Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Accommodations</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {accommodations.map((acc, index) => (
              <a
                key={index}
                href={acc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col p-4 rounded-xl border bg-card hover:bg-secondary/40 transition-colors shadow-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs bg-background/50">
                    {acc.dates}
                  </Badge>
                  <MapPin className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="font-semibold text-foreground/90 leading-tight">
                  {acc.name}
                </span>
                <span className="text-sm text-muted-foreground mt-1">
                  {acc.city}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Itinerary Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight">
              Daily Itinerary
            </h2>
            <span className="text-sm text-muted-foreground">
              {itineraryData.length} Days
            </span>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {itineraryData.map((day) => (
              <ItineraryDayCard key={day.dayNumber} day={day} />
            ))}
          </Accordion>
        </section>
      </main>
    </div>
  );
}
