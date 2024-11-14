import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load = (async ({ parent }) => {
  const { user } = await parent();

  if (!user) redirect(302, "/");

  return { user };
}) satisfies LayoutServerLoad;
