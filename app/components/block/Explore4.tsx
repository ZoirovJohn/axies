"use client";
import { product1 } from "@/data/product";
import Explore4Slidebar from "../sidebar/Explore4Slidebar";
import ProductCard6 from "../card/ProductCard6";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PropertiesInquiry } from "@/libs/dto/property/property.input";
import { useSearchParams } from "next/navigation";
import { Direction } from "@/libs/enums/common.enum";
import { useMutation, useQuery } from "@apollo/client";
import { GET_PROPERTIES } from "@/apollo/user/query";
import { T } from "@/libs/types/common";
import { Property } from "@/libs/dto/property/property";
import { LIKE_TARGET_PROPERTY } from "@/apollo/user/mutation";

export default function Explore4({
  initialInput = {
    page: 1,
    limit: 6,
    sort: "createdAt",
    direction: "DESC",
    search: {
      squaresRange: {
        start: 0,
        end: 500,
      },
      pricesRange: {
        start: 0,
        end: 2000000,
      },
    },
  },
}: any): JSX.Element {
  const searchParams = useSearchParams();
  const inputParam = searchParams.get("input");
  const [properties, setProperties] = useState<Property[]>([]);
  console.log("inputParam:", inputParam);
  const [searchFilter, setSearchFilter] = useState<PropertiesInquiry>(
    inputParam ? JSON.parse(inputParam) : initialInput
  );
  console.log("searchFilter:", searchFilter);

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
    },
  });

  console.log("properties:", properties);

  /** LIFECYCLES **/

  useEffect(() => {
    if (inputParam) {
      const inputObj = JSON.parse(inputParam);
      setSearchFilter(inputObj);
    }
  }, [inputParam]);

  return (
    <section className="tf-explore tf-section">
      <div className="ibthemes-container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-12">
            <Explore4Slidebar
              searchFilter={searchFilter}
              setSearchFilter={setSearchFilter}
              initialInput={initialInput}
            />
          </div>
          <div className="col-xl-9 col-lg-9 col-md-12">
            <div className="box-epxlore">
              {properties.slice(0, 6).map((item) => (
                <ProductCard6 key={item._id} property={item} />
              ))}
            </div>
            <div className="btn-auction center">
              <Link
                href="/live-auctions"
                className="sc-button loadmore fl-button pri-3"
              >
                <span>Load More</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
