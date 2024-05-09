import { Link } from "react-router-dom";

export default function Register() {
	return (
		<>
			<h1 className="text-4xl font-black">Crea tu cuenta</h1>

			<p>Creá la cuenta llenando el formulario</p>

			<div className="bg-white shadow-md rounded-md mt-10 py-10 px-5">
				<form>
					<div className="mb-4">
						<label 
							htmlFor="name"
							className="text-slate-800"
						>Nombre</label>

						<input 
							type="text"
							id="name"
							className="w-full p-3 bg-gray-50 mt-2"
							name="name"
							placeholder="Tu nombre"
						/>
					</div>
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
					<div className="mb-4">
						<label 
							htmlFor="password_confirmation"
							className="text-slate-800"
						>Repetir Contraseña</label>

						<input 
							type="password"
							id="password_confimation"
							className="w-full p-3 bg-gray-50 mt-2"
							name="password_confimation"
							placeholder="Repetir tu contraseña"
						/>
					</div>

					<input
						type="submut"
						value="Crear cuenta" 
						className="bg-yellow-600 hover:bg-yellow-400 text-white w-full mt-5 p-3 rounded-sm uppercase font-bold cursor-pointer text-center"
						name="" id="" 
					/>
				</form>

				<nav className="mt-5">
					<Link to="/auth/login">
						¿Ya tienes cuenta? Inicia sesión aquí
					</Link>
				</nav>
			</div>
		</>
	)
}
