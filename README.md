# 时间转换工具

- （全称）时间转换工具 - tcon time converter
- author: Vinca
- mailbox: 237690966@qq.com
- UpdateTime: 2024/6/13 15:29:18

## 安装

```sh
npm install v_ttc
```

## 引用

```javascript
import v from "v_ttc";
```

## 调用

#### 获取当前时间

```javascript
v.ct();
```

```console
2024/6/13 14:46:32
```

#### 获取当前时间并补 0

```javascript
v.ctz();
```

```console
2024/06/13 14:46:32
```

#### 获取当前时间-拼接时间

```javascript
v.ctc();
```

```console
2024-6-13 15:00:34
```

#### 获取当前时间-拼接时间并补 0

```javascript
v.ctcz();
```

```console
2024-06-13 15:00:34
```

#### 日期标识符转换

```javascript
/*
 * @param {String} date
 * @param {String} symbol
 * @example v.dic(date, symbol);
 */
v.dic("2024-01-01", "-");
```

```console
2024-01-01
```

#### 时间戳转换成日期时间

```javascript
/*
 * @param {*} timestamp
 * @param {String} type
 * @param {Boolean} sup
 * @example v.tm(timestamp, type, sup);
 */
v.tm();
v.tm(new Date(), "date");
v.tm(new Date(), "time");
v.tm(new Date(), "date", true);
v.tm(new Date(), "", true);
v.tm(1718163186898, "time");
v.tm("1718163186898", "time");
v.tm("1718163186898", "date", true);
```

```console
2024/6/13 15:03:46
2024/6/13
15:03:46
2024/06/13
2024/06/13 15:03:46
15:03:46
15:03:46
2024/06/13
```

#### 获取上一周日期

```javascript
/*
 * @param {String | undefined} date
 * @returns Array
 */
v.lw("2024-6-13");

v.lw();
```

```console
[
  "2024/06/03",
  "2024/06/04",
  "2024/06/05",
  "2024/06/06",
  "2024/06/07",
  "2024/06/08",
  "2024/06/09"
]
```

#### 获取下一周日期

```javascript
/*
 * @param {String | undefined} date
 * @returns Array
 */
v.nw("2024-6-13");

v.nw();
```

```console
[
  "2024/06/17",
  "2024/06/18",
  "2024/06/19",
  "2024/06/20",
  "2024/06/21",
  "2024/06/22",
  "2024/06/23"
]
```

#### 获取当前周

```javascript
/*
 * @param {*} date
 * @returns number
 */
v.cw("2024-6-13");

v.cw();
```

```console
24
```

#### 获取今年的天数

```javascript
/*
 * @param {Number | String | undefined} year
 * @returns number
 */
v.yd("2000");
v.yd(2023);
v.yd();
```

```console
366
365
366
```

#### 获取当前星期几

```javascript
/*
 * @param {*} date
 * @returns number
 */
v.cdw();
v.cdw(new Date());
v.cdw("2024-6-1");
```

```console
星期四
星期四
星期六
```

#### 有趣的事情

```javascript
/*
 * @param {String | Number} year
 * @returns Array
 */
v.funny(2019);

v.funny("2019");
```

```console
[
  "2019年新冠肺炎疫情爆发",
  "时间：2019年底至2020年初",
  "地点：全国各地",
  "人物：患者、医护人员、政府官员",
  "要素：传染病、防控、医疗资源",
  "事情：新型冠状病毒引发的疫情在中国全国范围内迅速蔓延，造成大量感染和死亡病例。",
  "结果：政府采取了一系列严厉的防控措施，包括封城、隔离、大规模检测等，最终有效控制了疫情的传播。"
]
```

#### 获取当月的天

```javascript
/*
 * @param {String | Number | undefined} month
 * @returns Array
 */
v.cmod();

v.cmod("5");

v.cmod(1);
```

```console
// undefined
 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

// '5'
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

// 1
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
```

#### 指定月份日历表

```javascript
/*
 * @param {String | Number} month
 * @returns Array
 */
v.cmdw(6);

v.cmdw("6");
```

