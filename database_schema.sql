-- Esquema de Base de Datos Inicial para Core (Gestión de Estancias Infantiles)
-- Diseñado para entornos híbridos (soportado por PostgreSQL / SQLite)

-- 1. Tabla de Niños
CREATE TABLE children (
    id UUID PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    date_of_birth DATE,
    tutor_name VARCHAR(150) NOT NULL,
    tutor_phone VARCHAR(20) NOT NULL,
    authorized_pickup_name VARCHAR(150),
    active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Tabla de Paquetes / Modalidades
CREATE TABLE packages (
    id UUID PRIMARY KEY,
    name VARCHAR(100) NOT NULL, -- Ej: 'Curso', 'Consejo técnico', 'Por hora'
    duration_minutes INT,       -- NULL si es tiempo libre
    fixed_price DECIMAL(10, 2), -- Precio si aplica tarifa fija
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Tabla de Estancias (Control de Tiempo)
CREATE TABLE stays (
    id UUID PRIMARY KEY,
    child_id UUID NOT NULL REFERENCES children(id),
    package_id UUID REFERENCES packages(id),
    entry_time TIMESTAMP NOT NULL,
    exit_time TIMESTAMP,
    status VARCHAR(20) DEFAULT 'active', -- 'active' o 'completed'
    total_calculated_cost DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Tabla de Inventario / Cafetería
CREATE TABLE inventory_items (
    id UUID PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL, -- Ej: 'Snacks', 'Manualidades', 'Bebidas'
    stock_quantity INT NOT NULL DEFAULT 0,
    unit_price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 5. Tabla de Consumos Extras (Vinculado a una Estancia)
CREATE TABLE consumptions (
    id UUID PRIMARY KEY,
    stay_id UUID NOT NULL REFERENCES stays(id),
    inventory_item_id UUID NOT NULL REFERENCES inventory_items(id),
    quantity INT NOT NULL DEFAULT 1,
    unit_price DECIMAL(10, 2) NOT NULL, -- Precio histórico de venta
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
