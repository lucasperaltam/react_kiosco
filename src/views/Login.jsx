import { Link } from "react-router-dom";

export default function Login() {
	return (
		<>
			<h1 className="text-4xl font-black">Iniciar sesión</h1>

			<p>Para poder crear un pedido debes iniciar sesión</p>

			<div className="bg-white shadow-md rounded-md mt-10 py-10 px-5">
				<form>
					<div className="mb-4">
						<label 
							htmlFor="email"
							className="text-slate-800"
						>Email</label>

						<input 
							type="email"
							id="email"
							className="w-full p-3 bg-gray-50 mt-2"
							name="email"
							placeholder="Tu Email"
						/>
					</div>
					<div className="mb-4">
						<label 
							htmlFor="password"
							className="text-slate-800"
						>Contraseña</label>

						<input 
							type="password"
							id="password"
							className="w-full p-3 bg-gray-50 mt-2"
							name="password"
							placeholder="Tu contraseña"
						/>
					</div>

					<input
						type="submut"
						value="Iniciar sesión" 
						className="bg-yellow-600 hover:bg-yellow-400 text-white w-full mt-5 p-3 rounded-sm uppercase font-bold cursor-pointer text-center"
						name="" id="" 
					/>
				</form>

				<nav className="mt-5">
					<Link to="/auth/registro">
						¿No tienes cuenta? crear una aquí
					</ Link>
				</nav>
			</div>
		</>
	)
}
