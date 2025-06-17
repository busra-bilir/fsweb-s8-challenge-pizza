import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Siparis = () => {
    const [form, setForm] = useState({
        isim: "",
        boyut: "",
        malzemeler: [],
        not: "" ,
    });
}
    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        if (type === "checkbox") {
            setForm((prevForm) => ({
                ...prevForm,
                malzemeler: checked
                    ? [...prevForm.malzemeler, value]
                    : prevForm.malzemeler.filter((m) => m !== value),
            }));
        } else {
            setForm((prevForm) => ({
                ...prevForm,
                [name]: value,
            }));
        }
const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validate();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            console.log("Sipariş Gönderildi:", form);
            setErrors({});
            navigate("/onay", { state: form });
        }
    };
const formValid = 
        form.isim.trim().length >= 3 &&
        form.boyut !== "" &&
        form.malzemeler.length >= 4;

const hesaplaFiyat = () => {

    let fiyat = 0;
            if (form.boyut === "kucuk") 
                fiyat += 80;
            else if (form.boyut === "orta")
                fiyat += 100;
            else if (form.boyut === "buyuk")
                fiyat += 120;
            fiyat += form.malzemeler.length * 5;
            return fiyat;    
};    

<p>Toplam Fiyat: {hesaplaFiyat()} TL</p>
    return (
        <form onSubmit={handleSubmit}>
            <h1>Sipariş Formu</h1>
            <label>
                İsim:
                <input
                    type="text"
                    name="isim"
                    value={form.isim}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Boyut:
                <select
                    name="boyut"
                    value={form.boyut}
                    onChange={handleChange}
                    required
                >
                    <option value="">Seçiniz</option>
                    <option value="kucuk">Küçük</option>
                    <option value="orta">Orta</option>
                    <option value="buyuk">Büyük</option>
                </select>
            </label>
            <fieldset></fieldset>
                <legend>Malzemeler:</legend>
                <label>
                    <input
                        type="checkbox"
                        name="malzemeler"
                        value="sucuk"
                        checked={form.malzemeler.includes("sucuk")}
                        onChange={handleChange}
                    />
                    Sucuk
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="malzemeler"
                        value="mantar"
                        checked={form.malzemeler.includes("mantar")}
                        onChange={handleChange}
                    />
                    Mantar
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="malzemeler"
                        value="zeytin"
                        checked={form.malzemeler.includes("zeytin")}
                        onChange={handleChange}
                    />
                    Zeytin
                </label>
                <label>
                    Not:
                    <input
                        type="text"
                        name="not"
                        value={form.not}
                        onChange={handleChange}
                        placeholder="Özel bir isteğiniz var mı?"
                    />
                </label>
            <button type="submit" disabled={!formValid}>
                Siparişi Gönder
            </button>
</form>
        
    );
};
export default Siparis;