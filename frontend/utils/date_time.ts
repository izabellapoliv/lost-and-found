import Moment from 'moment';

export const parseDateLocale = (dateObject?: Date) => Moment(dateObject).format('DD/MM/YYYY')

export const parseDateUniversal = (dateObject?: Date) => Moment(dateObject).format('YYYY-MM-DD')

export const convertStringToObject = (str: string, format: string) => Moment(str, format).toDate()

export const getCurrentDate = () => Moment().toDate()
