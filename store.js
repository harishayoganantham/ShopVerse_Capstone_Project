const KEY='shopverse-cart-v1';
export const getCart=()=>JSON.parse(localStorage.getItem(KEY)||'[]');
export function saveCart(cart){localStorage.setItem(KEY,JSON.stringify(cart));}
export function addToCart(id){const cart=getCart();const item=cart.find(x=>x.id===id);item?item.qty++:cart.push({id,qty:1});saveCart(cart);return cart;}
export function updateQty(id,delta){const cart=getCart().map(x=>x.id===id?{...x,qty:x.qty+delta}:x).filter(x=>x.qty>0);saveCart(cart);return cart;}
export function removeFromCart(id){const cart=getCart().filter(x=>x.id!==id);saveCart(cart);return cart;}
export const money=n=>'₹'+n.toLocaleString('en-IN');