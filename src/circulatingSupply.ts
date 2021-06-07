import { APIGatewayProxyHandler } from 'aws-lambda'
import { erc20 } from './_contracts'
import { OK, ServerError } from './_response'
import { BigNumber } from 'ethers'

export const handler: APIGatewayProxyHandler = async () => {
  try {
    return OK(await getCirculatingSupply(process.env.tokenAddress as string, process.env.ownerAddress as string))
  } catch (error) {
    return ServerError(error.message)
  }
}

const getCirculatingSupply = async (address: string, ownerAddress: string): Promise<string> => {
  const token = erc20(address)
  const circulatingSupply = (await token.totalSupply()).sub(await token.balanceOf(ownerAddress))
  return String(circulatingSupply.div(BigNumber.from(10).pow(18)).toNumber() + circulatingSupply.mod(BigNumber.from(10).pow(18)).div(BigNumber.from(10).pow(10)).toNumber() / 1e8)
}
