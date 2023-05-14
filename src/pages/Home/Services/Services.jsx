import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);
//  console.log(services);
    useEffect( () => {
        fetch('https://car-doctor-server-lac-nine.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div className="mt-4">
            <div className="text-center">
                <h3 className=" text-orange-500 font-bold">Services</h3>
                <h2 className="text-3xl font-bold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomized <br /> words which don`t look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard 
                            key={service._id}
                            service={service}
                            >
                    </ServiceCard> )
                }
            </div>
        </div>
    );
};

export default Services;