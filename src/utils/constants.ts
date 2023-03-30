export const HOST = 'https://api.apilayer.com/exchangerates_data/';
export const API_KEY = 'w8ec3MdnFA4kGdS4lI1IrCw6RWWkLDB6';

export enum RequestEndpoints{
    CONVERT = 'convert',
    CURRENCY_RATES = 'latest',
    CURRENCY_LIST = 'symbols',
}

export enum AppRoutes{
    FORM_CONVERTER = '/form',
    TABLE_RATES = '/rates'
}

export enum RequestStatusValue{
    PENDING = 'pending',
    FULFILLED = 'fulfilled',
    REJECTED = 'rejected',
}

export const enum ErrorsText{
    CONVERT = 'Что-то пошло не так, и конвертирование не прошло успешно :('
}

export enum Text{
    TITLE_CONVERT = "Введите в текстовое поле строку в формате количество_единиц_переводимой_валюты текущая_валюта in нужная_валюта",
    TITLE_RATES = "Здесь вы можете увидеть валюту относительно выбранной вами"
}