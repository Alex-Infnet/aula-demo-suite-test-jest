export const ValidPassword = (value : string | null) : boolean => {
    if (value === null) {
        return false
    }
    if (value.length < 6) {
        return false
    }
    var regexRule = new RegExp("[0-9]")
    if (!regexRule.exec(value)) {
        return false
    }
    return true
}