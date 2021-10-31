import Link from 'next/link';

export function sidebarBox(props) {
  return (
    <Link href={props.url}>
      <a>
        <div className="transition-all px-5 py-5 mb-5 rounded-lg bg-white shadow-md hover:text-pink-400 hover:ring-pink-400 hover:ring-2 hover:ring-opacity-80">
          <div className="font-medium text-2xl">{props.title}</div>
          <div className="font-light text-md py-2">{props.description}</div>
        </div>
      </a>
    </Link>
  )
}

