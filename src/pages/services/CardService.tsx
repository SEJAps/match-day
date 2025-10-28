import { Image } from "@/components";
import Card from "@/components/atoms/Card";
import { type FC, type ReactNode } from "react";

type CardServiceProps = {
  bg?: string;
  picture?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  list: ReactNode;
  title?: string;
  description?: string;
  footer?: ReactNode;
};

const CardService: FC<CardServiceProps> = ({
  bg,
  picture,
  list,
  title,
  description,
  footer,
}) => {
  return (
    <article
      className={`${bg} flex flex-col justify-between gap-6 rounded-2xl shadow-sm`}
    >
      <Card
        top={
          <header className="flex flex-col items-center p-6 gap-6">
            {picture && (
              <Image
                src={picture.src}
                alt={picture.alt}
                width={picture.width}
                height={picture.height}
              />
            )}

            <h2 className="text-dark text-4xl font-bold">{title}</h2>
          </header>
        }
        bottom={<footer className="flex p-6">{footer}</footer>}
      >
        <article className=" flex flex-col p-6 gap-6">
          <p className="text-dark text-xl font-extralight ">{description}</p>
          {list && list}
        </article>
      </Card>
    </article>
  );
};

export default CardService;
{
  /* <section
                className={`bg-primary-card flex flex-col justify-between gap-6 rounded-2xl shadow-sm`}
              >
                <header className="flex flex-col items-center p-6 gap-6">
                  <Image src="#" alt="Logo Card" width={152} height={152} />
                  <h2 className="text-dark text-4xl font-bold">
                    {t("pages:services.servicesForEveryNeed.cards.0.title")}
                  </h2>
                </header>
                <article className=" flex flex-col p-6 gap-6">
                  <p className="text-dark text-xl font-extralight ">
                    {t("pages:services.servicesForEveryNeed.cards.0.text")}
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-6">
                    <li className="text-dark text-lg">
                      {t("pages:services.servicesForEveryNeed.cards.0.items.0")}
                    </li>
                    <li className="text-dark text-lg">
                      {t("pages:services.servicesForEveryNeed.cards.0.items.1")}
                    </li>
                    <li className="text-dark text-lg">
                      {t("pages:services.servicesForEveryNeed.cards.0.items.2")}
                    </li>
                    <li className="text-dark text-lg">
                      {t("pages:services.servicesForEveryNeed.cards.0.items.3")}
                    </li>
                  </ul>
                </article>
                <footer className="flex items-center p-6">
                  <button className={` w-full px-6 py-3 rounded`}>
                    {t("pages:services.servicesForEveryNeed.cards.0.textBtn")}
                  </button>
                </footer>
              </section>
              <section
                className={`bg-secondary-card flex flex-col justify-between gap-6 rounded-2xl shadow-sm`}
              >
                <header className="flex flex-col items-center p-6 gap-6">
                  <Image src="#" alt="Logo Card" width={152} height={152} />
                  <h2 className="text-dark text-4xl font-bold">
                    {t("pages:services.servicesForEveryNeed.cards.1.title")}
                  </h2>
                </header>
                <article className=" flex flex-col p-6 gap-6">
                  <p className="text-dark text-xl font-extralight ">
                    {t("pages:services.servicesForEveryNeed.cards.1.text")}
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-6">
                    <li className="text-dark text-lg">
                      {t("pages:services.servicesForEveryNeed.cards.1.items.0")}
                    </li>
                    <li className="text-dark text-lg">
                      {t("pages:services.servicesForEveryNeed.cards.1.items.1")}
                    </li>
                    <li className="text-dark text-lg">
                      {t("pages:services.servicesForEveryNeed.cards.1.items.2")}
                    </li>
                    <li className="text-dark text-lg">
                      {t("pages:services.servicesForEveryNeed.cards.1.items.3")}
                    </li>
                  </ul>
                </article>
                <footer className="flex items-center p-6">
                  <button className={` w-full px-6 py-3 rounded`}>
                    {t("pages:services.servicesForEveryNeed.cards.1.textBtn")}
                  </button>
                </footer>
              </section>
              <section
                className={`bg-tertiary-card-card flex flex-col justify-between gap-6 rounded-2xl shadow-sm`}
              >
                <header className="flex flex-col items-center p-6 gap-6">
                  <Image src="#" alt="Logo Card" width={152} height={152} />
                  <h2 className="text-dark text-4xl font-bold">
                    {t("pages:services.servicesForEveryNeed.cards.2.title")}
                  </h2>
                </header>
                <article className=" flex flex-col p-6 gap-6">
                  <p className="text-dark text-xl font-extralight ">
                    {t("pages:services.servicesForEveryNeed.cards.2.text")}
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-6">
                    <li className="text-dark text-lg">
                      {t("pages:services.servicesForEveryNeed.cards.2.items.0")}
                    </li>
                    <li className="text-dark text-lg">
                      {t("pages:services.servicesForEveryNeed.cards.2.items.1")}
                    </li>
                    <li className="text-dark text-lg">
                      {t("pages:services.servicesForEveryNeed.cards.2.items.2")}
                    </li>
                    <li className="text-dark text-lg">
                      {t("pages:services.servicesForEveryNeed.cards.2.items.3")}
                    </li>
                  </ul>
                </article>
                <footer className="flex items-center p-6">
                  <button className={` w-full px-6 py-3 rounded`}>
                    {t("pages:services.servicesForEveryNeed.cards.2.textBtn")}
                  </button>
                </footer>
              </section> */
}
{
  /* {servicesForEveryNeed &&
                servicesForEveryNeed.map((service) => (
                  <section
                    key={service.title}
                    className={`${service.bg} flex flex-col justify-between gap-6 rounded-2xl shadow-sm`}
                  >
                    <header className="flex flex-col items-center p-6 gap-6">
                      <Image
                        src={service.icon}
                        alt="Logo Card"
                        width={152}
                        height={152}
                      />
                      <h2 className="text-dark text-4xl font-bold">
                        {service.title}
                      </h2>
                    </header>
                    <article className=" flex flex-col p-6 gap-6">
                      <p className="text-dark text-xl font-extralight ">
                        {service.text}
                      </p>
                      <ul className="list-disc list-inside space-y-2 pl-6">
                        {service.items.map((item) => (
                          <li key={item} className="text-dark text-lg">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </article>
                    <footer className="flex items-center p-6">
                      <button
                        className={`${service.customColor}  w-full ${service.bgBtn} px-6 py-3 rounded`}
                      >
                        {service.textBtn}
                      </button>
                    </footer>
                  </section>
                  // <Card
                  //   key={service.title}
                  //   bg={service.bg}
                  //   bgBtn={service.bgBtn}
                  //   title={t(`common.servicesForEveryNeed.cards.${i}.title`, {
                  //     defaultValue: service.title,
                  //   })}
                  //   text={t(`common.servicesForEveryNeed.cards.${i}.text`, {
                  //     defaultValue: service.text,
                  //   })}
                  //   items={service.items.map((item, idx) =>
                  //     t(`common.servicesForEveryNeed.cards.${i}.items.${idx}`, {
                  //       defaultValue: item,
                  //     })
                  //   )}
                  //   index={i}
                  //   mobileFullWidth={
                  //     servicesForEveryNeed.length % 2 === 1 &&
                  //     i === servicesForEveryNeed.length - 1
                  //   }
                  //   icon={
                  //     <Image
                  //       src={service.icon}
                  //       alt={t(`common.servicesForEveryNeed.cards.${i}.title`)}
                  //       className="w-24 h-24 sm:w-16 sm:h-16"
                  //       width={96}
                  //       height={96}
                  //       fit="contain"
                  //     />
                  //   }
                  //   label={t(`common.servicesForEveryNeed.cards.${i}.textBtn`, {
                  //     defaultValue: service.textBtn,
                  //   })}
                  // />
                ))} */
}
