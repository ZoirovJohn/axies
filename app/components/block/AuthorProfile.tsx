"use client";
import { useEffect, useState } from "react";
import ProductCard6 from "../card/ProductCard6";
import Link from "next/link";
import Image from "next/image";
import { Property } from "@/libs/dto/property/property";
import { useMutation, useQuery } from "@apollo/client";
import { GET_MEMBER, GET_PROPERTIES } from "@/apollo/user/query";
import { PropertiesInquiry } from "@/libs/dto/property/property.input";
import { Direction, Message } from "@/libs/enums/common.enum";
import { T } from "@/libs/types/common";
import { PropertyCollection, PropertyStatus } from "@/libs/enums/property.enum";
import { useReactiveVar } from "@apollo/client";
import { selectedPropertyAuthorVar, userVar } from "@/apollo/store";
import { Messages, REACT_APP_API_URL } from "@/libs/config";
import { useRouter } from "next/navigation";
import {
  LIKE_TARGET_PROPERTY,
  SUBSCRIBE,
  UNSUBSCRIBE,
} from "@/apollo/user/mutation";
import {
  sweetErrorHandling,
  sweetMixinErrorAlert,
  sweetTopSmallSuccessAlert,
} from "@/app/sweetAlert";
import { Member } from "@/libs/dto/member/member";
import { FollowInquiry } from "@/libs/dto/follow/follow.input";

