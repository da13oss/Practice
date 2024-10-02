import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime.js'; // Ensure the correct path is used
dayjs.extend(relativeTime);

export function formatISODate(isoDate) {
    return dayjs(isoDate).format('MMMM D, YYYY, h:mm:ss A [UTC]');
}

export function formatRelativeTime(isoDate) {
    return dayjs(isoDate).fromNow();
}

export function formatFullDate(isoDate) {
    return dayjs(isoDate).format('dddd, MMMM D, YYYY');
}

export function formatShortDate(isoDate) {
    return dayjs(isoDate).format('MM/DD/YYYY');
}
