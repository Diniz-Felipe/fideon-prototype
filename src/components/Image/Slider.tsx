import { ImageProps } from "react-native";
import { ImageSourcePropType } from "react-native";
import { Slider as SliderStyled } from "./styled";

type ISlider = ImageProps & {
    source: ImageSourcePropType;
    alt: string;
}

export const Slider = ({ source, alt, ...slider }: ISlider) => {
    return <SliderStyled source={source} {...slider} alt={alt} />
}   
