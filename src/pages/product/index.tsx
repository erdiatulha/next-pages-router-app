import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Product = () => {
  const { push } = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (isLogin) {
      push("auth/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>Product</div>;
};

export default Product;
