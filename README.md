# 🍽️ Günlük Kalori Takibi

React ile geliştirilmiş, kullanıcının günlük yemeklerini ve kalorilerini takip edebildiği basit bir web uygulaması.

## Özellikler

- ➕ **Ekleme**: Yemek adı, kalori miktarı ve öğün (kahvaltı/öğle/akşam/ara öğün) bilgisiyle yeni kayıt ekleme
- 📋 **Listeleme**: Eklenen tüm yemekleri ve toplam günlük kaloriyi görüntüleme
- ✏️ **Güncelleme**: Mevcut bir kaydı düzenleme
- 🗑️ **Silme**: İstenmeyen bir kaydı listeden kaldırma
- 💾 **LocalStorage**: Veriler tarayıcıda saklanır, sayfa yenilendiğinde kaybolmaz

## Kullanılan Teknolojiler

- **ReactJS** (Vite ile kurulmuş)
- **Pure CSS**
- **LocalStorage API**

## Proje Yapısı

src/
├── components/
│   ├── TodoForm.jsx   (MealForm - yemek ekleme formu)
│   ├── TodoList.jsx   (MealList - yemek listesi)
│   └── TodoItem.jsx   (MealItem - tekil yemek kartı)
├── pages/
│   └── HomePage.jsx
├── interfaces/
│   └── todo.js        (createMeal fonksiyonu)
├── App.jsx
└── App.css

## Kurulum ve Çalıştırma
npm install

npm run dev
## Canlı Demo

https://lucky-starlight-21338c.netlify.app/

## Geliştirici

Beren Yavuz