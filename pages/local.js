import { header } from '../components/shared/pageHeader'
import { sidebar } from '../components/shared/pageSidebar'
import { button } from '../components/shared/button'

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <div className="pt-5 mx-auto 2xl:w-7/12 md:w-10/12">
                {header({ title: 'Local Directory', description: 'Directory for local services' })}
                <div className="block md:flex mt-5">
                    <div className="w-screen m-0 inline-block md:w-8/12 md:mr-2">
                        <div className="px-5 py-5 rounded-lg bg-white shadow-md mb-64">
                            <div className="font-medium text-2xl">Local Directory</div>
                            <div>
                                <div className="block w-full text-center md:inline-block md:w-3/6 md:pr-3">
                                    {button({ title: 'UniFi Controller', url: 'https://174.zenquah.dev:8443', type: 'full' })}
                                </div>
                                <div className="block w-full text-center md:inline-block md:w-3/6 md:pr-3">
                                    {button({ title: 'Legacy Directory', url: 'https://174.zenquah.dev/', type: 'full' })}
                                </div>
                                <div className="block w-full text-center md:inline-block md:w-6/6 md:pr-3">
                                    {button({ title: 'HomeBridge', url: 'https://homebridge.zenquah.dev/', type: 'full' })}
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
