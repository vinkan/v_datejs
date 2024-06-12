const d = new Date()
// 获取当前日期格式 2024/06/12
let date = d.toLocaleDateString()
// 分隔标识符
let symbol = '/'
// 星期几枚举
const weekday = [
    '日', '一', '二', '三', '四', '五', '六'
]
class v_ttc {
    constructor() {
        this.date = date;
        this.symbol = symbol;
    }

    /******************************************/

    /**
     * 获取当前时间
     * current time
     * @returns 2024/6/12 14:16:19
     */
    ct() {
        return d.toLocaleString()
    }

    /**
     * 获取当前时间并补0
     * current time zero
     * @returns 
     */
    ctz() {
        const dt = d.toLocaleString().split(' ')
        const d = dt[0].split('/').map(val => val.padStart(2, '0')).join('/')
        const t = dt[1]
        return `${d} ${t}`
    }

    /**
     * 获取当前时间 - 拼接时间
     * current time connector
     * @returns 2024-6-12 14:16:19
     */
    ctc() {
        const dt = d.toLocaleString().split(' ')
        const d = dt[0].split('/').join('-')
        const t = dt[1]
        return `${d} ${t}`
    }

    /**
     * 获取当前时间 - 拼接时间 并 补0
     * current time connector zero
     * @returns 
     */
    ctcz() {
        const dt = d.toLocaleString().split(' ')
        const d = dt[0].split('/').map(val => val.padStart(2, '0')).join('-')
        const t = dt[1]
        return `${d} ${t}`
    }

    /******************************************/
    /**
     * 日期标识符转换 
     * Date identifier conversion
     * @param {*} date 
     * @param {*} symbol 
     * @returns 2024-06-12 ==> 2024/06/12
     */
    dic(date, symbol) {
        if (date === undefined) {
            throw new Error('Invalid date')
        }
        if (symbol === undefined) {
            symbol = this.symbol
        }
        const regex = new RegExp(/^(\d{4})-(\d{2})-(\d{2})$/);
        const formattedDate = date.replace(regex, `$1${symbol}$2${symbol}$3`);
        return formattedDate;
    }

    /**
     * 时间戳转换成日期时间
     * Time misalignment
     * @param {*} timestamp 
     * @param {*} type 
     * @param {*} sup 
     * @returns 1718162711647 ==> 2024-06-12 11:25:11
     */
    tm(timestamp, type, sup) {
        if (typeof timestamp === 'object') {
            if (timestamp === undefined) {
                timestamp = d.toLocaleString()
            } else {
                timestamp = timestamp.toLocaleString()
            }
        } else {
            try {
                timestamp = new Date(Number(d)).toLocaleString()
            } catch (error) {
                throw new Error(error)
            }
        }

        let datetime = null

        switch (type) {
            case 'date':
                // 只要日期
                if (sup) {
                    datetime = timestamp.split(" ")[0].split('/').map(val => val.padStart(2, '0')).join('/');
                } else {
                    datetime = timestamp.split(" ")[0]
                }
                break;
            case 'time':
                // 只要时间
                datetime = timestamp.split(" ")[1]
                break;
            default:
                if (sup) {
                    datetime = timestamp.split('/').map(val => val.padStart(2, '0')).join('/');
                } else {
                    datetime = timestamp
                }
                break;
        }

        return datetime
    }

    /**
     * 获取上一周日期
     * the last week
     * @param {*} date 
     * @returns Array
     */
    lw(date) {
        let dates = [];
        const today = new Date(date || new Date());
        const lastWeekStart = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getUTCDay() - 7 + 1);

        for (let i = 0; i < 7; i++) {
            const date = new Date(lastWeekStart.getFullYear(), lastWeekStart.getMonth(), lastWeekStart.getDate() + i);
            const formattedDate = `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')}`;
            dates.push(formattedDate);
        }

        return dates;
    }

    /**
     * 获取下一周日期
     * next week
     * @param {*} date 
     * @returns Array
     */
    nw(date) {
        let dates = [];
        const today = new Date(date || new Date());
        const nextWeekStart = new Date(today.getFullYear(), today.getMonth(), today.getDate() + (7 - today.getUTCDay() + 1));

        for (let i = 0; i < 7; i++) {
            const date = new Date(nextWeekStart.getFullYear(), nextWeekStart.getMonth(), nextWeekStart.getDate() + i);
            const formattedDate = `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')}`;
            dates.push(formattedDate);
        }

        return dates;
    }

    /**
     * 获取当前周
     * Current week
     * @param {*} date 
     * @returns number
     */
    cw(date) {
        const d = new Date(date || new Date())
        const y = d.getFullYear()
        const oneJan = new Date(y, 0, 1);
        const numberOfDays = Math.floor((d - oneJan) / (24 * 60 * 60 * 1000)) + 1;
        const result = Math.ceil(numberOfDays / 7);
        return result;
    }

    /**
     * 获取今年的天数
     * Number of days this year
     * @param {*} year 
     * @returns number
     */
    yd(year) {
        if (!year) {
            year = new Date().getFullYear()
        }
        const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
        return isLeapYear ? 366 : 365;
    }

    /**
     * 获取当前星期几
     * Current day of the week
     * @param {*} date 
     * @returns 
     */
    cdw(date) {
        if (date === undefined) {
            date = d
        } else {
            date = new Date(date)
        }
        return `星期${weekday[date.getDay()]}`
    }

}
export default new v_ttc();