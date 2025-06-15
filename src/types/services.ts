export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  price: string;
}

export interface QuizQuestion {
  question: string;
  options: {
    text: string;
    service: string;
  }[];
}

// Добавляем экспорт типа для формы
export interface AppointmentFormData {
  name: string;
  phone: string;
  email: string;
  service?: string;
  date?: string;
  comment?: string;
}