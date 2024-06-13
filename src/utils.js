// 个位数补零
export const zeroize = (value) => {
    if (isNaN(value)) {
        throw new Error(`Invalid value`);
    } else if (!Number.isSafeInteger(value)) {
        throw new Error(`Invalid value`)
    }

    return String(value).padStart(2, '0');
}

// 是否为1~12月
export const isMonth = (month) => {
    if (month === undefined) {
        return true
    } else if (isNaN(month) && month !== undefined) {
        throw new Error('This is not a monthly figure')
    } else if ((month < 1 || month > 12) && month !== undefined) {
        return false
    } else {
        return true
    }
}