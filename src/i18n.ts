import type { Goal, Language, Level } from "./types";

export interface Dictionary {
  nav: {
    entrenar: string;
    nutricion: string;
    progreso: string;
    coach: string;
    ajustes: string;
  };
  brand: { name: string; tagline: string; badge: string };
  onboarding: {
    headerTitle: string;
    stepOf: (step: number, total: number) => string;
    languages: { code: Language; label: string; sub: string }[];
    step1: { badge: string; title: string; subtitle: string };
    step2: {
      badge: string;
      title: string;
      subtitle: string;
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
    };
    step3: {
      badge: string;
      title: string;
      subtitle: string;
      goals: { code: Goal; icon: string; title: string; desc: string }[];
    };
    step4: {
      badge: string;
      title: string;
      subtitle: string;
      levels: { code: Level; title: string; desc: string }[];
    };
    step5: { badge: string; title: string; subtitle: string; perWeek: string };
    step6: {
      badge: string;
      titlePrefix: string;
      defaultName: string;
      subtitle: string;
      profileBadge: string;
      objetivoLabel: string;
      nivelLabel: string;
      coachMessage: string;
    };
    goalLabels: Record<Goal, string>;
    levelLabels: Record<Level, string>;
    continueBtn: string;
    backBtn: string;
    finishBtn: string;
  };
  entrenar: {
    weekdays: string[];
    months: string[];
    greeting: (name: string) => string;
    coachMessageLabel: string;
    messages: string[];
    tipLabel: string;
    tipText: string;
    challengeBadge: string;
    hello: (name: string) => string;
    challengeDesc: string;
    libraryBtn: string;
    dayOf28: (n: number) => string;
    doneTitle: string;
    notDoneTitle: string;
    daysLeftDesc: string;
    todayWorkoutTitle: string;
    dayWeek: (d: number, w: number) => string;
    kcalLabel: (k: number) => string;
    exercisesCount: (n: number) => string;
    startBtn: string;
    doneBtn: string;
    scheduleTitle: string;
    seeAll: string;
    seeLess: string;
    weekdayDayWeek: (wd: string, d: number, w: number) => string;
    weekGoalTitle: string;
    weekGoalDesc: (freq: number, done: number) => string;
    intensities: { Media: string; Alta: string; Baja: string };
  };
  plan: { titles: string[]; exercises: string[] };
  nutricion: {
    headerBadge: string;
    title: string;
    subtitle: string;
    paramsTitle: string;
    weightLabel: string;
    heightLabel: string;
    ageLabel: string;
    biotypeLabel: string;
    biotypes: { value: "ecto" | "meso" | "endo"; title: string; desc: string }[];
    activityLabel: string;
    activityLevels: { value: number; label: string }[];
    goalLabel: string;
    goals: { value: "hipertrofia" | "definir" | "tonificar"; title: string; desc: string }[];
    mealsLabel: string;
    mealsOption: (n: number) => string;
    calculateBtn: string;
    dailyGoalTitle: string;
    kcalPerDay: (n: number) => string;
    bmrTdee: (bmr: number, tdee: number) => string;
    macroShort: { prot: string; carb: string; grasa: string };
    macroStats: { proteinas: string; carbohidratos: string; grasas: string; agua: string };
    perKg: string;
    fiberPerDay: (n: number) => string;
    goldenRuleLabel: string;
    goldenRuleText: string;
    mealDistribution: (n: number) => string;
    mealLabel: (n: number) => string;
    mealMacro: (kcal: number, p: number, c: number, g: number) => string;
    foodsTitle: string;
    foodGroups: { icon: string; title: string; items: string[] }[];
  };
  progreso: {
    privacyNote: string;
    checkpointsTitle: string;
    checkpoints: { key: string; icon: string; label: string }[];
    statLabels: { streak: string; workouts: string; minutes: string };
    weeklyFreqTitle: string;
    last4Weeks: string;
    weekLabel: (n: number) => string;
    beforeAfterTitle: string;
    photoStart: string;
    photoCurrent: string;
    tapToAddPhoto: string;
    photosEncouragement: string;
    recordsTitle: string;
    newRecordBtn: string;
    recordNamePlaceholder: string;
    recordValuePlaceholder: string;
    saveBtn: string;
    noRecords: string;
    noRecordsHint: string;
  };
  coach: {
    verifiedBadge: string;
    coachName: string;
    coachSpecialty: string;
    coachQuote: string;
    challengeBadge: string;
    challengeTitle: string;
    challengeDesc: string;
    noEquipment: string;
    daysToChange: string;
    modulesTitle: string;
    includedBadge: string;
    modules: { icon: string; title: string; desc: string; cta: string }[];
    bonusesTitle: string;
    bonuses: { icon: string; title: string; desc: string }[];
    testimonialsTitle: string;
    testimonialsSubtitle: string;
    testimonials: { initial: string; name: string; days: string; quote: string }[];
    connectTitle: string;
    instagram: string;
    youtube: string;
    email: string;
  };
  ajustes: {
    languageTitle: string;
    languages: { code: Language; flag: string; label: string }[];
    notificationsTitle: string;
    notificationsSubtitle: string;
    reminder1: { time: string; title: string; desc: string };
    reminder2: { time: string; title: string; desc: string };
    statusLabel: string;
    statusValues: { none: string; unsupported: string; granted: string; blocked: string };
    testNotificationBtn: string;
    notificationTitle: string;
    notificationBody: string;
    privacyNote: string;
    accountTitle: string;
    nameLabel: string;
    emailLabel: string;
    saveBtn: string;
    savedBtn: string;
    soundTitle: string;
    soundDesc: string;
    resetBtn: string;
    resetConfirm: string;
  };
}

