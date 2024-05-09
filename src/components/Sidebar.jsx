import useKiosco from "../hooks/useKiosco"
import Categoria from "./Categoria"

export default function Sidebar() {

	const {categorias} = useKiosco()

	return (
		<aside className="w-72">
			<div className="p-4">
				<img src="img/logo.svg" alt="Imagen logo" />

			</div>
			<div className="mt-10">
				{categorias.map(categorias => (
					<Categoria
						key={categorias.id}
						categorias={categorias}
					/>
				))}
			</div>
			<div className="my-5 py-5">
				<button
					type="button"
					className="texte-center bg-rose-800 hover:bg-rose-600 w-full text-white font-semibold truncate p-3"
				>
					Cancelar orden
				</button>
			</div>
		</aside>
	)
}