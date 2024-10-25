// export const RandomFox1 = () => {
//     return <img/>
// }

type Props = {
    image: string,
    alt?: string
}

//LA VERSION RECOMENDENDADA
export const RandomFox2 = ({image,alt} : Props) : JSX.Element => {
    return <img className="rounded" alt={alt} src={image} width={320} height='auto'/>
}

//Las dos son usadas en proyectos pero no recomendada en nuevos
// export const RandomFox3 : FunctionComponent = () => {
//     return <img/>
// }

// export const RandomFox4 : FC = () => {
//     return <img/>
// }