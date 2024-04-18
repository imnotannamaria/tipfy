import Link from 'next/link'
import { Label } from './ui/label'

export function Logo() {
  return (
    <Link className="text-xl" href="/">
      Tip<Label className="text-green-500 text-xl cursor-pointer">fy</Label>
    </Link>
  )
}