const es: Dictionary = {
  nav: {
    entrenar: "Entrenar",
    nutricion: "Nutrición",
    progreso: "Progreso",
    coach: "Coach",
    ajustes: "Ajustes",
  },
  brand: {
    name: "Glúteos by Jeza",
    tagline: "Método Glúteos & Tren Inferior",
    badge: "Mente & Biomecánica",
  },
  onboarding: {
    headerTitle: "Glúteos by Jeza · Registro",
    stepOf: (s, t) => `Paso ${s} de ${t}`,
    languages: [
      { code: "es", label: "Español", sub: "Español (América Latina / España)" },
      { code: "en", label: "English", sub: "English (United States / Global)" },
      { code: "pt", label: "Português", sub: "Português (Brasil)" },
    ],
    step1: {
      badge: "Idioma",
      title: "Elige tu idioma",
      subtitle: "Selecciona en qué idioma deseas ver la aplicación y tus entrenamientos.",
    },
    step2: {
      badge: "Registro",
      title: "¡Bienvenida al Desafío!",
      subtitle: "Para registrar tu perfil y personalizar tu progreso, ingresa tu nombre y correo.",
      nameLabel: "Tu nombre",
      namePlaceholder: "Ej: Jesica",
      emailLabel: "Tu correo electrónico",
      emailPlaceholder: "Ej: jesica@email.com",
    },
    step3: {
      badge: "Objetivo",
      title: "¿Qué es lo que más deseas lograr?",
      subtitle: "Selecciona el enfoque principal de tu transformación en los próximos 28 días.",
      goals: [
        { code: "volumen", icon: "↗", title: "Aumentar Volumen e Hipertrofia", desc: "Enfoque en hipertrofia del glúteo mayor y forma redondeada." },
        { code: "definir", icon: "⚡", title: "Definir y Levantar", desc: "Trabajo de glúteo medio y elevación para un aspecto firme." },
        { code: "grasa", icon: "🔥", title: "Reducir Grasa y Celulitis", desc: "Estímulo metabólico de alta densidad para quema calórica." },
        { code: "postura", icon: "🦴", title: "Fortalecimiento y Postura", desc: "Activación biomecánica para protección lumbar y estabilidad." },
      ],
    },
    step4: {
      badge: "Nivel",
      title: "¿Cuál es tu nivel de entrenamiento?",
      subtitle: "Esto ayudará a calibrar los intervalos de tu entrenamiento.",
      levels: [
        { code: "principiante", title: "Principiante", desc: "Comenzando ahora o inactiva desde hace tiempo." },
        { code: "intermedia", title: "Intermedia", desc: "Practico ejercicio de forma ocasional." },
        { code: "avanzada", title: "Avanzada", desc: "Entreno regularmente y busco máxima intensidad." },
      ],
    },
    step5: {
      badge: "Frecuencia",
      title: "¿Cuántas veces a la semana quieres entrenar?",
      subtitle: "Define tu meta semanal de entrenamientos para seguir tu panel.",
      perWeek: "por semana",
    },
    step6: {
      badge: "¡Perfil Listo!",
      titlePrefix: "¡Registro Confirmado, ",
      defaultName: "Alumna",
      subtitle: "Tu plan de 28 días ha sido configurado con éxito bajo tu guía personalizada.",
      profileBadge: "Alumna Registrada",
      objetivoLabel: "Objetivo",
      nivelLabel: "Nivel",
      coachMessage: '"El progreso vendrá de la consistencia diaria. Cada repetición activará tus fibras profundas."',
    },
    goalLabels: { volumen: "Volumen", definir: "Definición", grasa: "Grasa", postura: "Postura" },
    levelLabels: { principiante: "Iniciante", intermedia: "Intermedia", avanzada: "Avanzada" },
    continueBtn: "Continuar →",
    backBtn: "Volver",
    finishBtn: "Acceder a mi panel 🚀",
  },
  entrenar: {
    weekdays: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
    months: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
    greeting: (name) => `Buenas, ${name} · Seguimiento en tiempo real`,
    coachMessageLabel: "Mensaje del Coach · Día 1",
    messages: [
      "La disciplina de hoy es el cuerpo firme y definido que verás en el espejo en pocos días.",
      "Cada repetición de hoy es una inversión en la mujer que quieres ver mañana.",
      "No esperes la motivación: empieza el entrenamiento y la motivación llegará con el movimiento.",
      "Tu constancia de hoy vale más que la intensidad de un solo día.",
    ],
    tipLabel: "💡 Consejo biomecánico del día:",
    tipText: "No esperes la motivación: empieza el entrenamiento y la motivación llegará con el movimiento.",
    challengeBadge: "Desafío de Glúteos de 28 Días",
    hello: (name) => `Hola, ${name}!`,
    challengeDesc: "Tu entrenamiento de hoy se enfoca en la activación profunda de las fibras para un glúteo redondeado.",
    libraryBtn: "🏋️ Biblioteca (16 Ejercicios)",
    dayOf28: (n) => `Día ${n} de 28`,
    doneTitle: "¡Entrenamiento completado!",
    notDoneTitle: "¡Lo estás haciendo genial!",
    daysLeftDesc: "Solo quedan 28 días para tu transformación completa. El enfoque de hoy es activación y volumen.",
    todayWorkoutTitle: "🔥 Entrenamiento de Hoy",
    dayWeek: (d, w) => `Día ${d} · Sem ${w}`,
    kcalLabel: (k) => `~${k} kcal`,
    exercisesCount: (n) => `${n} ejercicios enfocados en biomecánica en casa.`,
    startBtn: "▶ Iniciar Entreno",
    doneBtn: "✓ Entreno Completado",
    scheduleTitle: "Cronograma Semanal",
    seeAll: "📅 Ver los 28 Días",
    seeLess: "📅 Ver Menos",
    weekdayDayWeek: (wd, d, w) => `${wd} · Día ${d} · Sem ${w}`,
    weekGoalTitle: "Meta de la Semana",
    weekGoalDesc: (freq, done) => `Completar ${freq} entrenamientos intensos. ¡Ya hiciste ${done}!`,
    intensities: { Media: "Media Intensidad", Alta: "Alta Intensidad", Baja: "Baja Intensidad" },
  },
  plan: {
    titles: [
      "Activación y Despertar del Glúteo",
      "Hipertrofia y Volumen Lateral",
      "Glúteo Máximo y Posterior Profundo",
      "Fuerza y Estabilidad de Cadera",
      "Volumen Total + Core",
      "Movilidad y Activación Ligera",
      "Descanso Activo",
    ],
    exercises: [
      "Puente de Glúteo en el Suelo",
      "Abducción de Cadera Acostada",
      "Patada de Glúteo (Donkey Kick)",
      "Puente Frog Pump (Planta con Planta)",
      "Sentadilla Sumo con Peso Corporal",
      "Zancada Inversa",
      "Elevación de Cadera a Una Pierna",
      "Caminata con Banda Elástica",
    ],
  },
  nutricion: {
    headerBadge: "Nutrición de Alta Performance",
    title: "Calculadora de Macros",
    subtitle: "Calculá tus macronutrientes exactos para maximizar el crecimiento glúteo de tu desafío de 28 días.",
    paramsTitle: "Parámetros",
    weightLabel: "Peso (kg)",
    heightLabel: "Altura (cm)",
    ageLabel: "Edad",
    biotypeLabel: "Biotipo corporal",
    biotypes: [
      { value: "ecto", title: "Ectomorfo", desc: "Metabolismo rápido" },
      { value: "meso", title: "Mesomorfo", desc: "Equilibrio muscular" },
      { value: "endo", title: "Endomorfo", desc: "Sensible a carbohidratos" },
    ],
    activityLabel: "Nivel de actividad",
    activityLevels: [
      { value: 1.2, label: "Sedentaria / poco movimiento" },
      { value: 1.375, label: "Entreno leve 1-2x por semana" },
      { value: 1.55, label: "Desafío 28D moderado 3-4x/sem" },
      { value: 1.725, label: "Entreno intenso 5-6x por semana" },
      { value: 1.9, label: "Atleta / doble turno" },
    ],
    goalLabel: "Objetivo principal",
    goals: [
      { value: "hipertrofia", title: "Hipertrofia Glútea", desc: "+300 kcal superávit" },
      { value: "definir", title: "Secar y Definir", desc: "-300 kcal, preservando músculo" },
      { value: "tonificar", title: "Tonificar / Recomposición", desc: "Mantenimiento" },
    ],
    mealsLabel: "Comidas por día",
    mealsOption: (n) => `${n} comidas`,
    calculateBtn: "⚡ Calcular Macronutrientes",
    dailyGoalTitle: "Meta Calórica Diaria",
    kcalPerDay: (n) => `${n} kcal/día`,
    bmrTdee: (bmr, tdee) => `TMB: ${bmr} kcal · Gasto diario: ${tdee} kcal`,
    macroShort: { prot: "Prot", carb: "Carb", grasa: "Grasa" },
    macroStats: { proteinas: "Proteínas", carbohidratos: "Carbohidratos", grasas: "Grasas Buenas", agua: "Agua Diaria" },
    perKg: "g / kg",
    fiberPerDay: (n) => `Fibra: ${n}g/día`,
    goldenRuleLabel: "🧠 Regla de oro:",
    goldenRuleText: "Repartí entre 25 y 35g de proteína en cada comida y priorizá carbohidratos antes y después de entrenar para maximizar la activación glútea.",
    mealDistribution: (n) => `🍽️ Distribución por Comida (${n}x al día)`,
    mealLabel: (n) => `Comida ${n}`,
    mealMacro: (kcal, p, c, g) => `~${kcal} kcal · P ${p}g · C ${c}g · G ${g}g`,
    foodsTitle: "Alimentos Recomendados",
    foodGroups: [
      { icon: "💪", title: "Proteínas nobles", items: ["Pechuga de pollo grillada", "Huevos enteros", "Filet de merluza / salmón", "Carne magra picada", "Yogur griego natural", "Whey protein"] },
      { icon: "🌾", title: "Carbohidratos complejos", items: ["Batata / camote", "Avena en hojuelas", "Arroz integral", "Banana con canela (pre-entreno)", "Frutos rojos"] },
      { icon: "🥑", title: "Grasas hormonales", items: ["Aceite de oliva extra virgen", "Palta / aguacate", "Almendras y nueces", "Semillas de chía / lino"] },
    ],
  },
  progreso: {
    privacyNote: "🔒 App 100% privada · Tu progreso, fotos y checkpoints se guardan únicamente en tu dispositivo.",
    checkpointsTitle: "✅ Checkpoints de Hoy",
    checkpoints: [
      { key: "workout", icon: "🏋️", label: "Entrenamiento de glúteos completado" },
      { key: "protein", icon: "🍗", label: "Meta de proteína y calorías registrada" },
      { key: "water", icon: "💧", label: "Hidratación diaria cumplida (2.5L+)" },
      { key: "mobility", icon: "🧘", label: "5 min de movilidad y recuperación activa" },
      { key: "photo", icon: "📸", label: "Check-in semanal de fotos o medidas" },
    ],
    statLabels: { streak: "días seguidos", workouts: "entrenos totales", minutes: "minutos totales" },
    weeklyFreqTitle: "Frecuencia Semanal",
    last4Weeks: "Últimas 4 semanas",
    weekLabel: (n) => `Sem ${n}`,
    beforeAfterTitle: "Antes y Después",
    photoStart: "Inicio",
    photoCurrent: "Actual",
    tapToAddPhoto: "Toca para añadir foto",
    photosEncouragement: "✨ ¡Seguí subiendo fotos cada semana para ver tu evolución comparada lado a lado!",
    recordsTitle: "Mis Récords",
    newRecordBtn: "+ Nuevo Récord",
    recordNamePlaceholder: "Ej: Puente de glúteo",
    recordValuePlaceholder: "Ej: 20kg x 12 reps",
    saveBtn: "Guardar",
    noRecords: "🏆 Todavía no registraste ninguna marca.",
    noRecordsHint: '¡Tocá "+ Nuevo Récord" para registrar tu primera marca!',
  },
  coach: {
    verifiedBadge: "✓ Coach Verificado",
    coachName: "Jeza · Glúteos by Jeza",
    coachSpecialty: "Especialista en activación del glúteo mayor y medio",
    coachQuote: '"El glúteo no es solo estética: es el motor de tu cuerpo."',
    challengeBadge: "Desafío Glúteos 28D",
    challengeTitle: "Método completo + bonos incluidos",
    challengeDesc: "Acceso total a entrenamientos guiados, calculadora de nutrición y los 3 bonos gratuitos del desafío.",
    noEquipment: "⚡ 100% sin equipo",
    daysToChange: "📅 28 días para cambiar",
    modulesTitle: "Módulos Principales",
    includedBadge: "Incluido",
    modules: [
      { icon: "📱", title: "App Exclusiva del Desafío 28D", desc: "Entrenamientos guiados en video paso a paso con seguimiento de días y marcas.", cta: "Abrir Entrenamientos" },
      { icon: "🏋️‍♀️", title: "Rutinas de 8 a 10 min por día", desc: "Activación neuromuscular progresiva sin gimnasio, enfocada en volumen e hipertrofia.", cta: "Ver Rutinas" },
      { icon: "🥗", title: "Guía Nutricional de Apoyo", desc: "Plan práctico y recetas para sumar volumen, firmeza y definición.", cta: "Abrir Guía Nutricional" },
    ],
    bonusesTitle: "🎁 Bonos Gratuitos",
    bonuses: [
      { icon: "⚡", title: "Bono 1 · Rutina Rápida de 15 Minutos", desc: "Circuito exprés de alta intensidad para los días con poco tiempo." },
      { icon: "📅", title: "Bono 2 · Calendario Imprimible de Progreso", desc: "Planificador visual para marcar cada día completado y medir tu evolución." },
      { icon: "🧘", title: "Bono 3 · Guía de Movilidad de Cadera", desc: "Calentamiento dinámico para preparar la articulación antes de entrenar." },
    ],
    testimonialsTitle: "Historias de Éxito",
    testimonialsSubtitle: "Resultados de alumnas del Desafío 28D",
    testimonials: [
      { initial: "M", name: "Alumna verificada", days: "28/28 entrenamientos", quote: "No pensé que entrenar en casa iba a servir. La técnica bien hecha marcó la diferencia." },
      { initial: "J", name: "Alumna verificada", days: "27/28 entrenamientos", quote: "El seguimiento diario me ayudó a sostener la constancia, que era lo que más me costaba." },
      { initial: "C", name: "Alumna verificada", days: "28/28 entrenamientos", quote: "Los entrenamientos cortos pero intensos cambiaron mi rutina sin necesitar gimnasio." },
    ],
    connectTitle: "Conectate con tu Coach",
    instagram: "📷 Instagram",
    youtube: "▶️ YouTube",
    email: "✉️ Email directo",
  },
  ajustes: {
    languageTitle: "Idioma / Language",
    languages: [
      { code: "es", flag: "🇪🇸", label: "Español" },
      { code: "en", flag: "🇺🇸", label: "English" },
      { code: "pt", flag: "🇧🇷", label: "Português" },
    ],
    notificationsTitle: "🔔 Notificaciones Push",
    notificationsSubtitle: "Exactamente 2 recordatorios diarios",
    reminder1: { time: "09:00 · Entrenamiento", title: "09:00 · Entrenamiento", desc: "Entrenamiento de glúteos mañanero 🍑" },
    reminder2: { time: "19:00 · Check-in", title: "19:00 · Check-in", desc: "Chequeo nocturno y nutrición 🥗" },
    statusLabel: "Estado",
    statusValues: { none: "No solicitado", unsupported: "No soportado en este navegador", granted: "Permitido ✓", blocked: "Bloqueado por el navegador" },
    testNotificationBtn: "📨 Probar Notificación Ahora",
    notificationTitle: "Glúteos by Jeza 🍑",
    notificationBody: "¡Es hora de tu entrenamiento de glúteos!",
    privacyNote: "🔒 App individual 100% privada. Tus datos, metas y fotos de progreso se guardan de forma aislada en tu dispositivo.",
    accountTitle: "Cuenta y Perfil",
    nameLabel: "Nombre de perfil",
    emailLabel: "Email registrado",
    saveBtn: "Guardar Cambios",
    savedBtn: "✓ Guardado",
    soundTitle: "🔊 Efectos de Sonido",
    soundDesc: "Bips de cuenta regresiva y transición entre series durante el entrenamiento activo.",
    resetBtn: "↺ Reiniciar Desafío",
    resetConfirm: "¿Reiniciar el desafío? Se perderá tu progreso actual.",
  },
};

