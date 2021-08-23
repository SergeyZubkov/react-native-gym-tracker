export const toMinSec = sec => {
    const m = Math.floor(sec / 60)
    const s = sec - (m * 60)

    return `${m}m ${s}s`
}