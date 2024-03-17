import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DetailsSection from "./DetailsSection";
import { Separator } from "@radix-ui/react-separator";
import CuisinesSection from "./CusinesSection";
import MenuSection from "./MenuSection";
import ImageSection from "./ImageSection";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import { Restaurant } from "@/types";
import { useEffect } from "react";

const formSchema = z.object({
        restaurantName: z.string({
            required_error: "el nombre es obligatorio",
        }),
        city: z.string({
            required_error: "ciudad es obligatorio",
        }),
        country: z.string({
            required_error: "el país es obligatorio",
        }),
        deliveryPrice: z.coerce.number({
            required_error: "el precio es obligatorio",
            invalid_type_error: "debe ser un número mayor a cero"
        }),
        estimatedDeliveryTime: z.coerce.number({
            required_error: "el tiempo estimado es obligatorio",
            invalid_type_error: "debe ser un número mayor a cero"
        }),
        cuisines: z.array(z.string()).nonempty({
            message: "por favor, seleccioná un item",
        }),
        menuItems: z.array(z.object({
            name: z.string().min(1, "el nombre es obligatorio"),
            price: z.coerce.number().min(1, "el precio es obligatorio")
        })
    ),
    imageFile: z.instanceof(File, {message: "la imagen es obligatoria"})
})

type RestaurantFormData = z.infer<typeof formSchema>

type Props = {
    restaurant?: Restaurant;
    onSave: (restaurantFormData: FormData) => void;
    isLoading: boolean;
  };
  
  const ManageRestaurantForm = ({ onSave, isLoading, restaurant }: Props) => {
    const form = useForm<RestaurantFormData>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        cuisines: [],
        menuItems: [{ name: "", price: 0 }],
      },
    });
  
    useEffect(() => {
      if (!restaurant) {
        return;
      }
  
      // price lowest domination of 100 = 100pence == 1GBP
      const deliveryPriceFormatted = parseInt(
        (restaurant.deliveryPrice / 100).toFixed(2)
      );
  
      const menuItemsFormatted = restaurant.menuItems.map((item) => ({
        ...item,
        price: parseInt((item.price / 100).toFixed(2)),
      }));
  
      const updatedRestaurant = {
        ...restaurant,
        deliveryPrice: deliveryPriceFormatted,
        menuItems: menuItemsFormatted,
      };
  
      form.reset(updatedRestaurant);
    }, [form, restaurant]);


  const onSubmit = (formDataJson: RestaurantFormData) => {
    const formData = new FormData();

    formData.append("restaurantName", formDataJson.restaurantName);
    formData.append("city", formDataJson.city);
    formData.append("country", formDataJson.country);

    formData.append(
      "deliveryPrice",
      (formDataJson.deliveryPrice * 100).toString()
    );
    formData.append(
      "estimatedDeliveryTime",
      formDataJson.estimatedDeliveryTime.toString()
    );
    formDataJson.cuisines.forEach((cuisine, index) => {
      formData.append(`cuisines[${index}]`, cuisine);
    });
    formDataJson.menuItems.forEach((menuItem, index) => {
      formData.append(`menuItems[${index}][name]`, menuItem.name);
      formData.append(
        `menuItems[${index}][price]`,
        (menuItem.price * 100).toString()
      );
    });

    if (formDataJson.imageFile) {
      formData.append(`imageFile`, formDataJson.imageFile);
    }

    onSave(formData);
  };
  
  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} 
        className="space-y-8 bg-gray-50 p-10 rounded-lg">
        <DetailsSection />
        <Separator />
        <CuisinesSection />
        <Separator />
        <MenuSection />
        <Separator />
        <ImageSection />
        {isLoading ? <LoadingButton /> : <Button type="submit">Enviar</Button>}
        </form>
    </Form>
  )
}

export default ManageRestaurantForm;