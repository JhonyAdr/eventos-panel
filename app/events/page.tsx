"use client";

// Página de listado de eventos
// - Obtiene datos desde /api/events
// - Muestra tabla con acciones (Editar/Eliminar)
// - Usa CSS module para estilos consistentes
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './events.module.css';

type Event = {
  id: number;
  title: string;
  description?: string | null;
  date: string;
  location?: string | null;
};

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    try {
      // Llamada a la API para listar eventos
      const res = await fetch('/api/events');
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.error || 'Error de servidor');
      }
      const data = await res.json();
      setEvents(data);
    } catch (e: any) {
      setError(e?.message || 'No se pudieron cargar los eventos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  // Eliminar evento y refrescar listado
  const onDelete = async (id: number) => {
    if (!confirm('¿Eliminar este evento?')) return;
    const res = await fetch(`/api/events/${id}`, { method: 'DELETE' });
    if (res.ok) load();
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Eventos</h1>
        <div className={styles.actions}>
          <Link href="/events/new" className={`${styles.btn} ${styles.btnPrimary}`}>Crear evento</Link>
        </div>
      </div>

      {loading && <div className={styles.card}>Cargando...</div>}
      {error && <div className={styles.error}>{error}</div>}
      {!loading && events.length === 0 && <div className={styles.empty}>No hay eventos</div>}

      {!loading && events.length > 0 && (
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.tr}>
                <th className={styles.th}>Título</th>
                <th className={styles.th}>Fecha</th>
                <th className={styles.th}>Lugar</th>
                <th className={styles.th}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {events.map((ev) => (
                <tr key={ev.id} className={styles.tr}>
                  <td className={styles.td}>{ev.title}</td>
                  <td className={styles.td}>{new Date(ev.date).toLocaleString()}</td>
                  <td className={styles.td}>{ev.location || '-'}</td>
                  <td className={styles.td}>
                    <div className={styles.actionsRow}>
                      <Link href={`/events/${ev.id}/edit`} className={`${styles.btn}`}>Editar</Link>
                      <button className={`${styles.btn} ${styles.btnDanger}`} onClick={() => onDelete(ev.id)}>Eliminar</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
