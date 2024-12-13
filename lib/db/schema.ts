import { z } from 'zod';

export const userSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string(),
  password: z.string(),
  role: z.enum(['user', 'admin']),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  images: z.array(z.string()),
  category: z.string(),
  stock: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const orderSchema = z.object({
  id: z.string(),
  userId: z.string(),
  items: z.array(
    z.object({
      productId: z.string(),
      quantity: z.number(),
      price: z.number(),
    })
  ),
  total: z.number(),
  status: z.enum(['pending', 'processing', 'shipped', 'delivered', 'cancelled']),
  shippingAddress: z.object({
    street: z.string(),
    city: z.string(),
    state: z.string(),
    country: z.string(),
    zipCode: z.string(),
  }),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type User = z.infer<typeof userSchema>;
export type Product = z.infer<typeof productSchema>;
export type Order = z.infer<typeof orderSchema>;