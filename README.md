<p align="center">
  <a href="https://es.reactjs.org/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="200" alt="React Logo" /></a>
</p>



# Ejecutar en desarrollo

1. Entrono
```
node v16.17.0
yarn 1.22.19
npm 8.15.0
```

2. Clonar el repositorio
3. Ejecutar
> Debido a que el proyecto utiliza yarn, se recomienda no usar npm.
```
yarn install
```
4. Levantar
```
yarn dev
```

# El por qué de las cosas:
### Dependencias:
- [**MUI**](https://mui.com/ "**MUI**") para tener una interfaz más limpia y un desarrollo más rápido.
- [**Formik** ](https://formik.org/ "**Formik** ") para manejar formularios de manera sencilla.
- [**Yup**](https://github.com/jquense/yup "**Yup**") para manejar validaciones de manera sencilla y eficiente.
- [ **Sweetalert2**](https://sweetalert2.github.io/ " **Sweetalert2**")  para tener notificaciones simples y agradables.

### Dependencias de desarrollo:
- [**ESlint**](https://eslint.org/ "**ESlint**") para escribir código más consistente y mantenible.
- [**Vite**](https://vitejs.dev/ "**Vite**") tener un mejor Bundling y más cosas que ofrece.


# Estructura:

Utilizar una estructura de carpetas basada en vistas puede ayudar a mantener el código organizado y fácil de entender en proyectos pequeños.

    ├── assets
    │   └── react.svg
    ├── components
    │   └── fields
    │       ├── DynamicFields.tsx
    │       ├── GenerateSekeletonField.tsx
    │       ├── MyDateField.tsx
    │       ├── MyFileCsvField.tsx
    │       ├── MySelectField.tsx
    │       ├── MyTextField.tsx
    │       └── MyTextFieldMultiline.tsx
    ├── config
    │   └── theme.ts
    ├── context
    │   └── DynamicFormsContext.tsx
    ├── data-example
    │   ├── object-1.json
    │   ├── object-2.json
    │   ├── object-3.json
    │   └── object-4.json
    ├── hooks
    │   ├── useDynamicContext.tsx
    │   └── useDynamicFields.tsx
    ├── interfaces
    │   └── IForms.ts
    ├── main.tsx
    ├── routes
    │   ├── AppRoutes.tsx
    │   └── navigation.ts
    ├── utils
    │   ├── base64ToFile.ts
    │   ├── downloadFile.ts
    │   └── sweetAlertMix.ts
    ├── views
    │   ├── dashboard
    │   │   ├── DashboardView.tsx
    │   │   └── components
    │   │       ├── DynamicFormPreview.tsx
    │   │       ├── MyCardForm.tsx
    │   │       └── MyDialogDetail.tsx
    │   ├── forms
    │   │   ├── FormsView.tsx
    │   │   └── components
    │   │       ├── DynamicForm.tsx
    │   │       └── SelectObjectType.tsx
    │   └── layout
    │       ├── LayoutView.tsx
    │       └── components
    │           ├── AppBar.tsx
    │           ├── Drawer.tsx
    │           ├── Menu.tsx
    │           ├── MyMenuItem.tsx
    │           ├── SideBar.tsx
    │           └── SubMenuItem.tsx
    
### Archivos relevantes

1. Componente para generar inputs dinámicos
```
DynamicFields.tsx
```
2. Logica para generar inputs y  validaciones dinámicas.
```
useDynamicFields.tsx
```
3. Logica para manejar el estado de la aplicación
> Se usa ContextApi debido a que es la mas adecuada para proyectos de menor escala.
```
useDynamicContext.tsx
```
# Mira el proyecto [aquí](https://stuk4.github.io/dynamic-form/ "aquí")
