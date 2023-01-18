import { articleCard } from "./articleCards"

export function feed() {
    return (
        <div>
            {articleCard({
                title: "My blog",
                date: "January 2023",
                url: "https://blog.zenquah.dev/",
                description: "A place where I write about things I find interesting. And more.",
                action: "Read my things →"
            })}
            {articleCard({
                title: "Secure DNS for Apple devices",
                date: "November 2021",
                url: "/stories/dns",
                // image: "https://static.govtech.agency/share/zenquah-dns-NlBDWy.jpg",
                description: "Step-by-step instructions on getting DNS over TLS/HTTPS on Apple devices.",
                action: "Instructions →"
            })}
            {/* 
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
            })} */}
            {/* <div className="mt-5">
                <div className="w-3/6 inline-block text-left">
                    {borderlessButton({ title: '← Previous Page', url: '/?page=2' })}
                </div>
                <div className="w-3/6 inline-block text-right">
                    {borderlessButton({ title: 'Next Page →', url: '/?page=2' })}
                </div>
            </div> */}
        </div >
    )
}

