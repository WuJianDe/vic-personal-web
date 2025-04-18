import { Trans } from "react-i18next";

export interface AboutItem {
  image: string;
  titleKey: string;
  contentKey: string;
}

const AboutItemBox: React.FC<AboutItem> = ({ image, titleKey, contentKey }) => (
  <section className="about-item-box">
    <div className={`about-item-image ${image}`} aria-label={titleKey}></div>
    <article className="about-item-wrap">
      <h3 className="about-item-title">
        <Trans i18nKey={titleKey} />
      </h3>
      <div className="about-item-content">
        <Trans i18nKey={contentKey} />
      </div>
    </article>
  </section>
);

export default AboutItemBox;
