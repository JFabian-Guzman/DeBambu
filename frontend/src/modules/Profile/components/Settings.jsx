import React from "react";

const Settings = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-start p-6 ml-4">
      <div className="w-full bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-gray-800">Ajustes</h1>
      </div>

      <div className="w-full bg-white shadow rounded-lg p-6 mt-4">
        <section className="mb-8">
          <h2 className="text-lg font-medium text-gray-700 mb-4">Datos personales</h2>
          <div className="grid grid-cols-4 gap-8 ml-4">
            <a href="#" className="text-blue-600 hover:underline">Subir imagen</a>
            <a href="#" className="text-blue-600 hover:underline">Editar perfil</a>
            <a href="#" className="text-blue-600 hover:underline">País/región</a>
            <a href="#" className="text-blue-600 hover:underline">Eliminar cuenta</a>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-medium text-gray-700 mb-4">Información de seguridad</h2>
          <div className="grid grid-cols-4 gap-8 ml-4">
            <a href="#" className="text-blue-600 hover:underline">Cambiar dirección de e-mail</a>
            <a href="#" className="text-blue-600 hover:underline">Cambiar contraseña</a>
            <a href="#" className="text-blue-600 hover:underline">Establecer pregunta de seguridad</a>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-medium text-gray-700 mb-4">Activar notificaciones por e-mail</h2>
          <a href="#" className="text-blue-600 hover:underline ml-4">Activar</a>
        </section>

        <section>
          <h2 className="text-lg font-medium text-gray-700 mb-4">Cuentas en redes sociales</h2>
          <div className="grid grid-cols-4 gap-8 ml-4">
            <a href="#" className="text-blue-600 hover:underline">Messenger</a>
            <a href="#" className="text-blue-600 hover:underline">Enlace</a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Settings;
