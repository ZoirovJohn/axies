"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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

export default function ProductCard2({ property }: Props): JSX.Element {
  const [isHeartToggle, setHeartToggle] = useState<number>(0);
  const imagePath: string = property?.memberData?.memberImage
    ? `${REACT_APP_API_URL}/${property?.memberData?.memberImage}`
    : "/assets/images/avatar/avt-28.jpg";

  // heart toggle
  const heartToggle = () => {
    if (isHeartToggle === 0) {
      return setHeartToggle(1);
    }
    setHeartToggle(0);
  };

  return (
    <>
      <div className="slider-item">
        <div className="sc-card-collection style-2 home2">
          <div className="card-bottom">
            <div className="author">
              <div className="sc-author-box style-2">
                <div className="author-avatar">
                  <Image
                    height={100}
                    width={100}
                    src={imagePath}
                    alt="Avatar"
                    className="avatar"
                  />
                  <div className="badge">
                    <i className="ripple" />
                  </div>
                </div>
              </div>
              <div className="content">
                <h4>
                  <Link
                    href="authors-2"
                    onClick={() => selectedPropertyAuthorVar(property.memberId)}
                  >
                    {property.propertyTitle.slice(0, 22) + "..."}
                  </Link>
                </h4>
                <div className="infor">
                  <span>Created by</span>
                  <span className="name">
                    <Link
                      href="authors-2"
                      onClick={() =>
                        selectedPropertyAuthorVar(property.memberId)
                      }
                    >
                      {property.memberData?.memberNick}
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={heartToggle}
              className={`wishlist-button public heart ${
                isHeartToggle === 1 ? "active" : ""
              } `}
            >
              <span className="number-like">
                {property.propertyLikes + isHeartToggle}
              </span>
            </button>
          </div>
          <Link
            href="authors-2"
            onClick={() => selectedPropertyAuthorVar(property.memberId)}
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
                  alt="Popular Image"
                />
              </div>
              <div className="box-right">
                <div className="top-img">
                  <Image
                    height={200}
                    width={200}
                    src={
                      property?.propertyImages[1]
                        ? `${REACT_APP_API_URL}/${property?.propertyImages[1]}`
                        : `${REACT_APP_API_URL}/${property?.propertyImages[0]}`
                    }
                    alt="Popular Image"
                  />
                  <Image
                    height={200}
                    width={200}
                    src={
                      property?.propertyImages[2]
                        ? `${REACT_APP_API_URL}/${property?.propertyImages[2]}`
                        : `${REACT_APP_API_URL}/${property?.propertyImages[0]}`
                    }
                    alt="Popular Image"
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
                    alt="Popular Image"
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
