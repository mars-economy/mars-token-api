import { APIGatewayProxyHandler } from 'aws-lambda'
import { erc20 } from './_contracts'
import { OK, ServerError } from './_response'

export const handler: APIGatewayProxyHandler = async () => {
  try {
    return OK(await getCirculatingSupply(process.env.tokenAddress as string, process.env.ownerAddress as string))
  } catch (error) {
    return ServerError(error.message)
  }
}

const getCirculatingSupply = async (address: string, ownerAddress: string): Promise<string> => {
  const token = erc20(address)
  return ((await token.totalSupply()).sub(await token.balanceOf(ownerAddress))).toString()
}
