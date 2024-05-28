import { SelectedPage, ClassType } from '@/shared/types';
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from '@/shared/HText';
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "From beginner basics to barbell benders, our weight training classes offer a range of options to build strength, tone muscle, and torch calories.  Expert trainers guide you through beginner classes, advanced lifting, circuit training, body sculpting, and more, so you can find the perfect fit to reach your fitness goals.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:"Fire up your core and sculpt a strong foundation with our ab and core classes! These classes cater to all levels, from beginner to advanced.  Get ready to tighten, tone, and strengthen your abs with a variety of exercises that target your entire core, improving stability, posture, and overall fitness.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Adventure is a feeling that arises from new and challenging experiences. It can involve physical activity, exploration, or simply trying something new.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Training classes are a form of education or instruction designed to develop specific skills or knowledge. They are offered in a variety of settings, including schools, businesses, and community centers. Training classes can be formal or informal, short-term or long-term, and can be delivered in person or online.",
    image: image6,
  },
];

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}: Props) => {
  return <section id="ourclasses" className='w-full bg-primary-100 py-40'>
    <motion.div
    onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
    >
      <motion.div
        className='mx-auto w-5/6'
        initial="hidden" 
        whileInView="visible" 
        viewport={{once:true, amount:0.5}} 
        transition={{duration: 2}}
        variants={{
            hidden:{opacity: 0, x:-50},
            visible: {opacity: 1, x:0},
        }}
      >
        <div className='md:w-3/5'>
          <HText>Our Classes</HText>
          <p className='py-5'>
          Dive into a world of fitness possibilities! We offer hundreds of diverse classes designed to match any goal or preference. From high-energy cardio to targeted strength training, yoga to dance, you'll find a class that gets you moving and having fun. And with new options added regularly, there's always something fresh to keep your workouts exciting.
          </p>
        </div>
      </motion.div>
        <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
          <ul className='w-[2800px] whitespace-nowrap'>
            {classes.map((item,index) => (
              <Class 
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
    </motion.div>
  </section>
}

export default OurClasses