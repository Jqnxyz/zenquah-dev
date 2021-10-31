import { navBarItem } from "../page/navBar"

export function header() {
  return (
    <div>
        <div className="my-10 w-11/12 m-auto md:m-0">
            <div className="font-medium text-4xl">Zen Quah</div>
            <div className="my-2 font-light text-xl">Software engineer, also takes photos.</div>
        </div>

        <div className="w-11/12 m-auto md:m-0 md:mt-3">
            {navBarItem({ title: '🏠', url: '/' })}
            {navBarItem({ title: 'Projects', url: 'https://github.com/jqnxyz' })}
            {navBarItem({ title: 'PGP', url: '/id' })}
        </div>
    </div>
  )
}

