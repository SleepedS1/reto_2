import estilos from './box.module.css';

const Box = ({ children, className = '' }) => {
  return <div className={`${estilos.caja} ${className} container mx-auto py-10 px-5`}>{children}</div>;
}

export default Box;