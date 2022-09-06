import IProductSpecificationDto from "./ProductSpecification.dto";

export default interface IProductslider {

    productName: string;
    uuid: string;
    basePrice: Number;
    finalPrice: Number;
    discountPrice: Number;
    description: string;
    productSpecificationDto: IProductSpecificationDto;
}