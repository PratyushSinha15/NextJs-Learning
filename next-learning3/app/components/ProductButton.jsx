'use client';

import { useRouter } from "next/navigation";

export default function ProductButton({id}) {

    const router= useRouter();
    const handleClick=()=>{
        router.push(`/products/${id}`);
    }
  return (
    <div>
        <button onClick={handleClick}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Cart
        </button>
    </div>
  )
}
