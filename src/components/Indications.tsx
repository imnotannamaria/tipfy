'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { GetAllIndications } from '@/app/api/getApiData'
import { IndicationWithId } from '@/graphql/interfaces/Indication'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from './ui/pagination'
import { SomethingWentWrong } from './Error'
import { ScrollArea } from './ui/scroll-area'

export default async function Indications() {
  const [indications, setIndications] = useState<IndicationWithId[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await GetAllIndications()
        setIndications(data)
        setError('')
      } catch (error) {
        console.error('Error fetching data:', error)
        setError('Erro ao buscar as indicações.')
      }
    }

    fetchData()
  }, [])

  const pageSize = 10
  const totalPageCount = Math.ceil(indications.length / pageSize)
  const startIndex = (currentPage - 1) * pageSize
  const endIndex = Math.min(startIndex + pageSize, indications.length)
  const currentPageIndications = indications.slice(startIndex, endIndex)

  return (
    <section className="flex flex-col items-center justify-center h-full w-full">
      {error && <SomethingWentWrong />}
      <ScrollArea className="w-full h-[500px] rounded-md">
        {indications.length > 0 && (
          <Table>
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
              {currentPageIndications.map((indication) => (
                <TableRow key={indication.id}>
                  <TableCell>
                    <Image
                      src={indication.cover}
                      width={50}
                      height={50}
                      alt="Cover of the song"
                    />
                  </TableCell>
                  <TableCell className="font-medium">
                    {indication.name}
                  </TableCell>
                  <TableCell>{indication.track}</TableCell>
                  <TableCell>{indication.artist}</TableCell>
                  <TableCell>
                    <Button variant="link">
                      <Link href={indication.link} className="text-green-500">
                        Ouvir no Spotify
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </ScrollArea>

      <Pagination>
        <PaginationContent>
          {Array.from({ length: totalPageCount }, (_, index) => index + 1).map(
            (page) => (
              <PaginationItem key={page} className="cursor-pointer">
                <PaginationLink onClick={() => setCurrentPage(page)}>
                  {page}
                </PaginationLink>
              </PaginationItem>
            ),
          )}
        </PaginationContent>
      </Pagination>
    </section>
  )
}
