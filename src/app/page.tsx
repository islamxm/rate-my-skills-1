import { getHomePage } from "@/src/shared/routes";
import { redirect } from "next/navigation";

export default async function Root() {
  redirect(getHomePage());
}