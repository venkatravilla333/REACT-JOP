import React from 'react'

import { ErrorBoundary } from 'react-error-boundary'


function FallbakUi(props) {
  return <h5>Something went wrong : {props.error.message}</h5>
}

function ErrorBoundry(props) {
  return <ErrorBoundary FallbackComponent={FallbakUi} onError={(error) => {
    console.log(error)
  }}>
    {props.children}
  </ErrorBoundary>
}

export default ErrorBoundry