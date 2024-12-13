'use client';

import Image from 'next/image';
import { Minus, Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CartItemType } from '@/types/cart';
import { useCart } from '@/hooks/use-cart';
import { Card } from '@/components/ui/card';

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <Card className="p-4">
      <div className="flex gap-4">
        <div className="relative aspect-square h-24 w-24 overflow-hidden rounded">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeItem(item.id)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              disabled={item.quantity <= 1}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-8 text-center">{item.quantity}</span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}