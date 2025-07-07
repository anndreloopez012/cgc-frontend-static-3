
import React, { useState } from 'react';
import Header from '@/components/Header';
import SidebarMenu from '@/components/SidebarMenu';
import SidebarDrawer from '@/components/SidebarDrawer';
import HomeContent from '@/components/HomeContent';
import SocialMediaSection from '@/components/SocialMediaSection';

/**
 * Página Index (Home) - Actualizada
 * 
 * Layout simplificado:
 * - Header fijo en la parte superior con botón de menú lateral
 * - Contenido principal en grid de 2 columnas en desktop
 * - Menú lateral en la primera columna (oculto en móvil)
 * - Contenido principal con slider y secciones en la segunda columna
 * - Drawer del menú lateral para móviles/tablets
 * - Sección de redes sociales al final
 * - En móvil, solo se muestra el contenido principal
 * 
 * Compatible con React + Astro
 */
const Index = () => {
  const [isSidebarDrawerOpen, setIsSidebarDrawerOpen] = useState(false);

  const handleOpenSidebarDrawer = () => {
    setIsSidebarDrawerOpen(true);
  };

  const handleCloseSidebarDrawer = () => {
    setIsSidebarDrawerOpen(false);
  };

  return (
    <div className="min-h-screen bg-background font-inter">
      <Header 
        showSidebarButton={true}
        onSidebarButtonClick={handleOpenSidebarDrawer}
      />
      
      {/* Layout principal estilo gobierno */}
      <div className="max-w-7xl mx-auto flex">
        {/* Menú lateral - Solo visible en desktop */}
        <aside className="hidden lg:block lg:w-80 xl:w-96 flex-shrink-0">
          <div className="sticky top-6 p-6">
            <SidebarMenu />
          </div>
        </aside>

        {/* Contenido principal */}
        <main className="flex-1 min-w-0 px-4 sm:px-6">
          {/* Contenido principal de la página con slider */}
          <HomeContent />
        </main>
      </div>

      {/* Drawer del menú lateral para móviles/tablets */}
      <SidebarDrawer 
        isOpen={isSidebarDrawerOpen}
        onClose={handleCloseSidebarDrawer}
      />
    </div>
  );
};

export default Index;
