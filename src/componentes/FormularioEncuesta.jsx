import React, { useState } from "react";
import estudiantes from "../assets/estudiantes.jpg";
import estudiantes2 from "../assets/estudiantes2.jpg";
import {
  Camera,
  User,
  Home,
  Mail,
  GraduationCap,
  Briefcase,
  Users,
  Heart,
  BookOpen,
  Award,
} from "lucide-react";

const EncuestaEducativa = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    identificacion: "",
    domicilio: "",
    correo: "",
    nivelEducativo: "",
    estudiaActualmente: "",
    ocupacionActual: "",
    estadoCivil: "",
    numeroHijos: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Datos del formulario:", formData);
    alert("¡Encuesta enviada exitosamente!");
  };

  // Imágenes de ejemplo para la galería
  const galleryImages = [estudiantes, estudiantes2];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 to-green-700 shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="flex items-center justify-center gap-6">
            <div className="bg-yellow-400 p-4 rounded-full shadow-lg">
              <BookOpen size={32} className="text-green-800" />
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-2">
                Encuesta Educativa Institucional
              </h1>
              <p className="text-green-100 text-lg">
                Instituto Educativo - Bolívar, Cauca
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"></div>
      </header>

      {/* Sección Introductoria */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg border-2 border-green-200 mb-6">
            <Award className="text-yellow-500" size={24} />
            <span className="text-green-800 font-semibold text-lg">
              Compromiso con la Educación
            </span>
          </div>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            Su participación en esta encuesta nos ayuda a mejorar continuamente
            nuestros programas educativos y servicios para toda la comunidad de
            La Carbonera.
          </p>
        </div>
      </section>

      {/* Galería */}
      <section className="container mx-auto px-4 py-12 bg-white rounded-3xl mx-4 shadow-xl border-t-4 border-green-500">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 flex items-center justify-center gap-3">
          <Camera className="text-green-600" size={32} />
          Galería de Actividades Educativas
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <img
                src={img}
                alt={`Actividad educativa ${idx + 1}`}
                className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-800 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">
                    Actividad Educativa
                  </h3>
                  <p className="text-green-100 text-sm">
                    Formación integral y desarrollo académico
                  </p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-yellow-400 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Camera size={20} className="text-green-800" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Formulario */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-2xl rounded-3xl overflow-hidden border-t-8 border-green-500">
            {/* Header del formulario */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 px-8 py-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-3 flex items-center justify-center gap-3">
                <User className="text-yellow-400" size={32} />
                Formulario de Encuesta
              </h2>
              <p className="text-green-100 text-lg">
                Complete la siguiente información para participar en nuestra
                encuesta educativa
              </p>
            </div>

            {/* Contenido del formulario */}
            <div className="p-10">
              <div className="space-y-8">
                {/* Información Personal */}
                <div className="bg-yellow-50 rounded-2xl p-6 border-l-4 border-yellow-400">
                  <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                    <User className="text-green-600" size={20} />
                    Información Personal
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <InputField
                      label="Nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      icon={<User size={18} />}
                    />
                    <InputField
                      label="Apellido"
                      name="apellido"
                      value={formData.apellido}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <InputField
                      label="Identificación"
                      name="identificacion"
                      value={formData.identificacion}
                      onChange={handleInputChange}
                    />
                    <InputField
                      label="Correo Electrónico"
                      name="correo"
                      type="email"
                      value={formData.correo}
                      onChange={handleInputChange}
                      icon={<Mail size={18} />}
                    />
                  </div>

                  <div className="mt-6">
                    <InputField
                      label="Domicilio"
                      name="domicilio"
                      value={formData.domicilio}
                      onChange={handleInputChange}
                      icon={<Home size={18} />}
                    />
                  </div>
                </div>

                {/* Información Educativa */}
                <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                    <GraduationCap className="text-green-600" size={20} />
                    Información Educativa
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <SelectField
                      label="Nivel Educativo"
                      name="nivelEducativo"
                      value={formData.nivelEducativo}
                      onChange={handleInputChange}
                      icon={<GraduationCap size={18} />}
                      options={[
                        "Ninguno",
                        "Primaria",
                        "Secundaria",
                        "Bachiller",
                        "Técnico",
                        "Profesional",
                        "Otros",
                      ]}
                    />

                    <InputField
                      label="Ocupación Actual"
                      name="ocupacionActual"
                      value={formData.ocupacionActual}
                      onChange={handleInputChange}
                      icon={<Briefcase size={18} />}
                      placeholder="Ej: Estudiante, Ama de casa..."
                    />
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-4">
                      ¿Estudia actualmente?
                    </label>
                    <div className="flex space-x-8">
                      {["sí", "no"].map((opt) => (
                        <label
                          key={opt}
                          className="flex items-center space-x-3 cursor-pointer group"
                        >
                          <input
                            type="radio"
                            name="estudiaActualmente"
                            value={opt}
                            checked={formData.estudiaActualmente === opt}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-green-600 focus:ring-green-500"
                          />
                          <span className="capitalize text-gray-700 group-hover:text-green-600 transition-colors font-medium">
                            {opt}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Información Familiar */}
                <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-gray-400">
                  <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                    <Heart className="text-green-600" size={20} />
                    Información Familiar
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <SelectField
                      label="Estado Civil"
                      name="estadoCivil"
                      value={formData.estadoCivil}
                      onChange={handleInputChange}
                      icon={<Heart size={18} />}
                      options={[
                        "Soltero(a)",
                        "Casado(a)",
                        "Unión Libre",
                        "Separado(a)",
                        "Divorciado(a)",
                        "Viudo(a)",
                      ]}
                    />

                    <InputField
                      label="Número de Hijos"
                      name="numeroHijos"
                      type="number"
                      value={formData.numeroHijos}
                      onChange={handleInputChange}
                      icon={<Users size={18} />}
                      min={0}
                      placeholder="0"
                    />
                  </div>
                </div>

                {/* Botón de envío */}
                <div className="text-center pt-8">
                  <button
                    onClick={handleSubmit}
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-xl font-bold px-12 py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-b-4 border-green-800"
                  >
                    <span className="flex items-center gap-3">
                      <Award size={24} />
                      Enviar Encuesta
                    </span>
                  </button>
                  <p className="text-gray-500 text-sm mt-4">
                    Al enviar, acepta que sus datos serán utilizados únicamente
                    para fines educativos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="bg-green-600 p-2 rounded-full">
                <BookOpen size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold">Instituto Educativo</h3>
            </div>
            <p className="text-gray-400 mb-2">Bolívar, Cauca - Colombia</p>
            <p className="text-gray-500 text-sm">
              © 2025 Encuesta Educativa - Recopilación de datos para fines
              académicos
            </p>
            <div className="mt-4 h-1 bg-gradient-to-r from-green-600 via-yellow-400 to-green-600 rounded-full max-w-xs mx-auto"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// COMPONENTES AUXILIARES

const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  icon,
  placeholder,
  min,
}) => (
  <div className="group">
    <label
      htmlFor={name}
      className="block text-sm font-semibold text-gray-700 mb-2"
    >
      {icon && <span className="inline-block mr-2 text-green-600">{icon}</span>}
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      min={min}
      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 group-hover:border-green-300"
    />
  </div>
);

const SelectField = ({ label, name, value, onChange, icon, options }) => (
  <div className="group">
    <label
      htmlFor={name}
      className="block text-sm font-semibold text-gray-700 mb-2"
    >
      {icon && <span className="inline-block mr-2 text-green-600">{icon}</span>}
      {label}
    </label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 group-hover:border-green-300 bg-white"
    >
      <option value="">Seleccione una opción</option>
      {options.map((opt) => (
        <option key={opt} value={opt.toLowerCase()}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

export default EncuestaEducativa;
