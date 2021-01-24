export interface FilterProps {
    data: (string | number|any)[];
    dailyHours: (string | number)[];
    displayCurrentDay: string; 
}

export interface FinderHook {
    filterDay: string;
    filterSubject: string;
}

export interface FillData {
    currentDay: (string | number|any)[],
    filterWeek: (string | number|any)[]
}