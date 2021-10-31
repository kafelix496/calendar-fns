![](https://badgen.net/npm/v/@share-code/calendar-fns)
![](https://badgen.net/bundlephobia/minzip/@share-code/calendar-fns)
![](https://badgen.net/npm/dm/@share-code/calendar-fns)
![](https://badgen.net/npm/dt/@share-code/calendar-fns)
![](https://img.shields.io/badge/license-MIT-blue.svg)

# calendar-fns

functions for calendar

## Install

```zsh
npm install @share-code/calendar-fns
```

## Functions

#### isLeapYear

Check leap year

```typescript
isLeapYear = (year: number) => boolean
```

#### getAnchorDay

Get anchor day, There are only four case

```typescript
getAnchorDay = (year: number) => 2 | 0 | 5 | 3
```

#### getDoomsDayAlgorithm

Get the dooms day value using dooms day algorithm

```typescript
getDoomsDayAlgorithm = (year: number) => number
```

#### getDoomsDay

Get Dooms day of specific month

```typescript
getDoomsDay = (month: number, year: number) => { day: number, daysOfTheWeek: number }
```

#### getDayOfWeek

Get day of the week

0: Sunday

1: Monday

2: Tuesday

3: Wednesday

4: Thursday

5: Friday

6: Saturday

```typescript
getDayOfWeek = (day: number, month: number, year: number) =>
  0 | 1 | 2 | 3 | 4 | 5 | 6
```

#### getDaysLengthOfMonth

Get length of the month

Possible case : 28, 29, 30, 31

```typescript
getDaysLengthOfMonth = (month: number, year: number) => 28 | 29 | 30 | 31
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
