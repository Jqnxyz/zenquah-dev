export function sidebarBox(props) {
  return (
    <a href={props.url}>
      <div className="transition-all px-5 py-5 mb-5 rounded-lg bg-white shadow-md hover:text-pink-200 hover:ring-pink-200 hover:ring-2 hover:ring-opacity-80">
        <div className="font-medium text-2xl">{props.title}</div>
        <div className="font-light text-md py-2">{props.description}</div>
      </div>
    </a>
  )
}

