import { useState, useEffect } from "react";
import { getSmartphone } from "../services/Smartphone";

function SmartphoneList() {
    const [phones, setPhones] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const data = await getSmartphone()
            setPhones(data)
        }

        fetchData();
    }, []);

    return (
        <div style={{ padding: '20px' }} >
            <h2>Danh sách điện thoại thông minh</h2>
            <ul className="phone-list">
                {phones.map((phone) => (
                    <li key={phone.id} style={{ marginBottom: "10px" }}>
                        <strong>{phone.title}</strong> - {phone.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SmartphoneList
