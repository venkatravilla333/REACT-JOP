import React from 'react'

function Profile({setLogin, login}) {
  return (
    <div>
      <h3>User Profile</h3>
      <h4>Name: Sachin</h4>
      <h4>Age: 40</h4>
      <img src="https://img.jagranjosh.com/imported/images/E/GK/sachin-records.png" alt="" width='200px' height='220px'/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab placeat atque ratione expedita harum, tempora esse voluptas laboriosam dolor vero! Accusamus exercitationem natus hic molestiae quos temporibus numquam praesentium, consectetur minima officiis, voluptates facere repellat velit nesciunt saepe voluptate eligendi voluptas quaerat placeat! Fuga tempore earum repellendus, esse ducimus perferendis id eum praesentium aspernatur. Deleniti possimus fuga quas, eveniet similique error. Qui dolore saepe consectetur rerum ducimus! Accusamus at architecto ullam aperiam! Corporis voluptates nostrum rem officiis sunt iusto fugiat eius libero, ut natus repellendus saepe deserunt veritatis voluptatibus assumenda aspernatur. Eligendi ipsam harum nostrum explicabo? Culpa ipsam fuga minima.</p>
      <button onClick={()=>setLogin(!login)}>Logout</button>
    </div>
  )
}

export default Profile
