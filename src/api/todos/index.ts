import { bffAxiosJP } from '../index';

export type TTodo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

const todosAPI = {
  getTodo: (id: number) => bffAxiosJP.get<TTodo>(`/todos/${id}`),
};

export default todosAPI;
