EventChange: tipos, cuándo y qué hacen
Se generan en PUT /api/events/[id] al comparar el estado “antes” vs “después” del evento:

Se ejecutan cuando el valor de un campo cambió.
Se guardan en la tabla EventChangeLog y también se imprimen en la terminal.
Lista completa:

EVENT_UPDATED
Cuándo: siempre que hay algún cambio en cualquier campo.
Qué hace: marca que hubo una edición.
EVENT_FIELDS_CHANGED
Cuándo: si cambió al menos un campo (título, descripción, fecha, lugar).
Qué hace: resumen de que hubo cambios de campos.
EVENT_RENAMED
Cuándo: cambió el título.
Qué hace: etiqueta que el evento fue renombrado.
TITLE_CHANGED
Cuándo: cambió el valor de title.
Qué hace: registra old/new del título.
TITLE_CASE_OR_SPACING_CHANGED
Cuándo: el cambio fue solo por mayúsculas/minúsculas/espacios (mismo texto al normalizar).
Qué hace: precisa el tipo de cambio en el título.
TITLE_LENGTH_INCREASED
TITLE_LENGTH_DECREASED
Cuándo: el largo del título aumentó o disminuyó.
Qué hacen: clasifican el cambio de tamaño del título.
DESCRIPTION_CHANGED
Cuándo: cambió description.
Qué hace: registra old/new de la descripción.
DESCRIPTION_ADDED
DESCRIPTION_REMOVED
DESCRIPTION_LENGTH_CHANGED
Cuándo: se añadió, se quitó o cambió la longitud de la descripción.
Qué hacen: clasifican el tipo de cambio en descripción.
LOCATION_CHANGED
LOCATION_ADDED
LOCATION_REMOVED
Cuándo: cambió location (se puso, se quitó o cambió).
Qué hacen: registran old/new o el alta/baja del lugar.
SCHEDULE_CHANGED
Cuándo: hubo cambios en la fecha/hora en general.
Qué hace: etiqueta genérica de cambio de programación.
DATE_CHANGED
DATE_DAY_CHANGED
DATE_YEAR_CHANGED
DATE_MONTH_CHANGED
DATE_TIME_CHANGED
DATE_MOVED_FORWARD
DATE_MOVED_BACKWARD
Cuándo: cambios en la fecha/hora (día, año, mes, parte horaria) o si se movió hacia adelante/atrás.
Qué hacen: desglosan y clasifican el cambio temporal.
Dónde verlo:

BD: tabla EventChangeLog (campos eventId, changeType, field, oldValue, newValue).
Terminal: líneas [EventChange] … impresas durante el PUT.
Dónde está implementado
Generación y guardado: app/api/events/[id]/route.ts
Función buildEventChanges(before, after).
Dentro del PUT: se hace createMany en EventChangeLog y console.log por cada cambio.
Modelo: prisma/schema.prisma (EventChangeLog + relación con Event).
Resumen del programa
Frontend (Next.js App Router):
/events: lista con acciones.
/events/new: formulario de creación.
/events/[id]/edit: edición con carga previa y guardado.
Estilos en app/events/events.module.css.
API (REST):
/api/events (GET, POST).
/api/events/[id] (GET, PUT, DELETE; en Next 16 se usa await params).
Base de datos (PostgreSQL + Prisma):
Modelos: Event, Client, AuditLog, EventChangeLog.
Conexión: .env → DATABASE_URL; cliente en lib/prisma.ts.
Migraciones y seed disponibles (20 eventos de ejemplo, clientes y auditoría de clientes).
Cómo probar los cambios:

Edita un evento en /events/[id]/edit y guarda.
Observa la terminal (npm run dev) para ver los logs [EventChange].
Revisa la tabla "EventChangeLog" en Prisma Studio (npx prisma studio) o pgAdmin.