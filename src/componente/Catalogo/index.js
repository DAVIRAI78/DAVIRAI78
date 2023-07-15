import './Catalogo.css'

const Catalogo = (props) => {
   const css = { backgroundColor: props.corSecondaria } 

    return (
        <section className='Catalogo' style={css }>
         <h3 style={{borderColor:  props.corPrimaria}}>{props.nome}</h3>   
        </section>
    )
}  

export default Catalogo