import { APIGatewayProxyResult } from 'aws-lambda'

export const OK = (body: string): APIGatewayProxyResult => {
  return {
    statusCode: 200,
    body: body,
    headers: {
      'content-type': 'text/plain'
    }
  }
}

export const BadRequest = (message: string): APIGatewayProxyResult => {
  return {
    statusCode: 400,
    body: message,
    headers: {
      'content-type': 'text/plain'
    }
  }
}

export const ServerError = (message: string): APIGatewayProxyResult => {
  return {
    statusCode: 500,
    body: message,
    headers: {
      'content-type': 'text/plain'
    }
  }
}
