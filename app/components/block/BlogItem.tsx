"use client";
import { blog } from "@/data/blog";
import BlogCard1 from "../card/BlogCard1";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function BlogItem(): JSX.Element {
  const { t } = useTranslation("common");

  return (
    <>
      <div className="tf-section sc-card-blog dark-style2">
        <div className="ibthemes-container">
          <div className="row">
            {blog.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <BlogCard1 data={item} />
              </div>
            ))}

            <div className="col-md-12 wrap-inner load-more text-center mg-t-10">
              <Link
                href="/blog"
                id="loadmore"
                className="sc-button loadmore fl-button pri-3"
              >
                <span>{t("Explore4ShowMore")}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
