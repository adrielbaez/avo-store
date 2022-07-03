import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import { apiAvocado } from "../../components/api";
import { Layout } from "../../components/layouts";
import { Details } from "../../components/product/Details";
import { AvocadosResponse, SingleAvocado } from "../../interfaces/avocados";

interface Props {
  product: SingleAvocado;
}
const ProductPage: NextPage<Props> = ({ product }) => {
  console.log(product);

  return (
    <Layout title="Avocado - Details">
      <>
        <Details product={product} />
      </>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await apiAvocado.get<AvocadosResponse>("/avo");
  const productsPathName = data.data.map((product) =>
    product.name.toLocaleLowerCase().split(" ").join("-")
  );

  return {
    paths: productsPathName.map((name) => ({ params: { name } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };
  const { data } = await apiAvocado.get<AvocadosResponse>("/avo");
  const productFinded = data.data.find(
    (product) => product.name.toLocaleLowerCase().split(" ").join("-") === name
  );

  if (!productFinded) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      product: productFinded,
    },
  };
};

export default ProductPage;
