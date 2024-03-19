import axios from 'axios';
import { useEffect, useState } from 'react';
import { CardTemplate } from './CardTemplate';
import { FilterAtom } from "../store/atom/Filter";
import { useRecoilValue } from 'recoil';

export function Card() {
    const [d, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const filterr = useRecoilValue(FilterAtom);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("/src/employedata.json")
            .then(response => {
                setData(response.data.dataa);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        if (!filterr) {
            setFilteredData(d); // Set filtered data to initial data when filter is empty
        } else {
            const filtered = d.filter(item => item.name.includes(filterr));
            setFilteredData(filtered);
        }
    }, [filterr, d]);

    if (loading) {
        return <div>Loading...</div>; // Show loading indicator while fetching data
    }

    return (
        <div>
            <div className="grid text-left grid-cols-1 mr-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filteredData.map(item => (
                    <CardTemplate key={item.id} id={item.id} naam={item.name} dob={item.dob} role={item.role} />
                ))}
            </div>
        </div>
    );
}
