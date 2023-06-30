import React from "react";
import { loginimage } from "../assets";
import { styles } from "../styles";
interface productCardProps {
  name: string;
  subtext: string;
  price: string;
  image: string;
}

const ProductCard: React.FC<productCardProps> = ({
  name,
  subtext,
  price,
  image,
}) => {
  return (
    <div className="overflow-hidden border border-primary flex w-full h-full">
      <div className="relative">
        <img
          src={image}
          alt="image"
          className="object-cover w-[1000px] h-full object-center"
        />

        <div className="absolute bottom-0 left-0 w-full h-20 z-999 flex flex-col pl-10 pb-20 mb-10">
          <p className={`${styles.productSubText}`}>{subtext}</p>
          <p className={`${styles.productMainText}`}>{name}</p>
          <p className={`${styles.productPriceText} mt-5`}>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
