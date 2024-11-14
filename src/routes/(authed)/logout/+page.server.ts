import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions = {
  default: async ({ locals }) => {
    locals.pb.authStore.clear();
    delete locals.user;
    redirect(303, "/");
  },
} satisfies Actions;
