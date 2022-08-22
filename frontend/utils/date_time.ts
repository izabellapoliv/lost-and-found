import Moment from 'moment';

export const parseDateLocale = (dateObject?: Date) => Moment(dateObject).format('DD/MM/YYYY')
