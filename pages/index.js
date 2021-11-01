import { header } from '../components/shared/pageHeader'
import { sidebar } from '../components/shared/pageSidebar'
import { feed } from '../components/index/articleFeed'


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-5 mx-auto 2xl:w-7/12 md:w-10/12">
        {header()}
        <div className="block md:flex mt-5 mb-64">
          <div className="w-screen m-0 inline-block md:w-8/12 md:mr-2">
            {feed()}
          </div>
          {sidebar()}
        </div>
      </div>
    </div >
  )
}

