# 🗄️ Configuración de Base de Datos

## Tabla de Comisiones Agregada

Se ha agregado la tabla `commissions` para almacenar las solicitudes de comisiones de arte.

## 📋 Pasos para Actualizar la Base de Datos

### Opción 1: Supabase Dashboard (Recomendado)

1. Ve a tu proyecto en [Supabase](https://supabase.com/dashboard)
2. En el menú lateral, selecciona **SQL Editor**
3. Crea una nueva query
4. Copia y pega el contenido de `backend/database/schema.sql`
5. Haz clic en **Run** para ejecutar el script

### Opción 2: CLI de Supabase

```bash
# Si tienes Supabase CLI instalado
supabase db push
```

## 📊 Estructura de la Tabla `commissions`

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | UUID | ID único (generado automáticamente) |
| `name` | VARCHAR(255) | Nombre del cliente |
| `email` | VARCHAR(255) | Email del cliente |
| `commission_type` | VARCHAR(50) | Tipo de comisión ('character-sheet', 'fanart', 'portrait', 'full-body') |
| `description` | TEXT | Descripción del proyecto |
| `reference_links` | TEXT | Enlaces de referencia o descripciones |
| `budget` | VARCHAR(100) | Presupuesto del cliente |
| `deadline` | DATE | Fecha límite deseada |
| `status` | VARCHAR(20) | Estado ('pending', 'in-progress', 'completed', 'cancelled') |
| `created_at` | TIMESTAMP | Fecha de creación |
| `updated_at` | TIMESTAMP | Fecha de última actualización |

## 🔐 Políticas de Seguridad (RLS)

- ✅ **INSERT**: Cualquier persona puede enviar una solicitud (formulario público)
- 🔒 **SELECT**: Solo usuarios autenticados pueden ver las comisiones
- 🔒 **UPDATE**: Solo usuarios autenticados pueden actualizar el estado
- 🔒 **DELETE**: Solo usuarios autenticados pueden eliminar

## 🚀 API Endpoints

### Público
- `POST /api/commissions` - Crear nueva solicitud de comisión

### Privado (requiere autenticación)
- `GET /api/commissions` - Obtener todas las comisiones
- `GET /api/commissions/:id` - Obtener una comisión específica
- `PATCH /api/commissions/:id/status` - Actualizar estado de comisión
- `DELETE /api/commissions/:id` - Eliminar comisión

## 📝 Parámetros de Filtrado

Al obtener todas las comisiones, puedes filtrar por:
- `?status=pending` - Filtrar por estado
- `?type=character-sheet` - Filtrar por tipo de comisión

Ejemplo: `GET /api/commissions?status=pending&type=fanart`

## 🔍 Ver las Comisiones

Para ver las comisiones recibidas, puedes:

1. **Supabase Dashboard**:
   - Table Editor → `commissions`

2. **Crear un panel admin** (futuro):
   - Página protegida con autenticación
   - Lista de todas las comisiones
   - Actualizar estados
   - Ver detalles completos

## ⚠️ Importante

Después de ejecutar el schema SQL:
1. Verifica que las tablas se crearon correctamente
2. Prueba enviando una comisión desde el formulario
3. Verifica en Supabase que se guardó correctamente
