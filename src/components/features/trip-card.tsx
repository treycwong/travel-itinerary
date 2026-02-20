import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { type Trip } from "@/lib/trips-data";
import { MapPin, Calendar } from "lucide-react";

interface TripCardProps {
  trip: Trip;
}

export function TripCard({ trip }: TripCardProps) {
  return (
    <Link href={`/trips/${trip.slug}`} className="block group">
      <Card className="overflow-hidden transition-all hover:shadow-md border-0 bg-transparent flex flex-col gap-3">
        {/* Image Container (Airbnb Style - Image on top) */}
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-secondary/80">
          {trip.image ? (
            <Image
              src={trip.image}
              alt={trip.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              {trip.status === "upcoming" && (
                <div className="absolute inset-0 bg-primary/10 transition-colors"></div>
              )}
              <MapPin
                className={`w-12 h-12 opacity-30 ${trip.status === "upcoming" ? "text-primary/50" : "text-muted-foreground"}`}
              />
            </div>
          )}

          {/* Floating Badge on Image */}
          <div className="absolute top-3 left-3">
            <Badge
              variant={trip.status === "upcoming" ? "default" : "secondary"}
              className={`${
                trip.status === "upcoming"
                  ? "bg-white text-black hover:bg-white/90 shadow-sm font-semibold"
                  : "bg-white/90 text-black hover:bg-white border-0 font-medium"
              }`}
            >
              {trip.status}
            </Badge>
          </div>
        </div>

        {/* Text Content Below Image */}
        <CardContent className="px-1 py-0 flex flex-col gap-1">
          <h3 className="text-base font-semibold text-foreground tracking-tight line-clamp-1">
            {trip.destination}
          </h3>

          <div className="flex flex-col text-sm text-muted-foreground">
            <span className="line-clamp-1">{trip.title}</span>
            <span className="mt-0.5">{trip.dates}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
