import { Badge } from "@/components/ui/8bit/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";

export function SectionCards() {
  return (
    <div className="dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card relative h-full">
        <CardHeader>
          <CardDescription>Total Revenue</CardDescription>
          <CardTitle className="font-semibold tabular-nums @[250px]/card:text-xl">
            $1,250.00
          </CardTitle>
          <div className="absolute top-0 right-3">
            <Badge className="text-[9px]">+12.5%</Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Trending up this month
          </div>
          <div className="text-muted-foreground">
            Visitors for the last 6 months
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card relative h-full">
        <CardHeader>
          <CardDescription>Customers</CardDescription>
          <CardTitle className=" font-semibold tabular-nums @[250px]/card:text-xl">
            1,234
          </CardTitle>
          <div className="absolute top-0 right-3">
            <Badge className="text-[9px]">-20%</Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Down 20% this period
          </div>
          <div className="text-muted-foreground">
            Acquisition needs attention
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card relative h-full">
        <CardHeader>
          <CardDescription>Accounts</CardDescription>
          <CardTitle className=" font-semibold tabular-nums @[250px]/card:text-xl">
            45,678
          </CardTitle>
          <div className="absolute top-0 right-3">
            <Badge className="text-[9px]">+12.5%</Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Strong user retention
          </div>
          <div className="text-muted-foreground">Engagement exceed targets</div>
        </CardFooter>
      </Card>
      <Card className="@container/card h-full">
        <CardHeader>
          <CardDescription>Growth</CardDescription>
          <CardTitle className=" font-semibold tabular-nums @[250px]/card:text-xl">
            4.5%
          </CardTitle>
          <div className="absolute top-0 right-3">
            <Badge className="text-[9px]">+4.5%</Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Steady performance increase
          </div>
          <div className="text-muted-foreground">Meets growth projections</div>
        </CardFooter>
      </Card>
    </div>
  );
}
