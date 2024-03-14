import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

const DetailsSection = () => {
    const { control } = useFormContext()
  return (
    <div className="space-y-2">
        <div>
            <h2 className="text-2xl font-bold">Detalles</h2>
            <FormDescription>
                Agregá los detalles de tu restaurant:
            </FormDescription>
        </div>
            <FormField 
                control={control} 
                name="restaurantName" 
                render={({ field })=>(<FormItem>
                    <FormLabel>
                        Nombre
                    </FormLabel>
                    <FormControl>
                        <Input {...field} className="bg-white" />
                    </FormControl>
                    <FormMessage />
                </FormItem>)} 
            />
        <div className="flex gap-4">
            <FormField 
                control={control} 
                name="city" 
                render={({ field })=>(
                    <FormItem className="flex-1">
                        <FormLabel>
                            Ciudad
                        </FormLabel>
                        <FormControl>
                            <Input {...field} className="bg-white" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} 
            />
            <FormField 
                control={control} 
                name="country" 
                render={({ field })=>(
                    <FormItem className="flex-1">
                        <FormLabel>
                            País
                        </FormLabel>
                        <FormControl>
                            <Input {...field} className="bg-white" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} 
            />
        </div>
        <FormField 
            control={control} 
            name="deliveryPrice" 
            render={({ field })=>(
                <FormItem className="max-w-[25%]">
                    <FormLabel>
                        Precio del delivery ($)
                    </FormLabel>
                    <FormControl>
                        <Input {...field} className="bg-white" placeholder="1,50" />
                    </FormControl>
                    <FormMessage />
                </FormItem>)} 
        />
        <FormField 
            control={control} 
            name="estimatedDeliveryTime" 
            render={({ field })=>(
                <FormItem className="max-w-[25%]">
                    <FormLabel>
                        Tiempo estimado de delivery (minutes)
                    </FormLabel>
                    <FormControl>
                        <Input {...field} className="bg-white" placeholder="30" />
                    </FormControl>
                    <FormMessage />
                </FormItem>)} 
        />
    </div>
  )
}

export default DetailsSection;