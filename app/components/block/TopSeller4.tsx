"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import AuthorCard1 from "../card/AuthorCard1";
import { author } from "@/data/author";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_AGENTS } from "@/apollo/user/query";
import { T } from "@/libs/types/common";
import { AgentsInquiry } from "@/libs/dto/member/member.input";
import { Member } from "@/libs/dto/member/member";

export default function TopSeller4(): JSX.Element {
  const [agents, setAgents] = useState<Member[]>([]);
  const [searchFilter, setSearchFilter] = useState<AgentsInquiry>({
    page: 1,
    limit: 12,
    search: {},
  });

  // Repeat the agents to make total length exactly 12
  const getFixedLengthAgents = (
    list: Member[],
    targetLength = 12
  ): Member[] => {
    if (!Array.isArray(list) || list.length === 0) return [];

    const result: Member[] = [];
    let i = 0;

    while (result.length < targetLength) {
      result.push(list[i % list.length]);
      i++;
    }

    return result;
  };

  const repeatedAgents = getFixedLengthAgents(agents, 12);

  /** APOLLO REQUESTS **/
  // const [likeTargetProperty] = useMutation(LIKE_TARGET_PROPERTY);

  const {
    loading: getPropertiesLoading,
    data: getPropertiesData,
    error: getPropertiesError,
    refetch: getPropertiesRefetch,
  } = useQuery(GET_AGENTS, {
    fetchPolicy: "network-only",
    variables: { input: searchFilter },
    notifyOnNetworkStatusChange: true,
    onCompleted: (data: T) => {
      setAgents(data?.getAgents?.list || []);
    },
  });

  console.log("authors-1 TopSellers agents:", agents);

  return (
    <>
      <section className="tf-section top-seller style-2">
        <div className="ibthemes-container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="tf-title style4">Top Sellers</h2>
              <p className="tf-sub-title">
                Meet our top-performing creators, hand-picked for their
                consistency, quality, and community impact. Explore their latest
                works and support your favorites.
              </p>
            </div>
            <div className="col-md-12">
              <div className="">
                <Swiper
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={{
                    prevEl: ".btn-slide-prev",
                    nextEl: ".btn-slide-next",
                  }}
                  modules={[Pagination, Navigation]}
                  className="swiper-container seller seller-slider"
                  breakpoints={{
                    0: {
                      slidesPerView: 2,
                    },
                    500: {
                      slidesPerView: 3,
                    },
                    640: {
                      slidesPerView: 4,
                    },
                    768: {
                      slidesPerView: 5,
                    },
                    1070: {
                      slidesPerView: 7,
                    },
                    1400: {
                      slidesPerView: 9,
                    },
                  }}
                >
                  {repeatedAgents.slice(0, 12).map((item, index) => (
                    <SwiperSlide key={`${item._id}-${index}`}>
                      <AuthorCard1 agent={item} />
                    </SwiperSlide>
                  ))}

                  <div className="swiper-pagination" />
                  <div className="swiper-button-prev btn-slide-prev" />
                  <div className="swiper-button-next btn-slide-next" />
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
