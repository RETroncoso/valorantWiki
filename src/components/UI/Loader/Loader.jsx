import { TypewritterWrapper } from "./LoaderStyles"
import Typewriter from "typewriter-effect"


export const Loader = () => {
   return <TypewritterWrapper>
        <Typewriter
            options={{
                strings: ['Cargando...'],
                autoStart: true,
                loop: true,
                delay: 50
            }}
        />
   </TypewritterWrapper>
}