export default function AuthorProfile(initialInput: {
  page: 1;
  limit: 50;
  search: {
    followingId: "";
  };
}): JSX.Element {
  const selectedPropertyAuthor = useReactiveVar(selectedPropertyAuthorVar);
  const [getCurrentTab, setCurrentTab] = useState<string>("ALL");
  const [agentProperties, setAgentProperties] = useState<Property[]>([]);
  const [propertiesCount, setPropertiesCount] = useState<number>(0);
  const member = agentProperties[0]?.memberData;
  const user = useReactiveVar(userVar);
  const [memberData, setMemberData] = useState<Member | null>(null);
  const memberImagePath: string = member?.memberImage
    ? `${REACT_APP_API_URL}/${member?.memberImage}`
    : "/assets/images/avatar/avt-28.jpg";
  const properties = (agentProperties || []).filter(
    (property) =>
      getCurrentTab === "ALL" || property.propertyCollection === getCurrentTab
  );
  const [searchFilter, setSearchFilter] = useState<PropertiesInquiry>({
    page: 1,
    limit: 5,
    sort: "createdAt",
    search: {
      memberId: selectedPropertyAuthor,
    },
  });
  const [followInquiry, setFollowInquiry] =
    useState<FollowInquiry>(initialInput);
  const [follow, setFollow] = useState<boolean>(true);
  console.log("selectedPropertyAuthor:", selectedPropertyAuthor);
  console.log("agentProperties:", agentProperties);

  /** APOLLO REQUESTS **/
  const [subscribe] = useMutation(SUBSCRIBE);
  const [unsubscribe] = useMutation(UNSUBSCRIBE);
  const [likeTargetProperty] = useMutation(LIKE_TARGET_PROPERTY);

  const {
    loading: getPropertiesLoading,
    data: getPropertiesData,
    error: getPropertiesError,
    refetch: getPropertiesRefetch,
  } = useQuery(GET_PROPERTIES, {
    fetchPolicy: "network-only",
    variables: { input: searchFilter },
    notifyOnNetworkStatusChange: true,
    onCompleted: (data: T) => {
      setAgentProperties(data?.getProperties?.list);
      setPropertiesCount(data?.getProperties?.metaCounter[0]?.total);
    },
  });

  const {
    loading: getMemberLoading,
    data: getMemberData,
    error: getMemberFollowingsError,
    refetch: getMemberRefetch,
  } = useQuery(GET_MEMBER, {
    fetchPolicy: "network-only",
    variables: { input: selectedPropertyAuthor },
    skip: !selectedPropertyAuthor,
    notifyOnNetworkStatusChange: true,
    onCompleted: (data: T) => {
      setMemberData(data?.getMember);
    },
  });

  useEffect(() => {
    setFollow(!!memberData?.meFollowed?.[0]?.myFollowing);
  }, [memberData]);

  /** HANDLERS **/
  const likePropertyHandler = async (user: T, id: string) => {
    try {
      if (!id) return;
      if (!user._id) throw new Error(Message.NOT_AUTHENTICATED);

      await likeTargetProperty({ variables: { input: id } });

      await getPropertiesRefetch({ input: searchFilter });

      await sweetTopSmallSuccessAlert("success", 800);
    } catch (err: any) {
      console.log("ERROR, likePropertyHandler");
      sweetMixinErrorAlert(err.message).then();
    }
  };

  const subscribeHandler = async (id: string, refetch: any, query: any) => {
    try {
      console.log("id:", id);
      if (!id) throw new Error(Messages.error1);
      if (!user._id) throw new Error(Messages.error2);

      await subscribe({
        variables: {
          input: id,
        },
      });
      await sweetTopSmallSuccessAlert("Subscribed!", 800);
      setFollow(true);

      // await refetch({ input: query });
    } catch (err: any) {
      sweetErrorHandling(err).then();
    }
  };

  const unsubscribeHandler = async (id: string, refetch: any, query: any) => {
    try {
      if (!id) throw new Error(Messages.error1);
      if (!user._id) throw new Error(Messages.error2);

      await unsubscribe({
        variables: {
          input: id,
        },
      });
      await sweetTopSmallSuccessAlert("Unsubscribed!", 800);
      setFollow(false);

      // await refetch({ input: query });
    } catch (err: any) {
      sweetErrorHandling(err).then();
    }
  };

  // tab handler
  const tabHandler = (select: string) => {
    setCurrentTab(select);
  };

  return (
    <>
      <section className="tf-section authors">
        <div className="ibthemes-container">
          <div className="flat-tabs tab-authors">
            <div className="author-profile flex">
              <div className="feature-profile">
                <Image
                  height={500}
                  width={500}
                  style={{ height: "276px", width: "276px" }}
                  src={memberImagePath}
                  alt="Image"
                  className="avatar"
                />
              </div>
              <div className="infor-profile">
                <span>Author Profile</span>
                <h2 className="title">
                  {agentProperties[0]?.memberData?.memberNick ?? "Author Name"}
                </h2>
                {propertiesCount ? (
                  <p className="content">
                    {agentProperties[0]?.memberData?.memberNick} has created{" "}
                    {propertiesCount} properties till now.
                  </p>
                ) : (
                  <p className="content">
                    {agentProperties[0]?.memberData?.memberNick} has not created
                    any properties till now.
                  </p>
                )}

                <form>
                  <input
                    type="text"
                    className="inputcopy"
                    value={
                      memberData?.memberPhone != null
                        ? String(memberData.memberPhone)
                        : ""
                    }
                    readOnly
                  />
                  <button type="button" className="btn-copycode">
                    <i className="icon-fl-file-1" />
                  </button>
                </form>
              </div>
              <div className="widget-social style-3">
                <ul>
                  <li>
                    <a>
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li className="style-2">
                    <a>
                      <i className="fab fa-telegram-plane" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                  <li className="mgr-none">
                    <a>
                      <i className="icon-fl-tik-tok-2" />
                    </a>
                  </li>
                </ul>
                {memberData?._id !== user?._id && (
                  <>
                    {follow ? (
                      <div className="btn-profile">
                        <Link
                          href="/"
                          className="sc-button style-1 follow"
                          style={{
                            color: "white",
                            backgroundColor: "red",
                            borderColor: "red",
                          }}
                          onClick={(e) => {
                            e.preventDefault();
                            if (memberData?._id) {
                              unsubscribeHandler(
                                memberData._id,
                                null,
                                followInquiry
                              );
                            }
                          }}
                        >
                          UnFollow
                        </Link>
                      </div>
                    ) : (
                      <div className="btn-profile">
                        <Link
                          href="/"
                          className="sc-button style-1 follow"
                          style={{
                            color: "white",
                            backgroundColor: "green",
                            borderColor: "green",
                          }}
                          onClick={(e) => {
                            e.preventDefault();
                            memberData?._id &&
                              subscribeHandler(
                                memberData._id,
                                null,
                                followInquiry
                              );
                          }}
                        >
                          Follow
                        </Link>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
            <ul className="menu-tab flex">
              {["ALL", "ART", "MUSIC", "COLLECTIBLE", "SPORTS"].map(
                (tab, index) => (
                  <li
                    key={index}
                    onClick={() => tabHandler(tab)}
                    className={`tablinks ${
                      tab.includes(getCurrentTab) ? "active" : ""
                    }`}
                  >
                    {tab}
                  </li>
                )
              )}
            </ul>
            <div className="content-tab active">
              <div className="row">
                {properties.length === 0 ? (
                  <div className="col-12 text-center">
                    <h3
                      style={{
                        color: "rgb(81, 66, 252)",
                        paddingBottom: "40px",
                      }}
                    >
                      No Properties Found
                    </h3>{" "}
                  </div>
                ) : (
                  (agentProperties || [])
                    .filter(
                      (property) =>
                        getCurrentTab === "ALL" ||
                        property.propertyCollection === getCurrentTab
                    )
                    .slice(0, 80)
                    .map((item) => (
                      <div
                        key={item._id}
                        className="col-xl-3 col-lg-4 col-md-6 col-12"
                      >
                        <ProductCard6
                          property={item}
                          likePropertyHandler={likePropertyHandler}
                        />
                      </div>
                    ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
