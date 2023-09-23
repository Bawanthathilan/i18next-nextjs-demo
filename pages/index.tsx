import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from 'next-i18next'
import LangSwitcher from "@/components/LangSwitcher";

export default function Home() {

  const { t, i18n } = useTranslation();

  if (typeof window !== "undefined") {
    document.body.dir = i18n.dir();
  }

  return (
    <>
      <div className='h-screen flex px-5 flex-col gap-5'>
        <h1 className='text-7xl font-bold mt-5'>{t("home.title")}</h1>

        <LangSwitcher />
      </div>
    </>
  )
}

export async function getStaticProps(context: any) {
  const { locale } = context
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  }
}