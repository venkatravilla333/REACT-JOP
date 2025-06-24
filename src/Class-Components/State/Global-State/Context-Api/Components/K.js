import React, { Component } from 'react'
import {countContext, nameContext, colorContext} from './A'

export class K extends Component {
  render() {
    return <countContext.Consumer>
      {
        (count) => {
          return <nameContext.Consumer>
            {
              (name) => {
                return <colorContext.Consumer>
                  {
                    (color) => {
                      return <div>
                        <h4>K Count: {count}</h4>
                        <h4>K Name: {name}</h4>
                        <h4>K Color: {color}</h4>
                      </div>
                    }
                  }
                </colorContext.Consumer>
              }
            }
          </nameContext.Consumer>
        }
      }
    </countContext.Consumer>
  }
}

export default K