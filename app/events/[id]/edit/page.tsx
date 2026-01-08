"use client";

// Página para editar un evento existente
// - Carga datos desde /api/events/[id]
// - Envía cambios con PUT a /api/events/[id]
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from '../../events.module.css';

export default function EditEventPage() {
  const router = useRouter();
  const params = useParams();
  const id = Number(params?.id);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Cargar datos del evento al montar
  useEffect(() => {
    (async () => {
      const res = await fetch(`/api/events/${id}`);
      if (!res.ok) {
        setError('No se pudo cargar el evento');
        setLoading(false);
        return;
      }
      const ev = await res.json();
      setTitle(ev.title || '');
      setDescription(ev.description || '');
      setLocation(ev.location || '');
      // convertir fecha a input datetime-local
      const dt = new Date(ev.date);
      const tz = new Date(dt.getTime() - dt.getTimezoneOffset() * 60000)
        .toISOString()
        .slice(0, 16);
      setDate(tz);
      setLoading(false);
    })();
  }, [id]);

  // Guardar cambios del evento
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    const res = await fetch(`/api/events/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, date, location }),
    });
    setSaving(false);
    if (res.ok) router.push('/events');
    else setError('No se pudo actualizar el evento');
  };

  if (loading) return <div className={styles.container}><div className={styles.card}>Cargando...</div></div>;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Editar evento</h1>
        <div className={styles.actions}>
          <Link href="/events" className={styles.btn}>Volver</Link>
        </div>
      </div>
      <div className={styles.card}>
        <form onSubmit={onSubmit} className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label}>Título</label>
            <input className={styles.input} value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Descripción</label>
            <textarea className={styles.textarea} value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Fecha y hora</label>
            <input className={styles.input} type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} required />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Lugar</label>
            <input className={styles.input} value={location} onChange={(e) => setLocation(e.target.value)} />
          </div>
          {error && <div className={styles.error}>{error}</div>}
          <div className={styles.actions}>
            <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`} disabled={saving}>
              {saving ? 'Guardando...' : 'Guardar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

