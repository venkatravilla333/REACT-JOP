


import App from "./App";

import reactDom from 'react-dom/client'

var div = document.getElementById('root')

var parent  = reactDom.createRoot(div)

parent.render(App())