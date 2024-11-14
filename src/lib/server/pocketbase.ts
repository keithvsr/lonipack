import PocketBase from "pocketbase";
import { PUBLIC_POCKETBASE_URL } from "$env/static/public";
import type { JoineeService, PocketPack, UserService } from "$lib/types";

export function createInstance() {
  return new PocketBase(PUBLIC_POCKETBASE_URL) as PocketPack;
}

export const pb = createInstance();

// export const userService: UserService = pb.collection("users");
// export const joinService: JoineeService = pb.collection("joinees");

export function getUserSvc(pb: PocketPack) {
  return pb.collection("users");
}

export function getJoinSvc(pb: PocketPack) {
  return pb.collection("joinees");
}
