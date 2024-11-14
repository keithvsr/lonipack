import PocketBase, { RecordService } from "pocketbase";

export interface User {
  avatar: string;
  collectionId: string;
  collectionName: "users";
  created: string;
  email: string;
  emailVisibility: boolean;
  id: string;
  name: string;
  updated: string;
  username: string;
  verified: boolean;
}

export interface Member {
  active: boolean;
  age: number;
  collectionId: string;
  collectionName: "members";
  created: string;
  description: string;
  id: string;
  name: string;
  owner: string;
  photos: string[];
  profileImage: string;
  updated: string;
}

export interface Joinee {
  id: string;
  created: string;
  collectionId: string;
  collectionName: "joinees";
  updated: string;
  email: string;
}

export type UserService = RecordService<User>;
export type MemberService = RecordService<Member>;
export type JoineeService = RecordService<Joinee>;

export interface PocketPack extends PocketBase {
  collection(idOrName: string): RecordService; // default fallback
  collection(idOrName: "users"): UserService;
  collection(idOrName: "members"): MemberService;
  collection(idOrName: "joinees"): JoineeService;
}
