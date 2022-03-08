import { useMemo } from "react";
import { useRouter } from "next/router";
import { NextIntlProvider } from "next-intl";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";

import AppLayout from "@Components/layout/appLayout";
import { useStore } from "@Redux/redux";
import "@Styles/globals.less";
import "@Styles/main.scss";
import English from "content/locales/en.json";
import German from "content/locales/de.json";

export default function App({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);
  const { locale } = useRouter();
  const [shortLocale] = locale ? locale.split("-") : ["en"];

  const messages = useMemo(() => {
    switch (shortLocale) {
      case "de":
        return German;
      case "en":
        return English;
      default:
        return English;
    }
  }, [shortLocale]);

  return (
    <Provider store={store}>
      <NextIntlProvider
        locale={shortLocale}
        messages={messages}
        onError={() => null}
      >
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </NextIntlProvider>
    </Provider>
  );
}
