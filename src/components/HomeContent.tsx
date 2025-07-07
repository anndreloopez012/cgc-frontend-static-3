import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, FileText, Mail, Book, RefreshCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ImageSlider from './ImageSlider';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

/**
 * Componente HomeContent rediseñado estilo gobierno
 * 
 * Incluye todas las secciones con diseño limpio y moderno:
 * - Slider de imágenes heroicas
 * - Información institucional
 * - Auditoría Social
 * - Servicios principales
 * - Unidad de Información Pública
 */

const HomeContent = () => {
  const navigate = useNavigate();
  const [menuData, setMenuData] = useState(null);
  const auditoriaSocial = useScrollAnimation();
  const serviciosUsuarios = useScrollAnimation();
  const servicios = useScrollAnimation();
  const programasParticipacion = useScrollAnimation();
  const informacionPublica = useScrollAnimation();

  // Mapeo de iconos de Lucide React
  const iconMap = {
    FileText,
    Mail,
    Book,
    RefreshCcw
  };

  // Cargar datos del menú desde JSON
  useEffect(() => {
    const loadMenuData = async () => {
      try {
        const response = await fetch('/src/data/sidebarMenuAPI.json');
        const data = await response.json();
        setMenuData(data.sidebarMenu);
      } catch (error) {
        console.error('Error loading sidebar menu data:', error);
      }
    };
    loadMenuData();
  }, []);

  const handleNavigation = (route: string) => {
    navigate(route);
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Slider de imágenes heroicas */}
      <section className="py-6">
        <div className="w-full">
          <ImageSlider />
        </div>
      </section>

      {/* Información institucional */}
      <section className="py-8 px-6 bg-white rounded-lg shadow-sm mb-8">
        <div className="text-center">
          <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
            La Contraloría General de Cuentas es la Institución del Estado encargada de promover y verificar el cumplimiento de la legislación laboral, así como elaborar e implementar políticas y programas con equidad, relativas al trabajo decente y la previsión social, en beneficio de la población trabajadora y grupos en riesgo de vulnerabilidad laboral.
          </p>
        </div>
      </section>

      {/* Secciones de servicios */}
      <div className="space-y-8">
        
        {/* SERVICIOS A USUARIOS */}
        {menuData && (
          <section ref={serviciosUsuarios.elementRef} className={`bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg shadow-sm transition-all duration-1000 delay-200 ${serviciosUsuarios.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                SERVICIOS A USUARIOS
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                {menuData.subtitle}
              </p>
              <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {menuData.menuItems.map((item) => {
                const IconComponent = iconMap[item.icon] || FileText;
                return (
                  <Button
                    key={item.id}
                    variant="ghost"
                    className="h-32 p-4 bg-white hover:bg-gray-50 transition-all duration-300 
                      hover:shadow-lg border border-gray-200/50 hover:border-primary/30 group text-center"
                    onClick={() => handleNavigation(item.route)}
                  >
                    <div className="flex flex-col items-center space-y-3 w-full">
                      <div className="w-16 h-16 rounded-full bg-blue-600 shadow-lg flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-center">
                        <h3 className="font-semibold text-gray-900 text-sm leading-tight">{item.title}</h3>
                      </div>
                    </div>
                  </Button>
                );
              })}
            </div>
          </section>
        )}
        
        {/* AUDITORÍA SOCIAL */}
        <section ref={auditoriaSocial.elementRef} className={`bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg shadow-sm transition-all duration-1000 delay-250 ${auditoriaSocial.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              AUDITORÍA SOCIAL
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button
              variant="ghost"
              className="h-32 p-4 bg-white hover:bg-gray-50 transition-all duration-300 
                hover:shadow-lg border border-gray-200/50 hover:border-primary/30 group text-center"
              onClick={() => handleNavigation('/denuncia-ciudadana')}
            >
              <div className="flex flex-col items-center space-y-3 w-full">
                <div className="w-16 h-16 rounded-full bg-orange-600 shadow-lg flex items-center justify-center">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/1161/1161388.png" 
                    alt="Denuncia Ciudadana" 
                    className="w-8 h-8 brightness-0 invert"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 text-sm leading-tight">Denuncia Ciudadana</h3>
                </div>
              </div>
            </Button>

            <Button
              variant="ghost"
              className="h-32 p-4 bg-white hover:bg-gray-50 transition-all duration-300 
                hover:shadow-lg border border-gray-200/50 hover:border-primary/30 group text-center"
              onClick={() => handleNavigation('/auditoria-participativa')}
            >
              <div className="flex flex-col items-center space-y-3 w-full">
                <div className="w-16 h-16 rounded-full bg-red-600 shadow-lg flex items-center justify-center">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/1055/1055645.png" 
                    alt="Auditoría Participativa" 
                    className="w-8 h-8 brightness-0 invert"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 text-sm leading-tight">Auditoría Participativa</h3>
                </div>
              </div>
            </Button>
          </div>
        </section>


        {/* SERVICIOS INTERINSTITUCIONALES */}
        <section ref={servicios.elementRef} className={`bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg shadow-sm transition-all duration-1000 delay-300 ${servicios.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              SERVICIOS INTERINSTITUCIONALES
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Haga click sobre el servicio de su interés. El enlace abrirá otra pestaña de su navegador.
            </p>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            <Button 
              variant="ghost" 
              className="h-32 p-4 bg-white hover:bg-gray-50 transition-all duration-300 hover:shadow-lg border border-gray-200/50 hover:border-primary/30 group text-center" 
              onClick={() => handleNavigation('/modulo-transicion')}
            >
              <div className="flex flex-col items-center space-y-3 w-full">
                <div className="w-12 h-12 rounded-full bg-green-600 shadow-lg flex items-center justify-center">
                  <img src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png" alt="Módulo de Transición" className="w-6 h-6 brightness-0 invert" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 text-xs leading-tight">Módulo de Transición</h3>
                </div>
              </div>
            </Button>

            <Button 
              variant="ghost" 
              className="h-32 p-4 bg-white hover:bg-gray-50 transition-all duration-300 hover:shadow-lg border border-gray-200/50 hover:border-primary/30 group text-center" 
              onClick={() => handleNavigation('/rendicion-cuentas')}
            >
              <div className="flex flex-col items-center space-y-3 w-full">
                <div className="w-12 h-12 rounded-full bg-emerald-600 shadow-lg flex items-center justify-center">
                  <img src="https://cdn-icons-png.flaticon.com/512/1055/1055645.png" alt="Rendición de Cuentas" className="w-6 h-6 brightness-0 invert" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 text-xs leading-tight">Rendición de Cuentas</h3>
                </div>
              </div>
            </Button>

            <Button 
              variant="ghost" 
              className="h-32 p-4 bg-white hover:bg-gray-50 transition-all duration-300 hover:shadow-lg border border-gray-200/50 hover:border-primary/30 group text-center" 
              onClick={() => handleNavigation('/registro-titulos')}
            >
              <div className="flex flex-col items-center space-y-3 w-full">
                <div className="w-12 h-12 rounded-full bg-teal-600 shadow-lg flex items-center justify-center">
                  <img src="https://cdn-icons-png.flaticon.com/512/2920/2920349.png" alt="Registro de Títulos" className="w-6 h-6 brightness-0 invert" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 text-xs leading-tight">Registro de Títulos</h3>
                </div>
              </div>
            </Button>

            <Button 
              variant="ghost" 
              className="h-32 p-4 bg-white hover:bg-gray-50 transition-all duration-300 hover:shadow-lg border border-gray-200/50 hover:border-primary/30 group text-center" 
              onClick={() => handleNavigation('/bitacora-electronica')}
            >
              <div className="flex flex-col items-center space-y-3 w-full">
                <div className="w-12 h-12 rounded-full bg-cyan-600 shadow-lg flex items-center justify-center">
                  <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Bitácora Electrónica" className="w-6 h-6 brightness-0 invert" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 text-xs leading-tight">Bitácora Electrónica</h3>
                </div>
              </div>
            </Button>

            <Button 
              variant="ghost" 
              className="h-32 p-4 bg-white hover:bg-gray-50 transition-all duration-300 hover:shadow-lg border border-gray-200/50 hover:border-primary/30 group text-center" 
              onClick={() => handleNavigation('/cgc-modulo-cuentadantes')}
            >
              <div className="flex flex-col items-center space-y-3 w-full">
                <div className="w-12 h-12 rounded-full bg-lime-600 shadow-lg flex items-center justify-center">
                  <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="Módulo de Cuentadantes" className="w-6 h-6 brightness-0 invert" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 text-xs leading-tight">Módulo de Cuentadantes</h3>
                </div>
              </div>
            </Button>

            <Button 
              variant="ghost" 
              className="h-32 p-4 bg-white hover:bg-gray-50 transition-all duration-300 hover:shadow-lg border border-gray-200/50 hover:border-primary/30 group text-center" 
              onClick={() => handleNavigation('/palimnesto')}
            >
              <div className="flex flex-col items-center space-y-3 w-full">
                <div className="w-12 h-12 rounded-full bg-sky-600 shadow-lg flex items-center justify-center">
                  <img src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png" alt="Palimnesto" className="w-6 h-6 brightness-0 invert" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 text-xs leading-tight">Palimnesto</h3>
                </div>
              </div>
            </Button>

            <Button 
              variant="ghost" 
              className="h-32 p-4 bg-white hover:bg-gray-50 transition-all duration-300 hover:shadow-lg border border-gray-200/50 hover:border-primary/30 group text-center" 
              onClick={() => handleNavigation('/sistema-nominas')}
            >
              <div className="flex flex-col items-center space-y-3 w-full">
                <div className="w-12 h-12 rounded-full bg-indigo-600 shadow-lg flex items-center justify-center">
                  <img src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png" alt="Sistema de Nóminas" className="w-6 h-6 brightness-0 invert" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 text-xs leading-tight">Sistema de Nóminas</h3>
                </div>
              </div>
            </Button>

            <Button 
              variant="ghost" 
              className="h-32 p-4 bg-white hover:bg-gray-50 transition-all duration-300 hover:shadow-lg border border-gray-200/50 hover:border-primary/30 group text-center" 
              onClick={() => handleNavigation('/registro-asesores')}
            >
              <div className="flex flex-col items-center space-y-3 w-full">
                <div className="w-12 h-12 rounded-full bg-violet-600 shadow-lg flex items-center justify-center">
                  <img src="https://cdn-icons-png.flaticon.com/512/1055/1055645.png" alt="Registro de Asesores" className="w-6 h-6 brightness-0 invert" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 text-xs leading-tight">Registro de Asesores</h3>
                </div>
              </div>
            </Button>

            <Button 
              variant="ghost" 
              className="h-32 p-4 bg-white hover:bg-gray-50 transition-all duration-300 hover:shadow-lg border border-gray-200/50 hover:border-primary/30 group text-center" 
              onClick={() => handleNavigation('/sistema-registro-actas')}
            >
              <div className="flex flex-col items-center space-y-3 w-full">
                <div className="w-12 h-12 rounded-full bg-rose-600 shadow-lg flex items-center justify-center">
                  <img src="https://cdn-icons-png.flaticon.com/512/2920/2920349.png" alt="Sistema Registro de Actas" className="w-6 h-6 brightness-0 invert" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 text-xs leading-tight">Sistema Registro de Actas</h3>
                </div>
              </div>
            </Button>

            <Button 
              variant="ghost" 
              className="h-32 p-4 bg-white hover:bg-gray-50 transition-all duration-300 hover:shadow-lg border border-gray-200/50 hover:border-primary/30 group text-center" 
              onClick={() => handleNavigation('/rendicion-cuentas-2')}
            >
              <div className="flex flex-col items-center space-y-3 w-full">
                <div className="w-12 h-12 rounded-full bg-amber-600 shadow-lg flex items-center justify-center">
                  <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Rendición de Cuentas" className="w-6 h-6 brightness-0 invert" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 text-xs leading-tight">Rendición de Cuentas</h3>
                </div>
              </div>
            </Button>

            <Button 
              variant="ghost" 
              className="h-32 p-4 bg-white hover:bg-gray-50 transition-all duration-300 hover:shadow-lg border border-gray-200/50 hover:border-primary/30 group text-center" 
              onClick={() => handleNavigation('/formacion-capacitacion')}
            >
              <div className="flex flex-col items-center space-y-3 w-full">
                <div className="w-12 h-12 rounded-full bg-orange-600 shadow-lg flex items-center justify-center">
                  <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="Formación y Capacitación" className="w-6 h-6 brightness-0 invert" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 text-xs leading-tight">Formación y Capacitación</h3>
                </div>
              </div>
            </Button>

            <Button 
              variant="ghost" 
              className="h-32 p-4 bg-white hover:bg-gray-50 transition-all duration-300 hover:shadow-lg border border-gray-200/50 hover:border-primary/30 group text-center" 
              onClick={() => handleNavigation('/declaraciones-bienes-muebles')}
            >
              <div className="flex flex-col items-center space-y-3 w-full">
                <div className="w-12 h-12 rounded-full bg-pink-600 shadow-lg flex items-center justify-center">
                  <img src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png" alt="Declaraciones de Bienes Muebles" className="w-6 h-6 brightness-0 invert" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 text-xs leading-tight">Declaraciones de Bienes Muebles</h3>
                </div>
              </div>
            </Button>
          </div>
        </section>

        {/* PROGRAMAS DE PARTICIPACIÓN CIUDADANA */}
        <section ref={programasParticipacion.elementRef} className={`bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg shadow-sm transition-all duration-1000 delay-400 ${programasParticipacion.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              PROGRAMAS DE PARTICIPACIÓN CIUDADANA
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              variant="ghost"
              className="h-32 p-4 bg-white hover:bg-gray-50 transition-all duration-300 
                hover:shadow-lg border border-gray-200/50 hover:border-primary/30 group text-center"
              onClick={() => handleNavigation('/sembrando-semillas')}
            >
              <div className="flex flex-col items-center space-y-3 w-full">
                <div className="w-16 h-16 rounded-full bg-purple-600 shadow-lg flex items-center justify-center">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/1161/1161388.png" 
                    alt="Sembrando Semillas" 
                    className="w-8 h-8 brightness-0 invert"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 text-sm leading-tight">Sembrando Semillas</h3>
                </div>
              </div>
            </Button>

            <Button
              variant="ghost"
              className="h-32 p-4 bg-white hover:bg-gray-50 transition-all duration-300 
                hover:shadow-lg border border-gray-200/50 hover:border-primary/30 group text-center"
              onClick={() => handleNavigation('/organizaciones-padres-familia')}
            >
              <div className="flex flex-col items-center space-y-3 w-full">
                <div className="w-16 h-16 rounded-full bg-pink-600 shadow-lg flex items-center justify-center">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/1055/1055645.png" 
                    alt="Organizaciones de Padres de Familia" 
                    className="w-8 h-8 brightness-0 invert"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 text-sm leading-tight">OPF</h3>
                </div>
              </div>
            </Button>

            <Button
              variant="ghost"
              className="h-32 p-4 bg-white hover:bg-gray-50 transition-all duration-300 
                hover:shadow-lg border border-gray-200/50 hover:border-primary/30 group text-center"
              onClick={() => handleNavigation('/plan-capacitacion-etica')}
            >
              <div className="flex flex-col items-center space-y-3 w-full">
                <div className="w-16 h-16 rounded-full bg-indigo-600 shadow-lg flex items-center justify-center">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/2920/2920349.png" 
                    alt="Plan de Capacitación en Ética" 
                    className="w-8 h-8 brightness-0 invert"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 text-sm leading-tight">Plan de Capacitación</h3>
                </div>
              </div>
            </Button>
          </div>
        </section>

        {/* INFORMACIÓN PÚBLICA */}
        <section ref={informacionPublica.elementRef} className={`bg-gradient-to-r from-gray-50 to-slate-100 p-6 rounded-lg shadow-sm transition-all duration-1000 delay-500 ${informacionPublica.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              INFORMACIÓN PÚBLICA
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Haga click sobre el servicio de su interés. El enlace abrirá otra pestaña de su navegador.
            </p>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              variant="ghost"
              className="h-32 p-4 bg-white hover:bg-gray-50 transition-all duration-300 
                hover:shadow-lg border border-gray-200/50 hover:border-primary/30 group text-center"
              onClick={() => handleNavigation('/informacion-publica-oficio')}
            >
              <div className="flex flex-col items-center space-y-3 w-full">
                <div className="w-16 h-16 rounded-full bg-gray-600 shadow-lg flex items-center justify-center">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/1055/1055645.png" 
                    alt="Información pública de oficio" 
                    className="w-8 h-8 brightness-0 invert"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 text-sm leading-tight">Información Pública de Oficio</h3>
                </div>
              </div>
            </Button>

            <Button
              variant="ghost"
              className="h-32 p-4 bg-white hover:bg-gray-50 transition-all duration-300 
                hover:shadow-lg border border-gray-200/50 hover:border-primary/30 group text-center"
              onClick={() => handleNavigation('/informes-auditoria')}
            >
              <div className="flex flex-col items-center space-y-3 w-full">
                <div className="w-16 h-16 rounded-full bg-slate-600 shadow-lg flex items-center justify-center">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/2920/2920349.png" 
                    alt="Informes de Auditoría" 
                    className="w-8 h-8 brightness-0 invert"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 text-sm leading-tight">Informes de Auditoría</h3>
                </div>
              </div>
            </Button>

            <Button
              variant="ghost"
              className="h-32 p-4 bg-white hover:bg-gray-50 transition-all duration-300 
                hover:shadow-lg border border-gray-200/50 hover:border-primary/30 group text-center"
              onClick={() => handleNavigation('/archivo-general')}
            >
              <div className="flex flex-col items-center space-y-3 w-full">
                <div className="w-16 h-16 rounded-full bg-zinc-600 shadow-lg flex items-center justify-center">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png" 
                    alt="Archivo General" 
                    className="w-8 h-8 brightness-0 invert"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 text-sm leading-tight">Archivo General</h3>
                </div>
              </div>
            </Button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default HomeContent;