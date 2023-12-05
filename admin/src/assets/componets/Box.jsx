import estilos from './box.module.css';

const Box = ({ children, className = '' }) => {
  return <>
  <br />
    <div className={`${estilos.caja} ${className} caja container mx-auto py-10 px-5`}>{children}</div>;
  </>

}

export default Box;