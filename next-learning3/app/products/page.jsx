 import ProductItem from "../components/Products";
 import ProductButton from "../components/ProductButton";
 
async function getProducts(){
 const res= await fetch('https://dummyjson.com/products?limit=10&select=title,price');
    const data= await res.json();
    console.log(data.products);
    return data.products;
}

export default async function Products() {
    const products = await getProducts();
  return (
    <div>
        <h1>Products</h1>
        <ul>
                {products.length > 0 && (
                    products.map(({ id, title, price }) => (
                        <div>
                            <ProductItem key={id} title={title} price={price} />
                            <ProductButton id={id} />
                        </div>
                    ))
                    
                )}
                
            </ul>
    </div>
  )
}
