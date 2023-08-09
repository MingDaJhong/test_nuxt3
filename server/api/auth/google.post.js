import { OAuth2Client } from 'google-auth-library'

export default defineEventHandler(async event => {
  const response = {
    result: false,
    errorMessage: '',
    data: {
      code: 0
    }
  }
  const body = await readBody(event)
  const oauth2Client = new OAuth2Client()

  oauth2Client.setCredentials({ access_token: body.accessToken })

  const userInfo = await oauth2Client
    .request({
      url: 'https://www.googleapis.com/oauth2/v3/userinfo'
    })
    .then(response => response.data)
    .catch(() => null)

  oauth2Client.revokeCredentials()

  if (!userInfo) {
    // throw createError({
    //   statusCode: 400,
    //   statusMessage: 'Invalid token'
    // })
    response.errorMessage = 'Invalid token'
    response.data.code = 400
  }

  response.data.userInfo = userInfo

  return response
})
