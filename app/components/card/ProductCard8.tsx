import Image from "next/image";
import Link from "next/link";
import {
  PropertyCollection,
  PropertyLocation,
  PropertyStatus,
} from "@/libs/enums/property.enum";
import { Member } from "@/libs/dto/member/member";
import { MeLiked } from "@/libs/dto/property/property";
import { REACT_APP_API_URL } from "@/app/config";
import { selectedPropertyAuthorVar } from "@/apollo/store";

interface Props {
  property: {
    _id: string;
    propertyCollection: PropertyCollection;
    propertyStatus: PropertyStatus;
    propertyLocation: PropertyLocation;
    propertyAddress: string;
    propertyTitle: string;
    propertyPrice: number;
    propertyRarityScore: number;
    propertyEditions: number;
    propertyTraitGroups: number;
    propertyViews: number;
    propertyLikes: number;
    propertyComments: number;
    propertyRank: number;
    propertyImages: string[];
    propertyDesc?: string;
    propertyBarter: boolean;
    propertyRent: boolean;
    memberId: string;
    soldAt?: Date;
    deletedAt?: Date;
    constructedAt?: Date;
    createdAt: Date;
    updatedAt: Date;
    /** from aggregation **/
    meLiked?: MeLiked[];
    memberData?: Member;
  };
}

export default function ProductCard8({ property }: Props): JSX.Element {
  const imagePath: string = property?.memberData?.memberImage
    ? `${REACT_APP_API_URL}/${property?.memberData?.memberImage}`
    : "/assets/images/avatar/avt-28.jpg";

  return (
    <>
      <div className="sc-card-collection style-2">
        <div className="card-bottom">
          <div className="author">
            <div className="sc-author-box style-2">
              <div className="author-avatar">
                <Image
                  height={100}
                  width={100}
                  src={imagePath}
                  alt="avatar"
                  className="avatar"
                />
                <div className="badge" />
              </div>
            </div>
            <div className="content">
              <h4>
                <Link
                  href="/authors-2"
                  onClick={() => {
                    selectedPropertyAuthorVar(property.memberId);
                    localStorage.setItem(
                      "selectedPropertyAuthor",
                      property.memberId
                    );
                  }}
                >
                  {property.propertyTitle.slice(0, 19) + "..."}
                </Link>
              </h4>
              <div className="infor">
                <span>Created by {property.memberData?.memberNick}</span>
              </div>
            </div>
          </div>
        </div>
        <Link
          href="/authors-2"
          onClick={() => {
            selectedPropertyAuthorVar(property.memberId);
            localStorage.setItem("selectedPropertyAuthor", property.memberId);
          }}
        >
          <div className="media-images-collection">
            <div className="box-left">
              <Image
                height={500}
                width={500}
                src={
                  property?.propertyImages[0]
                    ? `${REACT_APP_API_URL}/${property?.propertyImages[0]}`
                    : "/img/banner/header1.svg"
                }
                alt="Gallery"
              />
            </div>
            <div className="box-right">
              <div className="top-img">
                <Image
                  height={300}
                  width={300}
                  src={
                    property?.propertyImages[1]
                      ? `${REACT_APP_API_URL}/${property?.propertyImages[1]}`
                      : `${REACT_APP_API_URL}/${property?.propertyImages[0]}`
                  }
                  alt="Gallery"
                />
                <Image
                  height={300}
                  width={300}
                  src={
                    property?.propertyImages[2]
                      ? `${REACT_APP_API_URL}/${property?.propertyImages[2]}`
                      : `${REACT_APP_API_URL}/${property?.propertyImages[0]}`
                  }
                  alt="Gallery"
                />
              </div>
              <div className="bottom-img">
                <Image
                  height={400}
                  width={400}
                  src={
                    property?.propertyImages[3]
                      ? `${REACT_APP_API_URL}/${property?.propertyImages[3]}`
                      : `${REACT_APP_API_URL}/${property?.propertyImages[0]}`
                  }
                  alt="Gallery"
                />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
