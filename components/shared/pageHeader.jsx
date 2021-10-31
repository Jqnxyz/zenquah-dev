import { navBarItem } from "../page/navBar"

export function header() {
  return (
    <div>
        <div className="block m-0 md:flex md:m-auto">
            <div className="w-auto py-0 text-center md:text-left md:py-5">
                <img class="inline object-cover rounded-full w-52 h-52 m-auto md:mr-5 md:w-20 md:h-20" src="https://static.govtech.agency/share/zen_quah-profile_picture-square-small-HwnQD6.jpg" alt="Profile image"/>
            </div>
            <div className="w-screen p-5 md:px-0 md:w-4/6 md:m-0">
                <div className="font-medium text-4xl text-center md:text-left">Zen Quah</div>
                <div className="my-2 font-light text-xl text-center md:text-left">Software engineer, also takes photos.</div>
            </div>
        </div>
        <div className="w-11/12 m-auto text-center md:text-left md:m-0 md:mt-3">
            {navBarItem({ title: '🏠', url: '/' })}
            {navBarItem({ title: 'Projects', url: 'https://github.com/jqnxyz' })}
            {navBarItem({ title: 'PGP', url: '/id' })}
        </div>
    </div>
  )
}

