import { IndicationWithId } from '@/graphql/interfaces/Indication'
import { ListIndicationsQuery } from '@/graphql/mutations/indicationsMutations'
import { hygraph } from '@/lib/hygraph'

export async function GetAllIndications(): Promise<IndicationWithId[]> {
  try {
    const { indications } = await hygraph.request<{
      indications: IndicationWithId[]
    }>(ListIndicationsQuery(1000))
    return indications
  } catch (error) {
    console.error('API ERROR: ' + error)
    throw error
  }
}
