import { useTranslation } from "react-i18next";
const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="contact-page">
      <form
        className="contact-form"
        action="https://formspree.io/f/mgvadjba"
        method="post"
      >
        <div className="form-group">
          <label htmlFor="name">{t("contact-name")}</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder={t("contact-name-placeholder")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">{t("contact-email")}</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={t("contact-email-placeholder")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">{t("contact-message")}</label>
          <textarea
            id="message"
            name="message"
            placeholder={t("contact-message-placeholder")}
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          {t("contact-submit")}
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
