import estilos from './box.module.css';

const Box = ({ children, className = '' }) => {
  return <div className={`${estilos.caja} ${className} container mx-auto py-3 px-3`}>{children}</div>;
}

export default Box;