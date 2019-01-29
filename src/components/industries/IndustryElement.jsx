import React from 'react'

export default function IndustryElement(props) {
  return (
    <div>
        <p>{props.element.id}</p>
        <p>{props.element.name}</p>
      {props.element.children ? 
      props.element.children.map((e,i)=>{
        return <IndustryElement element={e} key={i} />
      })
     : <div>no more data</div>}
    </div>
  )
}
