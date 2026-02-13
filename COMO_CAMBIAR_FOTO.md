# 📸 Cómo Cambiar Tu Foto de Perfil

## 📍 Ubicación de la Foto

Tu foto de perfil se encuentra en:
```
src/assets/img/MiFoto.png
```

## 🔄 Pasos para Cambiar la Foto

### Opción 1: Reemplazar el archivo existente (Más fácil)

1. **Prepara tu foto:**
   - Asegúrate de que tu foto esté en formato `.png`, `.jpg`, o `.webp`
   - Recomendado: una foto cuadrada (por ejemplo, 512x512px o 1024x1024px)
   - Nombre sugerido: guarda tu foto con cualquier nombre temporal

2. **Reemplaza la foto:**
   - Navega hasta la carpeta: `src/assets/img/`
   - Elimina o renombra el archivo `MiFoto.png` existente
   - Copia tu nueva foto en esta carpeta
   - Renombra tu nueva foto como `MiFoto.png`

3. **¡Listo!** La foto se actualizará automáticamente en todas las páginas.

### Opción 2: Usar un nombre diferente

Si prefieres usar un nombre diferente para tu foto (por ejemplo, `mi-foto-perfil.png`):

1. **Coloca tu foto:**
   - Copia tu foto a la carpeta `src/assets/img/`
   - Por ejemplo: `src/assets/img/mi-foto-perfil.png`

2. **Actualiza las referencias en el código:**
   
   Deberás cambiar la importación en estos 3 archivos:

   **Archivo 1:** `src/components/about/aboutMe.astro`
   ```diff
   - import MiFoto from "../../assets/img/MiFoto.png";
   + import MiFoto from "../../assets/img/mi-foto-perfil.png";
   ```

   **Archivo 2:** `src/components/home/aboutHome/aboutHome.astro`
   ```diff
   - import MiFoto from "../../../assets/img/MiFoto.png";
   + import MiFoto from "../../../assets/img/mi-foto-perfil.png";
   ```

   **Archivo 3:** `src/pages/contact.astro`
   ```diff
   - import MiFoto from "../assets/img/MiFoto.png";
   + import MiFoto from "../assets/img/mi-foto-perfil.png";
   ```

## 📱 Dónde Aparece Tu Foto

Tu foto se muestra en 3 lugares del sitio:

1. **Página de Inicio** (`/`) - Sección "Sobre Mí"
2. **Página Sobre Mí** (`/about`) - Sección principal
3. **Página de Contacto** (`/contact`) - Encabezado con animación circular

## 🎨 Recomendaciones para Tu Foto

- **Formato:** PNG o JPG (PNG recomendado para mejor calidad)
- **Tamaño:** Mínimo 512x512px, recomendado 1024x1024px o mayor
- **Aspecto:** Cuadrada (1:1) para mejor visualización
- **Fondo:** Preferiblemente con fondo limpio o transparente (si usas PNG)
- **Peso:** Intenta mantenerla bajo 500KB para optimizar la carga

## ✅ Verificar los Cambios

Después de cambiar la foto, ejecuta:

```bash
npm run dev
```

Luego abre tu navegador en `http://localhost:4321` y verifica que la foto se vea correctamente en:
- Página principal (inicio)
- Página "Sobre Mí"
- Página de contacto

## 🚀 Publicar los Cambios

Una vez que estés satisfecho con la nueva foto:

```bash
git add src/assets/img/
git commit -m "Actualizar foto de perfil"
git push
```

---

**¿Necesitas ayuda?** Si tienes problemas, verifica que:
- El nombre del archivo coincida exactamente (incluyendo mayúsculas/minúsculas)
- La foto esté en la carpeta correcta (`src/assets/img/`)
- El formato del archivo sea compatible (`.png`, `.jpg`, `.jpeg`, `.webp`)
