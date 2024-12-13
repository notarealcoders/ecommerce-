'use client';

import { CartList } from '@/components/cart/cart-list';
import { CartSummary } from '@/components/cart/cart-summary';
import { useCart } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
  const { items, isEmpty } = useCart();

  if (isEmpty) {
    return (
      <div className="container px-4 py-16">
        <div className="flex flex-col items-center justify-center space-y-4">
          <ShoppingBag className="h-16 w-16 text-muted-foreground" />
          <h2 className="text-2xl font-semibold">Your cart is empty</h2>
          <p className="text-muted-foreground">Add some items to your cart to continue shopping.</p>
          <Link href="/products">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container px-4 py-8 lg:py-12">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartList items={items} />
        </div>
        <div className="lg:col-span-4">
          <CartSummary />
        </div>
      </div>
    </div>
  );
}