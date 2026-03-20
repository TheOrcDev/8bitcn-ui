import { redirect } from "next/navigation";

export default function BlocksPageRedirect() {
  redirect("/v2");
}
