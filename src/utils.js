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


// 定义颜色
export const typeColor = (type = "default") => {
    let color = "";
    switch (type) {
        case "default":
            color = "#35495E";
            break;
        case "primary":
            color = "#3488ff";
            break;
        case "success":
            color = "#43B883";
            break;
        case "warning":
            color = "#e6a23c";
            break;
        case "danger":
            color = "#f56c6c";
            break;
        default:
            break;
    }
    return color;
};

// 胶囊
export const capsule = (title, info, type = "default") => {
    console.log(
        `%c ${title} %c ${info} %c`,
        "background:#35495E; padding: 2px 2px; line-height: 18px; font-size:12px; border-radius: 3px 0 0 3px; color: #fff;",
        `background:${typeColor(type)}; padding: 2px 2px; line-height: 18px; font-size:12px; border-radius: 0 3px 3px 0;  color: #fff;`,
        "background:transparent"
    );
};


// 输入的不是一个日期格式
export const isDate = (date) => {
    date = date ? new Date(date) : new Date(Date.now())
    if (isNaN(date)) {
        throw new Error("Date error")
    } else {
        return date
    }
}