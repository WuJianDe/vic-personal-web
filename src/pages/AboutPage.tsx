import { Trans, useTranslation } from "react-i18next";
const AboutMePage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="about-page">
      <div className="about-banner">
        <div className="about-banner-mask"></div>
        <div className="about-banner-main-label">
          <Trans i18nKey="about-banner-main-laber" />
        </div>
        <div className="about-banner-sub-label">
          <Trans i18nKey="about-banner-sub-laber" />
        </div>
      </div>
      <div className="about-content">
        <div className="about-introduce-title">
          <Trans i18nKey="about-introduce-title" />
        </div>
        <div className="about-introduce-content">
          <Trans i18nKey="about-introduce-content" />
        </div>
        <div className="about-item-box">
          <div className="about-item-image yoga"></div>
          <div className="about-item-wrap">
            <div className="about-item-title">
              <Trans i18nKey="about-yoga-title" />
            </div>
            <div className="about-item-content">
              <Trans i18nKey="about-yoga-content" />
            </div>
          </div>
        </div>
        <div className="about-item-box">
          <div className="about-item-wrap">
            <div className="about-item-title">
              <Trans i18nKey="about-hyrox-title" />
            </div>
            <div className="about-item-content">
              <Trans i18nKey="about-hyrox-content" />
            </div>
          </div>
          <div className="about-item-image hyrox"></div>
        </div>
        <div className="about-item-box">
          <div className="about-item-image run"></div>
          <div className="about-item-wrap">
            <div className="about-item-title">
              <Trans i18nKey="about-run-title" />
            </div>
            <div className="about-item-content">
              <Trans i18nKey="about-run-content" />
            </div>
          </div>
        </div>

        <div className="about-item-box">
          <div className="about-item-wrap">
            <div className="about-item-title">
              <Trans i18nKey="about-climb-title" />
            </div>
            <div className="about-item-content">
              <Trans i18nKey="about-climb-content" />
            </div>
          </div>
          <div className="about-item-image climb-mountain"></div>
        </div>
        <div className="about-item-box">
          <div className="about-item-image bike"></div>
          <div className="about-item-wrap">
            <div className="about-item-title">
              <Trans i18nKey="about-bike-title" />
            </div>
            <div className="about-item-content">
              <Trans i18nKey="about-bike-content" />
            </div>
          </div>
        </div>
        <div className="about-conclusion-title">
          <Trans i18nKey="about-conclusion-title" />
        </div>
        <div className="about-conclusion-content">
          <Trans i18nKey="about-conclusion-content" />
        </div>
      </div>
      <div className="about-conclusion-image"></div>
    </div>
  );
};

export default AboutMePage;
