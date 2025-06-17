import React from 'react'
import NavBar from './NavBar'

const kibria =[

{
  id: 1,
  name:"Golam",
  roll:"770",
},
{
 id: 2,
  name:"Golam Kibria",
  roll:"980",
},
{
 id: 3,
  name:"Golam Kibria Hassan",
  roll:"880",
},
]

const colors = ['bg-red-500', 'bg-green-500', 'bg-blue-500']

const Mediation = () => {
  return (
    <>

    {kibria.map((kibriahassan3500,index)=>
    (

  <div className='bg-amber-700'>
      <div key={kibriahassan3500.id} className={`${colors[index]} text-white p-4 mb-2`}>
        <div>{kibriahassan3500.name}</div>
        <div>{kibriahassan3500.roll}</div>
      </div>
    </div>
    )
)
    }
    </>
  )
}

export default Mediation
