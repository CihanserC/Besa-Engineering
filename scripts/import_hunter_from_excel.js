// Parses ProductList.xlsx and updates src/data/products.json with Sulama-Hunter entries
const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');

const root = path.resolve(__dirname, '..');
const excelPath = path.join(root, 'src', 'data', 'ProductList.xlsx');
const jsonPath = path.join(root, 'src', 'data', 'products.json');

function loadWorkbook() {
  const wb = xlsx.readFile(excelPath);
  const sheetName = wb.SheetNames[0];
  const ws = wb.Sheets[sheetName];
  const rows = xlsx.utils.sheet_to_json(ws, { defval: '' });
  return rows;
}

function normalizeCategory(value) {
  if (!value) return '';
  return String(value).trim();
}

function toBoolean(val, fallback=false) {
  if (typeof val === 'boolean') return val;
  if (typeof val === 'number') return val !== 0;
  const s = String(val).trim().toLowerCase();
  if (s === 'true' || s === 'evet' || s === '1' || s === 'yes') return true;
  if (s === 'false' || s === 'hayır' || s === 'hayir' || s === '0' || s === 'no') return false;
  return fallback;
}

function mapRowToProduct(row) {
  // Match actual headers from inspection
  const category = normalizeCategory(row['Ürün Kategorisi']);
  const id = String(row['Ürün ID'] || row['ID'] || row['Id'] || row['id'] || '').trim();
  const name = String(row['Ürün Adı'] || row['Product Name'] || '').trim();
  const description = String(row['Ürün Açıklaması'] || row['Açıklama'] || row['Description'] || '').trim();
  const detailedDescription = String(row['Detaylı Açıklama'] || '').trim();
  const technicalInfo = String(row['Teknik Bilgi'] || '').trim();
  const imageFromCol = String(row['Ürün Resim Adı'] || row['Görsel'] || '').trim();
  const image = imageFromCol || id;
  const bestSeller = toBoolean(row['bestSeller (true/false)']);
  const featured = toBoolean(row['featured (true/false)']);
  const discounted = toBoolean(row['discounted (true/false)']);

  return {
    id,
    image,
    name,
    description,
    detailedDescription,
    technicalInfo,
    category,
    bestSeller,
    featured,
    discounted,
  };
}

function run() {
  const rows = loadWorkbook();
  const hunterRows = rows.filter(r => normalizeCategory(r['Ürün Kategorisi']) === 'Sulama-Hunter');
  const products = hunterRows.map(mapRowToProduct).filter(p => p.id && p.name);

  if (!fs.existsSync(jsonPath)) {
    throw new Error('products.json not found at ' + jsonPath);
  }
  const existing = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  const withoutHunter = existing.filter(p => p.category !== 'Sulama-Hunter');
  const merged = [...withoutHunter, ...products];
  fs.writeFileSync(jsonPath, JSON.stringify(merged, null, 2), 'utf8');
  console.log(`Updated products.json with ${products.length} Sulama-Hunter products (replaced old ones).`);
}

if (require.main === module) {
  try {
    run();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}
