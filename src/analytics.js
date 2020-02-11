function createAnalytic () {
    let counter = 0
    let destroy = false

    const listener = () => counter++

    document.addEventListener('click', listener)

    return {
        destroy () {
            document.addEventListener('click', listener)
            destroy = true
        },
        getClick () {
            if (destroy) {
                return `Analytic is destroy, total clicks = ${counter}`
            }
            return counter
        }
    }
}

window.analytic = createAnalytic()