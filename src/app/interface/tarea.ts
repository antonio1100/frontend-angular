export interface Tarea {
    id?: number;
    title: string;
    description?: string;
    status: 'pendiente' | 'en progreso' | 'completada';
    dueDate?: string;
    priority: boolean;
    category: 'trabajo' | 'estudio' | 'casa' | 'personal' | 'finanzas' | 'salud' | 'viaje' | 'social' | 'tecnología';
  }