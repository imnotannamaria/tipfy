import Link from 'next/link'
import { Logo } from './Logo'
import { Button } from './ui/button'

export function Header() {
  return (
    <header className="h-[10%] flex justify-between p-4 mb-32 md:mb-20 lg:mb-0 bg-zinc-950">
      <Logo />

      <div className="flex gap-2">
        <Button>
          <Link href="/indications">Indicações</Link>
        </Button>
      </div>
    </header>
  )
}
