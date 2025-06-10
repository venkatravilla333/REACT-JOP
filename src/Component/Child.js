
function Child(props) {

  console.log(props)

  var data = 'sachin'

  return <h3>Child com: {data} {props.name} {props.age} </h3>
}
export default Child