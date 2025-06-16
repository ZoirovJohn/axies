"use client";
import Image from "next/image";
import ItemDetailsTab from "../element/ItemDetailsTab";
import Link from "next/link";
import Countdown from "react-countdown";
import { useMutation, useQuery, useReactiveVar } from "@apollo/client";
import { selectedPropertyAuthorVar, userVar } from "@/apollo/store";
import { GET_PROPERTY } from "@/apollo/user/query";
import { T } from "@/libs/types/common";
import { useState } from "react";
import { Property } from "@/libs/dto/property/property";
import { REACT_APP_API_URL } from "@/libs/config";
import { Message } from "@/libs/enums/common.enum";
import { LIKE_TARGET_PROPERTY } from "@/apollo/user/mutation";
import {
  sweetMixinErrorAlert,
  sweetTopSmallSuccessAlert,
} from "@/app/sweetAlert";

export default function ItemDetails1() {
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: any): JSX.Element | string => {
    if (completed) {
      return "Completed";
    } else {
      return (
        <p className="countdown__timer">
          <span className="countdown__item">{days}</span>
          <span className="countdown__item"> : </span>
          <span className="countdown__item">{hours}</span>
          <span className="countdown__item"> : </span>
          <span className="countdown__item">{minutes}</span>
          <span className="countdown__item"> : </span>
          <span className="countdown__item">{seconds}</span>
        </p>
      );
    }
  };
  const selectedPropertyAuthor = useReactiveVar(selectedPropertyAuthorVar);
  const [propertyData, setPropertyData] = useState<Property | null>(null);
  const imagePath: string = propertyData?.propertyImages[0]
    ? `${REACT_APP_API_URL}/${propertyData?.propertyImages[0]}`
    : "/assets/images/box-item/images-item-details.webp";
  const user = useReactiveVar(userVar);

  /** APOLLO REQUESTS **/
  const [likeTargetProperty] = useMutation(LIKE_TARGET_PROPERTY);

  const {
    loading: getPropertyLoading,
    data: getPropertyData,
    error: getPropertyError,
    refetch: getPropertyRefetch,
  } = useQuery(GET_PROPERTY, {
    fetchPolicy: "network-only",
    variables: { input: selectedPropertyAuthor },
    skip: !selectedPropertyAuthor,
    notifyOnNetworkStatusChange: true,
    onCompleted: (data: T) => {
      setPropertyData(data?.getProperty);
    },
  });

  /** HANDLERS **/
  const likePropertyHandler = async (user: T, id: string) => {
    try {
      if (!id) return;
      if (!user._id) throw new Error(Message.NOT_AUTHENTICATED);

      await likeTargetProperty({ variables: { input: id } });

      await getPropertyRefetch({ input: selectedPropertyAuthor });

      await sweetTopSmallSuccessAlert("success", 800);
    } catch (err: any) {
      console.log("ERROR, likePropertyHandler");
      sweetMixinErrorAlert(err.message).then();
    }
  };

  return (
    <>
      <div className="tf-section tf-item-details">
        <div className="ibthemes-container">
          <div className="row">
            <div className="col-xl-6 col-md-12">
              <div className="content-left">
                <div className="media">
                  <Image height={1000} width={1000} src={imagePath} alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="content-right">
                <div className="sc-item-details">
                  <h2 className="style2">{`“${propertyData?.propertyTitle}”`}</h2>
                  <div className="meta-item">
                    <div className="left">
                      <span className="viewed eye">225</span>
                      <button
                        onClick={() => {
                          propertyData?._id &&
                            likePropertyHandler(user, propertyData._id);
                        }}
                        className={`wishlist-button heart ${
                          propertyData?.meLiked &&
                          propertyData?.meLiked[0]?.myFavorite
                            ? "active"
                            : ""
                        } `}
                      >
                        <span className="number-like">
                          {propertyData?.propertyLikes}
                        </span>
                      </button>
                    </div>
                    <div className="right">
                      <a className="share" />
                      <a className="option" />
                    </div>
                  </div>
                  <div className="client-infor sc-card-product">
                    <div className="meta-info">
                      <div className="author">
                        <div className="avatar">
                          <Image
                            height={200}
                            width={200}
                            src="/assets/images/avatar/avt-8.webp"
                            alt=""
                          />
                        </div>
                        <div className="info">
                          <span>Owned By</span>
                          <h6>
                            <Link href="/authors-2">Ralph Garraway</Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="meta-info">
                      <div className="author">
                        <div className="avatar">
                          <Image
                            height={200}
                            width={200}
                            src="/assets/images/avatar/avt-2.webp"
                            alt=""
                          />
                        </div>
                        <div className="info">
                          <span>Create By</span>
                          <h6>
                            <Link href="/authors-2">Freddie Carpenter</Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    Habitant sollicitudin faucibus cursus lectus pulvinar dolor
                    non ultrices eget. Facilisi lobortisal morbi fringilla urna
                    amet sed ipsum vitae ipsum malesuada. Habitant sollicitudin
                    faucibus cursus lectus pulvinar dolor non ultrices eget.
                    Facilisi lobortisal morbi fringilla urna amet sed ipsum
                  </p>
                  <div className="meta-item-details style2">
                    <div className="item meta-price">
                      <span className="heading">Current Bid</span>
                      <div className="price">
                        <div className="price-box">
                          <h5> 4.89 ETH</h5>
                          <span>= $12.246</span>
                        </div>
                      </div>
                    </div>
                    <div className="item count-down">
                      <span className="heading style-2">Countdown</span>
                      <span className="js-countdown">
                        {" "}
                        <Countdown
                          date={Date.now() + 1000 * 60 * 60 * 24 * 4.343}
                          renderer={renderer}
                        />
                      </span>
                    </div>
                  </div>
                  <a
                    data-bs-toggle="modal"
                    data-bs-target="#popup_bid"
                    className="sc-button loadmore style bag fl-button pri-3"
                  >
                    <span>Place a bid</span>
                  </a>
                </div>
                <ItemDetailsTab />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
