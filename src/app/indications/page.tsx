import Image from 'next/image'
import { GetIndications } from '../api/getApiData'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default async function Indications() {
  const indications = await GetIndications()

  return (
    <div>
      <Table>
        <TableCaption>Todas as músicas indicadas.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Capa</TableHead>
            <TableHead>Quem indicou</TableHead>
            <TableHead>Nome da música</TableHead>
            <TableHead>Artista</TableHead>
            <TableHead>Link da música</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {indications.map((indications) => (
            <TableRow key={indications.id}>
              <TableCell>
                <Image
                  src={indications.cover}
                  width={60}
                  height={60}
                  alt="Cover of the song"
                />
              </TableCell>
              <TableCell className="font-medium">{indications.name}</TableCell>
              <TableCell>{indications.track}</TableCell>
              <TableCell>{indications.artist}</TableCell>
              <TableCell>
                <Button variant="link">
                  <Link href={indications.link} className="text-green-500">
                    Ouvir no Spotify
                  </Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
