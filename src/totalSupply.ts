import { APIGatewayProxyHandler } from 'aws-lambda'
import { erc20 } from './_contracts'
import { OK, ServerError } from './_response'
import { BigNumber } from 'ethers'

export const handler: APIGatewayProxyHandler = async () => {
  try {
    return OK(await getTotalSupply(process.env.tokenAddress as string))
  } catch (error) {
    return ServerError(error.message)
  }
}

const getTotalSupply = async (address: string): Promise<string> => {
  const token = erc20(address)
  return (await token.totalSupply()).div(BigNumber.from(10).pow(18)).toString()
  const totalSupply = await token.totalSupply()
  return String(totalSupply.div(BigNumber.from(10).pow(18)).toNumber() + totalSupply.mod(BigNumber.from(10).pow(18)).div(BigNumber.from(10).pow(10)).toNumber() / 1e8)
}
