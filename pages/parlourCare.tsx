import { Numbers } from "../components/blocks/numbers";
import { Layout } from "../components/layout";
import { Container } from "../components/util/container";
import { Section } from "../components/util/section";
import CareIMG from "../public/parlour-care1.png"
import ParlourCarePlus from "../public/uploads/parlourcareplus1.png"

export default function ParlourCarePage(){
    return(
        <Layout>
            <Section>
                <Container className="h-screen">
                    <div className="text-parlourDark text-6xl font-bold flex flex-col items-center">
                        <div className="mt-32">
                            <div className="flex flex-row gap-10 items-center">
                                <h1>Fully</h1>
                                <img src={ParlourCarePlus.src} className="w-36 h-36" />
                            </div>
                            <h1>Covered.</h1>
                        </div>
                        <img src={CareIMG.src} className="mt-32" />
                        <img src="" alt="" />
                    </div>
                </Container>
            </Section>
            <Numbers />
        </Layout>
    )
}