```console
[
    {
        "day": 1,
        "active": false,
        "week": "星期六",
        "month": 6,
        "month_abb": "Jun.",
        "month_ch": "六月",
        "month_en": "June",
        "date": "2024-06-01"
    },
    {
        "day": 2,
        "active": false,
        "week": "星期日",
        "month": 6,
        "month_abb": "Jun.",
        "month_ch": "六月",
        "month_en": "June",
        "date": "2024-06-02"
    },
    {
        "day": 3,
        "active": false,
        "week": "星期一",
        "month": 6,
        "month_abb": "Jun.",
        "month_ch": "六月",
        "month_en": "June",
        "date": "2024-06-03"
    },
    {
        "day": 4,
        "active": false,
        "week": "星期二",
        "month": 6,
        "month_abb": "Jun.",
        "month_ch": "六月",
        "month_en": "June",
        "date": "2024-06-04"
    },
    {
        "day": 5,
        "active": false,
        "week": "星期三",
        "month": 6,
        "month_abb": "Jun.",
        "month_ch": "六月",
        "month_en": "June",
        "date": "2024-06-05"
    },
    {
        "day": 6,
        "active": false,
        "week": "星期四",
        "month": 6,
        "month_abb": "Jun.",
        "month_ch": "六月",
        "month_en": "June",
        "date": "2024-06-06"
    },
    {
        "day": 7,
        "active": false,
        "week": "星期五",
        "month": 6,
        "month_abb": "Jun.",
        "month_ch": "六月",
        "month_en": "June",
        "date": "2024-06-07"
    },
    {
        "day": 8,
        "active": false,
        "week": "星期六",
        "month": 6,
        "month_abb": "Jun.",
        "month_ch": "六月",
        "month_en": "June",
        "date": "2024-06-08"
    },
    {
        "day": 9,
        "active": false,
        "week": "星期日",
        "month": 6,
        "month_abb": "Jun.",
        "month_ch": "六月",
        "month_en": "June",
        "date": "2024-06-09"
    },
    {
        "day": 10,
        "active": false,
        "week": "星期一",
        "month": 6,
        "month_abb": "Jun.",
        "month_ch": "六月",
        "month_en": "June",
        "date": "2024-06-10"
    },
    {
        "day": 11,
        "active": false,
        "week": "星期二",
        "month": 6,
        "month_abb": "Jun.",
        "month_ch": "六月",
        "month_en": "June",
        "date": "2024-06-11"
    },
    {
        "day": 12,
        "active": false,
        "week": "星期三",
        "month": 6,
        "month_abb": "Jun.",
        "month_ch": "六月",
        "month_en": "June",
        "date": "2024-06-12"
    },
    {
        "day": 13,
        "active": true,
        "week": "星期四",
        "month": 6,
        "month_abb": "Jun.",
        "month_ch": "六月",
        "month_en": "June",
        "date": "2024-06-13"
    },
    {
        "day": 14,
        "active": false,
        "week": "星期五",
        "month": 6,
        "month_abb": "Jun.",
        "month_ch": "六月",
        "month_en": "June",
        "date": "2024-06-14"
    },
    {
        "day": 15,
        "active": false,
        "week": "星期六",
        "month": 6,
        "month_abb": "Jun.",
        "month_ch": "六月",
        "month_en": "June",
        "date": "2024-06-15"
    },
    {
        "day": 16,
        "active": false,
        "week": "星期日",
        "month": 6,
        "month_abb": "Jun.",
        "month_ch": "六月",
        "month_en": "June",
        "date": "2024-06-16"
    },
    {
        "day": 17,
        "active": false,
        "week": "星期一",
        "month": 6,
        "month_abb": "Jun.",
        "month_ch": "六月",
        "month_en": "June",
        "date": "2024-06-17"
    },
    {
        "day": 18,
        "active": false,
        "week": "星期二",
        "month": 6,
        "month_abb": "Jun.",
        "month_ch": "六月",
        "month_en": "June",
        "date": "2024-06-18"
    },
    {
        "day": 19,
        "active": false,
        "week": "星期三",
        "month": 6,
        "month_abb": "Jun.",
        "month_ch": "六月",
        "month_en": "June",
        "date": "2024-06-19"
    },
    {
        "day": 20,
        "active": false,
        "week": "星期四",
        "month": 6,
        "month_abb": "Jun.",
        "month_ch": "六月",
        "month_en": "June",
        "date": "2024-06-20"
    },
    {
        "day": 21,
        "active": false,
        "week": "星期五",
        "month": 6,
        "month_abb": "Jun.",
        "month_ch": "六月",
        "month_en": "June",
        "date": "2024-06-21"
    },
    {
        "day": 22,
        "active": false,
        "week": "星期六",
        "month": 6,
        "month_abb": "Jun.",
        "month_ch": "六月",
        "month_en": "June",
        "date": "2024-06-22"
    },
    {
        "day": 23,
        "active": false,
        "week": "星期日",
        "month": 6,
        "month_abb": "Jun.",
        "month_ch": "六月",
        "month_en": "June",
        "date": "2024-06-23"
    },
    {
        "day": 24,
        "active": false,
        "week": "星期一",
        "month": 6,
        "month_abb": "Jun.",
        "month_ch": "六月",
        "month_en": "June",
        "date": "2024-06-24"
    },
    {
        "day": 25,
        "active": false,
        "week": "星期二",
        "month": 6,
        "month_abb": "Jun.",
        "month_ch": "六月",
        "month_en": "June",
        "date": "2024-06-25"
    },
    {
        "day": 26,
        "active": false,
        "week": "星期三",
        "month": 6,
        "month_abb": "Jun.",
        "month_ch": "六月",
        "month_en": "June",
        "date": "2024-06-26"
    },
    {
        "day": 27,
        "active": false,
        "week": "星期四",
        "month": 6,
        "month_abb": "Jun.",
        "month_ch": "六月",
        "month_en": "June",
        "date": "2024-06-27"
    },
    {
        "day": 28,
        "active": false,
        "week": "星期五",
        "month": 6,
        "month_abb": "Jun.",
        "month_ch": "六月",
        "month_en": "June",
        "date": "2024-06-28"
    },
    {
        "day": 29,
        "active": false,
        "week": "星期六",
        "month": 6,
        "month_abb": "Jun.",
        "month_ch": "六月",
        "month_en": "June",
        "date": "2024-06-29"
    },
    {
        "day": 30,
        "active": false,
        "week": "星期日",
        "month": 6,
        "month_abb": "Jun.",
        "month_ch": "六月",
        "month_en": "June",
        "date": "2024-06-30"
    }
]
```

#### 获取当前季度

```javascript
/*
 * @returns String
 */
v.qua();
```

```console
{
    "month": [ 4, 5, 6 ],
    "index": 1,
    "quarter": "第二季度"
}
```
