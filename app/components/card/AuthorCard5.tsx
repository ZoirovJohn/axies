import { REACT_APP_API_URL } from "@/app/config";
import { MeFollowed } from "@/libs/dto/follow/follow";
import { MeLiked } from "@/libs/dto/property/property";
import {
  MemberAuthType,
  MemberStatus,
  MemberType,
} from "@/libs/enums/member.enum";
import Image from "next/image";
import Link from "next/link";

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

export default function AuthorCard5({ agent }: Props): JSX.Element {
  const imagePath: string = agent?.memberImage
    ? `${REACT_APP_API_URL}/${agent?.memberImage}`
    : "/assets/images/avatar/avt-28.jpg";

  return (
    <>
      <div className="box-item">
        <div className="sc-author-box style-3 pd-0">
          <div className="author-avatar">
            <Link href="/authors-1">
              <Image
                height={200}
                width={200}
                src={imagePath}
                alt="Image"
                className="avatar"
              />
            </Link>
            <div className="badge">
              <i className="ripple" />
            </div>
          </div>
          <div className="author-infor">
            <h5 className="fs-16">
              <Link href="/authors-1">{agent.memberNick}</Link>
            </h5>
            <span className="price">AGENT</span>
          </div>
        </div>
      </div>
    </>
  );
}
