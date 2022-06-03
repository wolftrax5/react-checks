import { useEffect, useState } from "react";
import { onChangeArgs, Product, InitialValues } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}
export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);

  useEffect(() => {
    setCounter(initialValues?.count || value);
  }, [value, initialValues]);

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);
    setCounter(Math.min(newValue, initialValues?.maxCount || newValue));
    onChange && onChange({ count: newValue, product });
  };
  return {
    increaseBy,
    counter,
    maxCount: initialValues?.maxCount,
  };
};
