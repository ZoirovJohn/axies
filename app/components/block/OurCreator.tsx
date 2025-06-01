"use client";
import { product5 } from "@/data/product";
import ProductCard8 from "../card/ProductCard8";
import Link from "next/link";
import { useState } from "react";
import { Property } from "@/libs/dto/property/property";
import { useQuery } from "@apollo/client";
import { GET_PROPERTIES } from "@/apollo/user/query";
import { PropertiesInquiry } from "@/libs/dto/property/property.input";
import { Direction } from "@/libs/enums/common.enum";
import { T } from "@/libs/types/common";

export default function OurCreator(): JSX.Element {
  const [properties, setProperties] = useState<Property[]>([]);
  const [searchFilter, setSearchFilter] = useState<PropertiesInquiry>({
    page: 1,
    limit: 6,
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

  return (
    <>
      <section className="tf-section dark-style2">
        <div className="ibthemes-container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="tf-title style4 mg-bt-38">Our Creators</h2>
            </div>
            {properties.map((item) => (
              <div key={item._id} className="col-lg-4 col-md-6 col-12">
                <ProductCard8 key={item._id} property={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
