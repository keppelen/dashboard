import * as moment from 'moment'
import { ISO8601 } from './constants'

export function isValidUrl (str: string): boolean {
  const pattern = new RegExp(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g) // tslint:disable-line
  return pattern.test(str)
}

export function isValidDateTime (dateTime: string): boolean {
  // returns whether the string conforms to ISO8601
  // the strict format is '2016-05-19T17:09:24.123Z' but we also accept simpler versions like '2016'
  return moment.utc(dateTime, ISO8601).isValid()
}

export function isValidEnum (value: string): boolean {
  return /^[_a-zA-Z][_a-zA-Z0-9]*$/.test(value)
}
