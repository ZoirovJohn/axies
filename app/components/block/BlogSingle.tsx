"use client";
import { blog } from "@/data/blog";
import Image from "next/image";
import Link from "next/link";

export default function BlogSingle({ id = 1 }: { id?: number }): JSX.Element {
  const data = blog.find((item) => item.id == id);

  return (
    <>
      <div className="tf-section post-details">
        <div className="ibthemes-container">
          <div className="wrap-flex-box style">
            <div className="post">
              <div className="inner-content">
                <h2 className="title-post">{data?.title}</h2>
                <div className="divider" />
                <div className="meta-post flex mg-bt-31">
                  <div className="box">
                    <div className="inner">
                      <h6 className="desc">디자이너 인터뷰</h6>
                      <p>2025년 1월</p>
                    </div>
                  </div>
                  <div className="box left">
                    <div className="inner boder pad-r-50">
                      <h6 className="desc">작성자</h6>
                      <p>{data?.author.name}</p>
                    </div>
                    <div className="inner mg-l-39 mg-r-1">
                      <h6 className="desc">날짜</h6>
                      <p>2025-02-18</p>
                    </div>
                  </div>
                </div>
                <div className="image">
                  {data && (
                    <Image
                      height={1000}
                      width={1000}
                      src={data?.img}
                      alt="Image"
                    />
                  )}
                </div>
                <div className="inner-post mg-t-40">
                  <h3 className="heading mg-bt-16">
                    암호화폐 분야에서 일하는 이유는 무엇인가?
                  </h3>
                  <p className="mg-bt-24">
                    매일 새로운 일이 일어납니다. NFTs는 디지털 소유권을
                    재정의하고, DAOs는 기업 운영 방식을 변화시키며, 스마트
                    계약은 부동산 거래를 처리합니다. 암호화폐 세계에 참여하는
                    것은 혁신의 최전선에 있다는 뜻입니다. 창의성과 기술이 만나는
                    무한한 가능성을 가진 분야입니다.
                  </p>
                  <div className="image-box">
                    <Image
                      height={500}
                      width={500}
                      src="/assets/images/blog/thumb1_details.webp"
                      alt="Image"
                    />
                    <Image
                      height={500}
                      width={500}
                      src="/assets/images/blog/thumb2_details.webp"
                      alt="Image"
                    />
                  </div>
                </div>
                <div className="inner-post mg-t-22">
                  <h3 className="heading mg-bt-16">암호화폐 개발자의 일상</h3>
                  <p className="mg-bt-24">
                    아침은 주로 최신 암호화폐 뉴스를 스캔하는 것부터
                    시작됩니다—규제 업데이트, 토큰 출시, 보안 경고 등. 오후에는
                    깊이 집중하여 Solidity 코드를 작성하고 스마트 계약을
                    테스트하거나 블록체인 데이터를 분석합니다. 오후에는 DeFi
                    팀과 협업하거나 지갑 UX에 대해 논의하는 시간이 주어집니다.
                  </p>
                  <div className="image">
                    <Image
                      height={500}
                      width={500}
                      src="/assets/images/blog/thumb-6.jpg"
                      alt="Image"
                    />
                  </div>
                </div>
                <div className="inner-post mg-t-24">
                  <h3 className="heading mg-bt-16">미래 금융의 건설</h3>
                  <p>
                    2025년 암호화폐는 단순히 이익을 넘어선 것입니다—접근성과
                    권한 부여에 관한 것입니다. 초국경 결제를 몇 초 만에 처리할
                    수 있게 하고, 사람들이 자신의 데이터와 신원을 제어할 수 있게
                    하며, 분산 기술은 더 열린 금융 미래를 구축하고 있습니다.
                    그리고 그 시작에 불과합니다.
                  </p>
                  <p className="mg-bt-22">
                    2025년 암호화폐는 단순히 이익을 넘어선 것입니다—접근성과
                    권한 부여에 관한 것입니다. 초국경 결제를 몇 초 만에 처리할
                    수 있게 하고, 사람들이 자신의 데이터와 신원을 제어할 수 있게
                    하며, 분산 기술은 더 열린 금융 미래를 구축하고 있습니다.
                    그리고 그 시작에 불과합니다.
                  </p>
                </div>
                <div className="sc-widget style-1">
                  <div className="widget widget-tag style-2">
                    <h4 className="title-widget">태그</h4>
                    <ul>
                      <li>
                        <a>비트코인</a>
                      </li>
                      <li>
                        <a>토큰</a>
                      </li>
                      <li>
                        <a>지갑</a>
                      </li>
                    </ul>
                  </div>
                  <div className="widget widget-social style-2">
                    <h4 className="title-widget">공유:</h4>
                    <ul>
                      <li>
                        <a className="icon-fl-facebook" />
                      </li>
                      <li className="style-2">
                        <a className="icon-fl-coolicon" />
                      </li>
                      <li className="mgr-none">
                        <a className="icon-fl-mess" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="divider d2" />
                <div id="comments">
                  <h3 className="heading mg-bt-23">댓글 남기기</h3>
                  <form
                    action="blog"
                    method="post"
                    id="commentform"
                    className="comment-form"
                  >
                    <fieldset className="name">
                      <input
                        type="text"
                        id="name"
                        placeholder="이름"
                        className="tb-my-input"
                        name="name"
                        tabIndex={2}
                        aria-required="true"
                        required
                      />
                    </fieldset>
                    <fieldset className="email">
                      <input
                        type="email"
                        id="email"
                        placeholder="이메일 *"
                        className="tb-my-input"
                        name="email"
                        tabIndex={2}
                        aria-required="true"
                        required
                      />
                    </fieldset>
                    <fieldset className="message">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="메시지"
                        tabIndex={4}
                        aria-required="true"
                      />
                    </fieldset>
                    <div className="btn-submit mg-t-36">
                      <button className="tf-button-submit" type="submit">
                        댓글 보내기
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="side-bar details">
              <div className="widget widget-recent-post mg-bt-43">
                <h3 className="title-widget mg-bt-23">최근 게시물</h3>
                <ul>
                  <li className="box-recent-post">
                    <div className="box-feature">
                      <Link href="/blog-details">
                        <Image
                          height={500}
                          width={500}
                          src="/assets/images/box-item/icon1-recont-post.webp"
                          alt="image"
                        />
                      </Link>
                    </div>
                    <div className="box-content">
                      <Link href="/blog-details" className="title-recent-post">
                        6가지 모바일 웹사이트 속도 향상 방법
                      </Link>
                      <span>
                        <span className="sub-recent-post">
                          모바일 페이지 로딩 속도를 개선하여 사용자 경험을
                          향상시키는 6가지 팁을 알아보세요.
                        </span>
                        <Link href="/blog" className="day-recent-post">
                          2024년 8월 10일
                        </Link>
                      </span>
                    </div>
                  </li>
                  <li className="box-recent-post">
                    <div className="box-feature">
                      <Link href="/blog-details">
                        <Image
                          height={500}
                          width={500}
                          src="/assets/images/box-item/icon2-recont-post.webp"
                          alt="image"
                        />
                      </Link>
                    </div>
                    <div className="box-content">
                      <Link href="/blog-details" className="title-recent-post">
                        전문가의 웹 디자인 팁
                      </Link>
                      <span>
                        <span className="sub-recent-post">
                          사용자 친화적이고 시각적으로 뛰어난 웹사이트를 만드는
                          실전 디자인 전략을 소개합니다.
                        </span>
                        <Link href="/blog-details" className="day-recent-post">
                          2024년 8월 22일
                        </Link>
                      </span>
                    </div>
                  </li>
                  <li className="box-recent-post">
                    <div className="box-feature">
                      <Link href="/blog-details">
                        <Image
                          height={500}
                          width={500}
                          src="/assets/images/box-item/icon3-recont-post.webp"
                          alt="image"
                        />
                      </Link>
                    </div>
                    <div className="box-content">
                      <Link href="/blog-details" className="title-recent-post">
                        웹 디자인의 중요성
                      </Link>
                      <span>
                        <span className="sub-recent-post">
                          좋은 첫인상을 남기고 사용자 경험을 향상시키는 데 있어
                          웹 디자인은 핵심적인 역할을 합니다.{" "}
                        </span>
                        <Link href="/blog" className="day-recent-post">
                          2024년 8월 20일
                        </Link>
                      </span>
                    </div>
                  </li>
                  <li className="box-recent-post">
                    <div className="box-feature">
                      <Link href="/blog-details">
                        <Image
                          height={500}
                          width={500}
                          src="/assets/images/box-item/icon4-recont-post.webp"
                          alt="image"
                        />
                      </Link>
                    </div>
                    <div className="box-content">
                      <Link href="/blog-details" className="title-recent-post">
                        UI 디자인에서 피해야 할 오류들
                      </Link>
                      <span>
                        <span className="sub-recent-post">
                          복잡한 네비게이션, 불분명한 버튼, 일관성 없는 레이아웃
                          등은 사용자 혼란을 유발할 수 있습니다.{" "}
                        </span>
                        <Link href="/blog" className="day-recent-post">
                          2024년 8월 12일
                        </Link>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="widget widget-tag style-1">
                <h3 className="title-widget mg-bt-23">인기 태그</h3>
                <ul>
                  <li>
                    <a
                      href="/blog"
                      className="box-widget-tag"
                      onClick={(e) => e.preventDefault()}
                    >
                      비트코인
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog"
                      className="box-widget-tag"
                      onClick={(e) => e.preventDefault()}
                    >
                      NFT
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog"
                      className="box-widget-tag"
                      onClick={(e) => e.preventDefault()}
                    >
                      입찰
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog"
                      className="box-widget-tag"
                      onClick={(e) => e.preventDefault()}
                    >
                      디지털
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog"
                      className="box-widget-tag"
                      onClick={(e) => e.preventDefault()}
                    >
                      예술
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog"
                      className="box-widget-tag"
                      onClick={(e) => e.preventDefault()}
                    >
                      마켓플레이스
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog"
                      className="box-widget-tag"
                      onClick={(e) => e.preventDefault()}
                    >
                      토큰
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog"
                      className="box-widget-tag"
                      onClick={(e) => e.preventDefault()}
                    >
                      지갑
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog"
                      className="box-widget-tag"
                      onClick={(e) => e.preventDefault()}
                    >
                      암호화폐
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
