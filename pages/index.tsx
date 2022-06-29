import type { NextPage } from "next";
import { AvocadoHeader } from "../components/home";
import { Layout } from "../components/layouts";

const Home: NextPage = () => {
  return (
    <Layout>
      <AvocadoHeader />
    </Layout>
  );
};

export default Home;
