"use client";
import { product1 } from "@/data/product";
import Explore4Slidebar from "../sidebar/Explore4Slidebar";
import ProductCard6 from "../card/ProductCard6";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { PropertiesInquiry } from "@/libs/dto/property/property.input";
import { useSearchParams } from "next/navigation";
import { Direction } from "@/libs/enums/common.enum";
import { useMutation, useQuery } from "@apollo/client";
import { GET_PROPERTIES } from "@/apollo/user/query";
import { T } from "@/libs/types/common";
import { useRouter } from "next/navigation";
import { Property } from "@/libs/dto/property/property";
import { LIKE_TARGET_PROPERTY } from "@/apollo/user/mutation";
import Button from "@mui/material/Button";

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
        start: 0.001,
        end: 500,
      },
    },
  },
}: any): JSX.Element {
  const searchParams = useSearchParams();
  const inputParam = searchParams.get("input");
  const [properties, setProperties] = useState<Property[]>([]);
  const [propertiesCount, setPropertiesCount] = useState<number>(0);
  const [showMore, setShowMore] = useState(false);
  const router = useRouter();
  // console.log("inputParam:", inputParam);
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
      setPropertiesCount(data?.getProperties?.metaCounter[0]?.total);
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

  // HANDLERS

  const showHandler = useCallback(async () => {
    try {
      const newLimit = showMore ? 6 : 12;
      const newInput = {
        ...searchFilter,
        limit: newLimit,
      };

      await router.push(`/explore-4?input=${JSON.stringify(newInput)}`, {
        scroll: false,
      });

      setSearchFilter(newInput);
      setShowMore(!showMore); // toggle the state
    } catch (err: any) {
      console.log("ERROR in showHandler:", err);
    }
  }, [showMore, searchFilter, router]);

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
            <div className="box-explore">
              {properties.length === 0 ? (
                <h3 style={{ color: "rgb(81, 66, 252)" }}>
                  No Properties Found
                </h3>
              ) : (
                properties
                  .slice(0, searchFilter.limit)
                  .map((item) => (
                    <ProductCard6 key={item._id} property={item} />
                  ))
              )}
            </div>
            <div className="btn-auction center">
              {propertiesCount > 6 && (
                <Button
                  className="sc-button loadmore fl-button pri-3"
                  onClick={showHandler}
                  sx={{ borderRadius: "32px" }}
                >
                  <span>{showMore ? "Show Less" : "Show More"}</span>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
