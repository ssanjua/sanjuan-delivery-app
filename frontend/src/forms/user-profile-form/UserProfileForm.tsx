import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver} from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import { User } from "@/types";
import { useEffect } from "react";

const formSchema = z.object({
    email: z.string().optional(),
    name: z.string().min(1, "El nombre no debe estar vacío"),
    addressLine1: z.string().min(1, "La direcciòn es obligatoria"),
    city: z.string().min(1, "Debes colocar tu Ciudad"),
    country: z.string().min(1, "No olvides tu País"),
})

export type UserFormData = z.infer<typeof formSchema>

type Props = {
  currentUser: User;
  onSave: (userProfileData: UserFormData) => void;
  isLoading: boolean;
  title?: string;
  buttonText?: string;
}

const UserProfileForm = ({ 
    onSave, 
    isLoading, 
    currentUser, 
    title = "Perfil", 
    buttonText = "Enviar", 
}: Props) => {
  const form = useForm<UserFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: currentUser,
  })

  useEffect(()=>{
    form.reset(currentUser)
  }, [currentUser, form]);

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSave)} 
        className="space-y-4 bg-gray-50 rounded-lg md:p-10"
        >
            <div className="">
                <h2 className="text-2xl font-bold">
                    {title}
                </h2>
                <FormDescription>
                    Podés ver y modificar tu perfil aquí:
                </FormDescription>
            </div>
            <FormField 
            control={form.control} 
            name="email" 
            render= {({ field }) => (
                <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input {...field} disabled className="bg-white" />
                    </FormControl>
                </FormItem>
                )} 
            />
            <FormField 
            control={form.control} 
            name="name" 
            render= {({ field }) => (
                <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                        <Input {...field} className="bg-white" />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )} 
            />

            <div className="flex flex-col md:flex-row gap-4">
                <FormField 
                control={form.control} 
                name="addressLine1" 
                render= {({ field }) => (
                    <FormItem className="flex-1"> 
                        <FormLabel>Dirección</FormLabel>
                        <FormControl>
                            <Input {...field} className="bg-white" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )} 
                />
                <FormField 
                control={form.control} 
                name="city" 
                render= {({ field }) => (
                    <FormItem className="flex-1">
                        <FormLabel>Localidad</FormLabel>
                        <FormControl>
                            <Input {...field} className="bg-white" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )} 
                />
                <FormField 
                control={form.control} 
                name="country" 
                render= {({ field }) => (
                    <FormItem className="flex-1">
                        <FormLabel>País</FormLabel>
                        <FormControl>
                            <Input {...field} className="bg-white" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )} 
                />
            </div>
            {isLoading ? <LoadingButton /> : <Button type="submit" className="bg-red-500 hover:bg-yellow-500">
                {buttonText}
            </Button> }
        </form>
    </Form>
  )
}

export default UserProfileForm;