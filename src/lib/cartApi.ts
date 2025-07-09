import { supabase } from './supabase';

export const fetchCartSupabase = async () => {
  const { data, error } = await supabase
    .from('cart')
    .select('*');
  if (error) console.error('Error fetching cart:', error.message);
  return data;
};

export const addToCartSupabase = async (productId: string, quantity: number) => {
  const { data, error } = await supabase
    .from('cart')
    .insert([{ product_id: productId, quantity }]);
  if (error) console.error('Error adding to cart:', error.message);
  return data;
};

export const updateCartSupabase = async (productId: string, quantity: number) => {
  const { data, error } = await supabase
    .from('cart')
    .update({ quantity })
    .eq('product_id', productId);
  if (error) console.error('Error updating cart:', error.message);
  return data;
};

export const removeFromCartSupabase = async (productId: string) => {
  const { data, error } = await supabase
    .from('cart')
    .delete()
    .eq('product_id', productId);
  if (error) console.error('Error removing from cart:', error.message);
  return data;
};

export const clearCartSupabase = async () => {
  const { data, error } = await supabase
    .from('cart')
    .delete()
    .neq('id', ''); // Delete everything
  if (error) console.error('Error clearing cart:', error.message);
  return data;
};
