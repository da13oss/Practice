import chalk from 'chalk';
import { formatISODate, formatRelativeTime, formatFullDate, formatShortDate } from './utils/formatDate.js';

const dates = [
    '2023-01-01T12:34:56Z',
    '2024-05-15T08:22:33Z',
    '2022-11-30T14:45:00Z',
    '2021-07-20T19:30:00Z',
    '2020-03-10T10:15:00Z'
];

dates.forEach(date => {
    console.log(chalk.blue(`ISO Date: ${date}`));
    console.log(chalk.green(`Formatted Date: ${formatISODate(date)}`));
    console.log(chalk.yellow(`Relative Time: ${formatRelativeTime(date)}`));
    console.log(chalk.magenta(`Full Date: ${formatFullDate(date)}`));
    console.log(chalk.cyan(`Short Date: ${formatShortDate(date)}`));
    console.log('-----------------------------------');
});
