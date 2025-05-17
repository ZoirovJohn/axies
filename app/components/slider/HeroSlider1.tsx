"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import useDarkModeCheck from "@/hooks/useDarkModeCheck";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function HeroSlider1(): JSX.Element {
  // is dark hook
  const isDark = useDarkModeCheck();
  const { t } = useTranslation("common");

  return (
    <>
      <div className="swiper-container mainslider home auctions">
        <div className="swiper-wrapper">
          <Swiper
            slidesPerView={1}
            loop={true}
            navigation={{
              prevEl: ".swiper-button-next",
              nextEl: ".swiper-button-prev",
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="slider-item">
                  <div className="ibthemes-container ">
                    <div className="wrap-heading flat-slider flex">
                      <div className="content">
                        <h2 className="heading">{t("HeroSlider11")}</h2>
                        <h1 className="heading mb-style">
                          <span
                            className={`tf-text ${isDark ? "s1" : "style"}`}
                          >
                            {t("HeroSlider12")}
                          </span>
                        </h1>
                        <h1 className="heading">{t("HeroSlider13")}</h1>
                        <p className="sub-heading mg-t-29 mg-bt-44">
                          {t("HeroSlider14")}
                        </p>
                        <div className="flat-bt-slider flex style2">
                          <Link
                            href="/explore-4"
                            className="sc-button header-slider style style-1 rocket fl-button pri-1"
                          >
                            <span>{t("HeroSlider-explore")}</span>
                          </Link>
                          <Link
                            href="/create-item"
                            className="sc-button header-slider style style-1 note fl-button pri-1"
                          >
                            <span>{t("HeroSlider-create")}</span>
                          </Link>
                        </div>
                      </div>
                      <div className="image">
                        <Image
                          height={448}
                          width={620}
                          className="img-bg"
                          src="/assets/images/backgroup-secsion/img-bg-sliderhome2.webp"
                          alt="Image"
                        />
                        <Image
                          height={588}
                          width={354}
                          src="/assets/images/box-item/imgslider2.webp"
                          alt="Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* item*/}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="slider-item">
                  <div className="ibthemes-container">
                    <div className="wrap-heading flat-slider text-center two">
                      <h2 className="heading">{t("HeroSlider21")}</h2>
                      <h1 className="heading">
                        <span className={`tf-text ${isDark ? "s1" : "style"}`}>
                          {t("HeroSlider22")}{" "}
                        </span>
                        <span>{t("HeroSlider13")}</span>
                      </h1>
                      <p className="sub-heading mg-t-29 mg-bt-50">
                        {t("HeroSlider14")}
                      </p>
                      <div className="flat-bt-slider flex">
                        <Link
                          href="/explore-1"
                          className="sc-button header-slider style style-1 rocket fl-button pri-1"
                        >
                          <span>{t("HeroSlider-explore")}</span>
                        </Link>
                        <Link
                          href="/create-item"
                          className="sc-button header-slider style style-1 note fl-button pri-1"
                        >
                          <span>{t("HeroSlider-create")}</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* item*/}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="slider-item">
                  <div className="ibthemes-container flex">
                    <div className="image three">
                      <Image
                        height={395}
                        width={573}
                        src="/assets/images/box-item/imgslider-3.webp"
                        alt="Image"
                      />
                      <Image
                        height={460}
                        width={705}
                        className="img-bg"
                        src="/assets/images/backgroup-secsion/img-bg-sliderhome3.webp"
                        alt="Image"
                      />
                    </div>
                    <div className="wrap-heading flat-slider h3 three">
                      <h2 className="heading">{t("HeroSlider21")}</h2>
                      <h2 className="heading">{t("HeroSlider22")}</h2>
                      <h2 className="heading h3">
                        <span className="fill">{t("HeroSlider31")}</span>
                        {t("HeroSlider32")}
                      </h2>
                      <p className="sub-heading mt-29 mb-35">
                        {t("HeroSlider14")}
                      </p>
                      <div className="flat-bt-slider flex style2">
                        <a
                          href="/explore-1"
                          className="sc-button header-slider style style-1 rocket fl-button pri-1"
                        >
                          <span>{t("HeroSlider-explore")}</span>
                        </a>
                        <Link
                          href="/create-item"
                          className="sc-button header-slider style style-1 note fl-button pri-1"
                        >
                          <span>{t("HeroSlider-create")}</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* item*/}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="swiper-pagination" />
      </div>
      <div className="swiper-button-next btn-slide-next active" />
      <div className="swiper-button-prev btn-slide-prev" />
    </>
  );
}
