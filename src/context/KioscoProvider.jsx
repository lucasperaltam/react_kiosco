import { createContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import clienteAxios from '../config/axios';
//import { categorias as categoriasBD } from "../data/categorias"


const KioscoContext = createContext();

const KioscoProvider = ({children}) => {

	//nombre del state y una función
	const [categorias, setCategorias] = useState([]);
	const [categoriaActual, setCategoriaActual] = useState({});
	const [modal, setModal] = useState(false);
	const [producto, setProducto] = useState({});
	const [pedido, setPedido] = useState([]);
	const [total, setTotal] = useState([0]);

	useEffect(() => {
		const ActualizaTotal = pedido.reduce((total, producto) => (producto.precio * producto.cantidad) + total, 0)
		setTotal(ActualizaTotal)
	}, [pedido])

	//trae las categorías de la base de datos a través del backend
	const obtenerCategorias = async() => {
		try {
			const {data} = await clienteAxios('/api/categorias')
			setCategorias(data.data) //pasa todas las categorías de la BD
			setCategoriaActual(data.data[0]) //selecciona la primera que aparece
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		obtenerCategorias();
	}, [])

	const handleClickCategoria = id => {
		const categoria = categorias.filter(categoria => categoria.id === id)[0]
		setCategoriaActual(categoria)
	}

	const handleClickModal = () => {
		setModal(!modal)
	}

	const handleSetProducto = producto => {
		setProducto(producto)
	}

	const handleAgregarAlPedido = ({categoria_id, ...producto}) => {
		//{categoria_id, imagen, ...producto} excluye del objeto los campos detallados (categoria_id e imagen)
		if(pedido.some(pedidoCargado => pedidoCargado.id === producto.id)) {
			//map itera sobre los elementos
			const pedidoActualizado = pedido.map(pedidoCargado => pedidoCargado.id === producto.id ? producto : pedidoCargado)
			setPedido(pedidoActualizado)
			toast.success('Pedido actualizado')
		} else {
			setPedido([...pedido, producto]) //agarra el pedido con los productos cargados y le añade el nuevo producto agregado.
			toast.success('Agregado al pedido')
		}
	}

	const handleModificarCantidad = id => {
		const productoXActualizar = pedido.filter(producto => producto.id === id)[0]
		setProducto(productoXActualizar)
		setModal(!modal)
		toast.success('Cantidad actualizada')
	}

	const handleEliminarDelPedido = id => {
		const pedidoActualizado = pedido.filter(producto => producto.id !== id)
		setPedido(pedidoActualizado) // se vuelve a llenar el pedido con todos los productos del pedido menos el que coincide con el id del seleccionado para quitar
		toast.success('Producto eliminado')
	}

	return (
		<KioscoContext.Provider 
			value={{
				categorias,
				categoriaActual,
				handleClickCategoria,
				modal,
				handleClickModal,
				producto,
				handleSetProducto,
				pedido,
				handleAgregarAlPedido,
				handleModificarCantidad,
				handleEliminarDelPedido,
				total
			}}
		>
			{children}
		</KioscoContext.Provider>
	)
}

export {
	KioscoProvider
}

export default KioscoContext