const en: Dictionary = {
  nav: {
    entrenar: "Train",
    nutricion: "Nutrition",
    progreso: "Progress",
    coach: "Coach",
    ajustes: "Settings",
  },
  brand: {
    name: "Glutes by Jeza",
    tagline: "Glute & Lower Body Method",
    badge: "Mind & Biomechanics",
  },
  onboarding: {
    headerTitle: "Glutes by Jeza · Sign Up",
    stepOf: (s, t) => `Step ${s} of ${t}`,
    languages: [
      { code: "es", label: "Español", sub: "Español (Latin America / Spain)" },
      { code: "en", label: "English", sub: "English (United States / Global)" },
      { code: "pt", label: "Português", sub: "Português (Brazil)" },
    ],
    step1: {
      badge: "Language",
      title: "Choose your language",
      subtitle: "Select the language you want to see the app and your workouts in.",
    },
    step2: {
      badge: "Sign Up",
      title: "Welcome to the Challenge!",
      subtitle: "To set up your profile and personalize your progress, enter your name and email.",
      nameLabel: "Your name",
      namePlaceholder: "e.g. Jesica",
      emailLabel: "Your email",
      emailPlaceholder: "e.g. jesica@email.com",
    },
    step3: {
      badge: "Goal",
      title: "What do you want to achieve most?",
      subtitle: "Pick the main focus of your transformation over the next 28 days.",
      goals: [
        { code: "volumen", icon: "↗", title: "Increase Volume & Hypertrophy", desc: "Focus on gluteus maximus hypertrophy for a rounder shape." },
        { code: "definir", icon: "⚡", title: "Define & Lift", desc: "Gluteus medius work and lift for a firmer look." },
        { code: "grasa", icon: "🔥", title: "Reduce Fat & Cellulite", desc: "High-density metabolic stimulus for calorie burn." },
        { code: "postura", icon: "🦴", title: "Strength & Posture", desc: "Biomechanical activation for lumbar protection and stability." },
      ],
    },
    step4: {
      badge: "Level",
      title: "What's your training level?",
      subtitle: "This will help calibrate your workout intervals.",
      levels: [
        { code: "principiante", title: "Beginner", desc: "Just starting out or inactive for a while." },
        { code: "intermedia", title: "Intermediate", desc: "I exercise occasionally." },
        { code: "avanzada", title: "Advanced", desc: "I train regularly and want maximum intensity." },
      ],
    },
    step5: {
      badge: "Frequency",
      title: "How many times a week do you want to train?",
      subtitle: "Set your weekly workout goal to track on your dashboard.",
      perWeek: "per week",
    },
    step6: {
      badge: "Profile Ready!",
      titlePrefix: "Sign Up Confirmed, ",
      defaultName: "Athlete",
      subtitle: "Your 28-day plan has been successfully set up with your personalized guidance.",
      profileBadge: "Registered Member",
      objetivoLabel: "Goal",
      nivelLabel: "Level",
      coachMessage: '"Progress comes from daily consistency. Every rep activates your deep fibers."',
    },
    goalLabels: { volumen: "Volume", definir: "Definition", grasa: "Fat Loss", postura: "Posture" },
    levelLabels: { principiante: "Beginner", intermedia: "Intermediate", avanzada: "Advanced" },
    continueBtn: "Continue →",
    backBtn: "Back",
    finishBtn: "Go to my dashboard 🚀",
  },
  entrenar: {
    weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    greeting: (name) => `Hi, ${name} · Real-time tracking`,
    coachMessageLabel: "Coach's Message · Day 1",
    messages: [
      "Today's discipline is the firm, defined body you'll see in the mirror in just a few days.",
      "Every rep today is an investment in the woman you want to see tomorrow.",
      "Don't wait for motivation: start the workout and motivation will follow with movement.",
      "Today's consistency is worth more than a single day's intensity.",
    ],
    tipLabel: "💡 Biomechanical tip of the day:",
    tipText: "Don't wait for motivation: start the workout and motivation will follow with movement.",
    challengeBadge: "28-Day Glute Challenge",
    hello: (name) => `Hi, ${name}!`,
    challengeDesc: "Today's workout focuses on deep fiber activation for a rounder glute.",
    libraryBtn: "🏋️ Library (16 Exercises)",
    dayOf28: (n) => `Day ${n} of 28`,
    doneTitle: "Workout completed!",
    notDoneTitle: "You're doing great!",
    daysLeftDesc: "Only 28 days left for your full transformation. Today's focus is activation and volume.",
    todayWorkoutTitle: "🔥 Today's Workout",
    dayWeek: (d, w) => `Day ${d} · Week ${w}`,
    kcalLabel: (k) => `~${k} kcal`,
    exercisesCount: (n) => `${n} exercises focused on at-home biomechanics.`,
    startBtn: "▶ Start Workout",
    doneBtn: "✓ Workout Completed",
    scheduleTitle: "Weekly Schedule",
    seeAll: "📅 See All 28 Days",
    seeLess: "📅 See Less",
    weekdayDayWeek: (wd, d, w) => `${wd} · Day ${d} · Week ${w}`,
    weekGoalTitle: "Weekly Goal",
    weekGoalDesc: (freq, done) => `Complete ${freq} intense workouts. You've already done ${done}!`,
    intensities: { Media: "Medium Intensity", Alta: "High Intensity", Baja: "Low Intensity" },
  },
  plan: {
    titles: [
      "Glute Activation & Wake-Up",
      "Hypertrophy & Lateral Volume",
      "Gluteus Maximus & Deep Posterior",
      "Hip Strength & Stability",
      "Total Volume + Core",
      "Mobility & Light Activation",
      "Active Recovery",
    ],
    exercises: [
      "Floor Glute Bridge",
      "Lying Hip Abduction",
      "Glute Kickback (Donkey Kick)",
      "Frog Pump Bridge",
      "Bodyweight Sumo Squat",
      "Reverse Lunge",
      "Single-Leg Hip Raise",
      "Resistance Band Walk",
    ],
  },
  nutricion: {
    headerBadge: "High-Performance Nutrition",
    title: "Macro Calculator",
    subtitle: "Calculate your exact macronutrients to maximize glute growth during your 28-day challenge.",
    paramsTitle: "Parameters",
    weightLabel: "Weight (kg)",
    heightLabel: "Height (cm)",
    ageLabel: "Age",
    biotypeLabel: "Body type",
    biotypes: [
      { value: "ecto", title: "Ectomorph", desc: "Fast metabolism" },
      { value: "meso", title: "Mesomorph", desc: "Balanced muscle" },
      { value: "endo", title: "Endomorph", desc: "Carb sensitive" },
    ],
    activityLabel: "Activity level",
    activityLevels: [
      { value: 1.2, label: "Sedentary / little movement" },
      { value: 1.375, label: "Light training 1-2x per week" },
      { value: 1.55, label: "Moderate 28D Challenge 3-4x/week" },
      { value: 1.725, label: "Intense training 5-6x per week" },
      { value: 1.9, label: "Athlete / double sessions" },
    ],
    goalLabel: "Main goal",
    goals: [
      { value: "hipertrofia", title: "Glute Hypertrophy", desc: "+300 kcal surplus" },
      { value: "definir", title: "Cut & Define", desc: "-300 kcal, preserving muscle" },
      { value: "tonificar", title: "Tone / Recomposition", desc: "Maintenance" },
    ],
    mealsLabel: "Meals per day",
    mealsOption: (n) => `${n} meals`,
    calculateBtn: "⚡ Calculate Macronutrients",
    dailyGoalTitle: "Daily Calorie Target",
    kcalPerDay: (n) => `${n} kcal/day`,
    bmrTdee: (bmr, tdee) => `BMR: ${bmr} kcal · Daily burn: ${tdee} kcal`,
    macroShort: { prot: "Prot", carb: "Carbs", grasa: "Fat" },
    macroStats: { proteinas: "Protein", carbohidratos: "Carbohydrates", grasas: "Healthy Fats", agua: "Daily Water" },
    perKg: "g / kg",
    fiberPerDay: (n) => `Fiber: ${n}g/day`,
    goldenRuleLabel: "🧠 Golden rule:",
    goldenRuleText: "Spread 25 to 35g of protein across each meal and prioritize carbs before and after training to maximize glute activation.",
    mealDistribution: (n) => `🍽️ Meal Distribution (${n}x per day)`,
    mealLabel: (n) => `Meal ${n}`,
    mealMacro: (kcal, p, c, g) => `~${kcal} kcal · P ${p}g · C ${c}g · F ${g}g`,
    foodsTitle: "Recommended Foods",
    foodGroups: [
      { icon: "💪", title: "Premium proteins", items: ["Grilled chicken breast", "Whole eggs", "Hake / salmon fillet", "Lean ground beef", "Plain Greek yogurt", "Whey protein"] },
      { icon: "🌾", title: "Complex carbs", items: ["Sweet potato", "Rolled oats", "Brown rice", "Banana with cinnamon (pre-workout)", "Berries"] },
      { icon: "🥑", title: "Hormonal fats", items: ["Extra virgin olive oil", "Avocado", "Almonds & walnuts", "Chia / flax seeds"] },
    ],
  },
  progreso: {
    privacyNote: "🔒 100% private app · Your progress, photos and checkpoints are stored only on your device.",
    checkpointsTitle: "✅ Today's Checkpoints",
    checkpoints: [
      { key: "workout", icon: "🏋️", label: "Glute workout completed" },
      { key: "protein", icon: "🍗", label: "Protein & calorie target logged" },
      { key: "water", icon: "💧", label: "Daily hydration met (2.5L+)" },
      { key: "mobility", icon: "🧘", label: "5-min mobility & active recovery" },
      { key: "photo", icon: "📸", label: "Weekly photo or measurement check-in" },
    ],
    statLabels: { streak: "day streak", workouts: "total workouts", minutes: "total minutes" },
    weeklyFreqTitle: "Weekly Frequency",
    last4Weeks: "Last 4 weeks",
    weekLabel: (n) => `Week ${n}`,
    beforeAfterTitle: "Before & After",
    photoStart: "Start",
    photoCurrent: "Current",
    tapToAddPhoto: "Tap to add photo",
    photosEncouragement: "✨ Keep uploading photos every week to see your evolution side by side!",
    recordsTitle: "My Records",
    newRecordBtn: "+ New Record",
    recordNamePlaceholder: "e.g. Glute bridge",
    recordValuePlaceholder: "e.g. 20kg x 12 reps",
    saveBtn: "Save",
    noRecords: "🏆 You haven't logged any records yet.",
    noRecordsHint: 'Tap "+ New Record" to log your first mark!',
  },
  coach: {
    verifiedBadge: "✓ Verified Coach",
    coachName: "Jeza · Glutes by Jeza",
    coachSpecialty: "Specialist in gluteus maximus and medius activation",
    coachQuote: '"The glute isn\'t just aesthetics: it\'s your body\'s engine."',
    challengeBadge: "28-Day Glute Challenge",
    challengeTitle: "Complete method + bonuses included",
    challengeDesc: "Full access to guided workouts, the nutrition calculator, and the 3 free challenge bonuses.",
    noEquipment: "⚡ 100% no equipment",
    daysToChange: "📅 28 days to change",
    modulesTitle: "Main Modules",
    includedBadge: "Included",
    modules: [
      { icon: "📱", title: "Exclusive 28-Day Challenge App", desc: "Step-by-step guided video workouts with day and streak tracking.", cta: "Open Workouts" },
      { icon: "🏋️‍♀️", title: "8 to 10 min daily routines", desc: "Progressive neuromuscular activation with no gym, focused on volume and hypertrophy.", cta: "See Routines" },
      { icon: "🥗", title: "Supporting Nutrition Guide", desc: "Practical plan and recipes to add volume, firmness and definition.", cta: "Open Nutrition Guide" },
    ],
    bonusesTitle: "🎁 Free Bonuses",
    bonuses: [
      { icon: "⚡", title: "Bonus 1 · 15-Minute Quick Routine", desc: "Express high-intensity circuit for days with little time." },
      { icon: "📅", title: "Bonus 2 · Printable Progress Calendar", desc: "Visual planner to mark each completed day and track your evolution." },
      { icon: "🧘", title: "Bonus 3 · Hip Mobility Guide", desc: "Dynamic warm-up to prep the joint before training." },
    ],
    testimonialsTitle: "Success Stories",
    testimonialsSubtitle: "Results from 28-Day Challenge members",
    testimonials: [
      { initial: "M", name: "Verified member", days: "28/28 workouts", quote: "I didn't think training at home would work. Doing the technique right made the difference." },
      { initial: "J", name: "Verified member", days: "27/28 workouts", quote: "Daily tracking helped me stay consistent, which was always my biggest struggle." },
      { initial: "C", name: "Verified member", days: "28/28 workouts", quote: "The short but intense workouts changed my routine without needing a gym." },
    ],
    connectTitle: "Connect with your Coach",
    instagram: "📷 Instagram",
    youtube: "▶️ YouTube",
    email: "✉️ Direct Email",
  },
  ajustes: {
    languageTitle: "Idioma / Language",
    languages: [
      { code: "es", flag: "🇪🇸", label: "Español" },
      { code: "en", flag: "🇺🇸", label: "English" },
      { code: "pt", flag: "🇧🇷", label: "Português" },
    ],
    notificationsTitle: "🔔 Push Notifications",
    notificationsSubtitle: "Exactly 2 daily reminders",
    reminder1: { time: "09:00 · Workout", title: "09:00 · Workout", desc: "Morning glute workout 🍑" },
    reminder2: { time: "19:00 · Check-in", title: "19:00 · Check-in", desc: "Evening check-in & nutrition 🥗" },
    statusLabel: "Status",
    statusValues: { none: "Not requested", unsupported: "Not supported in this browser", granted: "Granted ✓", blocked: "Blocked by the browser" },
    testNotificationBtn: "📨 Test Notification Now",
    notificationTitle: "Glutes by Jeza 🍑",
    notificationBody: "It's time for your glute workout!",
    privacyNote: "🔒 100% private individual app. Your data, goals and progress photos are stored in isolation on your device.",
    accountTitle: "Account & Profile",
    nameLabel: "Profile name",
    emailLabel: "Registered email",
    saveBtn: "Save Changes",
    savedBtn: "✓ Saved",
    soundTitle: "🔊 Sound Effects",
    soundDesc: "Countdown beeps and set transitions during active workouts.",
    resetBtn: "↺ Reset Challenge",
    resetConfirm: "Reset the challenge? Your current progress will be lost.",
  },
};

