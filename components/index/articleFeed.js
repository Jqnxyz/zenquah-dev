import { articleCard } from "./articleCards"
import { borderlessButton } from "../shared/button"

function latestCards(count = 5) {

}


export function feed(props) {
    return (
        <div>
            {articleCard({
                title: "Pretty Alright Privacy",
                date: "October 2021",
                url: "/id",
                image: "https://static.govtech.agency/share/zen_quah-pgp-og-R87Vmf.jpg",
                description: "Save my PGP public key to verify my work, messages, emails, and the sort.",
                action: "View PGP Key →"
            })}
            {articleCard({
                title: "UnsafeEntry",
                date: "June 2020",
                url: "https://github.com/jqnxyz/unsafe-entry",
                description: "SafeEntry pass generator service",
                action: "View on GitHub →"
            })}
            {articleCard({
                title: "NRIC Tools JS",
                date: "September 2020",
                url: "https://www.npmjs.com/package/nric-tools",
                description: "NodeJS package for verifying Singapore NRIC numbers.",
                action: "View on npm →"
            })}
            <div className="mt-5">
                <div className="w-3/6 inline-block text-left">
                    {borderlessButton({ title: '← Previous Page', url: '/?page=2' })}
                </div>
                <div className="w-3/6 inline-block text-right">
                    {borderlessButton({ title: 'Next Page →', url: '/?page=2' })}
                </div>
            </div>
        </div >
    )
}

