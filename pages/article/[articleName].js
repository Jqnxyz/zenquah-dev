import { header } from '../../components/shared/pageHeader'
import { sidebar } from '../../components/shared/pageSidebar'
import { useRouter } from 'next/router'
import { articlePage } from '../../components/index/articlePage'


const articleView = () => {
    const router = useRouter()
    const { articleName } = router.query

    return (
        <div className="min-h-screen bg-white">
            <div className="pt-5 mx-auto 2xl:w-7/12 md:w-10/12">
                {header({ title: 'PGP Key', description: 'Use Zen Quah\'s PGP Key to verify their signatures or encrypt documents for them.', image: 'https://static.govtech.agency/share/zen_quah-pgp-og-R87Vmf.jpg' })}
                <div className="block md:flex mt-5">
                    <div className="w-screen m-0 inline-block md:w-8/12 md:mr-2">
                        {articlePage({
                            title: "Pretty Alright Privacy",
                            date: "October 21st, 2021",
                            url: "/article/" + articleName,
                            image: "https://static.govtech.agency/share/zen_quah-pgp-og-R87Vmf.jpg",
                            content: "Using PGP to verify my work, messages, emails, and the sort."
                        })}
                    </div>
                    {sidebar()}
                </div>
            </div>
        </div>
    )
}

export default articleView