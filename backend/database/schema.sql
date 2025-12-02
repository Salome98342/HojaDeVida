-- ============================================
-- SCHEMA PARA HOJA DE VIDA
-- Tablas: messages (contacto) y commissions (solicitudes de comisiones)
-- (Perfil, habilidades y proyectos están hardcodeados en el frontend)
-- ============================================

-- Tabla de Mensajes de Contacto
CREATE TABLE IF NOT EXISTS messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(255),
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índice para mejorar el rendimiento en consultas por fecha
CREATE INDEX IF NOT EXISTS idx_messages_created_at ON messages(created_at DESC);

-- Habilitar Row Level Security (RLS)
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Política: Cualquiera puede insertar mensajes (formulario de contacto público)
CREATE POLICY "Enable insert access for all users" 
  ON messages 
  FOR INSERT 
  WITH CHECK (true);

-- Política: Solo usuarios autenticados pueden leer mensajes (opcional)
-- Si quieres que solo tú puedas ver los mensajes, descomenta esta línea:
-- CREATE POLICY "Enable read access for authenticated users only" 
--   ON messages 
--   FOR SELECT 
--   USING (auth.role() = 'authenticated');

-- ============================================
-- TABLA DE SOLICITUDES DE COMISIONES
-- ============================================

CREATE TABLE IF NOT EXISTS commissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  commission_type VARCHAR(50) NOT NULL CHECK (commission_type IN ('character-sheet', 'fanart', 'portrait', 'full-body')),
  description TEXT NOT NULL,
  reference_links TEXT,
  budget VARCHAR(100),
  deadline DATE,
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'in-progress', 'completed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para mejorar rendimiento
CREATE INDEX IF NOT EXISTS idx_commissions_created_at ON commissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_commissions_status ON commissions(status);
CREATE INDEX IF NOT EXISTS idx_commissions_type ON commissions(commission_type);

-- Habilitar Row Level Security (RLS)
ALTER TABLE commissions ENABLE ROW LEVEL SECURITY;

-- Política: Cualquiera puede insertar solicitudes de comisión
CREATE POLICY "Enable insert access for commission requests" 
  ON commissions 
  FOR INSERT 
  WITH CHECK (true);

-- Política: Solo usuarios autenticados pueden leer/actualizar comisiones
CREATE POLICY "Enable read access for authenticated users only" 
  ON commissions 
  FOR SELECT 
  USING (auth.role() = 'authenticated');

CREATE POLICY "Enable update access for authenticated users only" 
  ON commissions 
  FOR UPDATE 
  USING (auth.role() = 'authenticated');
