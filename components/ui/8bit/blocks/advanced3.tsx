import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/8bit/badge";
import { Button } from "@/components/ui/8bit/button";
import {
  Card,
  CardContent,
} from "@/components/ui/8bit/card";
import { Input } from "@/components/ui/8bit/input";

import "@/components/ui/8bit/styles/retro.css";

interface Advanced3Props {
  badge?: string;
  className?: string;
  cta?: string;
  description?: string;
  placeholder?: string;
  title?: string;
}

export default function Advanced3({
  title = "Join the Guild",
  description = "Get notified when new components and blocks drop. No spam, just pixels.",
  placeholder = "warrior@email.com",
  cta = "SUBSCRIBE",
  badge = "FREE",
  className,
}: Advanced3Props) {
  return (
    <section className={cn("w-full px-4 py-16", className)}>
      <div className="mx-auto max-w-xl">
        <Card>
          <CardContent className="pt-8 pb-8">
            <div className="text-center">
              {badge && (
                <div className="mb-4">
                  <Badge>{badge}</Badge>
                </div>
              )}

              <h2 className="retro mb-3 font-bold text-2xl tracking-tight">
                {title}
              </h2>

              <p className="mx-auto mb-6 max-w-sm text-muted-foreground retro text-[9px] leading-relaxed">
                {description}
              </p>

              <div className="flex gap-4">
                <Input
                  className="retro flex-1 text-xs"
                  placeholder={placeholder}
                  type="email"
                />
                <Button className="text-xs">{cta}</Button>
              </div>

              <p className="retro mt-3 text-muted-foreground text-[10px]">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
