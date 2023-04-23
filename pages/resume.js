import { useRouter } from 'next/router'


export default function Home() {
  const router = useRouter()
  router.push('https://static.govtech.agency/share/Zen-Quah-Resume-2023-04-ssuWe2.pdf')
  router.push('/')

  return (
    <div className="min-h-screen bg-white">
    </div >
  )
}

