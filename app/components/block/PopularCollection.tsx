"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import ProductCard2 from "../card/ProductCard2";
import { product1, product2 } from "@/data/product";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import { Property } from "@/libs/dto/property/property";
import { useQuery, useReactiveVar } from "@apollo/client";
import { GET_PROPERTIES } from "@/apollo/user/query";
import { PropertiesInquiry } from "@/libs/dto/property/property.input";
import { Direction } from "@/libs/enums/common.enum";
import { T } from "@/libs/types/common";

export default function PopularCollection(): JSX.Element {
  const { t } = useTranslation("common");
  const [properties, setProperties] = useState<Property[]>([]);
  const [searchFilter, setSearchFilter] = useState<PropertiesInquiry>({
    page: 1,
    limit: 9000,
    sort: "createdAt",
    direction: Direction.DESC,
    search: {
      squaresRange: {
        start: 0,
        end: 500,
      },
      pricesRange: {
        start: 0.001,
        end: 500,
      },
    },
  });

  /** APOLLO REQUESTS **/
  // const [likeTargetProperty] = useMutation(LIKE_TARGET_PROPERTY);

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
      setProperties(data?.getProperties?.list);
    },
  });

  console.log("PopularCollection properties:", properties);

  return (
    <>
      <section className="tf-section live-auctions style4 no-pt-mb mobie-style">
        <div className="ibthemes-container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-live-auctions">
                <h2 className="tf-title pb-17 text-left">
                  {t("PopularCollectionHome-1")}
                </h2>
                <Link href="/explore-3" className="exp style2">
                  {t("PopularCollectionHome-2")}
                </Link>
              </div>
            </div>
            <div className="col-md-12">
              <div className="collection">
                <div className="swiper-container show-shadow carousel4 pad-t-20 button-arow-style">
                  <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    modules={[Navigation]}
                    className="mySwiper swiper-container show-shadow carousel pad-t-17 auctions"
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      769: {
                        slidesPerView: 2,
                      },
                      1024: {
                        slidesPerView: 3,
                      },
                    }}
                  >
                    {properties.map((item) => (
                      <SwiperSlide key={item._id}>
                        <ProductCard2 key={item._id} property={item} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="swiper-wrapper">
                    <div className="swiper-slide"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
