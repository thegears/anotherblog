import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export const locales = ["tr", "en"];
export const defaultLocale = "tr";

export default getRequestConfig(async (params) => {
  const locale = await params.requestLocale;
  if (!locale || !locales.includes(locale as any)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`./i18n/${locale}.json`)).default,
  };
});
