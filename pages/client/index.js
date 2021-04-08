import Head from 'next/head'

export default function ClientHome() {
    return (
        <>
            <div className="container p-8">
                <input name="address" placeholder="Mahmutbey cad. 13. sk"
                       className="border border-gray-200 w-full px-3 py-2 rounded text-gray-600"/>
                <div>
                    <img src="http://placehold.it/400/400" className="my-4"/>
                    <div className="text-sm flex justify-between space-x-4 bg-gray-200 text-gray-800 rounded shadow-sm">
                        <a href="#" className="flex-1 text-center bg-gray-300 py-2 rounded-l border-r border-gray-300">Beyaz
                            Eşya</a>
                        <a href="#" className="flex-1 text-center py-2">Kombi</a>
                        <a href="#" className="flex-1 text-center py-2">Klima</a>
                    </div>
                    <div className="mt-4 space-y-2">
                        <input name="address" placeholder="Marka"
                               className="border border-gray-200 w-full px-3 py-2 rounded text-gray-600"/>
                        <input name="address" placeholder="Model"
                               className="border border-gray-200 w-full px-3 py-2 rounded text-gray-600"/>
                        <textarea rows={3} placeholder="Arıza açıklaması"
                                  className="border border-gray-200 w-full px-3 py-2 rounded text-gray-600"/>
                    </div>
                </div>
                <a href="#"
                   className="fixed bottom-12 left-2/4 transform -translate-x-2/4 block bg-indigo-500 px-3 py-2 rounded text-white hover:bg-indigo-400 transition text-lg">
                    Servis Bul
                </a>
            </div>
        </>
    )
}
