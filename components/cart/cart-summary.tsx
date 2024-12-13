'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useCart } from '@/hooks/use-cart';
import { useRouter } from 'next/navigation';

export function CartSummary() {
  const { subtotal, tax, total } = useCart();
  const router = useRouter();

  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="border-t pt-2 mt-2">
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <Button
        className="w-full mt-6"
        onClick={() => router.push('/checkout')}
      >
        Proceed to Checkout
      </Button>
    </Card>
  );
}