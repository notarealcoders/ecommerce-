'use client';

import { CartItem } from '@/components/cart/cart-item';
import { CartItemType } from '@/types/cart';

interface CartListProps {
  items: CartItemType[];
}

export function CartList({ items }: CartListProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}