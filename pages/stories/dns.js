import { header } from '../../components/shared/pageHeader'
import { sidebar } from '../../components/shared/pageSidebar'
import { button } from '../../components/shared/button'

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <div className="pt-5 mx-auto 2xl:w-7/12 md:w-10/12">
                {header({ title: 'DNS Everywhere', description: 'Step-by-step instructions on getting DNS over TLS/HTTPS on all your devices!', image: 'https://static.govtech.agency/share/zen_quah-pgp-og-R87Vmf.jpg' })}
                <div className="block md:flex mt-5">
                    <div className="w-screen m-0 inline-block md:w-8/12 md:mr-2">
                        <div className="px-5 py-5 rounded-lg bg-white shadow-md mb-64">
                            <div className="font-medium text-2xl">Secure DNS everywhere!</div>
                            <div className="py-5 font-light break-words text-justify">Follow the guides below to enable secure DNS on your devices (well, just your Apple devices). All the guides use CloudFlare&apos;s servers.
                            </div>
                            <div className="pb-5 font-light break-words text-justify">
                                watchOS does not currently support DNS profiles so stay tuned for an update when it does!
                            </div>
                            <div>
                                <div className="block w-full text-center md:inline-block md:w-3/6 md:pr-3">
                                    {button({ title: 'macOS', url: 'https://gist.github.com/Jqnxyz/b6be54952b818a6e52668a8c0959d3c5', type: 'full' })}
                                </div>
                                <div className="block w-full text-center md:inline-block md:w-3/6 md:pr-3">
                                    {button({ title: 'iOS & iPadOS', url: 'https://gist.github.com/Jqnxyz/e9132c90615c3a7d973152c32c190fb5', type: 'full' })}
                                </div>
                            </div>
                        </div>
                    </div>
                    {sidebar()}
                </div>
            </div>
        </div>
    )
}
