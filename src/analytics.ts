function createAnalytic (): object {
    let counter = 0
    let destroy: boolean = false

    const listener = (): number => counter++

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

window['analytic'] = createAnalytic()