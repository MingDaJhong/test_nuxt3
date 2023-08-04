export default defineNuxtPlugin(() => {
  const handleResize = () => {
    console.log(window.innerWidth)
  }
  return {
    provide: {
      setResizeListener: () => {
        window.addEventListener('resize', handleResize)
      },
      removeResizeListener: () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }
})