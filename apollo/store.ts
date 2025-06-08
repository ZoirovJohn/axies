import { CustomJwtPayload } from "@/libs/types/customJwtPayload";
import { makeVar } from "@apollo/client";

// import { CustomJwtPayload } from "../libs/types/customJwtPayload";
export const themeVar = makeVar({});

export const userVar = makeVar<CustomJwtPayload>({
  _id: "",
  memberType: "",
  memberStatus: "",
  memberAuthType: "",
  memberPhone: "",
  memberNick: "",
  memberFullName: "",
  memberImage: "",
  memberAddress: "",
  memberDesc: "",
  memberProperties: 0,
  memberRank: 0,
  memberArticles: 0,
  memberPoints: 0,
  memberLikes: 0,
  memberViews: 0,
  memberWarnings: 0,
  memberBlocks: 0,
});

function getInitialSelectedPropertyAuthor(): string | undefined {
  if (typeof window !== "undefined") {
    return localStorage.getItem("selectedPropertyAuthor") ?? undefined;
  }
  return undefined;
}

// @ts-ignore
export const selectedPropertyAuthorVar = makeVar<string | undefined>(
  getInitialSelectedPropertyAuthor()
);
export const socketVar = makeVar<WebSocket | undefined>(undefined);
