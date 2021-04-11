import {LandingLayout} from "../layouts/Landing";
import {AcceptRequest, ServiceLandingIcon} from "../components/Icons";
import Link from "next/link";
import {ROUTES} from "../components/config";

export default function ServicesLanding() {
    return (
        <LandingLayout>
            <section className="px-4 py-8 md:flex md:flex-row-reverse md:items-center md:-space-x-2 lg:container lg:mx-auto">
                <AcceptRequest />
                <div className="md:w-5/6 lg:w-full">
                    <h2 className="text-2xl font-black text-gray-900">Müşteriye ulaşmanın en kolay yolu!</h2>
                    <p className="text-md mt-2">Müşteriye ulaşmak için reklamlara boğulmayın. Gelen talebi onaylayın ve yola koyulun.</p>
                    <p className="text-md mt-1">İşlerinizi <span className="font-semibold underline ">Gel Servis</span> aracılığıyla büyütün!</p>
                </div>
            </section>
            <section className="px-4 py-8 bg-indigo-100">
                <div className="lg:container mx-auto">
                    <h2 className="text-2xl font-black text-gray-900">Nasıl Çalışıyor? </h2>
                    <ul className="text-md my-2 text-gray-900">
                        <li>
                            - Başvurunuzla birlikte hesabınıza kredi tanımlanır.
                        </li>
                        <li>
                            - Sistem firmanıza uygun işleri otomatik olarak ekranınıza yansıtır.
                        </li>
                        <li>
                            - Kabul ettiğiniz her iş için bakiyenizden kredi tahsil edilir.
                        </li>
                        <li>
                            - Bakiyeniz azaldığında tekrar yükleme yaparak iş alımına uygun hale gelebilirsiniz.
                        </li>
                        <li>
                            - Böylelikle yalnızca kesinleşmiş müşteriler üzerinden ücretlendirilirsiniz, ek hiçbir komisyon ödemezsiniz!
                        </li>
                    </ul>
                    <Link href={ROUTES.SERVICE_REGISTER}>
                        <a className="bg-indigo-900 text-white px-3 py-2 my-4 text-center block rounded-md font-semibold transition hover:bg-indigo-800 lg:w-60">Hemen Başvur</a>
                    </Link>
                </div>
            </section>

        </LandingLayout>
    )
}
