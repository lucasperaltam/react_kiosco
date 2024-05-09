import useKiosco from "../hooks/useKiosco"
import { formatearDinero } from "../helpers"
import ResumenProducto from "./ResumenProducto";

export default function Resumen() {

	const {pedido, total} = useKiosco();

	const comprobarPedido = () => pedido.length === 0;

	return (
		<aside className="w-72 h-screen overflow-y-auto p-5">
			<h1 className="text-4xl font-black">
				Mi pedido
			</h1>
			<p className="text-lg my-5">
				Aquí podrás ver el resumen de tu pedido
			</p>
			<div className="py-10">
				{pedido.length === 0 ? (
					//si se cumple
					<p className="text-2xl text-center">
						Cuando agregues productos a tu pedido, los verás aquí.
					</p>
				) : ( //else
					pedido.map(producto => (
						<ResumenProducto 
							key={producto.id}
							producto = {producto}
						/>
					))
				)}
			</div>
			<p className="text-xl mt-10">
				Total: {formatearDinero(total)}
			</p>

			<form className="w-full">
				<div className="mt-5">
					<input 
						type="submit"
						className={`${comprobarPedido() ? 'bg-gray-200 text-gray-400 cursor-default' : 'bg-lime-600 hover:bg-lime-800' } text-center w-full cursor-pointer text-white font-semibold px-5 py-2 uppercase rounded-sm`}
						value="Confirmar pedido"
						disabled={comprobarPedido()}
					/>
				</div>
			</form>
		</aside>
	)
}
