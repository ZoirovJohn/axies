"use client";
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

const tabs: string[] = ["Bid History", "Info", "Provenance"];

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

export default function ItemDetailsTab({ property }: Props): JSX.Element {
  const [getCurrentTab, setCurrentTab] = useState<number>(0);

  // tab handler
  const tabHandler = (select: number) => {
    setCurrentTab(select);
  };

  return (
    <>
      <div className="flat-tabs themesflat-tabs">
        <ul className="menu-tab tab-title">
          {tabs.map((item, index) => (
            <li
              onClick={() => tabHandler(index)}
              key={index}
              className={`item-title ${
                index === getCurrentTab ? "active" : ""
              }`}
            >
              <span className="inner">{item}</span>
            </li>
          ))}
        </ul>
        <div className="content-tab">
          {getCurrentTab === 0 && (
            <div className="content-inner tab-content">
              <ul className="bid-history-list">
                <li>
                  <div className="content">
                    <div className="client">
                      <div className="sc-author-box style-2">
                        <div className="author-avatar">
                          <a>
                            <Image
                              height={100}
                              width={100}
                              src="/assets/images/avatar/avt-3.webp"
                              alt=""
                              className="avatar"
                            />
                          </a>
                          <div className="badge" />
                        </div>
                        <div className="author-infor">
                          <div className="name">
                            <h6>
                              <Link
                                href="/authors-2"
                                onClick={(e) => e.preventDefault()}
                              >
                                Mason Woodward
                              </Link>
                            </h6>
                            <span>place a bid</span>
                          </div>
                          <span className="time">8 hours ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="price">
                      <h5>4.89 ETH</h5>
                      <span>= $12.246</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="content">
                    <div className="client">
                      <div className="sc-author-box style-2">
                        <div className="author-avatar">
                          <a>
                            <Image
                              height={100}
                              width={100}
                              src="/assets/images/avatar/avt-11.webp"
                              alt=""
                              className="avatar"
                            />
                          </a>
                          <div className="badge" />
                        </div>
                        <div className="author-infor">
                          <div className="name">
                            <h6>
                              <Link
                                href="/authors-2"
                                onClick={(e) => e.preventDefault()}
                              >
                                Mason Woodward
                              </Link>
                            </h6>
                            <span>bid accepted</span>
                          </div>
                          <span className="time">at 06/10/2021, 3:20 AM</span>
                        </div>
                      </div>
                    </div>
                    <div className="price">
                      <h5>4.89 ETH</h5>
                      <span>= $12.246</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="content">
                    <div className="client">
                      <div className="sc-author-box style-2">
                        <div className="author-avatar">
                          <a>
                            <Image
                              height={100}
                              width={100}
                              src="/assets/images/avatar/avt-1.webp"
                              alt=""
                              className="avatar"
                            />
                          </a>
                          <div className="badge" />
                        </div>
                        <div className="author-infor">
                          <div className="name">
                            <h6>
                              <Link
                                href="/authors-2"
                                onClick={(e) => e.preventDefault()}
                              >
                                Mason Woodward
                              </Link>
                            </h6>
                            <span>place a bid</span>
                          </div>
                          <span className="time">8 hours ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="price">
                      <h5>4.89 ETH</h5>
                      <span>= $12.246</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="content">
                    <div className="client">
                      <div className="sc-author-box style-2">
                        <div className="author-avatar">
                          <a>
                            <Image
                              height={100}
                              width={100}
                              src="/assets/images/avatar/avt-5.webp"
                              alt=""
                              className="avatar"
                            />
                          </a>
                          <div className="badge" />
                        </div>
                        <div className="author-infor">
                          <div className="name">
                            <h6>
                              <Link
                                href="/authors-2"
                                onClick={(e) => e.preventDefault()}
                              >
                                Mason Woodward
                              </Link>
                            </h6>
                            <span>place a bid</span>
                          </div>
                          <span className="time">8 hours ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="price">
                      <h5>4.89 ETH</h5>
                      <span>= $12.246</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="content">
                    <div className="client">
                      <div className="sc-author-box style-2">
                        <div className="author-avatar">
                          <a>
                            <Image
                              height={100}
                              width={100}
                              src="/assets/images/avatar/avt-7.webp"
                              alt=""
                              className="avatar"
                            />
                          </a>
                          <div className="badge" />
                        </div>
                        <div className="author-infor">
                          <div className="name">
                            <h6>
                              <Link
                                href="/authors-2"
                                onClick={(e) => e.preventDefault()}
                              >
                                Mason Woodward
                              </Link>
                            </h6>
                            <span>place a bid</span>
                          </div>
                          <span className="time">8 hours ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="price">
                      <h5>4.89 ETH</h5>
                      <span>= $12.246</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="content">
                    <div className="client">
                      <div className="sc-author-box style-2">
                        <div className="author-avatar">
                          <a>
                            <Image
                              height={100}
                              width={100}
                              src="/assets/images/avatar/avt-8.webp"
                              alt=""
                              className="avatar"
                            />
                          </a>
                          <div className="badge" />
                        </div>
                        <div className="author-infor">
                          <div className="name">
                            <h6>
                              <Link
                                href="/authors-2"
                                onClick={(e) => e.preventDefault()}
                              >
                                Mason Woodward
                              </Link>
                            </h6>
                            <span>place a bid</span>
                          </div>
                          <span className="time">8 hours ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="price">
                      <h5>4.89 ETH</h5>
                      <span>= $12.246</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          )}

          {getCurrentTab === 1 && (
            <div className="content-inner tab-content">
              <ul className="bid-history-list">
                <li>
                  <div className="content">
                    <div className="client">
                      <div className="sc-author-box style-2">
                        <div className="author-infor">
                          <div className="name">
                            <h6>Name:</h6>
                            <span>{property?.propertyTitle}</span>
                          </div>
                          <div className="name">
                            <h6>Adress:</h6>
                            <span>{property?.propertyAddress}</span>
                          </div>
                          <div className="name">
                            <h6>Location:</h6>
                            <span>{property?.propertyLocation}</span>
                          </div>
                          <div className="name">
                            <h6>Collection:</h6>
                            <span>{property?.propertyCollection}</span>
                          </div>
                          <div className="name">
                            <h6>Price:</h6>
                            <span>${property?.propertyPrice}</span>
                          </div>
                          <div className="name">
                            <h6>Rarity Score:</h6>
                            <span>{property?.propertyRarityScore}</span>
                          </div>
                          <div className="name">
                            <h6>Editions:</h6>
                            <span>{property?.propertyEditions}</span>
                          </div>
                          <div className="name">
                            <h6>Trait Groups:</h6>
                            <span>{property?.propertyTraitGroups}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          )}

          {getCurrentTab === 2 && (
            <div className="content-inner tab-content">
              <div className="provenance">
                <p>
                  This NFT, titled ‘{property?.propertyTitle}’, originates from
                  the smart contract at address
                  {property?.propertyAddress} on the{" "}
                  {property?.propertyCollection} blockchain. It was minted by
                  the original creator and recorded permanently on-chain,
                  ensuring its authenticity and ownership history. Each transfer
                  and transaction related to this NFT can be transparently
                  verified through the blockchain ledger, guaranteeing its
                  unique provenance.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
