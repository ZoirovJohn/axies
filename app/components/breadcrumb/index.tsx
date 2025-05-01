import Link from "next/link";

interface Props {
  data: {
    breadcrumb: {
      name: string;
      path?: string;
      title?: string;
    }[];
  };
}

export default function Breadcrumb({ data }: Props): JSX.Element {
  const items = data.breadcrumb;

  return (
    <section className="flat-title-page inner">
      <div className="overlay" />
      <div className="ibthemes-container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="page-title-heading mg-bt-12">
              <h1 className="heading">
                {items[items.length - 1]?.name ?? "Page"}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
