import useKiosco from "../hooks/useKiosco"
import { formatearDinero } from "../helpers"
import { useState, useEffect } from "react";

export default function ModalProducto() {

	const {producto, handleClickModal, handleAgregarAlPedido, pedido} = useKiosco();
	const [cantidad, setCantidad] = useState(1);
	const [modificar, setModificar] = useState(false)
	
	//si el producto está en el pedido, se modifica.
	useEffect(() => {
		if(pedido.some(pedidoCargado => pedidoCargado.id === producto.id)) {
			const productoModif = pedido.filter(pedidoCargado => pedidoCargado.id === producto.id)[0]
			
			setCantidad(productoModif.cantidad)
			setModificar(true)
		}
	}, [pedido])

	return (
		<div className="md:flex gap-10">
			<div className="md:w-1/3">
				<img 
					src={`/img/${producto.imagen}.jpg`}
					alt={`Imagen del producto ${producto.nombre}`}
					className="w-full"
				/>
			</div>
			<div className="md:w-2/3">
				<div className="flex justify-end">
					{/* <button onClick={() => handleClickModal()}> */}
					<button onClick={handleClickModal}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
						</svg>
					</button>
				</div>

				<h1 className="text-3xl font-semibold mt-5">
					{producto.nombre}
				</h1>
				<p className="text-5xl font-black mt-5 text-amber-500">
					{formatearDinero(producto.precio)}
				</p>

				<div className="flex gap-4 mt-5">
					<button 
						type="button" 
						className="bg-sky-600 hover:bg-sky-800 text-white font-semibold px-2 py-2 uppercase rounded-sm"
						onClick={() => {
							if (cantidad <= 1) return	
							setCantidad(cantidad - 1)
						}}
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
							<path fillRule="evenodd" d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
						</svg>
					</button>
					<p className="text-3xl">{cantidad}</p>
					<button 
						type="button"
						className="bg-sky-600 hover:bg-sky-800 text-white font-semibold px-2 py-2 uppercase rounded-sm"
						onClick={() => {
							if (cantidad >= 5) return	
							setCantidad(cantidad + 1)
						}}
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
							<path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
						</svg>
					</button>
				</div>

				<button
					type="button"
					className="bg-lime-600 hover:bg-lime-800 mt-5 text-white font-semibold px-5 py-2 uppercase rounded-sm"
					onClick={() => {
						//los tres puntos es para que aparezca en un mismo objeto
						handleAgregarAlPedido({...producto, cantidad});
						handleClickModal()
					}}
				>
					{modificar ? 'Actualizar' : 'Agregar al pedido'}
				</button>
			</div>
		</div>
	)
}
