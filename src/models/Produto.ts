import Categoria from './Categoria'

interface Produto{
    id: number;
    nome: string;
    categoria?: Categoria| null
}

export default Produto;