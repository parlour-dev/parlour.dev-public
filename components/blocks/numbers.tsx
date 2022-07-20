import { Layout } from "../layout"
import { Container } from "../util/container"
import { Section } from "../util/section"

export const Numbers = () =>{
    return(
            <Section className="bg-parlourDark">
                <Container className="h-screen flex items-center justify-center">
                    <div className=" flex lg:flex-row flex-col lg:items-end items-center justify-center lg:gap-44 gap-10">
                        <div className="flex flex-col items-center">
                            <span className="text-transparent bg-clip-text break-words bg-gradient-to-r bg-radial-at-tl from-parlourGreen to-parlourBlue lg:text-4xl text-3xl font-bold">24</span>
                            <p className="text-white text-base font-bold">active customers</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-transparent bg-clip-text break-words bg-gradient-to-r bg-radial-at-tl from-sky-400 to-purple-700 lg:text-6xl text-5xl font-bold">365</span>
                            <p className="text-white text-xl font-bold">days per year</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-transparent bg-clip-text break-words bg-gradient-to-r bg-radial-at-tl from-parlourBlue to-blue-500 lg:text-4xl text-3xl font-bold">92</span>
                            <p className="text-white text-base font-bold">instantly fixed crashes</p>
                        </div>
                    </div>
                </Container>
            </Section>
    )
}