import { useForm } from "react-hook-form";
import { z, ZodError, ZodSchema } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'

// Schema para autenticação
export const authSchema = z.object({
    email: z.string().email("Email inválido"),
    password: z.string().min(6, "Mínimo 6 caracteres"),
    code: z.string().min(4, "Mínimo 4 caracteres").optional(),
});

// Schema para editar o perfil
export const editProfileSchema = z.object({
    fullname: z.string().min(4, "Mínimo 4 caracteres").optional(),
    gender: z.string().optional(),
    birthday: z.coerce.number().min(8, "Mínimo 8 caracteres").optional(),
    phone: z.coerce.number().min(4, "Mínimo 4 caracteres").optional(),
    email: z.string().min(4, "Mínimo 4 caracteres").optional(),
});

// Schema para busca
export const searchSchema = z.object({
    search: z.string().optional(),
});

// Schema para adicionar produto
export const addProductSchema = z.object({
    name: z.string().min(1, "Nome é obrigatório"),
    description: z.string().min(1, "Descrição é obrigatória"),
    category: z.string().min(1, "Categoria é obrigatória"),
    price: z.coerce.number().positive("O preço deve ser positivo"),
    stock: z.coerce.number().min(0, "O estoque não pode ser negativo"),
});

// Tipos dinâmicos
export type FormSchema<T extends ZodSchema> = z.infer<T>;

export const useFormHooks = <T extends z.ZodSchema>(schema: T) => {
    const { control, handleSubmit, formState: { errors }, ...rest } = useForm<FormSchema<T>>({
        mode: "onChange",
        reValidateMode: "onChange",
        resolver: zodResolver(schema)
    });

    const onSubmit = (data: FormSchema<T>) => {
        try {
            const result = schema.safeParse(data);
            if (result.success) return console.log(data)
        } catch (error) {
            if (error instanceof ZodError) {
                console.log(error.flatten().fieldErrors);
            }
        }
    }

    return { control, handleSubmit, errors, onSubmit, ...rest }
}
