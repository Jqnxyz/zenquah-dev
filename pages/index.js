import { navBarItem } from './page_components/navBar'

export default function Home() {
  return (
    <body class="min-h-screen bg-gray-50">
      <div class="pt-20 mx-auto 2xl:w-4/6 md:w-10/12 w-11/12">
        <div class="my-10">
          <h3 class="font-medium text-4xl">Zen Quah</h3>
          <p class="my-2 font-light text-xl">Software engineer, also takes photos.</p>
        </div>

        <div class="">
          {navBarItem({ title: 'Home', url: '/' })}
          {navBarItem({ title: 'Projects', url: 'https://github.com/jqnxyz' })}
          {navBarItem({ title: 'Contact', url: '/' })}
        </div>
        <div>
          <div class="w-max block lg:inline-block lg:w-8/12">
            LEFT
          </div>
          <div class="w-max block lg:inline-block lg:w-4/12">
            RIGHT
          </div>
        </div>
      </div>
    </body>
  )
}
