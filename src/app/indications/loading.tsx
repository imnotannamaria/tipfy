import { Shell } from 'lucide-react'

export default function Loading() {
  return (
    <div className="h-screen w-screen items-center justify-center flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <p className="text-xl font-bold">Carregando...</p>
        <Shell className="h-6 w-6 animate-spin" />
      </div>
      <p className="text-sm">
        Aguarde um pouco, estou consultando as indicações públicas.
      </p>
    </div>
  )
}
