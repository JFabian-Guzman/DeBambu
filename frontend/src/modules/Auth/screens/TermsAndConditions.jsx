const TermsAndConditions = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="h-full max-w mx-auto bg-white shadow-lg px-6 py-8 md:px-8 lg:px-12">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-8 border-b pb-4">
          Términos y Condiciones
        </h1>

        <div className="space-y-6 overflow-y-auto">
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed">
              Bienvenido a DeBambú. Al acceder a este sitio web y realizar compras en nuestra tienda en línea,
              aceptas los siguientes términos y condiciones. Por favor, léelos cuidadosamente antes de usar nuestros servicios.
            </p>
          </div>

          {/* More efficient way of creating the 11 sections instead of writing them manually */}
          {[...Array(11)].map((_, index) => (
            <section key={index + 1} className="space-y-3">
              <h2 className="text-2xl font-semibold text-gray-800 border-l-4 border-blue-500 pl-4">
                {index + 1}. {getTitle(index + 1)}
              </h2>
              <p className="text-gray-600 leading-relaxed pl-4">
                {getContent(index + 1)}
              </p>
            </section>
          ))}

          <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-gray-600 text-center italic">
              Al utilizar este sitio web y realizar compras, confirmas que has leído y aceptado estos términos y condiciones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Auxiliary functions to obtain the content
const getTitle = (section) => {
  const titles = {
    1: "Información General",
    2: "Uso del Sitio Web",
    3: "Productos y Precios",
    4: "Proceso de Compra",
    5: "Métodos de Pago",
    6: "Envíos y Entregas",
    7: "Propiedad Intelectual",
    8: "Limitación de Responsabilidad",
    9: "Ley Aplicable",
    10: "Contacto"
  };
  return titles[section];
};

const getContent = (section) => {
  const content = {
    1: "DeBambú opera bajo las leyes de Costa Rica. Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Es responsabilidad del usuario revisar esta página periódicamente para estar al tanto de los cambios.",
    2: "Al utilizar este sitio web, garantizas que tienes al menos 18 años o que utilizas el sitio con el consentimiento de un tutor legal. No puedes usar este sitio web para fines ilícitos o no autorizados, ni violar las leyes aplicables en tu jurisdicción.",
    3: "Todos los productos están sujetos a disponibilidad. Nos reservamos el derecho de limitar las cantidades de cualquier producto o servicio que ofrecemos. Los precios están sujetos a cambio sin previo aviso. Intentamos asegurarnos de que los precios y descripciones sean exactos, pero no garantizamos que estén libres de errores.",
    4: "Para realizar una compra, debes proporcionar información personal y de pago válida. Nos reservamos el derecho de rechazar o cancelar cualquier pedido por diversas razones, incluyendo disponibilidad del producto, errores en el precio o problemas detectados en el pago.",
    5: "Aceptamos únicamente pagos mediante tarjetas de crédito o débito. Todas las transacciones son seguras y cumplen con los estándares de protección de datos.",
    6: "Ofrecemos servicios de envío mediante Correos de Costa Rica. Los tiempos de entrega son aproximados y pueden variar debido a factores fuera de nuestro control. No nos hacemos responsables de retrasos causados por terceros, como empresas de mensajería.",
    7: "Todo el contenido de este sitio web, incluidas imágenes, textos, logotipos y gráficos, es propiedad de DeBambú o de sus proveedores, y está protegido por leyes de derechos de autor. Está prohibido reproducir, distribuir o usar el contenido sin nuestra autorización previa.",
    8: "En ningún caso DeBambú será responsable por daños indirectos, incidentales o consecuentes que surjan del uso o la imposibilidad de usar nuestro sitio web o productos.",
    9: "Estos términos y condiciones se rigen por las leyes de Costa Rica. Cualquier disputa relacionada con el uso de nuestro sitio web será resuelta en los tribunales.",
    10: "Si tienes preguntas sobre estos términos y condiciones, contáctanos en [correo electrónico] o al teléfono [número de contacto]."
  };
  return content[section];
};

export default TermsAndConditions;