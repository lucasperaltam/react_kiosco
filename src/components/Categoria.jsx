import useKiosco from "../hooks/useKiosco"

export default function Categoria({categorias}) {
	
	const {handleClickCategoria, categoriaActual} = useKiosco()
	const {id, nombre, icono} = categorias
	
	const resaltarCategoriaActual = () => categoriaActual.id === id ? "bg-amber-400" : ""

	return (
		<div 
			onClick={() => handleClickCategoria(id)} 
			className={`${resaltarCategoriaActual()} flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer`}
		>
			<img 
				src={`/img/icono_${icono}.svg`}
				alt="Imagen de la categoría"
				className="w-12"
			/>
			<button 
				className="text-lg font-semibold cursor-pointer"
				type="button"
			>
				{nombre}
			</button>
		</div>
	)
}