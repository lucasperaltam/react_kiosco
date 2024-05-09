import { formatearDinero } from "../helpers"
import useKiosco from "../hooks/useKiosco"

export default function Producto({producto}) {
	
	const {handleClickModal, handleSetProducto} = useKiosco();
	const {nombre, precio, imagen, categoria_id} = producto
	
	return (
		<div className="border p-3 shadow bg-white">
			<img 
				src={`/img/${imagen}.jpg`}
				alt={`Imagen del producto ${imagen}`}
				className="w-full"
			/>
			<div className="p-5">
				<h3 className="text-2xl font-semibold">{nombre}</h3>
				<p className="mt-5 font-black text-4xl text-amber-500">
					{formatearDinero(precio)}
				</p>
				<button
					type="button"
					className="texte-center bg-lime-600 hover:bg-lime-800 w-full mt-5 text-white font-semibold p-3"
					onClick={() => {
						handleClickModal();
						handleSetProducto(producto);
					}}
				>
					Agregar
				</button>
			</div>
		</div>
	)
}