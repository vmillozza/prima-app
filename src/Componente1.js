import React from 'react'

const Componente1 = () => {
    return (
        <React.Fragment>
          
          <Saluto></Saluto>

        </React.Fragment>
    )
}
const Persona = ()=>{
  return <h2>Mi chiamo Vito</h2>;
}
const Messaggio =()=>{ 
    return <h1>Sono un messaggio</h1>;


}
const Saluto=()=>{
    return  <React.Fragment>
    <section>
        <Persona></Persona>
        <Messaggio></Messaggio>
    </section>

</React.Fragment>;
}
export default Componente1
