import axios from "axios";
import IProductslider from "./ProductSlider.dto";

export default async function getProductForSlider() {
    return await axios
    .get<IProductslider[]>('http://localhost:3000/api/product')
    .then((res) => { return res.data; })
}
