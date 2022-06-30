import type { NextPage, GetStaticProps } from "next";
import { AvocadoHeader, ProductList } from "../components/home";
import { Layout } from "../components/layouts";
import { apiAvocado } from "../components/api/apiAvocado";
import { AvocadosResponse, SingleAvocado } from "../interfaces/avocados";

export interface PropsProducts {
  productsList: SingleAvocado[];
}
const Home: NextPage<PropsProducts> = ({ productsList }) => {
  return (
    <Layout>
      <>
        <AvocadoHeader />
        <ProductList productsList={productsList} />
      </>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await apiAvocado.get<AvocadosResponse>("/avo");

  return {
    props: {
      productsList: data.data,
    },
  };
};

export default Home;
