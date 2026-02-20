import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { MapPin, ExternalLink, Clock } from "lucide-react";
import { DayNotes } from "./day-notes";
import { type ItineraryDay } from "@/lib/winter-data";

interface ItineraryDayCardProps {
  day: ItineraryDay;
}

export function ItineraryDayCard({ day }: ItineraryDayCardProps) {
  return (
    <AccordionItem
      value={`day-${day.dayNumber}`}
      className="bg-card border rounded-xl px-4 sm:px-6 shadow-sm data-[state=open]:ring-1 data-[state=open]:ring-primary/20 transition-all mb-4 last:mb-0"
    >
      <AccordionTrigger className="hover:no-underline py-4">
        <div className="flex flex-col sm:flex-row sm:items-center text-left gap-2 sm:gap-4 w-full pr-4">
          <Badge variant="secondary" className="w-fit shrink-0 rounded-md py-1">
            Day {day.dayNumber}
          </Badge>
          <div className="flex flex-col">
            <span className="font-semibold text-base sm:text-lg">
              {day.title}
            </span>
            <span className="text-sm text-muted-foreground font-normal">
              {day.date}
            </span>
          </div>
        </div>
      </AccordionTrigger>

      <AccordionContent className="pb-6 pt-2">
        <div className="flex flex-col gap-6">
          <div className="space-y-6 relative md:before:absolute md:before:inset-0 md:before:mx-auto md:before:translate-x-0 md:before:h-full md:before:w-0.5 md:before:bg-gradient-to-b md:before:from-border/10 md:before:via-border/50 md:before:to-border/10">
            {day.activities.map((activity, index) => (
              <div
                key={index}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group select-none"
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex items-center justify-center w-6 h-6 rounded-full border-2 border-background bg-primary absolute md:left-1/2 md:-translate-x-1/2 shrink-0 shadow"></div>

                <div className="w-full md:w-[calc(50%-2.5rem)] p-4 rounded-xl border bg-background/50 backdrop-blur-sm shadow-sm transition-colors hover:bg-secondary/40">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold tracking-tight">
                      {activity.time}
                    </span>
                  </div>

                  <p className="text-sm text-foreground/90 leading-relaxed mb-3">
                    {activity.description}
                  </p>

                  {(activity.location || activity.url) && (
                    <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-border/50">
                      {activity.location && (
                        <Badge
                          variant="outline"
                          className="gap-1 font-normal bg-background/50"
                        >
                          <MapPin className="w-3 h-3 text-muted-foreground" />
                          {activity.location}
                        </Badge>
                      )}
                      {activity.url && (
                        <a
                          href={activity.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                        >
                          <Badge
                            variant="secondary"
                            className="gap-1 font-normal bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                          >
                            <ExternalLink className="w-3 h-3" />
                            Book / Info
                          </Badge>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <DayNotes dayNumber={day.dayNumber} />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
