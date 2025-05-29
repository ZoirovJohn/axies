"use client";
import { REACT_APP_API_URL } from "@/app/config";
import { Member } from "@/libs/dto/member/member";
import { MeLiked } from "@/libs/dto/property/property";
import {
  PropertyCollection,
  PropertyLocation,
  PropertyStatus,
} from "@/libs/enums/property.enum";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

export default function ProductCard6({ property }: Props): JSX.Element {
  const [isHeartToggle, setHeartToggle] = useState<number>(0);
  const imagePath: string = property?.propertyImages[0]
    ? `${REACT_APP_API_URL}/${property?.propertyImages[0]}`
    : "/img/banner/header1.svg";

  // heart toggle
  const heartToggle = () => {
    if (isHeartToggle === 0) {
      return setHeartToggle(1);
    }
    setHeartToggle(0);
  };

  return (
    <>
      <div className="sc-card-product explode style2 mg-bt">
        <div className="card-media">
          <Link href="/item-details-1">
            <Image height={500} width={500} src={imagePath} alt="Image" />
          </Link>

          <button
            onClick={heartToggle}
            className={`wishlist-button heart ${
              isHeartToggle === 1 ? "active" : ""
            } `}
          >
            <span className="number-like">
              {property.propertyLikes + isHeartToggle}
            </span>
          </button>
        </div>
        <div className="card-title">
          <h5>
            <Link href="/item-details-1">{property.propertyTitle}</Link>
          </h5>
        </div>
        <div className="meta-info">
          <div className="author">
            <div className="avatar">
              <Image
                height={100}
                width={100}
                src={
                  property?.memberData?.memberImage
                    ? `${REACT_APP_API_URL}/${property?.memberData?.memberImage}`
                    : "/img/avatar/avt-1.jpg"
                }
                alt="Image"
              />
            </div>
            <div className="info">
              <span>Creator</span>
              <h6>
                <Link href="/authors-2">{property.memberData?.memberNick}</Link>
              </h6>
            </div>
          </div>
          <div className="tags">
            {property.propertyCollection === "COLLECTIBLE"
              ? "CL..BLE"
              : property.propertyCollection}
          </div>
        </div>
        <div className="card-bottom style-explode">
          <div className="price">
            <span>Current Bid</span>
            <div className="price-details">
              <h5>{property.propertyPrice} ETH</h5>
              <span>= ${(2731 * property.propertyPrice).toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
