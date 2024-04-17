import { IndicationWithId } from '@/graphql/interfaces/Indication'
import { listAllIndicationsQuery } from '@/graphql/mutations/indicationsMutations'
import { hygraph } from '@/lib/hygraph'

export async function GetIndications(): Promise<IndicationWithId[]> {
  try {
    const { indications } = await hygraph.request<{
      indications: IndicationWithId[]
    }>(listAllIndicationsQuery)

    return indications
  } catch (error) {
    console.error('API ERROR: ' + error)
    throw error
  }
}
