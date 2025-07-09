"use client";
import { faq } from "@/data/project";
import { useEffect, useState } from "react";
import { Collapse } from "react-collapse";
import { useReactiveVar } from "@apollo/client";
import { userVar } from "@/apollo/store";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

export default function Faq(): JSX.Element {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [getCollapse, setCollapse] = useState<number | null>(null);
  const authMember = useReactiveVar(userVar);
  const shouldRedirect = !authMember?.memberNick;

  useEffect(() => {
    if (shouldRedirect) {
      router.replace("/");
    }
  }, [shouldRedirect, router]);

  if (shouldRedirect) {
    return <></>;
  }

  // collapse handler
  const collapseHandler = (id: number) => {
    if (getCollapse !== id) {
      return setCollapse(id);
    }

    return setCollapse(null);
  };

  const updatedFaq = [
    {
      id: 1,
      title: t("FaqQuestion1"),
      description: t("FaqAnswer1"),
    },
    {
      id: 2,
      title: t("FaqQuestion2"),
      description: t("FaqAnswer2"),
    },
    {
      id: 3,
      title: t("FaqQuestion3"),
      description: t("FaqAnswer3"),
    },
    {
      id: 4,
      title: t("FaqQuestion4"),
      description: t("FaqAnswer4"),
    },
    {
      id: 5,
      title: t("FaqQuestion5"),
      description: t("FaqAnswer5"),
    },
  ];

  return (
    <section className="tf-section wrap-accordion">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="tf-title-heading ct style-2 fs-30 mg-bt-10">
              {t("FaqFAQ")}
            </h2>
            <h5 className="sub-title help-center mg-bt-32">{t("FaqInfo")}</h5>
          </div>
          <div className="col-md-12">
            <div className="flat-accordion2">
              {updatedFaq.map((item) => (
                <div key={item.id} className="flat-toggle2">
                  <h6
                    onClick={() => collapseHandler(item.id)}
                    className={`toggle-title ${
                      getCollapse === item.id ? "active" : ""
                    }`}
                  >
                    {item.title}
                  </h6>
                  <Collapse isOpened={getCollapse === item.id}>
                    <div
                      className="toggle-content"
                      style={{ display: "block" }}
                    >
                      <p>{item.description}</p>
                    </div>
                  </Collapse>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
