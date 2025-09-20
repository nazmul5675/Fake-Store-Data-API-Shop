import { Suspense } from 'react'
import './App.css'
import Products from './Components/Products/Products'

function App() {

  const shopFetchPromise = fetch('https://fakestoreapi.com/products')
    .then(res => res.json())



  return (
    <>
      <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
        <Products shopFetchPromise={shopFetchPromise}></Products>
      </Suspense>
    </>
  )
}

export default App
