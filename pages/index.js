import Link from 'next/link'
import {LandingLayout} from "../layouts/Landing";
import {AaIcon} from "../components/Icons";
import {ROUTES} from "../components/config";

export default function Home() {
  return (
    <LandingLayout>
            <section className="px-4 py-8 md:flex md:flex-row-reverse md:items-center md:space-x-2 lg:container lg:mx-auto">
                <AaIcon />
                <div className="md:w-5/6 lg:w-full">
                    <h2 className="text-2xl font-black text-gray-900">Teknik arızalar yeterince can sıkıcı...</h2>
                    <p className="text-md mt-2">Onca işin arasında bir de doğru servisi aramakla vakit kaybetmeyin! Size en iyi hizmeti sağlayacak servis firmasını seçelim, ekstra ücret ödemeden kaliteli hizmet almanızı sağlayalım.</p>
                    <p className="text-md mt-1">Size de sadece <span className="font-semibold underline ">Gel Servis</span> demek kalsın.</p>
                </div>
            </section>
            <section className="px-4 py-8 bg-indigo-100">
                <div className="lg:container mx-auto">
                    <h2 className="text-2xl font-black text-gray-900">Kredi Kartı Zorunluluğu Yok</h2>
                    <p className="text-md">Aldığın hizmet tamamlanana kadar herhangi bir ödeme yapmana gerek yok.</p>
                    <Link href={ROUTES.CLIENT_REGISTER}>
                        <a className="bg-indigo-900 text-white px-3 py-2 my-4 text-center block rounded-md font-semibold transition hover:bg-indigo-800 lg:w-60">Üye Ol</a>
                    </Link>
                </div>
            </section>
    </LandingLayout>
  )
}
