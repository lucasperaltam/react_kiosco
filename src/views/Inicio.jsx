import useSWR from 'swr'
import Producto from "../components/Producto"
//import { productos as productosPorCategoria } from '../data/productos'
import useKiosco from "../hooks/useKiosco"
import clienteAxios from '../config/axios';

export default function Inicio() {

	const {categoriaActual} = useKiosco()

	//Consulta SWR
	const fetcher = () => clienteAxios('/api/productos').then(data => data.data)
	const {data, error, isLoading} = useSWR('/api/productos', fetcher, {
		refreshInterval: 3000
	})
	
	if (isLoading) return "Cargando...";
	console.log(data)
	console.log(error)
	//console.log(isLoading)
	const productos = data.data.filter(producto => producto.categoria_id === categoriaActual.id)

	return (
		<>
			<h1 className="text-4xl font-black">{categoriaActual.nombre}</h1>
			<p className="text-2xl my-10">Personaliza tu pedido a continuación</p>
			<div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
				{productos.map(producto => (
					<Producto 
						key={producto.id}
						producto={producto}
					/>
				))}
			</div>
		</>
	)
}
