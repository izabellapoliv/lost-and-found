export type Item = {
  id: string,
  title: string,
  date_found: Date,
  is_delivered: boolean,
  owner?: string,
  date_delivered?: Date,
  picture?: string,
}
