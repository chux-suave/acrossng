import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { useContext } from "react";

export default function UserScreen(props) {
  const { user } = props;
  const router = useRouter();
  const { state, dispatch } = useContext(Store);

  if (!user) {
    return (
      <Layout title={`User not Found`}>
        <div className="bg-green-500 text-white py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold">USER NOT FOUND</h1>
            <p className="mt-4 text-lg">
              The user you are looking for does not Exist!
            </p>
          </div>
        </div>
      </Layout>
    );
  }
  const voteHandler = async () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);

    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    router.push("/cart");
  };

  return (
    <div>
      <Layout title={`${product.name}`}>
        <div className="py-2">
          <Link href="/">
            <button className="primary-button">Back</button>
          </Link>
        </div>
        <div className="grid md:grid-cols-4 md:gap-3">
          <div className="md:col-span-2">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              Layout="responsive"
            />
          </div>
          <div className="items-start ">
            <ul>
              <li>
                <h1 className="text-lg">
                  {product.brand || product.size || product.type}
                </h1>
              </li>
            </ul>
          </div>
          <div>
            <div className="card p-5">
              <div className="mb-2 flex justify-between">
                <div>Price:</div>
                <div>${product.price}</div>
              </div>
              <div className="mb-2 flex justify-between">
                <div>Status:</div>
                <div>Say if its available</div>
              </div>
              <button
                className="primary-button w-full"
                onClick={addToCartHandler}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;
  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();
  return {
    props: {
      product: product ? db.convertDocToObj(product) : null,
    },
  };
}
//   const product = data.products
//     .find((product) => product.name === 'cement')
//     .brands.find((x) => x.slug === slug);
//   if (!product) {
//     return <div>Product not found</div>;
//   }
//   return (
//
//   );
//

// Find the product based on the slug
