import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { ClientResponseError } from "pocketbase";

export const actions = {
  default: async ({ locals, request }) => {
    const data = await request.formData();
    const usernameOrEmail = data.get("credential");
    const password = data.get("password");

    if (
      !usernameOrEmail ||
      typeof usernameOrEmail !== "string" ||
      !password ||
      typeof password !== "string"
    ) {
      return fail(400, { incomplete: true });
    }

    try {
      await locals.pb
        .collection("users")
        .authWithPassword(usernameOrEmail, password);
    } catch (e) {
      const message =
        e instanceof ClientResponseError ? e.message : "authorization failure";
      return fail(503, { message, invalid: true });
    }

    redirect(303, "/");
  },
} satisfies Actions;
