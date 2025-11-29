import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";

export function SubmitSuccessCard() {
  return (
    <Card className="w-full text-center">
      <CardHeader>
        <CardTitle>Submission Received! ⚔️</CardTitle>
        <CardDescription>
          Awesome - your project is now in our db!
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-3">
        <p>
          Your project will be reviewed and potentially featured on the website.
        </p>
      </CardContent>
    </Card>
  );
}
