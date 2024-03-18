import { cuisineList } from "@/config/restaurant-options-config";
import { Label } from "./ui/label";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { ChangeEvent } from "react";
import { Button } from "./ui/button";


type Props = {
  onChange: (cuisines: string[]) => void;
  selectedCuisines: string[];
  isExpanded: boolean
  onExpandedClick: () => void;
}

const CuisineFilter = ({ onChange, selectedCuisines, isExpanded, onExpandedClick }: Props) => {
    
    const handleCuisinesChange = (event: ChangeEvent<HTMLInputElement>) => {
        const clickedCuisine = event.target.value;
        const isChecked = event.target.checked;

        const newCuisineList = isChecked 
        ? [...selectedCuisines, clickedCuisine] 
        : selectedCuisines.filter((cuisine) => cuisine !== clickedCuisine)

        onChange(newCuisineList)
    }

    const handleCuisinesReset = () => onChange([]);

    return (
    <>
        <div className="flex justify-between items-center px-2">
            <div className="text-md font-semibold mb-2">
                Filtrá por comida
            </div>
            <div onClick={handleCuisinesReset} className="text-sm font-semibold mb-2 underline cursor-pointer text-blue-500">
                Borrar filtros
            </div>
        </div>
        <div className="space-y-2 flex flex-col">
            {cuisineList
            .slice(0, isExpanded ? cuisineList.length : 8)
            .map((cuisine) => {
                const isSelected = selectedCuisines.includes(cuisine)
                return <div className="flex">
                    <input 
                        id={`cuisines_${cuisine}`} 
                        type="checkbox"
                        className="hidden"
                        value={cuisine}
                        checked={isSelected}
                        onChange={handleCuisinesChange} 
                    />
                    <Label 
                    htmlFor={`cuisines_${cuisine}`}
                    className={`flex flex-1 items-center cursor-pointer text-sm rounded-full px-4 py-2 font-semibold ${
                        isSelected 
                            ? "border border-green-600 text-green-600" 
                            : "border border-slate-300"
                        }`}
                    >
                        { isSelected && <Check size={20} strokeWidth={3} /> }
                        {cuisine}
                    </Label>
                </div>
            })}
            <Button 
                onClick={onExpandedClick} 
                variant="link" 
                className="mt-4 flex-1" 
                >
                    {isExpanded ? (<span className="flex flex-row items-center">
                        Ver Menos <ChevronUp />
                        </span>
                    ) : (
                        <span className="flex flex-row items-center">
                            Ver más <ChevronDown />
                        </span>
                    )}
            </Button>
        </div>
    </>
  )
}

export default CuisineFilter;