const pt: Dictionary = {
  nav: {
    entrenar: "Treinar",
    nutricion: "Nutrição",
    progreso: "Progresso",
    coach: "Coach",
    ajustes: "Ajustes",
  },
  brand: {
    name: "Glúteos by Jeza",
    tagline: "Método Glúteos & Membros Inferiores",
    badge: "Mente & Biomecânica",
  },
  onboarding: {
    headerTitle: "Glúteos by Jeza · Cadastro",
    stepOf: (s, t) => `Passo ${s} de ${t}`,
    languages: [
      { code: "es", label: "Español", sub: "Español (América Latina / Espanha)" },
      { code: "en", label: "English", sub: "English (United States / Global)" },
      { code: "pt", label: "Português", sub: "Português (Brasil)" },
    ],
    step1: {
      badge: "Idioma",
      title: "Escolha seu idioma",
      subtitle: "Selecione em qual idioma deseja ver o aplicativo e seus treinos.",
    },
    step2: {
      badge: "Cadastro",
      title: "Bem-vinda ao Desafio!",
      subtitle: "Para registrar seu perfil e personalizar seu progresso, informe seu nome e e-mail.",
      nameLabel: "Seu nome",
      namePlaceholder: "Ex: Jesica",
      emailLabel: "Seu e-mail",
      emailPlaceholder: "Ex: jesica@email.com",
    },
    step3: {
      badge: "Objetivo",
      title: "O que você mais deseja alcançar?",
      subtitle: "Selecione o foco principal da sua transformação nos próximos 28 dias.",
      goals: [
        { code: "volumen", icon: "↗", title: "Aumentar Volume e Hipertrofia", desc: "Foco em hipertrofia do glúteo máximo e formato arredondado." },
        { code: "definir", icon: "⚡", title: "Definir e Levantar", desc: "Trabalho de glúteo médio e elevação para um aspecto firme." },
        { code: "grasa", icon: "🔥", title: "Reduzir Gordura e Celulite", desc: "Estímulo metabólico de alta densidade para queima calórica." },
        { code: "postura", icon: "🦴", title: "Fortalecimento e Postura", desc: "Ativação biomecânica para proteção lombar e estabilidade." },
      ],
    },
    step4: {
      badge: "Nível",
      title: "Qual é o seu nível de treino?",
      subtitle: "Isso ajudará a calibrar os intervalos do seu treino.",
      levels: [
        { code: "principiante", title: "Iniciante", desc: "Começando agora ou inativa há um tempo." },
        { code: "intermedia", title: "Intermediária", desc: "Pratico exercício ocasionalmente." },
        { code: "avanzada", title: "Avançada", desc: "Treino regularmente e busco máxima intensidade." },
      ],
    },
    step5: {
      badge: "Frequência",
      title: "Quantas vezes por semana você quer treinar?",
      subtitle: "Defina sua meta semanal de treinos para acompanhar no seu painel.",
      perWeek: "por semana",
    },
    step6: {
      badge: "Perfil Pronto!",
      titlePrefix: "Cadastro Confirmado, ",
      defaultName: "Aluna",
      subtitle: "Seu plano de 28 dias foi configurado com sucesso com sua orientação personalizada.",
      profileBadge: "Aluna Registrada",
      objetivoLabel: "Objetivo",
      nivelLabel: "Nível",
      coachMessage: '"O progresso virá da consistência diária. Cada repetição ativará suas fibras profundas."',
    },
    goalLabels: { volumen: "Volume", definir: "Definição", grasa: "Gordura", postura: "Postura" },
    levelLabels: { principiante: "Iniciante", intermedia: "Intermediária", avanzada: "Avançada" },
    continueBtn: "Continuar →",
    backBtn: "Voltar",
    finishBtn: "Acessar meu painel 🚀",
  },
  entrenar: {
    weekdays: ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"],
    months: ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"],
    greeting: (name) => `Boas, ${name} · Acompanhamento em tempo real`,
    coachMessageLabel: "Mensagem do Coach · Dia 1",
    messages: [
      "A disciplina de hoje é o corpo firme e definido que você verá no espelho em poucos dias.",
      "Cada repetição de hoje é um investimento na mulher que você quer ver amanhã.",
      "Não espere a motivação: comece o treino e a motivação virá com o movimento.",
      "Sua constância de hoje vale mais que a intensidade de um único dia.",
    ],
    tipLabel: "💡 Dica biomecânica do dia:",
    tipText: "Não espere a motivação: comece o treino e a motivação virá com o movimento.",
    challengeBadge: "Desafio de Glúteos de 28 Dias",
    hello: (name) => `Olá, ${name}!`,
    challengeDesc: "Seu treino de hoje foca na ativação profunda das fibras para um glúteo arredondado.",
    libraryBtn: "🏋️ Biblioteca (16 Exercícios)",
    dayOf28: (n) => `Dia ${n} de 28`,
    doneTitle: "Treino concluído!",
    notDoneTitle: "Você está arrasando!",
    daysLeftDesc: "Faltam apenas 28 dias para sua transformação completa. O foco de hoje é ativação e volume.",
    todayWorkoutTitle: "🔥 Treino de Hoje",
    dayWeek: (d, w) => `Dia ${d} · Sem ${w}`,
    kcalLabel: (k) => `~${k} kcal`,
    exercisesCount: (n) => `${n} exercícios focados em biomecânica em casa.`,
    startBtn: "▶ Iniciar Treino",
    doneBtn: "✓ Treino Concluído",
    scheduleTitle: "Cronograma Semanal",
    seeAll: "📅 Ver os 28 Dias",
    seeLess: "📅 Ver Menos",
    weekdayDayWeek: (wd, d, w) => `${wd} · Dia ${d} · Sem ${w}`,
    weekGoalTitle: "Meta da Semana",
    weekGoalDesc: (freq, done) => `Completar ${freq} treinos intensos. Você já fez ${done}!`,
    intensities: { Media: "Intensidade Média", Alta: "Intensidade Alta", Baja: "Intensidade Baixa" },
  },
  plan: {
    titles: [
      "Ativação e Despertar do Glúteo",
      "Hipertrofia e Volume Lateral",
      "Glúteo Máximo e Posterior Profundo",
      "Força e Estabilidade de Quadril",
      "Volume Total + Core",
      "Mobilidade e Ativação Leve",
      "Recuperação Ativa",
    ],
    exercises: [
      "Ponte de Glúteo no Chão",
      "Abdução de Quadril Deitada",
      "Chute de Glúteo (Donkey Kick)",
      "Ponte Frog Pump",
      "Agachamento Sumô com Peso Corporal",
      "Afundo Reverso",
      "Elevação de Quadril Unilateral",
      "Caminhada com Mini Band",
    ],
  },
  nutricion: {
    headerBadge: "Nutrição de Alta Performance",
    title: "Calculadora de Macros",
    subtitle: "Calcule seus macronutrientes exatos para maximizar o crescimento glúteo do seu desafio de 28 dias.",
    paramsTitle: "Parâmetros",
    weightLabel: "Peso (kg)",
    heightLabel: "Altura (cm)",
    ageLabel: "Idade",
    biotypeLabel: "Biotipo corporal",
    biotypes: [
      { value: "ecto", title: "Ectomorfo", desc: "Metabolismo rápido" },
      { value: "meso", title: "Mesomorfo", desc: "Equilíbrio muscular" },
      { value: "endo", title: "Endomorfo", desc: "Sensível a carboidratos" },
    ],
    activityLabel: "Nível de atividade",
    activityLevels: [
      { value: 1.2, label: "Sedentária / pouco movimento" },
      { value: 1.375, label: "Treino leve 1-2x por semana" },
      { value: 1.55, label: "Desafio 28D moderado 3-4x/sem" },
      { value: 1.725, label: "Treino intenso 5-6x por semana" },
      { value: 1.9, label: "Atleta / treino duplo" },
    ],
    goalLabel: "Objetivo principal",
    goals: [
      { value: "hipertrofia", title: "Hipertrofia Glútea", desc: "+300 kcal de superávit" },
      { value: "definir", title: "Secar e Definir", desc: "-300 kcal, preservando músculo" },
      { value: "tonificar", title: "Tonificar / Recomposição", desc: "Manutenção" },
    ],
    mealsLabel: "Refeições por dia",
    mealsOption: (n) => `${n} refeições`,
    calculateBtn: "⚡ Calcular Macronutrientes",
    dailyGoalTitle: "Meta Calórica Diária",
    kcalPerDay: (n) => `${n} kcal/dia`,
    bmrTdee: (bmr, tdee) => `TMB: ${bmr} kcal · Gasto diário: ${tdee} kcal`,
    macroShort: { prot: "Prot", carb: "Carbo", grasa: "Gord" },
    macroStats: { proteinas: "Proteínas", carbohidratos: "Carboidratos", grasas: "Gorduras Boas", agua: "Água Diária" },
    perKg: "g / kg",
    fiberPerDay: (n) => `Fibra: ${n}g/dia`,
    goldenRuleLabel: "🧠 Regra de ouro:",
    goldenRuleText: "Distribua entre 25 e 35g de proteína em cada refeição e priorize carboidratos antes e depois do treino para maximizar a ativação glútea.",
    mealDistribution: (n) => `🍽️ Distribuição por Refeição (${n}x ao dia)`,
    mealLabel: (n) => `Refeição ${n}`,
    mealMacro: (kcal, p, c, g) => `~${kcal} kcal · P ${p}g · C ${c}g · G ${g}g`,
    foodsTitle: "Alimentos Recomendados",
    foodGroups: [
      { icon: "💪", title: "Proteínas nobres", items: ["Peito de frango grelhado", "Ovos inteiros", "Filé de merluza / salmão", "Carne magra moída", "Iogurte grego natural", "Whey protein"] },
      { icon: "🌾", title: "Carboidratos complexos", items: ["Batata doce", "Aveia em flocos", "Arroz integral", "Banana com canela (pré-treino)", "Frutas vermelhas"] },
      { icon: "🥑", title: "Gorduras hormonais", items: ["Azeite de oliva extra virgem", "Abacate", "Amêndoas e castanhas", "Sementes de chia / linhaça"] },
    ],
  },
  progreso: {
    privacyNote: "🔒 App 100% privado · Seu progresso, fotos e checkpoints ficam salvos apenas no seu dispositivo.",
    checkpointsTitle: "✅ Checkpoints de Hoje",
    checkpoints: [
      { key: "workout", icon: "🏋️", label: "Treino de glúteos concluído" },
      { key: "protein", icon: "🍗", label: "Meta de proteína e calorias registrada" },
      { key: "water", icon: "💧", label: "Hidratação diária cumprida (2.5L+)" },
      { key: "mobility", icon: "🧘", label: "5 min de mobilidade e recuperação ativa" },
      { key: "photo", icon: "📸", label: "Check-in semanal de fotos ou medidas" },
    ],
    statLabels: { streak: "dias seguidos", workouts: "treinos totais", minutes: "minutos totais" },
    weeklyFreqTitle: "Frequência Semanal",
    last4Weeks: "Últimas 4 semanas",
    weekLabel: (n) => `Sem ${n}`,
    beforeAfterTitle: "Antes e Depois",
    photoStart: "Início",
    photoCurrent: "Atual",
    tapToAddPhoto: "Toque para adicionar foto",
    photosEncouragement: "✨ Continue enviando fotos toda semana para ver sua evolução lado a lado!",
    recordsTitle: "Meus Recordes",
    newRecordBtn: "+ Novo Recorde",
    recordNamePlaceholder: "Ex: Ponte de glúteo",
    recordValuePlaceholder: "Ex: 20kg x 12 reps",
    saveBtn: "Salvar",
    noRecords: "🏆 Você ainda não registrou nenhuma marca.",
    noRecordsHint: 'Toque em "+ Novo Recorde" para registrar sua primeira marca!',
  },
  coach: {
    verifiedBadge: "✓ Coach Verificado",
    coachName: "Jeza · Glúteos by Jeza",
    coachSpecialty: "Especialista em ativação do glúteo máximo e médio",
    coachQuote: '"O glúteo não é só estética: é o motor do seu corpo."',
    challengeBadge: "Desafio Glúteos 28D",
    challengeTitle: "Método completo + bônus incluídos",
    challengeDesc: "Acesso total a treinos guiados, calculadora de nutrição e os 3 bônus gratuitos do desafio.",
    noEquipment: "⚡ 100% sem equipamento",
    daysToChange: "📅 28 dias para mudar",
    modulesTitle: "Módulos Principais",
    includedBadge: "Incluído",
    modules: [
      { icon: "📱", title: "App Exclusivo do Desafio 28D", desc: "Treinos guiados em vídeo passo a passo com acompanhamento de dias e marcas.", cta: "Abrir Treinos" },
      { icon: "🏋️‍♀️", title: "Rotinas de 8 a 10 min por dia", desc: "Ativação neuromuscular progressiva sem academia, focada em volume e hipertrofia.", cta: "Ver Rotinas" },
      { icon: "🥗", title: "Guia Nutricional de Apoio", desc: "Plano prático e receitas para ganhar volume, firmeza e definição.", cta: "Abrir Guia Nutricional" },
    ],
    bonusesTitle: "🎁 Bônus Gratuitos",
    bonuses: [
      { icon: "⚡", title: "Bônus 1 · Rotina Rápida de 15 Minutos", desc: "Circuito expresso de alta intensidade para dias com pouco tempo." },
      { icon: "📅", title: "Bônus 2 · Calendário Imprimível de Progresso", desc: "Planejador visual para marcar cada dia concluído e medir sua evolução." },
      { icon: "🧘", title: "Bônus 3 · Guia de Mobilidade de Quadril", desc: "Aquecimento dinâmico para preparar a articulação antes de treinar." },
    ],
    testimonialsTitle: "Histórias de Sucesso",
    testimonialsSubtitle: "Resultados de alunas do Desafio 28D",
    testimonials: [
      { initial: "M", name: "Aluna verificada", days: "28/28 treinos", quote: "Eu não achava que treinar em casa ia funcionar. A técnica correta fez a diferença." },
      { initial: "J", name: "Aluna verificada", days: "27/28 treinos", quote: "O acompanhamento diário me ajudou a manter a constância, que era o mais difícil." },
      { initial: "C", name: "Aluna verificada", days: "28/28 treinos", quote: "Os treinos curtos e intensos mudaram minha rotina sem precisar de academia." },
    ],
    connectTitle: "Conecte-se com seu Coach",
    instagram: "📷 Instagram",
    youtube: "▶️ YouTube",
    email: "✉️ E-mail direto",
  },
  ajustes: {
    languageTitle: "Idioma / Language",
    languages: [
      { code: "es", flag: "🇪🇸", label: "Español" },
      { code: "en", flag: "🇺🇸", label: "English" },
      { code: "pt", flag: "🇧🇷", label: "Português" },
    ],
    notificationsTitle: "🔔 Notificações Push",
    notificationsSubtitle: "Exatamente 2 lembretes diários",
    reminder1: { time: "09:00 · Treino", title: "09:00 · Treino", desc: "Treino de glúteos matinal 🍑" },
    reminder2: { time: "19:00 · Check-in", title: "19:00 · Check-in", desc: "Check-in noturno e nutrição 🥗" },
    statusLabel: "Status",
    statusValues: { none: "Não solicitado", unsupported: "Não suportado neste navegador", granted: "Permitido ✓", blocked: "Bloqueado pelo navegador" },
    testNotificationBtn: "📨 Testar Notificação Agora",
    notificationTitle: "Glúteos by Jeza 🍑",
    notificationBody: "É hora do seu treino de glúteos!",
    privacyNote: "🔒 App individual 100% privado. Seus dados, metas e fotos de progresso ficam armazenados de forma isolada no seu dispositivo.",
    accountTitle: "Conta e Perfil",
    nameLabel: "Nome do perfil",
    emailLabel: "E-mail registrado",
    saveBtn: "Salvar Alterações",
    savedBtn: "✓ Salvo",
    soundTitle: "🔊 Efeitos Sonoros",
    soundDesc: "Bipes de contagem regressiva e transição de séries durante o treino ativo.",
    resetBtn: "↺ Reiniciar Desafio",
    resetConfirm: "Reiniciar o desafio? Seu progresso atual será perdido.",
  },
};

export const dictionaries: Record<Language, Dictionary> = { es, en, pt };

export function getDictionary(lang: Language): Dictionary {
  return dictionaries[lang] ?? dictionaries.es;
}
