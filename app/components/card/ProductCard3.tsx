"use client";
import { selectedPropertyAuthorVar, userVar } from "@/apollo/store";
import { REACT_APP_API_URL } from "@/app/config";
import { Member } from "@/libs/dto/member/member";
import { MeLiked } from "@/libs/dto/property/property";
import {
  PropertyCollection,
  PropertyLocation,
  PropertyStatus,
} from "@/libs/enums/property.enum";
import { useReactiveVar } from "@apollo/client";
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
  likePropertyHandler: any;
}

export default function ProductCard3({
  property,
  likePropertyHandler,
}: Props): JSX.Element {
  const user = useReactiveVar(userVar);
  const imagePath: string = property?.propertyImages[0]
    ? `${REACT_APP_API_URL}/${property?.propertyImages[0]}`
    : "/img/banner/header1.svg";

  return (
    <>
      <div className="sc-card-product">
        <div className="card-media">
          <Link
            href="/item-details-1"
            onClick={() => {
              selectedPropertyAuthorVar(property._id);
              localStorage.setItem("selectedPropertyAuthor", property._id);
            }}
          >
            <Image height={500} width={500} src={imagePath} alt="Image" />
          </Link>

          <button
            onClick={() => {
              likePropertyHandler(user, property?._id);
            }}
            className={`wishlist-button heart ${
              property?.meLiked && property?.meLiked[0]?.myFavorite
                ? "active"
                : ""
            } `}
          >
            <span className="number-like">{property.propertyLikes}</span>
          </button>
        </div>
        <div className="card-title">
          <h5 className="style2">
            <Link
              href="/item-details-1"
              onClick={() => {
                selectedPropertyAuthorVar(property._id);
                localStorage.setItem("selectedPropertyAuthor", property._id);
              }}
            >
              {property.propertyTitle}
            </Link>
          </h5>
          <div className="tags">
            {property.propertyAddress.slice(0, 5) + "..."}
          </div>
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
                    : "/assets/images/avatar/avt-28.jpg"
                }
                alt="Image"
              />
            </div>
            <div className="info">
              <span>Owned By</span>
              <h6>
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
                  {property.memberData?.memberNick}
                </Link>
              </h6>
            </div>
          </div>
          <div className="price">
            <span>Current Bid</span>
            <h5> {property.propertyPrice} ETH</h5>
          </div>
        </div>
        {/* <div className="card-bottom">
          <a
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#popup_bid"
            className="sc-button style bag fl-button pri-3"
          >
            <span>Place Bid</span>
          </a>
          <Link href="/activity-1" className="view-history reload">
            View History
          </Link>
        </div> */}
      </div>
    </>
  );
}
