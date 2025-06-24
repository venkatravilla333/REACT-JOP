// import React from 'react'
// import Home from './Routing/Home'
// import About from './Routing/About'
// import Products from './Routing/Products'

// import {Route, Routes} from 'react-router-dom'
// import Header from './Routing/Header'
// import Footer from './Routing/Footer'
// import ProductDetails from './Routing/ProductDetails'
// import PageNotFound from './Routing/PageNotFound'

// function App() {
//   return (
//     <div>
//       <Header />
//       <main className='main-div'>
//       <Routes>
//         <Route path='/home' element={<Home/>} />
//         <Route path='/about' element={<About/>} />
//         <Route path='*' element={<PageNotFound/>} />
//         <Route path='/products' element={<Products/>} >
//             <Route path=':id' element={<ProductDetails />} />
//         </Route>
//      </Routes>
//       </main>
//       <Footer/>
     
//     </div>
//   )
// }

// export default App


import React from 'react'
import A from './Class-Components/State/Global-State/Redux-Concept/React-Componets/A'
// import A from './Class-Components/State/Global-State/Context-Api/Components/A'
// import Parent from './Class-Components/Props/Parent'
// import A from './Class-Components/State/Local-State/Components/A'
// import Parent from './Class-Components/State/Parent'
// import Parent from './Class-Components/Component/Parent'

function App() {
  return (
    <div>
      <h4>App com</h4>
      {/* {new Parent().render()} */}
      {/* <Parent age={100} /> */}
      {/* {console.log(new Parent())} */}
      {/* <A/> */}
      {/* <Parent/> */}
      <A/>
    </div>
  )
}

export default App