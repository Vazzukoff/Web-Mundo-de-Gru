import { NavLink } from 'react-router-dom';

export default function Header() {
  const navItems = [
    {
      name: 'Inicio',
      path: '/',
      color: 'text-white bg-cyan-500',
      activeColor: 'bg-cyan-600 text-white',
      hoverColor: 'hover:bg-cyan-600'
    },
    {
      name: 'Servicios',
      path: '/servicios',
      color: 'text-white bg-amber-400',
      activeColor: 'bg-amber-500 text-white',
      hoverColor: 'hover:bg-amber-500'
    },
    {
      name: 'Contacto',
      path: '/contacto',
      color: 'text-white bg-orange-400',
      activeColor: 'bg-orange-500 text-white',
      hoverColor: 'hover:bg-orange-500'
    }
  ];

  return (
    <header className="bg-white shadow-lg border-b border-gray-100 px-4 sm:px-6 pt-4 pb-0 sticky top-0 z-50">
      <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4">
        <NavLink
          to="/"
          className="flex justify-center sm:justify-start group"
        >
          <div className="relative">
            <img
              className="h-16 sm:h-20 w-auto object-contain mx-auto sm:mx-0 transition-all duration-300 group-hover:opacity-90"
              src="/assets/logo.jpg"
              alt="Logo"
            />
          </div>
        </NavLink>

        <nav className="mt-4 sm:mt-0 flex flex-wrap justify-center sm:justify-end gap-1 text-sm sm:text-base font-medium">
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
                  rounded-lg
                  shadow-sm
                  hover:shadow-md
                  transition-all
                  duration-300
                  font-semibold
                  min-w-[100px] sm:min-w-[120px]
                  text-center
                  relative
                  ${isActive ? 'shadow-md font-bold' : ''}
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
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-amber-400 to-emerald-400 opacity-60"></div>
    </header>
  );
}