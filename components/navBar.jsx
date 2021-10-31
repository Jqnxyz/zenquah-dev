export function navBarItem(props) {
  return (
    <a href={props.url}>
      <div className="transition-all mr-3 shadow-md bg-white inline-block rounded-md px-5 py-2 hover:text-pink-400 hover:ring-pink-400 hover:ring-2 hover:ring-opacity-80">
        {props.title}
      </div>
    </a>
  )
}

