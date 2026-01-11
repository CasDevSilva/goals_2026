# Daily Goal Tracker

Aplicación web para rastrear el progreso diario de tus objetivos personales.

## Características

- ✅ Marcar objetivos completados por día
- 📝 Añadir notas a cada actividad
- 📊 Visualización de progreso con indicadores circulares
- 💾 Persistencia de datos en localStorage
- 📱 Diseño responsive

## Instalación

```bash
npm install
```

## Uso

```bash
# Desarrollo
npm run dev

# Producción
npm run build
npm run preview
```

## Tecnologías

- React 19
- Vite
- Tailwind CSS
- Lucide React (iconos)

## Configuración

Edita los objetivos en `src/data/goals.js`:

```javascript
export const goals = {
    goal1: {
        id: 1,
        name: "Tu objetivo",
        goal: 365  // días objetivo
    }
}
```

## Estructura

```
src/
├── components/
│   ├── Matcher.jsx       # Marcador de actividades
│   ├── ProgressGoal.jsx  # Indicadores de progreso
│   ├── NotesModal.jsx    # Modal de notas
│   └── Title.jsx         # Título
├── data/
│   └── goals.js          # Configuración de objetivos
└── App.jsx               # Componente principal
```