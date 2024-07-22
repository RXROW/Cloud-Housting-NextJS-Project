import Image from "next/image";
import cloud_Image from '../../../../public/cloud-hosting.png';
import { TiTick } from "react-icons/ti";

const Hero = () => {
    return (

        <div className="flex flex-col md:flex-row items-center p-8 bg-gray-50">
            <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl font-bold mb-4">Cloud Hosting</h1>
                <p className="text-lg mb-6">
                    The best web hosting solution for your online success
                </p>
                <div className="space-y-4">
                    <div className="flex items-center text-lg">
                        <TiTick className="text-green-500 mr-2" /> Easy To Use Control Panel
                    </div>
                    <div className="flex items-center text-lg">
                        <TiTick className="text-green-500 mr-2" /> Secure Hosting
                    </div>
                    <div className="flex items-center text-lg">
                        <TiTick className="text-green-500 mr-2" /> Website Maintenance
                    </div>
                </div>
            </div>
            <div className="mt-8 md:mt-0 md:ml-8">
                <Image src={cloud_Image } alt='cloud' width={500} height={500} />
            </div>
        </div>
       
    )
}

export default Hero;
