import { ClientResponseError } from "pocketbase";
import type { Actions } from "./$types";
import { getJoinSvc } from "$lib/server/pocketbase";

export const actions = {
  default: async ({ locals, request }) => {
    const joineeSvc = getJoinSvc(locals.pb);
    const data = await request.formData();
    const email = data.get("email");
    if (email) {
      try {
        await joineeSvc.create({ email });
        return { status: "success", email };
      } catch (error) {
        if (error instanceof ClientResponseError) {
          console.log(error.data);
          return {
            status: "error",
            error: error.message,
            message: error.data.data.email?.message || "",
          };
        }
      }
    }
    return { status: "error", error: "no email provided" };
  },
} satisfies Actions;
