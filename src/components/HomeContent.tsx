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
        const { default: data } = await import('../data/sidebarMenuAPI.json');
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
        
        {/* AUDITORÍA SOCIAL */}
        <section ref={auditoriaSocial.elementRef} className={`bg-white p-6 rounded-lg shadow-sm transition-all duration-1000 delay-200 ${auditoriaSocial.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              AUDITORÍA SOCIAL
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button
              variant="ghost"
              className="h-auto p-4 bg-orange-50 hover:bg-orange-100 transition-all duration-300 
                hover:shadow-md border border-orange-200/50 hover:border-orange-300/50 group text-left"
              onClick={() => handleNavigation('/denuncia-ciudadana')}
            >
              <div className="flex items-center space-x-4 w-full">
                <div className="p-4 rounded bg-white/80 shadow-sm flex items-center justify-center min-w-[72px] min-h-[72px]">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/1161/1161388.png" 
                    alt="Denuncia Ciudadana" 
                    className="w-12 h-12"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-base">Denuncia Ciudadana</h3>
                  <p className="text-sm text-gray-600">contraloria.gob.gt</p>
                </div>
              </div>
            </Button>

            <Button
              variant="ghost"
              className="h-auto p-4 bg-blue-50 hover:bg-blue-100 transition-all duration-300 
                hover:shadow-md border border-blue-200/50 hover:border-blue-300/50 group text-left"
              onClick={() => handleNavigation('/auditoria-participativa')}
            >
              <div className="flex items-center space-x-4 w-full">
                <div className="p-4 rounded bg-white/80 shadow-sm flex items-center justify-center min-w-[72px] min-h-[72px]">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/1055/1055645.png" 
                    alt="Auditoría Participativa" 
                    className="w-12 h-12"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-base">Auditoría Participativa</h3>
                  <p className="text-sm text-gray-600">Participación ciudadana</p>
                </div>
              </div>
            </Button>
          </div>
        </section>

        {/* SERVICIOS A USUARIOS */}
        {menuData && (
          <section ref={serviciosUsuarios.elementRef} className={`bg-gradient-to-br from-blue-400 to-blue-600 text-white p-8 rounded-xl shadow-lg transition-all duration-1000 delay-250 ${serviciosUsuarios.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">
                SERVICIOS
              </h2>
              <p className="text-blue-100 text-sm mb-4">
                {menuData.subtitle}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {menuData.menuItems.map((item) => {
                const IconComponent = iconMap[item.icon] || FileText;
                return (
                  <Button
                    key={item.id}
                    variant="ghost"
                    className="h-auto p-4 bg-white/10 hover:bg-white/20 transition-all duration-300 
                      hover:scale-105 border border-white/20 hover:border-white/40 group text-center flex-col rounded-xl backdrop-blur-sm"
                    onClick={() => handleNavigation(item.route)}
                  >
                    <div className="flex flex-col items-center space-y-3 w-full">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-center">
                        <h3 className="font-semibold text-white text-sm leading-tight">{item.title}</h3>
                      </div>
                    </div>
                  </Button>
                );
              })}
            </div>
          </section>
        )}

        {/* SERVICIOS INTERINSTITUCIONALES */}
        <section ref={servicios.elementRef} className={`bg-white p-6 rounded-lg shadow-sm transition-all duration-1000 delay-300 ${servicios.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              SERVICIOS INTERINSTITUCIONALES
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Haga click sobre el servicio de su interés. El enlace abrirá otra pestaña de su navegador.
            </p>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            <Button 
              variant="ghost" 
              className="h-20 bg-blue-50 hover:bg-blue-100 transition-all duration-300 hover:shadow-md border border-blue-200/30 group" 
              onClick={() => handleNavigation('/modulo-transicion')}
            >
              <div className="text-center flex flex-col items-center space-y-1">
                <img src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png" alt="Módulo de Transición" className="w-8 h-8 transition-all duration-300 group-hover:scale-110" />
                <div className="text-xs font-medium text-gray-900">Módulo de</div>
                <div className="text-xs text-gray-600">Transición</div>
              </div>
            </Button>

            <Button 
              variant="ghost" 
              className="h-20 bg-blue-50 hover:bg-blue-100 transition-all duration-300 hover:shadow-md border border-blue-200/30 group" 
              onClick={() => handleNavigation('/rendicion-cuentas')}
            >
              <div className="text-center flex flex-col items-center space-y-1">
                <img src="https://cdn-icons-png.flaticon.com/512/1055/1055645.png" alt="Rendición de Cuentas" className="w-8 h-8 transition-all duration-300 group-hover:scale-110" />
                <div className="text-xs font-medium text-gray-900">Rendición</div>
                <div className="text-xs text-gray-600">de Cuentas</div>
              </div>
            </Button>

            <Button 
              variant="ghost" 
              className="h-20 bg-blue-50 hover:bg-blue-100 transition-all duration-300 hover:shadow-md border border-blue-200/30 group" 
              onClick={() => handleNavigation('/registro-titulos')}
            >
              <div className="text-center flex flex-col items-center space-y-1">
                <img src="https://cdn-icons-png.flaticon.com/512/2920/2920349.png" alt="Registro de Títulos" className="w-8 h-8 transition-all duration-300 group-hover:scale-110" />
                <div className="text-xs font-medium text-gray-900">Registro</div>
                <div className="text-xs text-gray-600">de Títulos</div>
              </div>
            </Button>

            <Button 
              variant="ghost" 
              className="h-20 bg-blue-50 hover:bg-blue-100 transition-all duration-300 hover:shadow-md border border-blue-200/30 group" 
              onClick={() => handleNavigation('/bitacora-electronica')}
            >
              <div className="text-center flex flex-col items-center space-y-1">
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Bitácora Electrónica" className="w-8 h-8 transition-all duration-300 group-hover:scale-110" />
                <div className="text-xs font-medium text-gray-900">Bitácora</div>
                <div className="text-xs text-gray-600">Electrónica</div>
              </div>
            </Button>

            <Button 
              variant="ghost" 
              className="h-20 bg-green-50 hover:bg-green-100 transition-all duration-300 hover:shadow-md border border-green-200/30 group" 
              onClick={() => handleNavigation('/cgc-modulo-cuentadantes')}
            >
              <div className="text-center flex flex-col items-center space-y-1">
                <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="Módulo de Cuentadantes" className="w-8 h-8 transition-all duration-300 group-hover:scale-110" />
                <div className="text-xs font-medium text-gray-900">Módulo de</div>
                <div className="text-xs text-gray-600">Cuentadantes</div>
              </div>
            </Button>

            <Button 
              variant="ghost" 
              className="h-20 bg-blue-50 hover:bg-blue-100 transition-all duration-300 hover:shadow-md border border-blue-200/30 group" 
              onClick={() => handleNavigation('/palimnesto')}
            >
              <div className="text-center flex flex-col items-center space-y-1">
                <img src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png" alt="Palimnesto" className="w-8 h-8 transition-all duration-300 group-hover:scale-110" />
                <div className="text-xs font-medium text-gray-900">Palimnesto</div>
              </div>
            </Button>

            <Button 
              variant="ghost" 
              className="h-20 bg-blue-50 hover:bg-blue-100 transition-all duration-300 hover:shadow-md border border-blue-200/30 group" 
              onClick={() => handleNavigation('/sistema-nominas')}
            >
              <div className="text-center flex flex-col items-center space-y-1">
                <img src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png" alt="Sistema de Nóminas" className="w-8 h-8 transition-all duration-300 group-hover:scale-110" />
                <div className="text-xs font-medium text-gray-900">Sistema de</div>
                <div className="text-xs text-gray-600">Nóminas</div>
              </div>
            </Button>

            <Button 
              variant="ghost" 
              className="h-20 bg-blue-50 hover:bg-blue-100 transition-all duration-300 hover:shadow-md border border-blue-200/30 group" 
              onClick={() => handleNavigation('/registro-asesores')}
            >
              <div className="text-center flex flex-col items-center space-y-1">
                <img src="https://cdn-icons-png.flaticon.com/512/1055/1055645.png" alt="Registro de Asesores" className="w-8 h-8 transition-all duration-300 group-hover:scale-110" />
                <div className="text-xs font-medium text-gray-900">Registro de</div>
                <div className="text-xs text-gray-600">Asesores</div>
              </div>
            </Button>

            <Button 
              variant="ghost" 
              className="h-20 bg-blue-50 hover:bg-blue-100 transition-all duration-300 hover:shadow-md border border-blue-200/30 group" 
              onClick={() => handleNavigation('/sistema-registro-actas')}
            >
              <div className="text-center flex flex-col items-center space-y-1">
                <img src="https://cdn-icons-png.flaticon.com/512/2920/2920349.png" alt="Sistema Registro de Actas" className="w-8 h-8 transition-all duration-300 group-hover:scale-110" />
                <div className="text-xs font-medium text-gray-900">Sistema</div>
                <div className="text-xs text-gray-600">Registro de Actas</div>
              </div>
            </Button>

            <Button 
              variant="ghost" 
              className="h-20 bg-blue-50 hover:bg-blue-100 transition-all duration-300 hover:shadow-md border border-blue-200/30 group" 
              onClick={() => handleNavigation('/rendicion-cuentas-2')}
            >
              <div className="text-center flex flex-col items-center space-y-1">
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Rendición de Cuentas" className="w-8 h-8 transition-all duration-300 group-hover:scale-110" />
                <div className="text-xs font-medium text-gray-900">Rendición</div>
                <div className="text-xs text-gray-600">de Cuentas</div>
              </div>
            </Button>

            <Button 
              variant="ghost" 
              className="h-20 bg-blue-50 hover:bg-blue-100 transition-all duration-300 hover:shadow-md border border-blue-200/30 group" 
              onClick={() => handleNavigation('/formacion-capacitacion')}
            >
              <div className="text-center flex flex-col items-center space-y-1">
                <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="Formación y Capacitación" className="w-8 h-8 transition-all duration-300 group-hover:scale-110" />
                <div className="text-xs font-medium text-gray-900">Formación y</div>
                <div className="text-xs text-gray-600">Capacitación</div>
              </div>
            </Button>

            <Button 
              variant="ghost" 
              className="h-20 bg-blue-50 hover:bg-blue-100 transition-all duration-300 hover:shadow-md border border-blue-200/30 group" 
              onClick={() => handleNavigation('/declaraciones-bienes-muebles')}
            >
              <div className="text-center flex flex-col items-center space-y-1">
                <img src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png" alt="Declaraciones de Bienes Muebles" className="w-8 h-8 transition-all duration-300 group-hover:scale-110" />
                <div className="text-xs font-medium text-gray-900">Declaraciones de</div>
                <div className="text-xs text-gray-600">Bienes Muebles</div>
              </div>
            </Button>
          </div>
        </section>

        {/* PROGRAMAS DE PARTICIPACIÓN CIUDADANA */}
        <section ref={programasParticipacion.elementRef} className={`bg-white p-6 rounded-lg shadow-sm transition-all duration-1000 delay-400 ${programasParticipacion.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              PROGRAMAS DE PARTICIPACIÓN CIUDADANA
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              variant="ghost"
              className="h-auto p-4 bg-green-50 hover:bg-green-100 transition-all duration-300 
                hover:shadow-md border border-green-200/50 hover:border-green-300/50 group text-left"
              onClick={() => handleNavigation('/sembrando-semillas')}
            >
              <div className="flex items-center space-x-4 w-full">
                <div className="p-4 rounded bg-white/80 shadow-sm flex items-center justify-center min-w-[72px] min-h-[72px]">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/1161/1161388.png" 
                    alt="Sembrando Semillas" 
                    className="w-12 h-12"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-base">Sembrando Semillas</h3>
                  <p className="text-sm text-gray-600">Programa educativo</p>
                </div>
              </div>
            </Button>

            <Button
              variant="ghost"
              className="h-auto p-4 bg-blue-50 hover:bg-blue-100 transition-all duration-300 
                hover:shadow-md border border-blue-200/50 hover:border-blue-300/50 group text-left"
              onClick={() => handleNavigation('/organizaciones-padres-familia')}
            >
              <div className="flex items-center space-x-4 w-full">
                <div className="p-4 rounded bg-white/80 shadow-sm flex items-center justify-center min-w-[72px] min-h-[72px]">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/1055/1055645.png" 
                    alt="Organizaciones de Padres de Familia" 
                    className="w-12 h-12"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-base">OPF</h3>
                  <p className="text-sm text-gray-600">Organizaciones de Padres de Familia</p>
                </div>
              </div>
            </Button>

            <Button
              variant="ghost"
              className="h-auto p-4 bg-purple-50 hover:bg-purple-100 transition-all duration-300 
                hover:shadow-md border border-purple-200/50 hover:border-purple-300/50 group text-left"
              onClick={() => handleNavigation('/plan-capacitacion-etica')}
            >
              <div className="flex items-center space-x-4 w-full">
                <div className="p-4 rounded bg-white/80 shadow-sm flex items-center justify-center min-w-[72px] min-h-[72px]">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/2920/2920349.png" 
                    alt="Plan de Capacitación en Ética" 
                    className="w-12 h-12"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-base">Plan de Capacitación</h3>
                  <p className="text-sm text-gray-600">del Año de la Ética y Probidad 2021</p>
                </div>
              </div>
            </Button>
          </div>
        </section>

        {/* UNIDAD DE INFORMACIÓN PÚBLICA */}
        <section ref={informacionPublica.elementRef} className={`bg-white p-8 rounded-xl shadow-lg transition-all duration-1000 delay-500 ${informacionPublica.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              UNIDAD DE INFORMACIÓN PÚBLICA
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Haga click sobre el servicio de su interés. El enlace abrirá otra pestaña de su navegador.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Button
              variant="ghost"
              className="h-auto p-4 bg-transparent hover:bg-gray-50 transition-all duration-300 
                hover:scale-105 group text-center flex-col rounded-xl"
              onClick={() => handleNavigation('/informacion-publica-oficio')}
            >
              <div className="flex flex-col items-center space-y-3 w-full">
                <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/1055/1055645.png" 
                    alt="Información pública de oficio" 
                    className="w-10 h-10 filter brightness-0 invert"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 text-sm leading-tight">Información pública de oficio</h3>
                </div>
              </div>
            </Button>

            <Button
              variant="ghost"
              className="h-auto p-4 bg-transparent hover:bg-gray-50 transition-all duration-300 
                hover:scale-105 group text-center flex-col rounded-xl"
              onClick={() => handleNavigation('/solicitud-informacion')}
            >
              <div className="flex flex-col items-center space-y-3 w-full">
                <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/2920/2920349.png" 
                    alt="Solicitud de información pública" 
                    className="w-10 h-10 filter brightness-0 invert"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 text-sm leading-tight">Solicitud de información pública</h3>
                </div>
              </div>
            </Button>

            <Button
              variant="ghost"
              className="h-auto p-4 bg-transparent hover:bg-gray-50 transition-all duration-300 
                hover:scale-105 group text-center flex-col rounded-xl"
              onClick={() => handleNavigation('/gobierno-abierto')}
            >
              <div className="flex flex-col items-center space-y-3 w-full">
                <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png" 
                    alt="Gobierno Abierto" 
                    className="w-10 h-10 filter brightness-0 invert"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 text-sm leading-tight">Gobierno Abierto</h3>
                </div>
              </div>
            </Button>

            <Button
              variant="ghost"
              className="h-auto p-4 bg-transparent hover:bg-gray-50 transition-all duration-300 
                hover:scale-105 group text-center flex-col rounded-xl"
              onClick={() => handleNavigation('/guias-inclusion-laboral')}
            >
              <div className="flex flex-col items-center space-y-3 w-full">
                <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
                    alt="Guías de Inclusión Laboral" 
                    className="w-10 h-10 filter brightness-0 invert"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 text-sm leading-tight">Guías de Inclusión Laboral</h3>
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