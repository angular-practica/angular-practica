
export interface DataUsuario {
  success: boolean,
  data: Usuario[],
  data_total: number
}

export interface Usuario {
  name: string,
  lastname: string,
  year: string,
  dni: string,
  createdAt: string,
  updatedAt: string,
  _id: string
}
