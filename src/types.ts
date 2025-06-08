// types.ts
export interface Doctor {
  id: string;
  name: string;
  specialization: 'терапевт' | 'хирург' | 'ортодонт' | 'педиатр' | 'Гигиенист' | 'Детский стоматолог' | 'Анастезиолог';
  videoFileName: string; 
}

export type SpecializationFilter = 'все' | Doctor['specialization'];