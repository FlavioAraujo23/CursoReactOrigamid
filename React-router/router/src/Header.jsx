import { Link, NavLink } from 'react-router-dom';

// Link
// O Link irá modificar a rota e renderizar o novo componente sem recarregar a página.
const Header = () => {
  const activeStyle = {
    color: 'tomato',
  };
  return (
    <nav>
      {/* NavLink
            O NavLink funciona da mesma forma, mas adiciona uma classe ao link que estiver ativo. É necessário colocar o end no NavLink responsável por navegar para a raiz do app. */}
       <NavLink to="/" end activeStyle={activeStyle}>
        Home
      </NavLink>
      <Link to="sobre">Sobre</Link>
      <Link to="contato">Contato</Link>
    </nav>
  );
};