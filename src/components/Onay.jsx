import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";


const Onay = () => {
    const { state } = useLocation();

const [siparisNo, setSiparisNo] = useState('');
const [teslimSuresi, setTeslimSure] = useState('');

useEffect(() => {
    setSiparisNo('SIP-' + Math.floor(Math.random() * 10000));
    const sure = Math.floor(Math.random() * 30) + 20; // 20-50 dakika arası rastgele süre
    setTeslimSure('${sure} dakika');
}, []);

<>
  <h4>Sipariş Numaran: {siparisNo}</h4>
  <p>Tahmini Teslim Süresi: {teslimSuresi}</p>
</>
    
    return (
        <div className="onay-container">
            <h2>Teşekkürler, {state?.isim || 'müşteri'}!</h2>
            <p>Siparişiniz başarıyla alındı!</p>
            <h3>Sipariş Detayları:</h3>
            <ul></ul>
                <li><strong>İsim:</strong> {state?.isim || 'Belirtilmemiş'}</li>
                <li><strong>Boyut:</strong> {state?.boyut || 'Belirtilmemiş'}</li>
                <li><strong>Malzemeler:</strong> {state?.malzemeler?.length > 0 ? state.malzemeler.join(', ') : 'Belirtilmemiş'}</li>
                <li><strong>Not:</strong> {state?.not || 'Belirtilmemiş'}</li>
        </div>
    );
};
export default Onay;
            