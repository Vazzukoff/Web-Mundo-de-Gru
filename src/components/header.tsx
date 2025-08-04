import { NavLink } from 'react-router-dom';

export default function Header() {
    const navItems = [
        { name: 'Inicio', path: '/', color: 'text-cyan-600 bg-cyan-200', activeColor: 'bg-cyan-500' },
        { name: 'Servicios', path: '/servicios', color: 'text-yellow-600 bg-yellow-100' },
        { name: 'Contacto', path: '/contacto', color: 'text-orange-600 bg-orange-100' }
    ];

    return (
        <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4 sticky top-0 shadow transition-all duration-300 z-50">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <NavLink to="/" className="flex justify-center sm:justify-start">
                    <img className="h-24 sm:h-40 w-auto object-contain mx-auto sm:mx-0" src="/assets/logo.jpg" alt="Logo" />
                </NavLink>
    
                <nav className="mt-4 sm:mt-0 flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-4 text-base sm:text-xl font-title">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `
                                    ${item.color}
                                    ${isActive ? item.activeColor + 'shadow-lg scale-105' : ''}
                                    px-3 sm:px-4 py-2
                                    rounded-xl
                                    shadow-md
                                    hover:shadow-lg
                                    hover:scale-105
                                    transition-all
                                    duration-300
                                    font-medium
                                    min-w-[90px] sm:min-w-[100px]
                                    text-center
                                    ${isActive ? 'shadow-lg scale-105 ' + item.color.split('-')[1] + '-400' : ''}
                                `
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    );
}