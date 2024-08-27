// Generate static paths
export async function getStaticPaths() {
    const res = await fetch('https://dummyjson.com/products?limit=10&select=id,title,price');
    const data = await res.json();
    const paths = data.products.map(product => ({
        params: {
            id: product.id.toString(),
        }
    }));    

    return {
        paths,
        fallback: false, // or true/false based on your requirements
    };
}

// Fetch product details
async function getProducts(id) {
    const res = await fetch(`https://dummyjson.com/products/${id}?select=title,price`);
    const data = await res.json();
    return data;
}

// Product page component
export default async function ProductPage({ params }) {
    const product = await getProducts(params.id);
    return (
        <div>
            Product Id: {params.id}
            <h1>{product.title}</h1>
            <h4>{product.price}</h4>
        </div>
    );
}
