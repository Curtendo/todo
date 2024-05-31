import { v4 as uuidv4 } from 'uuid';
import { addDays, isWithinInterval, parse, startOfDay } from 'date-fns';

export function generateUniqueId() {
    return uuidv4();
}

export function makeNewDate(dateString) {
    console.log({dateString});
    if (dateString) {
        if (dateString.length == 10) {
            const parsedDate = parse(dateString, 'yyyy-MM-dd', new Date());
            return startOfDay(parsedDate);
        } else {
            return startOfDay(new Date(dateString));
        }
    } else {
        return startOfDay(new Date());
    }
}

export function makeFutureDate(daysToAdd) {
    const currentDate = makeNewDate();
    const futureDate = addDays(currentDate, daysToAdd);
    return futureDate;
}

export function isWithinOneWeek(currentDate, oneWeekLater, dueDate) {
    return isWithinInterval(dueDate, {
        start: currentDate,
        end: oneWeekLater
    })
}

export function isDate(dueDate) {
    return dueDate instanceof Date && !isNaN(dueDate);
}