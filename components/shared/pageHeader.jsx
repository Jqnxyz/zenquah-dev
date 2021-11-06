import Head from 'next/head'
import { navBarItem } from "../page/navBar"

const defaultHeader = {
    title: 'Zen Quah',
    description: 'Zen Quah is a software developer who also takes photos.',
    image: 'https://static.govtech.agency/share/zen_quah-default-og-qFPjX2.jpg'
}

export function header(props = defaultHeader) {
    props = {
        ...defaultHeader,
        ...props
    }
  return (
    <div>
        <Head>
            <title>{props.title}</title>
            <meta property="og:title" content={props.title} key="title" />
            <meta property="og:description" content={props.description} />
            <meta property="og:image" content={props.image} />

            <meta name="theme-color" content="#ffb5c6" />

            <meta name="viewport" content="initial-scale=1.0, width=device-width" />

            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
        <div className="block m-0 md:flex md:m-auto">
            <div className="w-auto py-0 text-center md:text-left md:py-5">
                <img className="inline object-cover rounded-full w-52 h-52 m-auto md:mr-5 md:w-20 md:h-20" src="https://static.govtech.agency/share/zen_quah-profile_picture-square-small-HwnQD6.jpg" alt="Profile image"/>
            </div>
            <div className="w-screen p-5 md:px-0 md:w-4/6 md:m-0">
                <div className="font-medium text-4xl text-center md:text-left">Zen Quah</div>
                <div className="my-2 font-light text-xl text-center md:text-left">Software engineer, also takes photos.</div>
            </div>
        </div>
        <div className="w-11/12 m-auto text-center md:text-left md:m-0 md:mt-3">
            {navBarItem({ title: '🏠', url: '/' })}
            {navBarItem({ title: 'PGP', url: '/id' })}
        </div>
    </div>
  )
}

