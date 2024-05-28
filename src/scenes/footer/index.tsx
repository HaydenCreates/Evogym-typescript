import Logo from "@/assets/Logo.png"
type Props = {}

const Footer = (props: Props) => {
  return <footer className="bg-primary-100 py-16">
    <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
            <img src={Logo} alt="logo" />
            <p className="my-5">
                In the bustling heart of the city, where concrete meets sky, lies EvoGym, a haven dedicated to empowering your potential. We're not just barbells and treadmills; we're a community fueled by passion, sweat, and the unwavering belief that everyone deserves to feel strong and capable. Push your limits, find your center, and rewrite your fitness story here.
            </p>
            <p>
                © EvoGym All Rights Resevered
            </p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Links</h4>
            <p className="my-5">
                Access infomration here
            </p>
            <p className="my-5">
                Or use the side bar
            </p>
            <p>(Only in reduced size mode)</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Contact Us</h4>
            <p className="my-5">
                Get in contact with us
            </p>
            <p className="my-5">
                Use the email above 
            </p>
        </div>
    </div>
  </footer>
}

export default Footer