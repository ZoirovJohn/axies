"use client";
import { author } from "@/data/author";
import AuthorCard5 from "../card/AuthorCard5";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_AGENTS } from "@/apollo/user/query";
import { T } from "@/libs/types/common";
import { AgentsInquiry } from "@/libs/dto/member/member.input";
import { Member } from "@/libs/dto/member/member";

export default function TopSeller2(): JSX.Element {
  const { t } = useTranslation("common");
  const [agents, setAgents] = useState<Member[]>([]);
  const [searchFilter, setSearchFilter] = useState<AgentsInquiry>({
    page: 1,
    limit: 10,
    search: {},
  });

  // Repeat the agents to make total length exactly 10
  const getFixedLengthAgents = (
    list: Member[],
    targetLength = 10
  ): Member[] => {
    if (!Array.isArray(list) || list.length === 0) return [];

    const result: Member[] = [];
    let i = 0;

    while (result.length < targetLength) {
      result.push(list[i % list.length]);
      i++;
    }

    return result;
  };

  const repeatedAgents = getFixedLengthAgents(agents, 10);

  /** APOLLO REQUESTS **/
  // const [likeTargetProperty] = useMutation(LIKE_TARGET_PROPERTY);

  const {
    loading: getPropertiesLoading,
    data: getPropertiesData,
    error: getPropertiesError,
    refetch: getPropertiesRefetch,
  } = useQuery(GET_AGENTS, {
    fetchPolicy: "network-only",
    variables: { input: searchFilter },
    notifyOnNetworkStatusChange: true,
    onCompleted: (data: T) => {
      setAgents(data?.getAgents?.list || []);
      console.log("repeatedAgents777777777777:", data?.getAgents?.list);
    },
  });

  console.log("HomePage TopSellers agents:", agents);

  return (
    <>
      <section className="tf-section top-seller home3 s2 mobie-style">
        <div className="ibthemes-container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="style2 mb-25 text-left">{t("TopSellerHome1")}</h2>
            </div>
            <div className="col-md-12">
              <div className="tf-box">
                {repeatedAgents.slice(0, 10).map((item, index) => (
                  <AuthorCard5 key={`${item._id}-${index}`} agent={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
