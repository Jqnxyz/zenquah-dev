import Link from 'next/link'

export function navBarItem(props) {
  return (
    <Link href={props.url}>
      <a>
        <div className="transition-all mr-3 shadow-md bg-white inline-block rounded-md px-5 py-2 hover:text-pink-400 hover:ring-pink-400 hover:ring-1 hover:ring-opacity-80">
          {props.title}
        </div>
      </a>
    </Link>
  )
}

