export default defineNuxtPlugin(() => {
const hey = () => {
    console.log('out side call')
}
return {
    provide: {
        hello: (word) => {
            console.log('Hello', word)
            hey()
        },
        apiHandle: (response) => {
            console.log('api handle', response)
        }
    }
}
})
