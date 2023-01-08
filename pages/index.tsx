import Product from "./product";
import Banner from "../componment/banner";

const Home = ({ data }: any) => {
  return (
    <>
      <Banner />
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
          {data?.data?.map((product: any) => (
            <div
              key={product._id}
              style={{ display: "flex", marginLeft: "20px" }}
            >
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

import { GetServerSideProps } from "next";

type Data = {
  _id: string;
  name: string;
  desc: string;
  price: number;
  img: string;
};

export const getServerSideProps: GetServerSideProps<{
  data: Data;
}> = async () => {
  const res = await fetch("http://localhost:5000/products");
  const data: Data = await res.json();

  return {
    props: {
      data,
    },
  };
};
