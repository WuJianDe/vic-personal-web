import { Trans, useTranslation } from "react-i18next";
const HomePage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="home-page">
      <div className="home-bg"></div>
      <div className="home-card">
        <div className="home-card-left">
          <div className="home-card-photo"></div>
        </div>
        <div className="home-card-right">
          <div className="home-card-title">
            <Trans i18nKey="home-title" />
          </div>
          <div className="home-card-sub">
            <Trans i18nKey="home-card-sub" />
          </div>
          <div className="home-card-content">
            <Trans i18nKey="home-card-content" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
