'use client';

import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

interface AddToCartButtonProps {
  productName: string;
  className?: string;
}

export function AddToCartButton({ productName, className }: AddToCartButtonProps) {
  const { toast } = useToast();

  const handleAddToCart = () => {
    toast({
      title: 'Added to cart',
      description: `${productName} has been added to your cart.`,
    });
  };

  return (
    <Button onClick={handleAddToCart} className={className}>
      Add to Cart
    </Button>
  );
}