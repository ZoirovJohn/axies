"use client";
import { product3 } from "@/data/product";
import ProductCard3 from "../card/ProductCard3";
import Link from "next/link";
import Image from "next/image";
import FilterSection from "../element/FilterSection";
import { useTranslation } from "next-i18next";

export default function TodaysPicks({
  style,
}: {
  style?: string;
}): JSX.Element {
  const { t } = useTranslation("common");

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
            <FilterSection />
            {product3.slice(0, 8).map((item) => (
              <div
                key={item.id}
                className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
              >
                <ProductCard3 data={item} />
              </div>
            ))}
            <div className="col-md-12 wrap-inner load-more text-center mg-t-4">
              <Link
                href="/explore-3"
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
