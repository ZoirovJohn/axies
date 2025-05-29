"use client";
import { product1 } from "@/data/product";
import Explore4Slidebar from "../sidebar/Explore4Slidebar";
import ProductCard6 from "../card/ProductCard6";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PropertiesInquiry } from "@/libs/dto/property/property.input";
import { useSearchParams } from "next/navigation";
import { Direction } from "@/libs/enums/common.enum";

const defaultInput: PropertiesInquiry = {
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
      start: 0,
      end: 2000000,
    },
  },
};

export default function Explore4({
  initialInput,
}: {
  initialInput?: PropertiesInquiry;
}): JSX.Element {
  const searchParams = useSearchParams();
  const inputParam = searchParams.get("input");

  const [searchFilter, setSearchFilter] = useState<PropertiesInquiry>(
    inputParam ? JSON.parse(inputParam) : initialInput || defaultInput
  );

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
              initialInput={initialInput || defaultInput}
            />
          </div>
          <div className="col-xl-9 col-lg-9 col-md-12">
            <div className="box-epxlore">
              {product1.slice(0, 6).map((item) => (
                <ProductCard6 key={item.id} data={item} />
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

Explore4.defaultProps = {
  initialInput: {
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
};
