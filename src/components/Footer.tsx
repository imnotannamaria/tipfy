import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <div className="p-2 flex justify-between">
      <Button variant="link" className="flex gap-2">
        <Link
          href="https://anna-maria-portfolio.vercel.app"
          className="text-xs flex gap-2 justify-between"
          target="_blank"
        >
          Desenvolvido por @imnotannamaria
        </Link>
      </Button>

      <Button variant="link" className="flex gap-2">
        <Link
          href="https://github.com/imnotannamaria/tipfy"
          className="text-xs flex gap-2 justify-between"
          target="_blank"
        >
          Projeto no Github
        </Link>
        <Github width={18} />
      </Button>
    </div>
  )
}
