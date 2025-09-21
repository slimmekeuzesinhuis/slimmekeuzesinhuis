// app/lib/data.js
const OWNER_REPO = 'slimmekeuzesinhuis/slimmekeuzesinhuis';
const BRANCH = process.env.DATA_BRANCH || 'main'; // optioneel ENV voor previews
const BASE = `https://raw.githubusercontent.com/${OWNER_REPO}/${BRANCH}/data`;

async function getJSON(file, tag) {
  const res = await fetch(`${BASE}/${file}`, {
    next: { tags: [tag], revalidate: 900 } // 15 min fallback
  });
  if (!res.ok) throw new Error(`Failed to fetch ${file}`);
  return res.json();
}

export async function getCategories() {
  return getJSON('categories.json', 'categories');
}

export async function getProducts() {
  return getJSON('products.json', 'products');
}

export async function getProductsByCategory(slug) {
  const products = await getProducts();
  return products.filter(p => p.categories?.includes(slug));
}
