import React from 'react';
import Home from './Routing/Home';
// import About from './Routing/About'
import Products from './Routing/Products';

import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './Routing/Header';
import Footer from './Routing/Footer';
import ProductDetails from './Routing/ProductDetails';
import PageNotFound from './Routing/PageNotFound';

var About = React.lazy(() => import('./Routing/About'));

function App() {
  var url = useLocation();
  return (
    <div>
      <Header />
      {/* {url.pathname !== '/about' && <Header/> } */}

      <main className='main-div'>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route
              path='/about'
              element={
                <React.Suspense fallback='Loading'>
                  <About />
                </React.Suspense>
              }
            />
            <Route path='*' element={<PageNotFound />} />
            <Route path='/products' element={<Products />}>
              <Route path=':id' element={<ProductDetails />} />
            </Route>
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

// import React from 'react'
// import Parent from './Class-Components/Refs/Attach-Refsto-ChildCom/Parent'
// import Parent from './Class-Components/Refs/Forwarding-Ref/Parent'
// import Parent from './Class-Components/Refs/Attach-Refsto-ChildCom/Parent'
// import Parent from './Class-Components/Refs/Attach-Refsto-DomElement/Parent'
// import Parent from './HandleError/Parent'
// import Parent from './Class-Components/Life-Cycle-Methods/Error-Boundry/Parent'
// import Parent from './Class-Components/Side-Effects/ApiCall/Parent'
// import Parent from './Class-Components/Side-Effects/3.Runs-Only-Once/Parent'
// import Container from './Class-Components/Side-Effects/4.Cleanup-Task/Container'
// import Parent from './Class-Components/Side-Effects/2.Runs-Conditionally/Parent'
// import Parent from './Class-Components/Side-Effects/1.Dafault-Nature/Parent'
// import Render from './Class-Components/Performance/Remove-Duplicate-Logic/Render-Props-Pattern/Render'
// import Count1 from './Class-Components/Performance/Remove-Duplicate-Logic/Render-Props-Pattern/Count1'
// import Count2 from './Class-Components/Performance/Remove-Duplicate-Logic/Render-Props-Pattern/Count2'
// import Count3 from './Class-Components/Performance/Remove-Duplicate-Logic/Render-Props-Pattern/Count3'
// import Parent from './Class-Components/Life-Cycle-Methods/Mounting/Parent'
// import Count1 from './Class-Components/Performance/Remove-Duplicate-Logic/Render-Props-Pattern/Count1'
// import Parent from './Class-Components/Destructuring/Parent'
// import Count1 from './Class-Components/Performance/Remove-Duplicate-Logic/Count1'
// import Count2 from './Class-Components/Performance/Remove-Duplicate-Logic/Count2'
// import Count3 from './Class-Components/Performance/Remove-Duplicate-Logic/Count3'
// import Hoc from './Class-Components/Performance/Remove-Duplicate-Logic/Hoc'

// import A from './Class-Components/State/Global-State/Redux-Concept/React-Componets/A'
// import A from './Class-Components/State/Global-State/Context-Api/Components/A'
// import Parent from './Class-Components/Props/Parent'
// import A from './Class-Components/State/Local-State/Components/A'
// import Parent from './Class-Components/State/Parent'
// import Parent from './Class-Components/Component/Parent'

// function App() {
//   return (
//     <div>
//       <h4>App com</h4>
//       {/* {new Parent().render()} */}
//       {/* <Parent age={100} /> */}
//       {/* {console.log(new Parent())} */}
//       {/* <A/> */}
//       {/* <Parent/> */}
//       {/* <A/> */}
//       {/* <Parent/> */}
//       {/* <Count1 />
//       <Count2 />
//       <Count3/> */}
//       {/* <Render test={(count, updateCount) => {
//         return <div>
//           <Count1 count={count} updateCount={updateCount} />

//         </div>
//       }} /> */}
//       {/* <Render test={(count, updateCount) => {
//         return <Count2 count={count } updateCount = {updateCount} />
//       }} />
//       <Render test={(count, updateCount) => {
//         return <Count3 count={count } updateCount = {updateCount} />
//       }} /> */}
//       {/* <Parent/> */}
//       {/* <Parent/> */}
//       {/* <Parent/> */}
//       {/* <Container/> */}
//       {/* <Parent/> */}
//       {/* <Parent/> */}
//       {/* <Parent/> */}
//       {/* <Parent/> */}
//       {/* <Parent/> */}
//       {/* <Parent/> */}
//       {/* <Parent/> */}
//     </div>
//   )
// }

// export default App
