import Child from "./Child"

function Parent() {
  var name = 'kohli'
  var age = 30
  return <div>
    <h2>Parent com</h2>
    {/* {Child()} */}
    <Child name= {name} />
    <Child age= {age} />
  </div>
}
export default Parent