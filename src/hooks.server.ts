import type { Handle } from "@sveltejs/kit";
import { createInstance } from "$lib/server/pocketbase";
import type { User } from "$lib/types";

export const handle: Handle = async ({ event, resolve }) => {
  const pb = createInstance();
  pb.authStore.loadFromCookie(event.request.headers.get("cookie") || "");
  try {
    if (pb.authStore.isValid) {
      await pb.collection("users").authRefresh();
      event.locals.user = pb.authStore.model as User;
    }
  } catch {
    pb.authStore.clear();
  }

  event.locals.pb = pb;
  const response = await resolve(event);

  if (pb.authStore.isValid) {
    response.headers.append("set-cookie", pb.authStore.exportToCookie());
  }
  return response;
};
