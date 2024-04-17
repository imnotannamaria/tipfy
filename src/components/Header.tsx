import Link from 'next/link'
import { Logo } from './Logo'
import { Button } from './ui/button'

export function Header() {
  return (
    <header className="flex justify-between p-4">
      <Logo />
      <div className="flex gap-2">
        <Button>
          <Link href="/indications">Indicações</Link>
        </Button>
      </div>
    </header>
  )
}
