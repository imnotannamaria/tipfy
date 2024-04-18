import { TriangleAlert } from 'lucide-react'

export function SomethingWentWrong() {
  return (
    <div className="h-screen w-screen items-center justify-center flex flex-col gap-4">
      <div className="flex items-center gap-2 text-red-500">
        <p className="text-xl font-bold">Vish!...</p>
        <TriangleAlert className="h-6 w-6 animate-bounce" />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-sm">Ocorreu algum erro ao buscar as indicações.</p>
        <p className="text-sm">
          Atualize a página ou tente novamente mais tarde.
        </p>
      </div>
    </div>
  )
}
