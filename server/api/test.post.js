export default defineEventHandler(async event => {
  const body = await readBody(event)

  const response = {
    result: false,
    data: {
      content: 'please check your payload!!!'
    }
  }

  if (body?.userName) {
    response.result = true
    response.data.content = `Hello ${body?.userName}`
  }

  return response
})
