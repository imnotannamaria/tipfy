import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { Github } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <div className="p-2 flex justify-between">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link">Desenvolvido por @imnotannamaria</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex flex-col justify-between gap-2 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/imnotannamaria.png" />
              <AvatarFallback>AM</AvatarFallback>
            </Avatar>

            <div className="space-y-1 text-center">
              <h4 className="text-sm font-semibold">@imnotannamaria</h4>
              <p className="text-sm">Anna Maria - Analista de Software</p>
            </div>

            <div className="space-y-1">
              <Button variant="link">
                <Link
                  href="https://anna-maria-portfolio.vercel.app/skills"
                  target="_blank"
                  className="text-green-500 font-medium flex gap-2 items-center"
                >
                  {'>'} Veja mais sobre mim {'<'}
                </Link>
              </Button>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>

      <Button variant="link" className="flex gap-2">
        <Link
          href="https://github.com/imnotannamaria"
          className="flex gap-2 justify-between"
          target="_blank"
        >
          Projeto no Github
        </Link>
        <Github />
      </Button>
    </div>
  )
}
