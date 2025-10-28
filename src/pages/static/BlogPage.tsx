import type { FC } from "react";
import { BLOG_STATIC_PAGE } from "@/config";
import { useTranslation } from "react-i18next";
import {
  Heading,
  IntroSectionTemplate,
  LeadSectionTemplate,
  Text,
} from "@/components";
import { Link } from "react-router";

const BlogPage: FC = () => {
  const { t } = useTranslation();
  const { featuredPosts, categories } = BLOG_STATIC_PAGE;
  return (
    <>
      <IntroSectionTemplate
        size="4xl"
        gap="4"
        color="white"
        title={t("pages:blog.intro.title")}
        description={t("pages:blog.intro.description")}
      />
      <LeadSectionTemplate
        title={t("pages:blog.intro.title")}
        description={t("pages:blog.intro.description")}
        color="success"
        textColor="dark"
      >
        <section className="max-w-6xl mx-auto flex flex-col ">
          <Heading as="h3" level="h3" className="text-2xl mb-4 text-success">
            {t(`pages:blog.featured.title`)}
          </Heading>
          {featuredPosts.map((post) => (
            <article
              key={post.title}
              className="flex justify-between gap-4 border p-4 rounded-lg"
            >
              <section>
                <Heading as="h3" level="h6" className=" text-dark">
                  {t(`pages:blog.featured.items.${post.href}.title`)}
                </Heading>
                <Text className="flex items-center justify-between gap-2">
                  {t(`pages:blog.featured.items.${post.href}.excerpt`)}
                </Text>
              </section>
              <section className="flex items-center gap-4">
                <Link to={post.href} className="text-success">
                  {t("common.learnMore")}
                </Link>
                <br />
                <small className="text-neutral-600">{post.date}</small>
              </section>
            </article>
          ))}
          {categories && (
            <div className="mt-12">
              <Heading
                as="h3"
                level="h3"
                className="text-2xl mb-4 text-success"
              >
                {t("pages:blog.categories.title", {
                  defaultValue: "Categories",
                })}
              </Heading>
              <ul className="flex flex-wrap gap-4">
                {categories.labels.map((category) => (
                  <li
                    key={category}
                    className="nth-[1]:bg-blue-100 nth-[2]:bg-orange-100 nth-[3]:bg-yellow-100 nth-[4]:bg-green-100 text-neutral-800 px-2 py-1 rounded-lg shadow-sm shadow-neutral-400/50 hover:shadow-neutral-400/10"
                  >
                    <small className="font-semibold text-xs text-dark">
                      {t(`pages:${category}`)}
                    </small>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </LeadSectionTemplate>
    </>
  );
};
export default BlogPage;
