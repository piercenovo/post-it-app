import dayjs from 'dayjs'
import 'dayjs/locale/es'

dayjs.locale('es')

export default function parseDate (fecha: string) {
  const parsedDate = dayjs(fecha, { utc: true })
  return parsedDate.format('DD/MM/YY H:mm:ss')
}
