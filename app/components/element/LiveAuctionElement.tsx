"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import { useState } from "react";
import { Property } from "@/libs/dto/property/property";
import { useMutation, useQuery, useReactiveVar } from "@apollo/client";
import { GET_PROPERTIES, GET_PROPERTY } from "@/apollo/user/query";
import { PropertiesInquiry } from "@/libs/dto/property/property.input";
import { Direction, Message } from "@/libs/enums/common.enum";
import { T } from "@/libs/types/common";
import ProductCard6 from "../card/ProductCard6";
import {
  sweetMixinErrorAlert,
  sweetTopSmallSuccessAlert,
} from "@/app/sweetAlert";
import { LIKE_TARGET_PROPERTY } from "@/apollo/user/mutation";
import { selectedPropertyVar } from "@/apollo/store";

export default function LiveAuctionElement(): JSX.Element {
  const selectedProperty = useReactiveVar(selectedPropertyVar);
  const [properties, setProperties] = useState<Property[]>([]);
  const [searchFilter, setSearchFilter] = useState<PropertiesInquiry>({
    page: 1,
    limit: 6,
    sort: "createdAt",
    direction: Direction.DESC,
    search: {},
  });

  /** APOLLO REQUESTS **/
  const [likeTargetProperty] = useMutation(LIKE_TARGET_PROPERTY);

  const {
    loading: getPropertyLoading,
    data: getPropertyData,
    error: getPropertyError,
    refetch: getPropertyRefetch,
  } = useQuery(GET_PROPERTY, {
    fetchPolicy: "network-only",
    variables: { input: selectedProperty },
    skip: !selectedProperty,
    notifyOnNetworkStatusChange: true,
    onCompleted: (data: T) => {
      setSearchFilter({
        page: 1,
        limit: 6,
        sort: "createdAt",
        direction: Direction.DESC,
        search: { locationList: data?.getProperty?.propertyLocation },
      });
    },
  });

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

  return (
    <>
      <div className="col-md-12">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: ".live-auction-right",
            nextEl: ".live-auction-next",
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper swiper-container show-shadow carousel pad-t-17 auctions"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {properties.slice(0, 7).map((item) => (
            <SwiperSlide key={item._id}>
              <ProductCard6
                property={item}
                likePropertyHandler={likePropertyHandler}
              />
            </SwiperSlide>
          ))}
          <div className="swiper-pagination mg-t-6" />
          <div className="swiper-button-prev live-auction-right btn-slide-prev" />
          <div className="swiper-button-next live-auction-next btn-slide-next active" />
        </Swiper>
      </div>
    </>
  );
}
