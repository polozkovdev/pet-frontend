import React from 'react';
import {useTranslation} from "react-i18next";
import {ERouters, ROUTERS} from "shared/config/routers";
import {classNames} from "shared/lib/classNames";
import {Link} from "shared/ui/link";
import {ThemeSwitcher} from "widgets/theme";
import SM from "./index.module.scss";

export const Navigation = () => {
  const {t, i18n} = useTranslation();
  const switchLanguage = i18n.language === "ru" ? "en" : "ru";
  const changeLanguage = () => i18n.changeLanguage(switchLanguage);
  return (
    <div className={classNames({cls: SM.Navigation, additional: []})}>
      <div className={SM.Links}>
        <button onClick={changeLanguage}>{switchLanguage.toUpperCase()}</button>
        <Link to={ROUTERS[ERouters.MAIN]} className={SM.Link}>{t("main_page")}</Link>
        <Link to={ROUTERS[ERouters.ABOUT]} className={SM.Link}>About</Link>
      </div>
      <div className={SM.Theme}>
        <ThemeSwitcher children="Toggle Theme"/>
      </div>
    </div>
  );
};
