"use client";

import { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Save, CheckCircle2 } from "lucide-react";

interface DayNotesProps {
  dayNumber: number;
}

export function DayNotes({ dayNumber }: DayNotesProps) {
  const storageKey = `itinerary-notes-day-${dayNumber}`;
  const [notes, setNotes] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedNotes = localStorage.getItem(storageKey);
    if (savedNotes) {
      setNotes(savedNotes);
    }
    setIsLoaded(true);
  }, [storageKey]);

  const handleSave = () => {
    localStorage.setItem(storageKey, notes);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  if (!isLoaded) return null; // Avoid hydration mismatch

  return (
    <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border/50">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-muted-foreground">
          Personal Notes (Local to browser)
        </label>
        {isSaved && (
          <span className="text-xs text-primary flex items-center gap-1 animate-in fade-in slide-in-from-right-2">
            <CheckCircle2 className="w-3 h-3" /> Saved
          </span>
        )}
      </div>
      <Textarea
        placeholder="Add your confirmations, reservation numbers, or thoughts here..."
        className="min-h-[100px] bg-secondary/30 resize-y"
        value={notes}
        onChange={(e) => {
          setNotes(e.target.value);
          setIsSaved(false);
        }}
      />
      <div className="flex justify-end">
        <Button
          variant="secondary"
          size="sm"
          onClick={handleSave}
          disabled={isSaved || !notes}
          className="gap-2"
        >
          <Save className="w-4 h-4" />
          {isSaved ? "Saved" : "Save Notes"}
        </Button>
      </div>
    </div>
  );
}
