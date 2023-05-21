import { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);
    const [ascending, setAscending] = useState(true);
    const searchRef = useRef(null);
    const [search, setSearch] = useState('')

    //  console.log(services);
    useEffect(() => {
        fetch(`https://car-doctor-server-lac-nine.vercel.app/services?search=${search}&sort=${ascending ? 'asc' : 'desc'}`)
        // fetch(`http://localhost:5000/services?search=${search}&sort=${ascending ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [search,ascending])

    const handleSearch = () =>{
        console.log(searchRef.current.value);
        setSearch(searchRef.current.value);
    }


    return (
        <div className="mt-4">
            <div className="text-center">
                <h3 className=" text-orange-500 font-bold">Services</h3>
                <h2 className="text-3xl font-bold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomized <br /> words which don`t look even slightly believable. </p>

                <div className="my-8 flex justify-center">
                    <div className="form-control">
                        <div className="input-group">
                            <input type="text" ref={searchRef} placeholder="Search…" className="input input-bordered" />
                            <button onClick={handleSearch} className="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>

                <button
                    className="my-4 btn btn-outline btn-warning "
                    onClick={() => setAscending(!ascending)}>Price: {ascending ? 'High to Low' : 'Low to High'}
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    >
                    </ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;