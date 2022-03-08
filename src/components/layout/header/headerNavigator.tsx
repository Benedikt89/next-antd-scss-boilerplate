import React, {useCallback, useMemo} from "react";
import {PageHeader, Button, Select} from 'antd';
import {useRouter} from "next/router";
import { useTranslations } from 'next-intl';

import styles from '@Components/layout/header/headerNavigator.module.scss';

const navigation = ["book", "reviews", "work", "about"];

const HeaderNavigator = () => {
  const {route, locale, locales, push, asPath, back} = useRouter();
  const t = useTranslations('header');
  const activePathname = useMemo(() => {
    return route.includes("business") ? "about" : navigation.find(key => route.includes(key));
  }, [route]);

  const onLanguage = useCallback((locale: string) => {
    push(asPath, asPath, {locale}).catch(() => push(asPath))
  }, [push, asPath]);

  const handleBack = useCallback(() => {
    back()
  }, [locale, back])

  return (
    <PageHeader
      className={styles.headerWrapper}
      onBack={handleBack}
      backIcon={<div className={styles.logo}>SAMOTSOH</div>}
      extra={[
        ...navigation.map((item) => (
          <Button
            className={styles.navButton}
            key={item}
            type={activePathname === item ? "primary" : "link"}
            href={`/${item}`}
          >
            {t(`navigation.${item}`)}
          </Button>
        )),
        <Select key={"locale"} value={locale} onSelect={onLanguage} style={{marginLeft: "1rem"}}>
          {locales.map(loc => (
            <Select.Option key={loc}>{loc}</Select.Option>
          ))}
        </Select>
      ]}
    >

    </PageHeader>
  );
}
export default HeaderNavigator;
