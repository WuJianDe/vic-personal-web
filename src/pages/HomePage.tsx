import { Trans, useTranslation } from "react-i18next";
const HomePage: React.FC = () => {
  const {  i18n } = useTranslation();
  return (
    <div className={`home-page ${i18n.language}`}>
      <div className="home-bg"></div>
      <div className="home-card">
        <div className="home-card-left">
          <div className="home-card-photo"></div>
        </div>
        <section className="home-card-right">
          <h1 className="home-card-title">
            <Trans i18nKey="home-title" />
          </h1>
          <article className="home-card-sub">
            <Trans i18nKey="home-card-sub" />
          </article>
          <article className="home-card-content">
            <Trans i18nKey="home-card-content" />
          </article>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
