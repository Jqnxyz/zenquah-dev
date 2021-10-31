import { navBarItem } from './page_components/navBar'
import { sidebarBox } from './page_components/sidebarBox'

export default function Home() {
  return (
    <div class="min-h-screen bg-gray-50">
      <div class="pt-20 mx-auto 2xl:w-7/12 md:w-10/12 w-11/12">
        <div class="my-10">
          <div class="font-medium text-4xl">Zen Quah</div>
          <div class="my-2 font-light text-xl">Software engineer, also takes photos.</div>
        </div>

        <div class="">
          {navBarItem({ title: 'Home', url: '/' })}
          {navBarItem({ title: 'Projects', url: 'https://github.com/jqnxyz' })}
          {navBarItem({ title: 'Contact', url: '/' })}
        </div>
        <div class="block md:flex mt-5">
          <div class="w-11/12 m-0 inline-block md:w-8/12 md:mr-2">
            {sidebarBox({ title: 'Twitter →', description: 'Bad juju opinions', url: 'https://twitter.com/jqnxyz' })}
            {sidebarBox({ title: 'LinkedIn →', description: 'Pay me money to raid your pantry', url: 'https://www.linkedin.com/' })}
            {sidebarBox({ title: 'Twitter →', description: 'Bad juju opinions', url: 'https://twitter.com/jqnxyz' })}
            {sidebarBox({ title: 'LinkedIn →', description: 'Pay me money to raid your pantry', url: 'https://www.linkedin.com/' })}
            {sidebarBox({ title: 'Twitter →', description: 'Bad juju opinions', url: 'https://twitter.com/jqnxyz' })}
            {sidebarBox({ title: 'LinkedIn →', description: 'Pay me money to raid your pantry', url: 'https://www.linkedin.com/' })}

          </div>
          <div class="w-11/12 m-0 inline-block md:w-3/12 md:ml-2">
            {sidebarBox({ title: 'Twitter →', description: 'Bad juju opinions', url: 'https://twitter.com/jqnxyz' })}
            {sidebarBox({ title: 'LinkedIn →', description: 'Pay me money to raid your pantry', url: 'https://www.linkedin.com/' })}
          </div>
        </div>
      </div>
    </div>
  )
}
