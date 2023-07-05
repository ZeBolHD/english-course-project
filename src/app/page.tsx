import { getHomePageData } from "@/modules/HomePage/api";
import HomePage from "@/modules/HomePage";

import { notFound } from "next/navigation";
import Head from "next/head";

const Home = async () => {
  const homePageData = await getHomePageData();

  if (!homePageData) {
    notFound();
  }

  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="h24PMH9ZRsS6Ai5c7hCWG7AZevZ6-WPZnyBpBeDiO8o"
        />
      </Head>
      <HomePage {...homePageData} />;
    </>
  );
};

export default Home;
