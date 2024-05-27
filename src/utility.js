import { v4 as uuidv4 } from 'uuid';
import { addDays, isToday, isWithinInterval, parse, startOfDay } from 'date-fns';

export function generateUniqueId() {
    return uuidv4();
}

export function makeNewDate(dateString) {
    if (dateString) {
        const parsedDate = parse(dateString, 'yyyy-MM-dd', new Date());
        return startOfDay(parsedDate);
    } else {
        return startOfDay(new Date());
    }
}

export function makeFutureDate(daysToAdd) {
    const currentDate = makeNewDate();
    const futureDate = addDays(currentDate, daysToAdd);
    return futureDate;
}

export function isWithinOneWeek(dueDate) {
    const currentDate = makeNewDate();
    const oneWeekLater = makeFutureDate(7);
    return isWithinInterval(dueDate, {
        currentDate,
        oneWeekLater
    })
}

export function isWithinToday(dueDate) {
    return isToday(dueDate);
}
