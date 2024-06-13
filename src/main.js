import { version } from '../package.json';
import { weekday, symbol, line, quarter, month_abb, month_en, month_ch } from './static.json';
import funny from './funny.json'
import { zeroize, isMonth } from './utils';
const DATE = new Date()
// 获取当前日期格式 2024/06/12
let date = DATE.toLocaleDateString()
class v_ttc {
    constructor() {
        this.date = date;
        this.symbol = symbol;
        console.log('version ' + version);
    }

    /******************************************/

    /**
     * 获取当前时间
     * current time
     * @returns 2024/6/12 14:16:19
     */
    ct() {
        return DATE.toLocaleString()
    }

    /**
     * 获取当前时间并补0
     * current time zero
     * @returns 
     */
    ctz() {
        const dt = DATE.toLocaleString().split(' ')
        const d = dt[0].split(symbol).map(val => val.padStart(2, '0')).join(symbol)
        const t = dt[1]
        return `${d} ${t}`
    }

    /**
     * 获取当前时间 - 拼接时间
     * current time connector
     * @returns 2024-6-12 14:16:19
     */
    ctc() {
        const dt = DATE.toLocaleString().split(' ')
        const d = dt[0].split(symbol).join(line)
        const t = dt[1]
        return `${d} ${t}`
    }

    /**
     * 获取当前时间 - 拼接时间 并 补0
     * current time connector zero
     * @returns 
     */
    ctcz() {
        const dt = DATE.toLocaleString().split(' ')
        const d = dt[0].split(symbol).map(val => val.padStart(2, '0')).join(line)
        const t = dt[1]
        return `${d} ${t}`
    }

    /******************************************/
    /**
     * 日期标识符转换 
     * Date identifier conversion
     * @param {String} date 
     * @param {String} symbol 
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
     * @param {String} type 
     * @param {Boolean} sup 
     * @returns 1718162711647 ==> 2024-06-12 11:25:11
     */
    tm(timestamp, type, sup) {
        if (typeof timestamp === 'object') {
            if (timestamp === undefined) {
                timestamp = DATE.toLocaleString()
            } else {
                timestamp = timestamp.toLocaleString()
            }
        } else {
            try {
                timestamp = new Date(Number(DATE)).toLocaleString()
            } catch (error) {
                throw new Error(error)
            }
        }

        let datetime = null

        switch (type) {
            case 'date':
                // 只要日期
                if (sup) {
                    datetime = timestamp.split(" ")[0].split(symbol).map(val => val.padStart(2, '0')).join(symbol);
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
                    datetime = timestamp.split(symbol).map(val => val.padStart(2, '0')).join(symbol);
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
     * @param {String | undefined} date 
     * @returns Array
     */
    lw(date) {
        let dates = [];
        const today = new Date(date || new Date());
        const lastWeekStart = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() - 7 + 1);

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
     * @param {String | undefined} date 
     * @returns Array
     */
    nw(date) {
        let dates = [];
        const today = new Date(date || new Date());
        const nextWeekStart = new Date(today.getFullYear(), today.getMonth(), today.getDate() + (7 - today.getDay() + 1));

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
        const y = DATE.getFullYear()
        const oneJan = new Date(y, 0, 1);
        const numberOfDays = Math.floor((d - oneJan) / (24 * 60 * 60 * 1000)) + 1;
        const result = Math.ceil(numberOfDays / 7);
        return result;
    }

    /**
     * 获取今年的天数
     * Number of days this year
     * @param {Number | String | undefined} year 
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
            date = DATE
        } else {
            date = new Date(date)
        }
        return `星期${weekday[date.getDay()]}`
    }

    /**
     * 有趣的事情
     * @param {String | Number} year 
     * @returns Array
     */
    funny(year) {
        return funny[year]
    }

    /**
     * 获取当月的天
     * Day of the month
     * @param {String | Number | undefined} month  
     * @returns Array
     */
    cmod(month) {
        if (!isMonth(month)) {
            throw new Error("Month error")
        }
        const _d = new Date()
        const days = []
        try {
            month = Number(month || DATE.getMonth())
            _d.setMonth(month)
        } catch (error) {
            throw new Error(error)
        }
        const dayTotal = Number(new Date(_d.setDate(0)).toLocaleDateString().split(symbol).pop())
        for (let i = 1; i <= dayTotal; i++) {
            days.push(i)
        }
        return days || []
    }

    /**
     * 指定月份日历表
     * Month/day/week/year/month/day
     * @param {String | Number} month  
     * @returns Array
     */
    cmdw(month) {
        if (!isMonth(month)) {
            throw new Error("Month error")
        }
        const _d = new Date()
        const days = []
        try {
            month = Number(month)
            _d.setMonth(month)
        } catch (error) {
            throw new Error(error)
        }
        const dayTotal = Number(new Date(_d.setDate(0)).toLocaleDateString().split(symbol).pop())
        for (let i = 1; i <= dayTotal; i++) {
            let date = `${DATE.getFullYear()}-${zeroize(month)}-${zeroize(i)}`
            days.push({
                day: i,
                active: +i === +new Date().getDate(),
                week: `星期${weekday[new Date(date).getDay()]}`,
                month: month,
                month_abb: month_abb[month - 1],
                month_ch: month_ch[month - 1],
                month_en: month_en[month - 1],
                date: date
            })
        }
        return days || []
    }

    /**
     * 获取当前季度
     * quarter
     * @returns String
     */
    qua() {
        switch (Number(DATE.getMonth())) {
            case 0:
            case 1:
            case 2:
                return quarter[0]

            case 3:
            case 4:
            case 5:
                return quarter[1]

            case 6:
            case 7:
            case 8:
                return quarter[2]

            case 9:
            case 10:
            case 11:
                return quarter[3]
            default:
                break;
        }
    }

}
export default new v_ttc();