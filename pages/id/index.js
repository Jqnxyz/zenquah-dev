import { pgpPublicKey } from '../../components/id/pgpkey'
import { header } from '../../components/shared/pageHeader'
import { sidebar } from '../../components/shared/pageSidebar'
import { button } from '../../components/shared/button'

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="pt-5 mx-auto 2xl:w-7/12 md:w-10/12">
                {header({ title: 'PGP Key', description: 'Use Zen Quah\'s PGP Key to verify their signatures or encrypt documents for them.', image: 'https://static.govtech.agency/share/zen_quah-pgp-og-R87Vmf.jpg' })}
                <div className="block md:flex mt-5">
                    <div className="w-screen m-0 inline-block md:w-8/12 md:mr-2">
                        <div className="px-5 py-5 mb-5 rounded-lg bg-white shadow-md">
                            <div className="font-medium text-2xl">PGP Public Key</div>
                            <div className="my-5 font-light break-words text-justify">Use my PGP key to verify my emails/other encrypted content, or use it to sign/encrypt emails/content to be sent to me.</div>
                            {button({ title: 'Download', url: 'https://static.govtech.agency/share/Quah-Zen-Shaun-Jerome-C1B09A8B-Public-KePRRQ.asc' })}
                            {pgpPublicKey()}
                        </div>
                    </div>
                    {sidebar()}
                </div>
            </div>
        </div>
    )
}
