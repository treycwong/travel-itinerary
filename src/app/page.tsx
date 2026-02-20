export default function Home() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 px-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Travel Itinerary
        </h1>
        <p className="max-w-md text-lg text-muted-foreground">
          Plan, organize, and share your travel itineraries with ease.
        </p>
      </div>

      <div className="flex gap-3">
        <a
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
        >
          Get Started
        </a>
        <a
          href="/design-system.md"
          className="inline-flex h-10 items-center justify-center rounded-lg border border-border bg-background px-6 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-secondary"
        >
          Design System
        </a>
      </div>
    </div>
  );
}
