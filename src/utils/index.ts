import { useRouter } from "expo-router";

export const utils = () => {
    const { push, ...rest } = useRouter()

    return {
        push,
        ...rest
    }
}
