import type { FC } from "react";
import { BLOG_STATIC_PAGE } from "@/config";
import { useTranslation } from "react-i18next";

const BlogPage: FC = () => {
  const { t, i18n } = useTranslation();
  const { intro, featuredPosts, categories } = BLOG_STATIC_PAGE;
  return (
    <section className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-3">
        {t("pages.blog.intro.title", { defaultValue: intro.title })}
      </h1>
      {intro.description && (
        <p className="text-neutral-300 max-w-3xl mb-6">
          {t("pages.blog.intro.description", {
            defaultValue: intro.description,
          })}
        </p>
      )}
      {intro.paragraphs?.length ? (
        <div className="space-y-3 mb-8">
          {intro.paragraphs.map((p, i) => (
            <p key={i} className="text-neutral-300 max-w-3xl">
              {t(`pages.blog.intro.paragraphs.${i}`, { defaultValue: p })}
            </p>
          ))}
        </div>
      ) : null}

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          {t("pages.blog.featured.title", { defaultValue: "Destacados" })}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts.map((post) => (
            <article
              key={post.href}
              className="bg-neutral-800/40 rounded px-5 py-4 border border-neutral-700/60"
            >
              <h3 className="font-semibold mb-1">
                {t(`pages.blog.featured.items.${post.href}.title`, {
                  defaultValue: post.title,
                })}
              </h3>
              <p className="text-neutral-400 text-sm mb-2">
                {t(`pages.blog.featured.items.${post.href}.excerpt`, {
                  defaultValue: post.excerpt,
                })}
              </p>
              <div className="text-xs text-neutral-500 flex gap-2">
                {post.tag && <span className="uppercase">{post.tag}</span>}
                {post.date && (
                  <span>
                    • {new Date(post.date).toLocaleDateString(i18n.language)}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {categories?.length ? (
        <div className="text-sm text-neutral-400">
          <span className="mr-2">
            {t("pages.blog.categories.label", { defaultValue: "Categorías:" })}
          </span>
          {categories.map((c) => (
            <span key={c} className="mr-2">
              #{c}
            </span>
          ))}
        </div>
      ) : null}
    </section>
  );
};
export default BlogPage;
