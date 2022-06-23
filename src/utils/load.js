export default async (loadHandler, errorHandler) => {
  try {
    return await loadHandler()
  } catch (e) {
    return errorHandler(e)
  }
}
