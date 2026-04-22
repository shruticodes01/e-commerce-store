import { Minus, Plus, Trash2 } from "lucide-react";
import type { ItemObj } from "../../types/types";
import { currencyFormatter } from "../../utils/formatting";
import Button from "../UI/Button";

export default function CartItem({
  item,
  onIncrease,
  onDecrease,
  onDelete,
}: {
  item: ItemObj;
  onIncrease: () => void;
  onDecrease: () => void;
  onDelete: () => void;
}) {
  return (
    <li className="flex justify-between items-baseline-last">
      <p className="flex gap-2 items-center">
        <span className="text-nowrap">{item.name} </span> -
        <span>{item.quantity}</span> x
        <span>{currencyFormatter.format(item.price)}</span>
      </p>
      <div className="w-full flex gap-2 justify-end">
        <Button
          variant="text"
          className="p-1 rounded-full bg-black text-mint-blue"
          onClick={onDecrease}
        >
          <Minus className="w-5 h-5" />
        </Button>
        <span>{item.quantity}</span>
        <Button
          variant="text"
          className="p-1 rounded-full bg-black text-mint-blue"
          onClick={onIncrease}
        >
          <Plus className="w-5 h-5" />
        </Button>
        <Button variant="icon" className="text-red-700" onClick={onDelete}>
          <Trash2 className="w-5 h-5" />
        </Button>
      </div>
    </li>
  );
}
