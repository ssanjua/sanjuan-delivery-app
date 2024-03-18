import { Button } from "./ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "./ui/dropdown-menu";

type Props = {
  onChange: (value: string) => void;
    sortOption: string;
}

const SORT_OPTIONS = [
    {
        label: "Mejor resultado",
        value: "bestMatch",
    },
    {
        label: "Delivery barato",
        value: "deliveryPrice",
    },
    {
        label: "Más rápido",
        value: "estimatedDeliveryTime",
    },

]

const SortOptionDropdown = ({ onChange, sortOption }: Props) => {

    const selectedSortLabel = 
    SORT_OPTIONS.find((option) => option.value === sortOption)?.label || 
    SORT_OPTIONS[0].label

  return (
    <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer">
            <Button variant="outline" className="w-full"
                >
                    Ordenar por: {selectedSortLabel}
            </Button>
        </DropdownMenuTrigger> 
        <DropdownMenuContent>
            {SORT_OPTIONS.map((option) => (
                <DropdownMenuItem 
                    className="cursor-pointer"
                    onClick={() => onChange(option.value)}
                >
                    {option.label}
                </DropdownMenuItem>
            ))}
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default SortOptionDropdown;