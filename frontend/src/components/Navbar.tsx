import { Link } from "react-router";

export default function Navbar() {
    return (
        <nav className="relative z-20 bg-background/95 backdrop-blur-sm border-b border-border">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-4">
                <Link to="/" className="flex items-center space-x-3">
                    <img src="https://vk.com/images/icons/pwa/apple/default.png?15" className="h-10 rounded-md" alt="Logo" />
                    <span className="text-xl font-bold text-foreground">Розыгрыш</span>
                </Link>

                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0">
                        <li>
                            <Link
                                to="/about"
                                className="block py-2 px-3 text-foreground/80 hover:text-accent transition-colors duration-200"
                            >
                                О розыгрыше
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/conditions"
                                className="block py-2 px-3 text-foreground/80 hover:text-accent transition-colors duration-200"
                            >
                                Условия
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/winners"
                                className="block py-2 px-3 text-foreground/80 hover:text-accent transition-colors duration-200"
                            >
                                Победители
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contacts"
                                className="block py-2 px-3 text-foreground/80 hover:text-accent transition-colors duration-200"
                            >
                                Контакты
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}