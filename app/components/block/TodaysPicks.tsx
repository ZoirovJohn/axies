"use client";
import { product3 } from "@/data/product";
import ProductCard3 from "../card/ProductCard3";
import Link from "next/link";
import Image from "next/image";
import FilterSection from "../element/FilterSection";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import { Property } from "@/libs/dto/property/property";
import { useMutation, useQuery } from "@apollo/client";
import { GET_PROPERTIES } from "@/apollo/user/query";
import { LIKE_TARGET_PROPERTY } from "@/apollo/user/mutation";
import { T } from "@/libs/types/common";
import { PropertiesInquiry } from "@/libs/dto/property/property.input";
import { useSearchParams } from "next/navigation";
import { Message } from "@/libs/enums/common.enum";
import { sweetMixinErrorAlert, sweetTopSmallSuccessAlert } from "@/app/sweetAlert";

export default function TodaysPicks({
  style,
}: {
  style?: string;
}): JSX.Element {
  const { t } = useTranslation("common");
  const [properties, setProperties] = useState<Property[]>([]);
  const [total, setTotal] = useState<number>(0);

  /** APOLLO REQUESTS **/
  const searchParams = useSearchParams();
  const inputParam = searchParams.get("input");

  const searchFilter = {
    page: 1,
    limit: 8,
    sort: "createdAt",
    direction: "DESC",
    search: {
      squaresRange: {
        start: 0,
        end: 500000,
      },
      pricesRange: {
        start: 0,
        end: 200000000,
      },
    },
  };

  /** APOLLO REQUESTS **/
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
      setProperties(data?.getProperties?.list);
      setTotal(data?.getProperties?.metaCounter[0]?.total);
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

  console.log("properties:", properties);
  console.log("searchFilter:", searchFilter);

  return (
    <>
      <section className={`tf-section live-auctions mobie-pb-70 ${style}`}>
        <div className="ibthemes-container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-live-auctions mg-bt-21">
                <h2 className="tf-title pad-l-7">
                  {t("TodaysPicksHome-title")}
                </h2>
                <Link href="/explore-3" className="exp style2">
                  {t("TodaysPicksHome-explore")}
                </Link>
              </div>
            </div>
            {/* <FilterSection /> */}
            {properties.slice(0, 8).map((item) => (
              <div
                key={item._id}
                className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
              >
                <ProductCard3 property={item} likePropertyHandler={likePropertyHandler}/>
              </div>
            ))}
            <div className="col-md-12 wrap-inner load-more text-center mg-t-4">
              <Link
                href="/explore-4"
                id="loadmore"
                className="sc-button loadmore fl-button pri-3"
              >
                <span>{t("TodaysPicksHome-loadMore")}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
