import Link from 'next/link';
import { useRouter } from 'next/router'
import {ROUTES} from "../components/config";

export const LandingLayout = ({children}) => {
    const router = useRouter();
    return (
        <div className="min-h-screen antialiased bg-gray-50">
            <header className="bg-white shadow-md bg-white">
                <div className="container flex justify-between items-center px-3 py-2 h-16 mx-auto">
                    <Link href={ROUTES.CLIENT_LANDING}>
                        <a className="text-gray-900 font-bold">gelservis</a>
                    </Link>
                    <nav>
                        <ul className="flex space-x-4">
                            {
                                router.pathname !== ROUTES.SERVICE_LANDING && (
                                    <li>
                                        <Link href={ROUTES.SERVICE_LANDING}>
                                            <a className="text-xs sm:text-sm border border-gray-300 px-2 py-3 rounded-md text-gray-900 hover:bg-gray-300 transition">Firma Sahibiyim</a>
                                        </Link>
                                    </li>
                                )
                            }
                            <li>
                                <Link href={ROUTES.LOGIN}>
                                    <a className="text-xs sm:text-sm bg-gray-200 border-gray-400 px-2 py-3 rounded-md text-gray-900 hover:bg-gray-300 transition">Giriş Yap</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main>
                {children}
            </main>
        </div>
    );
}