import { Numbers } from "../components/blocks/numbers";
import { Layout } from "../components/layout";
import { Container } from "../components/util/container";
import { Section } from "../components/util/section";
import CareIMG from "../public/parlour-care1.png"
import ParlourCarePlus from "../public/uploads/parlourcareplus1.png"
import ParlourCarePlusOutline from "../public/uploads/parlourcareplusoutline1.png"

export default function ParlourCarePage(){
    return(
        <Layout>
            <Section>
                <Container className="lg:h-screen h-[80vh]">
                    <div className="text-parlourDark lg:text-6xl text-3xl font-bold flex flex-col items-center z-30">
                        <div className="mt-32">
                            <div className="flex flex-row gap-10 items-center">
                                <h1>Fully</h1>
                                <img src={ParlourCarePlus.src} className="lg:w-36 lg:h-36 w-20 h-20" />
                            </div>
                            <h1>Covered.</h1>
                        </div>
                        <img src={CareIMG.src} className="mt-24 lg:w-64 w-36" />
                        <img src={ParlourCarePlusOutline.src} className="absolute top-96 right-5 lg:block hidden" />
                        <img src={ParlourCarePlusOutline.src} className="lg:w-20 absolute top-28 right-24 lg:block hidden" />
                        <img src={ParlourCarePlusOutline.src} className="lg:w-14 absolute top-64 right-[20%] lg:block hidden" />
                        <img src={ParlourCarePlusOutline.src} className="w-32 absolute top-28 right-[30%] lg:block hidden" />

                        <img src={ParlourCarePlusOutline.src} className="lg:w-52 absolute top-[65vh] left-14 lg:block hidden" />
                        <img src={ParlourCarePlusOutline.src} className="lg:w-14 absolute top-72 left-20 lg:block hidden" />
                        <img src={ParlourCarePlusOutline.src} className="lg:w-32 absolute top-28 left-[15%] lg:block hidden" />
                    </div>
                </Container>
            </Section>
            <Numbers />
        </Layout>
    )
}