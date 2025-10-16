const path = require('path');
const xlsx = require('xlsx');

const excelPath = path.join(__dirname, '..', 'src', 'data', 'ProductList.xlsx');

function inspect() {
  const wb = xlsx.readFile(excelPath);
  console.log('Sheets:', wb.SheetNames);
  wb.SheetNames.forEach((name) => {
    const ws = wb.Sheets[name];
    const rows = xlsx.utils.sheet_to_json(ws, { defval: '', raw: false });
    if (!rows.length) return;
    const headers = Object.keys(rows[0]);
    console.log(`\nSheet: ${name}`);
    console.log('Headers:', headers);
    // Show first 5 rows' kategori and id fields
    const mapped = rows.slice(0, 5).map(r => ({
      kategori: r['Ürün Kategorisi'] || r['Urun Kategorisi'] || r['Kategori'] || r['Category'] || '',
      id: r['ID'] || r['Id'] || r['id'] || '',
      ad: r['Ürün Adı'] || r['Urun Adi'] || r['Ürün'] || r['Product Name'] || '',
      image: r['Görsel'] || r['Gorsel'] || r['Image'] || ''
    }));
    console.log('Sample rows:', mapped);
    const categories = new Map();
    rows.forEach(r => {
      const c = String(r['Ürün Kategorisi'] || r['Urun Kategorisi'] || r['Kategori'] || r['Category'] || '').trim();
      categories.set(c, (categories.get(c) || 0) + 1);
    });
    console.log('Unique categories and counts:', Array.from(categories.entries()));
  });
}

inspect();
