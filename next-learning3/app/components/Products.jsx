
export default function ProductItem(props) {
  return (
    <div className="border p-4 m-4">
        <h1>Products</h1>
        <h4>{props.title}</h4>
        <h4>{props.price}</h4>
    </div>
  )
}
