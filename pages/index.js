import { header } from '../components/shared/pageHeader'
import { sidebar } from '../components/shared/pageSidebar'
import Link from "next/link"


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-5 mx-auto 2xl:w-7/12 md:w-10/12">
        {header()}
        <div className="block md:flex mt-5">
          <div className="w-screen m-0 inline-block md:w-8/12 md:mr-2">
            <Link href="/id">
              <div className="group cursor-pointer py-5 mb-5 rounded-lg transition-all bg-white shadow-md hover:ring-pink-400 hover:ring-1 hover:ring-opacity-80">
                <div className="px-5 font-medium text-2xl">Pretty Alright Privacy</div>
                <img className="object-cover h-64 my-5 w-full" src="https://static.govtech.agency/share/zen_quah-pgp-og-R87Vmf.jpg" />
                <div className="px-5 mt-5 font-light break-words text-justify">Using PGP to verify my work, messages, emails, and the sort.</div>
                <div className="transition-colors text-right font-semibold pr-5 pt-5 group-hover:text-pink-400">Continue Reading →</div>
              </div>
            </Link>
            <Link href="/">
              <div className="group cursor-pointer py-5 mb-5 rounded-lg transition-all bg-white shadow-md hover:ring-pink-400 hover:ring-1 hover:ring-opacity-80">
                <div className="px-5 font-medium text-2xl">Cats Shall Rule The World</div>
                <div className="px-5 mt-5 font-light break-words text-justify">Cats are the world. Meow in empty rooms. Attempt to leap between furniture but woefully miscalibrate and bellyflop onto the floor; what&apos;s your problem? i meant to do that now i shall wash myself intently meow going to catch the red dot today going to catch the red dot today drool use lap as chair purrrrrr. Enslave the hooman.</div>
                <div className="transition-colors text-right font-semibold pr-5 pt-5 group-hover:text-pink-400">Continue Reading →</div>
              </div>
            </Link>
            <Link href="/id">
              <div className="group cursor-pointer py-5 mb-5 rounded-lg transition-all bg-white shadow-md hover:ring-pink-400 hover:ring-1 hover:ring-opacity-80">
                <div className="px-5 font-medium text-2xl">Pretty Alright Privacy</div>
                <img className="object-cover h-64 my-5 w-full" src="https://static.govtech.agency/share/zen_quah-pgp-og-R87Vmf.jpg" />
                <div className="px-5 mt-5 font-light break-words text-justify">Using PGP to verify my work, messages, emails, and the sort.</div>
                <div className="transition-colors text-right font-semibold pr-5 pt-5 group-hover:text-pink-400">Continue Reading →</div>
              </div>
            </Link>
            <Link href="/">
              <div className="group cursor-pointer py-5 mb-5 rounded-lg transition-all bg-white shadow-md hover:ring-pink-400 hover:ring-1 hover:ring-opacity-80">
                <div className="px-5 font-medium text-2xl">Cats Shall Rule The World</div>
                <div className="px-5 mt-5 font-light break-words text-justify">Cats are the world. Meow in empty rooms. Attempt to leap between furniture but woefully miscalibrate and bellyflop onto the floor; what&apos;s your problem? i meant to do that now i shall wash myself intently meow going to catch the red dot today going to catch the red dot today drool use lap as chair purrrrrr. Enslave the hooman.</div>
                <div className="transition-colors text-right font-semibold pr-5 pt-5 group-hover:text-pink-400">Continue Reading →</div>
              </div>
            </Link>
          </div>
          {sidebar()}
        </div>
      </div>
    </div >
  )
}

