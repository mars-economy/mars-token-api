import { ethers } from 'ethers'
import { ERC20__factory } from '../typechain/factories/ERC20__factory'
import { ERC20 } from '../typechain/ERC20'

const provider = new ethers.providers.JsonRpcProvider(process.env.jsonRpcProvider)
export const erc20 = (address: string): ERC20 => ERC20__factory.connect(address, provider)
