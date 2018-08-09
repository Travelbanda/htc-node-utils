export const protectedEnv = (key: string) => {
    const val = process.env[key]
    if (!val) {
        throw new Error(`${key} is not provided`)
    }
    return val
}
