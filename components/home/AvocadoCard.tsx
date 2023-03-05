import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";

import { SingleAvocado } from "../../interfaces/avocados/avocados";

interface Props {
  product: SingleAvocado;
}
export const AvocadoCard: NextPage<Props> = ({ product }) => {
  const router = useRouter();

  const handleChangePage = () => {
    router.push(
      `/product/${product.name.toLocaleLowerCase().split(" ").join("-")}`
    );
  };
  return (
    <div className="cards_item" onClick={handleChangePage}>
      <div className="card">
        <div className="card_image">
          <Image
            src={product.image}
            alt="mixed vegetable salad in a mason jar."
            width={300}
            height={300}
          />
          <span className="card_price">
            <span>$</span>
            {product.price}
          </span>
        </div>
        <div className="card_content">
          <h2 className="card_title">{product.name}</h2>
        </div>
      </div>
    </div>
  );
};
