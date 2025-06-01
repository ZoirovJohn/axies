import Image from "next/image";
import Link from "next/link";
import {
  MemberAuthType,
  MemberStatus,
  MemberType,
} from "@/libs/enums/member.enum";
import { MeFollowed } from "@/libs/dto/follow/follow";
import { MeLiked } from "@/libs/dto/property/property";
import { REACT_APP_API_URL } from "@/app/config";

interface Props {
  agent: {
    _id: string;
    memberType: MemberType;
    memberStatus: MemberStatus;
    memberAuthType: MemberAuthType;
    memberPhone: string;
    memberNick: string;
    memberPassword?: string;
    memberFullName?: string;
    memberImage?: string;
    memberAddress?: string;
    memberDesc?: string;
    memberProperties: number;
    memberRank: number;
    memberArticles: number;
    memberPoints: number;
    memberLikes: number;
    memberFollowers?: number;
    memberFollowings?: number;
    memberViews: number;
    memberComments: number;
    memberWarnings: number;
    memberBlocks: number;
    deletedAt?: Date;
    createdAt: Date;
    updatedAt: Date;
    // Enable for authentications
    meLiked?: MeLiked[];
    meFollowed?: MeFollowed[];
    accessToken?: string;
  };
}

export default function AuthorCard1({ agent }: Props) {
  const imagePath: string = agent?.memberImage
    ? `${REACT_APP_API_URL}/${agent?.memberImage}`
    : "/assets/images/avatar/avt-28.jpg";
  return (
    <>
      <div className="slider-item">
        <div className="sc-author-box style-2">
          <div className="author-avatar">
            <Image
              height={500}
              width={500}
              src={imagePath}
              alt="Avatar"
              className="avatar"
            />
            <div className="badge" />
          </div>
          <div className="author-infor">
            <h5>
              <Link href="/authors-2">{agent.memberNick}</Link>
            </h5>
            <span className="price">AGENT</span>
          </div>
        </div>
      </div>
    </>
  );
}
