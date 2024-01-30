import React from "react";

const ProductsList = ({ params }: { params: any }) => {
  return (
    <>
      <h1>Products {params.id}</h1>
    </>
  );
};

export default ProductsList;
