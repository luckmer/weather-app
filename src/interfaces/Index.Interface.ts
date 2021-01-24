export interface RootState {
    DisplayData: {
        cod: string
        message: string
    }
}

export interface RootData {
    container: {
        filter: string
    }
}

export interface RootWeather {
    DisplayForeCast: {
        dailyData: (string | number)[];
        dailyHours: (string | number)[];
    }
}

export interface DataSliceInterface{
    container : string
    DisplayData : string
    DisplayForeCast : string
    Filter : string
}

export interface IRootState {
    container: string;
    DisplayData:string;
    DisplayForeCast: string;
    Filter: string;
}