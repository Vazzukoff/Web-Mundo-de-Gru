import { NavLink } from 'react-router-dom';

export default function Header() {
  const navItems = [
    {
      name: 'Inicio',
      path: '/',
      color: 'text-white bg-cyan-400',
      activeColor: 'bg-cyan-500 text-white',
      hoverColor: 'hover:bg-cyan-500'
    },
    {
      name: 'Servicios',
      path: '/servicios',
      color: 'text-white bg-amber-400',
      activeColor: 'bg-amber-400 text-white',
      hoverColor: 'hover:bg-amber-500'
    },
    {
      name: 'Contacto',
      path: '/contacto',
      color: 'text-white bg-orange-400',
      activeColor: 'bg-orange-400 text-white',
      hoverColor: 'hover:bg-orange-500'
    }
  ];

  return (
    <header className="bg-white backdrop-blur-md shadow-md border-b border-gray-200 px-4 sm:px-6 pt-4 pb-0 sticky top-0 z-50">
      <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4">

        {/* Logo */}
        <NavLink
          to="/"
          className="flex justify-center sm:justify-start group"
        >
          <div className="relative">
            <img
              className="h-20 sm:h-24 w-auto object-contain mx-auto sm:mx-0 transition-all duration-300"
              src="/assets/logo.jpg"
              alt="Logo"
            />
          </div>
        </NavLink>

        {/* Navegación */}
        <nav className="mt-4 sm:mt-0 flex flex-wrap justify-center sm:justify-end gap-2 text-sm sm:text-base font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `
                  ${item.color}
                  ${item.hoverColor}
                  ${isActive ? item.activeColor : ''}
                  px-6 sm:px-8 py-3 sm:py-4
                  rounded-xl
                  shadow-sm
                  hover:shadow-lg
                  transition-all
                  duration-300
                  font-semibold
                  min-w-[110px] sm:min-w-[130px]
                  text-center
                  relative
                  tracking-wide
                  ${isActive ? 'shadow-lg scale-[1.03]' : 'scale-100'}
                `
              }
            >
              <span className="relative">
                {item.name}
              </span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Línea decorativa inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-300 via-amber-300 to-orange-300 opacity-70"></div>
    </header>
  );
}