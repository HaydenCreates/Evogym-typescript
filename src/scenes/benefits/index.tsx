import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon,UserGroupIcon,AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "State of the Art Faliciities",
        description: "Cutting-edge resources at your fingertips with state of the art machinces."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "100's of Diverse Classes",
        description: "Find your perfect fit with a massive class schedule. Sweat it out with endless workout options. "
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: "Expert and Pro Trainers",
        description: "Get coached by the best. Reach your goals with elite trainers. Unlock your potential with pro-level guidance."
    },
];

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({setSelectedPage}: Props) => {
  return <section
  id="benefits"
  className="mx-auto min-h-full w-5/6 py-20"
  >
    {/*Header */}
    <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
        <motion.div 
        className="md:my-5 md:w-3/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{duration: 0.5 }}
        variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
        }}
        >
            <HText>MORE THAN A GYM.</HText>
            <p className="my-5 text-sm">
                Train your body and mind through world class fitness equipment, trainer and classes to 
                get you to your fitness goals with ease. We provide true care into every member.
            </p>
        </motion.div>

        {/*Benefits*/}
        <motion.div 
        className="md:flex items-center justify-between gap-8 mt-5"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        variants={container}
        >
            {/*An array that has all the information*/}
            {benefits.map((benefit: BenefitType) => (
                <Benefit 
                    key={benefit.title}
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                    setSelectedPage={setSelectedPage}
                />
            ))}
        </motion.div>

        {/* Graphics and Description*/}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
            {/*Graphic*/}
            <img
                className="mx-auto"
                alt="benefits-page-graphic"
                src={BenefitsPageGraphic}
            />

            {/*Description*/}
            <div>
                {/* Title */}
                <div className="relative">
                    {/* Puts it behind the text */}
                    <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <HText>
                                Millions of Happy Members Getting {" "}
                                <span className="text-primary-500">
                                    FIT
                                </span>
                            </HText>
                        </motion.div>
                    </div>
                </div>

                {/* Description */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className="my-5">Elevate your fitness journey with our expert trainers! Our team is comprised of certified professionals with years of experience and a passion for helping you achieve your goals. Whether you're a seasoned gym-goer or just starting out, our trainers will create personalized programs that challenge and motivate you. They'll guide you through proper form, offer expert advice, and keep you safe and on track  to reach your full potential.</p>
                    <p className="my-5">Ditch the generic trainers!  At EvoGym, we boast a team of elite fitness professionals. Our expert and pro trainers aren't just certified, they're passionate about helping you unlock your best self. From weight loss wizards to strength sculpting specialists, we have a trainer perfectly tailored to your goals.  They'll leverage their extensive experience to design a personalized plan that pushes you further, keeps you motivated, and most importantly, gets you the results you crave.</p>
                </motion.div>

                {/* Button */}
                <div className="relative mt-16">
                    <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
  </section>
};

export default Benefits