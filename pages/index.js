import { navBarItem } from '../components/navBar'
import { sidebarBox } from '../components/sidebarBox'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-5 mx-auto 2xl:w-7/12 md:w-10/12">
        <div className="my-10 w-11/12 m-auto md:m-0">
          <div className="font-medium text-4xl">Zen Quah</div>
          <div className="my-2 font-light text-xl">Software engineer, also takes photos.</div>
        </div>

        <div className="w-11/12 m-auto md:m-0 md:mt-3">
          {navBarItem({ title: '🏠', url: '/' })}
          {navBarItem({ title: 'Projects', url: 'https://github.com/jqnxyz' })}
          {navBarItem({ title: 'PGP', url: '/pgp' })}
        </div>
        <div className="block md:flex mt-5">
          <div className="w-screen m-0 inline-block md:w-8/12 md:mr-2">
            <div className="px-5 py-5 mb-5 rounded-lg bg-white shadow-md">
              <div className="font-medium text-2xl">Placeholder Content</div>
              <div className="mt-5 font-light break-words text-justify">Mice mew mew swipe at owner&apos;s legs lasers are tiny mice so be a nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day check cat door for ambush 10 times before coming in. Kitty time bite the neighbor&apos;s bratty kid, but found somthing move i bite it tail chase red laser dot touch water with paw then recoil in horror swipe at owner&apos;s legs. Making sure that fluff gets into the owner&apos;s eyes mmmmmmmmmeeeeeeeeooooooooowwwwwwww to pet a cat, rub its belly, endure blood and agony, quietly weep, keep rubbing belly yet bleghbleghvomit my furball really tie the room together cat mojo but step on your keyboard while you&apos;re gaming and then turn in a circle . You call this cat food bite the neighbor&apos;s bratty kid. Sit on the laptop meoooow so slap kitten brother with paw yet leave buried treasure in the sandbox for the toddlers white cat sleeps on a black shirt ptracy howl on top of tall thing. Attack feet cattt catt cattty cat being a cat but run up and down stairs give me attention or face the wrath of my claws but meow all night having their mate disturbing sleeping humans.</div>
            </div>
            <div className="px-5 py-5 mb-5 rounded-lg bg-white shadow-md">
              <div className="font-medium text-2xl">Placeholder Content</div>
              <div className="mt-5 font-light break-words text-justify">Mice mew mew swipe at owner&apos;s legs lasers are tiny mice so be a nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day check cat door for ambush 10 times before coming in. Kitty time bite the neighbor&apos;s bratty kid, but found somthing move i bite it tail chase red laser dot touch water with paw then recoil in horror swipe at owner&apos;s legs. Making sure that fluff gets into the owner&apos;s eyes mmmmmmmmmeeeeeeeeooooooooowwwwwwww to pet a cat, rub its belly, endure blood and agony, quietly weep, keep rubbing belly yet bleghbleghvomit my furball really tie the room together cat mojo but step on your keyboard while you&apos;re gaming and then turn in a circle . You call this cat food bite the neighbor&apos;s bratty kid. Sit on the laptop meoooow so slap kitten brother with paw yet leave buried treasure in the sandbox for the toddlers white cat sleeps on a black shirt ptracy howl on top of tall thing. Attack feet cattt catt cattty cat being a cat but run up and down stairs give me attention or face the wrath of my claws but meow all night having their mate disturbing sleeping humans.</div>
            </div>
            <div className="px-5 py-5 mb-5 rounded-lg bg-white shadow-md">
              <div className="font-medium text-2xl">Placeholder Content</div>
              <div className="mt-5 font-light break-words text-justify">Mice mew mew swipe at owner&apos;s legs lasers are tiny mice so be a nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day check cat door for ambush 10 times before coming in. Kitty time bite the neighbor&apos;s bratty kid, but found somthing move i bite it tail chase red laser dot touch water with paw then recoil in horror swipe at owner&apos;s legs. Making sure that fluff gets into the owner&apos;s eyes mmmmmmmmmeeeeeeeeooooooooowwwwwwww to pet a cat, rub its belly, endure blood and agony, quietly weep, keep rubbing belly yet bleghbleghvomit my furball really tie the room together cat mojo but step on your keyboard while you&apos;re gaming and then turn in a circle . You call this cat food bite the neighbor&apos;s bratty kid. Sit on the laptop meoooow so slap kitten brother with paw yet leave buried treasure in the sandbox for the toddlers white cat sleeps on a black shirt ptracy howl on top of tall thing. Attack feet cattt catt cattty cat being a cat but run up and down stairs give me attention or face the wrath of my claws but meow all night having their mate disturbing sleeping humans.</div>
            </div>
          </div>
          <div className="w-screen  m-0inline-block md:w-3/12 md:ml-2">
            {sidebarBox({ title: 'Twitter →', description: 'Bad juju opinions', url: 'https://twitter.com/trynothingy' })}
            {sidebarBox({ title: 'Instagram →', description: 'See what I see', url: 'https://www.instagram.com/jqnxyz/' })}
            {sidebarBox({ title: 'LinkedIn →', description: 'Pay me money to raid your pantry', url: 'https://www.linkedin.com/in/jerome-q-09241b144/' })}
          </div>
        </div>
      </div>
    </div>
  )
}
