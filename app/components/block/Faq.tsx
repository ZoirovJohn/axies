"use client";
import { faq } from "@/data/project";
import { useEffect, useState } from "react";
import { Collapse } from "react-collapse";
import { useReactiveVar } from "@apollo/client";
import { userVar } from "@/apollo/store";

export default function Faq(): JSX.Element {
  const [getCollapse, setCollapse] = useState<number | null>(null);
  const authMember = useReactiveVar(userVar);

  useEffect(() => {
    if (!authMember?.memberNick) {
      window.location.href = "/";
    }
  }, [authMember]);

  if (!authMember?.memberNick) {
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
      title: "How do I create a new property listing?",
      description:
        "Currently, It is impossible to create new NFT.",
    },
    {
      id: 2,
      title: "Can I update a property after it's been listed?",
      description:
        "Yes, you can update any listed property by going to the property details page and clicking the 'Edit' button. Make your changes and save them.",
    },
    {
      id: 3,
      title: "How do I delete my account?",
      description:
        "Please contact our support team through the Help Center. We'll assist you in securely deleting your account.",
    },
    {
      id: 4,
      title: "What payment methods are supported?",
      description:
        "We support major credit cards, PayPal, and bank transfers. For enterprise accounts, we also offer invoicing options.",
    },
    {
      id: 5,
      title: "Is my data safe on this platform?",
      description:
        "Absolutely. We use industry-standard encryption and comply with data protection regulations to ensure your information stays secure.",
    },
  ];

  return (
    <section className="tf-section wrap-accordion">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="tf-title-heading ct style-2 fs-30 mg-bt-10">
              Frequently Asked Questions
            </h2>
            <h5 className="sub-title help-center mg-bt-32">
              Find answers to common questions about using our platform. If you
              need more help, please contact support.
            </h5>
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
