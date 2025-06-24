


import App from "./App";

import reactDom from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'

var div = document.getElementById('root')

var parent = reactDom.createRoot(div)



parent.render(
<BrowserRouter>
<App/>
</BrowserRouter>
)