import { useRouter } from "next/router";

const DetailProduct = () => {
    // const router = useRouter();
    // console.log(router);
    const { query } = useRouter();
    //query.id (id from [id])
    return (
        <div>DetailProduct: {query.id}</div>
  )
}

export default DetailProduct