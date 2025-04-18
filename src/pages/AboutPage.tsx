import { Trans, useTranslation } from "react-i18next";
import AboutItemBox, { AboutItem } from "../components/AboutItemBox";

const aboutTypes = ["yoga", "hyrox", "run", "climb-mountain", "bike"] as const;
const aboutItems: AboutItem[] = aboutTypes.map((type) => ({
  image: type,
  titleKey: `about-${type}-title`,
  contentKey: `about-${type}-content`,
}));

const AboutMePage: React.FC = () => {
  
  const { i18n } = useTranslation();
  
  return (
    <div className={`about-page ${i18n.language}`}>
      <div className="about-banner">
        <div className="about-banner-mask"></div>
        <h1 className="about-banner-main-label">
          <Trans i18nKey="about-banner-main-label" />
        </h1>
        <h2 className="about-banner-sub-label">
          <Trans i18nKey="about-banner-sub-label" />
        </h2>
      </div>
      <div className="about-content">
        <section>
          <h2 className="about-introduce-title">
            <Trans i18nKey="about-introduce-title" />
          </h2>
          <article className="about-introduce-content">
            <Trans i18nKey="about-introduce-content" />
          </article>
        </section>
        {aboutItems.map((item) => (
          <AboutItemBox key={item.image} {...item} />
        ))}
        <section>
          <h2 className="about-conclusion-title">
            <Trans i18nKey="about-conclusion-title" />
          </h2>
          <article className="about-conclusion-content">
            <Trans i18nKey="about-conclusion-content" />
          </article>
        </section>
      </div>
      <div className="about-conclusion-image"></div>
    </div>
  );
};

export default AboutMePage;
