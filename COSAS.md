# CURSO DE REACT.JS CON TYPESCRIPT

## Tipado Implicito vs Tipado Explicito

Explicito: lo **ves** en el codigo
Implicito: lo **sabes** luego de ver o leer el codigo

## Objeto props y children

Para poder usar las props con TSX primero tenemos que tipar el objeto de props. Lo hacemos asignándole un tipo por cada prop que tengamos, y para hacerlo mas mantenible, separamos esos tipos en un objeto aparte (ya sea con type o interface).

```jsx
type Props = {
  image: string;
  alt: string;
};
const RandomFox = ({image, alt} : string) : JSX.Element => {...}

```

## State con tipos primitivos

Es valido `string[]` y `Array<string>`. En ocasiones en bueno checar el la funcion que estas usando un ejemplo es useState haz `CTRL + click izquierdo` esto te va a mostrar  como esta implementada. Puede ser dificil de ver al principio pero te das cuenta de como lo hacen

El `<S>` quiere decir que son genericos. Se pueden ingresar cualquier tipo de dato, no solamente arrays.
```jsx
function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
```

## State con Tipos personalizados

Generalmente como respuesta de un api no es un Array, si no mas bien son objetos JSON.

```jsx
type ImageItem = { id:string; url:string }
const [images, setImages] = useState<Array<ImageItem>>([
    {id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg`},
    ...
  ]);
```

## Tipos para eventos y callbacks de escuchadores

