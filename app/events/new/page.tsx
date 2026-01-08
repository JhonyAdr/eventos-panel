"use client";

// Página para crear un evento
// - Envía un POST a /api/events con los datos del formulario
// - Redirige a /events al guardar correctamente
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import styles from '../events.module.css';

export default function NewEventPage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Envío del formulario: crea un nuevo evento vía API
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    const res = await fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, date, location }),
    });
    setSaving(false);
    if (res.ok) router.push('/events');
    else setError('No se pudo crear el evento');
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Crear evento</h1>
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
            <span className={styles.helper}>Opcional</span>
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Fecha y hora</label>
            <input className={styles.input} type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} required />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Lugar</label>
            <input className={styles.input} value={location} onChange={(e) => setLocation(e.target.value)} />
            <span className={styles.helper}>Opcional</span>
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
