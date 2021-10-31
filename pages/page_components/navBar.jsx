export function navBarItem(props) {
  return (
    <div class="mr-3 shadow-md bg-white inline-block rounded-md px-5 py-2 hover:ring-pink-200 hover:ring-2 hover:ring-opacity-80">
      <a href={props.url}>{props.title}</a>
    </div>
  )
}

