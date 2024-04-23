import { useRouter } from "next/router";

const ShopPage = () => {
  // const router = useRouter();
  // console.log(router);
  const { query } = useRouter();
  //query.slug (slug from [slug])
  return (
    <div>
      ShopPage: {`${query.slug && query.slug[0] + "-" + query.slug[1]}`}
    </div>
  );
};

export default ShopPage;
