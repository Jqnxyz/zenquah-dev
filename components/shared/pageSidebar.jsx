
import { sidebarBox } from "../page/sidebarBox"

export function sidebar() {
  return (
    <div className="w-screen  m-0inline-block md:w-3/12 md:ml-2">
        {sidebarBox({ title: 'GitHub →', description: 'Commits, pulls, and all that good stuff', url: 'https://github.com/Jqnxyz' })}
        {sidebarBox({ title: 'Twitter →', description: 'Bad juju opinions', url: 'https://twitter.com/trynothingy' })}
        {sidebarBox({ title: 'Instagram →', description: 'See what I see', url: 'https://www.instagram.com/jqnxyz/' })}
        {sidebarBox({ title: 'LinkedIn →', description: 'Pay me money to raid your pantry', url: 'https://www.linkedin.com/in/zenquah/' })}
    </div>
  )
}

