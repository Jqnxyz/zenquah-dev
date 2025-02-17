import { useRouter } from 'next/router'
import { useEffect } from 'react'


export default function Resume() {
  const router = useRouter()

  useEffect(() => {
    router.push('https://static.govtech.agency/share/Zen-Quah-Resume-2025-GhCPzy.pdf');
    router.push('/');
  }, []);

  return (
    <div className="min-h-screen bg-white">
    </div >
  )
}

