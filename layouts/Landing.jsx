import Link from 'next/link';

export const LandingLayout = ({children}) => (
    <div className="container min-h-screen antialiased bg-gray-50">
        <header className="bg-white px-3 py-2 flex justify-between shadow-md items-center h-16 bg-white">
            <Link href="/">
                <a className="text-gray-900 font-bold">gelservis</a>
            </Link>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/servisler-icin">
                            <a className="border border-gray-300 px-2 py-3 rounded-md text-gray-900 hover:bg-gray-300 transition">Firma Sahibiyim</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/login">
                            <a className="bg-gray-200 border-gray-400 px-2 py-3 rounded-md text-gray-900 hover:bg-gray-300 transition">Giriş Yap</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            {children}
        </main>
    </div>
);