import { APIGatewayProxyHandler } from 'aws-lambda'
import { erc20 } from './_contracts'
import { OK, ServerError } from './_response'

export const handler: APIGatewayProxyHandler = async () => {
  try {
    return OK(await getTotalSupply(process.env.tokenAddress as string))
  } catch (error) {
    return ServerError(error.message)
  }
}

const getTotalSupply = async (address: string): Promise<string> => {
  const token = erc20(address)
  return (await token.totalSupply()).toString()
}
