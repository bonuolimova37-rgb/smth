import React, { useState } from 'react';
import './App.css';

const COUNTRIES_LIST = [
  {
    code: 'UZ', name: 'Uzbekistan', capital: 'Tashkent', region: 'Asia', currency: 'UZS', rateToUSD: 12800,
    image: 'https://i.pinimg.com/736x/ef/30/b8/ef30b8a7f76532e33a0e77c1dfdfb484.jpg',
    mapUrl: 'https://maps.google.com/maps?q=Uzbekistan&t=&z=6&ie=UTF8&iwloc=&output=embed',
    taxi: [{ name: 'Yandex Go', desc: 'Eng ommabop taksi xizmati', link: 'https://yandex.com/taxi' }, { name: 'MyTaxi', desc: 'Mahalliy taksi', link: 'https://mytaxi.uz' }],
    foodApps: [{ name: 'Express24', desc: 'Taom yetkazib berish', link: 'https://express24.uz' }, { name: 'Yandex Eats', desc: 'Tezkor yetkazish', link: 'https://eats.yandex.com' }],
    dishes: [
      { name: 'Osh (Palov)', img: 'https://i.pinimg.com/1200x/a7/50/48/a75048c1eaf9c07ad34d8052631ea379.jpg', status: 'Halol', desc: 'Guruch, go\'sht va sabzavotli milliy taom.' },
      { name: 'Somsa', img: 'https://i.pinimg.com/1200x/2b/e2/95/2be295161611268a0109b73343e4a02e.jpg', status: 'Halol', desc: 'Tandirda yopilgan xamirli taom.' },
      { name: 'Manti', img: 'https://i.pinimg.com/736x/de/17/c0/de17c0af83c7281feca6a2e22ed9db2d.jpg', status: 'Halol', desc: "Suv bug'ida pishirilgan hamirli toam." }
    ],
    emergency: { police: '102', ambulance: '103', fire: '101' },
    laws: ['Jamoat joyida spirtli ichimlik va chekish taqiqlangan.']
  },
  {
    code: 'TR', name: 'Turkey', capital: 'Ankara', region: 'Europe', currency: 'TRY', rateToUSD: 34.2,
    image: 'https://i.pinimg.com/1200x/1c/9a/76/1c9a76c00186e2b5e42ddcc176041540.jpg',
    mapUrl: 'https://maps.google.com/maps?q=Turkey&t=&z=6&ie=UTF8&iwloc=&output=embed',
    taxi: [{ name: 'BiTaksi', desc: 'Turkiya asosiy taksisi', link: 'https://www.bitaksi.com' }],
    foodApps: [{ name: 'Yemeksepeti', desc: 'Restoran taomlari', link: 'https://www.yemeksepeti.com' }, { name: 'Getir', desc: 'Tezkor yetkazish', link: 'https://getir.com' }],
    dishes: [{ name: 'Iskender Kebap', img: 'https://i.pinimg.com/736x/03/3f/a9/033fa99cd98bef82b6d7a4e7d3855729.jpg', status: 'Halol', desc: 'Go\'sht va saryog\'li kabob.' },
      { name: 'Dolma', img: 'https://i.pinimg.com/736x/54/c8/a9/54c8a9dce8ca4d42a3f3c4aa22c5c4c2.jpg', status: 'Halol', desc: 'Go\'sht va saryog\'li taom.' }
    ],
    emergency: { police: '155', ambulance: '112', fire: '110' },
    laws: ['Qimor o‘ynash va noqonuniy faoliyatlarda qatnashish mumkin emas. '],
     
  },
  {
    code: 'AE', name: 'United Arab Emirates', capital: 'Abu Dhabi', region: 'Asia', currency: 'AED', rateToUSD: 3.67,
    image: 'https://i.pinimg.com/1200x/b5/a8/49/b5a8496630c55409799017635aad9c23.jpg',
    mapUrl: 'https://maps.google.com/maps?q=United+Arab+Emirates&t=&z=6&ie=UTF8&iwloc=&output=embed',
    taxi: [{ name: 'Careem', desc: 'BAA bo\'ylab taksi', link: 'https://www.careem.com' }],
    foodApps: [{ name: 'Talabat', desc: 'Taom yetkazish', link: 'https://www.talabat.com' }],
    dishes: [{ name: 'Machboos', img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80', status: 'Halol', desc: 'Guruch va go\'shtli taom.' }],
    emergency: { police: '999', ambulance: '998', fire: '997' },
    laws: ['Jamoat joylarida suratga olishda ehtiyot bo\'ling.']
  },
  {
    code: 'US', name: 'United States', capital: 'Washington, D.C.', region: 'Americas', currency: 'USD', rateToUSD: 1,
    image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=600&q=80',
    mapUrl: 'https://maps.google.com/maps?q=USA&t=&z=4&ie=UTF8&iwloc=&output=embed',
    taxi: [{ name: 'Uber', desc: 'AQSh bo\'ylab taksi', link: 'https://www.uber.com' }, { name: 'Lyft', desc: 'Ommabop taksi', link: 'https://www.lyft.com' }],
    foodApps: [{ name: 'DoorDash', desc: 'Taom yetkazish', link: 'https://www.doordash.com' }],
    dishes: [{ name: 'Burger', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80', status: 'Tarkibini surishtiring', desc: 'Klassik Amerika burgeri.' }],
    emergency: { police: '911', ambulance: '911', fire: '911' },
    laws: ['21 yoshdan kichiklarga spirtli ichimlik taqiqlangan.']
  },
  {
    code: 'MY', name: 'Malaysia', capital: 'Kuala Lumpur', region: 'Asia', currency: 'MYR', rateToUSD: 4.35,
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=600&q=80',
    mapUrl: 'https://maps.google.com/maps?q=Malaysia&t=&z=6&ie=UTF8&iwloc=&output=embed',
    taxi: [{ name: 'Grab', desc: 'Asosiy taksi va dostavka ilovasi', link: 'https://www.grab.com' }],
    foodApps: [{ name: 'Foodpanda', desc: 'Tezkor yetkazib berish', link: 'https://www.foodpanda.com' }],
    dishes: [{ name: 'Nasi Lemak', img: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80', status: 'Halol', desc: 'Kokonat guruchi va sous.' }],
    emergency: { police: '999', ambulance: '999', fire: '994' },
    laws: ['Giyohvandlik uchun og\'ir jazolar bor.']
  },
  {
    code: 'SA', name: 'Saudi Arabia', capital: 'Riyadh', region: 'Asia', currency: 'SAR', rateToUSD: 3.75,
    image: 'https://i.pinimg.com/736x/be/f0/49/bef049c4206d5854a7f318d491608105.jpg',
    mapUrl: 'https://maps.google.com/maps?q=Saudi+Arabia&t=&z=5&ie=UTF8&iwloc=&output=embed',
    taxi: [{ name: 'Ego / Careem', desc: 'Saudiya taksi xizmati', link: 'https://www.careem.com' }],
    foodApps: [{ name: 'HungerStation', desc: 'Taom yetkazish', link: 'https://hungerstation.com' }],
    dishes: [{ name: 'Kabsa', img: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=600&q=80', status: 'Halol', desc: 'Guruch va go\'shtli milliy taom.' }],
    emergency: { police: '999', ambulance: '997', fire: '998' },
    laws: ['Jamoat odobi qoidalariga amal qiling.']
  },
  {
    code: 'JP', name: 'Japan', capital: 'Tokyo', region: 'Asia', currency: 'JPY', rateToUSD: 148,
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80',
    mapUrl: 'https://maps.google.com/maps?q=Japan&t=&z=5&ie=UTF8&iwloc=&output=embed',
    taxi: [{ name: 'GO Taxi', desc: 'Yaponiya rasmiy taksisi', link: 'https://go.mo-t.com' }],
    foodApps: [{ name: 'Demae-can', desc: 'Yetkazib berish', link: 'https://demae-can.com' }],
    dishes: [{ name: 'Ramen', img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80', status: 'Halol sertifikatlisini so\'rang', desc: 'Yapon ugrasi.' }],
    emergency: { police: '110', ambulance: '119', fire: '119' },
    laws: ['Ko\'chada yurib ovqatlanmang.']
  },
  {
    code: 'KR', name: 'South Korea', capital: 'Seoul', region: 'Asia', currency: 'KRW', rateToUSD: 1340,
    image: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=600&q=80',
    mapUrl: 'https://maps.google.com/maps?q=South+Korea&t=&z=6&ie=UTF8&iwloc=&output=embed',
    taxi: [{ name: 'Kakao T', desc: 'Koreya asosiy taksisi', link: 'https://www.kakaocorp.com' }],
    foodApps: [{ name: 'Coupang Eats', desc: 'Taom yetkazish', link: 'https://www.eats.co.kr' }],
    dishes: [{ name: 'Bibimbap', img: 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?auto=format&fit=crop&w=600&q=80', status: 'Halol variantini so\'rang', desc: 'Sabzavotli guruch.' }],
    emergency: { police: '112', ambulance: '119', fire: '119' },
    laws: ['Chiqindilarni joyida saralang.']
  },
 {
  code: 'DE',
  name: 'Germany',
  capital: 'Berlin',
  region: 'Europe',
  currency: 'EUR',
  rateToUSD: 0.92,
  image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80',
  mapUrl: 'https://maps.google.com/maps?q=Germany&t=&z=6&ie=UTF8&iwloc=&output=embed',
  taxi: [
    { name: 'FREENOW', desc: 'Germaniyadagi asosiy taksi xizmati', link: 'https://www.free-now.com' },
    { name: 'Bolt', desc: 'Arzon va tezkor taksi', link: 'https://bolt.eu' },
    { name: 'Uber', desc: 'Katta shaharlarda faol taksi', link: 'https://www.uber.com' }
  ],
  foodApps: [
    { name: 'Lieferando', desc: 'Eng yirik taom yetkazish xizmati', link: 'https://www.lieferando.de' },
    { name: 'Wolt', desc: 'Tezkor ovqat va mahsulot yetkazish', link: 'https://wolt.com' },
    { name: 'Uber Eats', desc: 'Restoran taomlari yetkazish', link: 'https://www.ubereats.com' }
  ],
  dishes: [
    { name: 'Currywurst', img: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=600&q=80', status: 'Tarkibini surishtiring', desc: 'Sousli nemis sosiskasi va kartoshka fri.' },
    { name: 'Döner Kebab', img: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=600&q=80', status: 'Halol (Turk oshxonasi)', desc: 'Nemis-turkcha go\'shtli milliy fastfud.' }
  ],
  emergency: { police: '110', ambulance: '112', fire: '112' },
  laws: ['Yakshanba kunlari shovqin solish va do\'konlar ishlashi taqiqlangan (Ruhetag).']
},
{
  code: 'AU',
  name: 'Australia',
  capital: 'Canberra',
  region: 'Oceania',
  currency: 'AUD',
  rateToUSD: 1.48,
  image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=600&q=80',
  mapUrl: 'https://maps.google.com/maps?q=Australia&t=&z=4&ie=UTF8&iwloc=&output=embed',
  taxi: [
    { name: 'Uber', desc: 'Avstraliyadagi eng ommabop taksi xizmati', link: 'https://www.uber.com' },
    { name: 'DiDi', desc: 'Arzon va qulay taksi xizmati', link: 'https://web.didiglobal.com' },
    { name: '13cabs', desc: 'Avstraliyaning rasmiy taksi xizmati', link: 'https://www.13cabs.com.au' }
  ],
  foodApps: [
    { name: 'DoorDash', desc: 'Eng keng tarqalgan ovqat yetkazish xizmati', link: 'https://www.doordash.com' },
    { name: 'Uber Eats', desc: 'Restoran taomlarini tezkor yetkazish', link: 'https://www.ubereats.com' },
    { name: 'Menulog', desc: 'Avstraliyaning mahalliy dostavka ilovasi', link: 'https://www.menulog.com.au' }
  ],
  dishes: [
    { name: 'Chicken Parmigiana', img: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&w=600&q=80', status: 'Halol sertifikatlisini so\'rang', desc: 'Tovuq go\'shti, pomidor sousi va pishloqli taom.' },
    { name: 'Meat Pie', img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80', status: 'Tarkibini surishtiring (Burch/Tovuq)', desc: 'Klassik Avstraliya go\'shtli pirogi.' }
  ],
  emergency: { police: '000', ambulance: '000', fire: '000' },
  laws: ['Favqulodda holatlar uchun yagona raqam — 000. Sohillarda faqat qutqaruvchilar bayroqlari orasida cho\'miling.']
},
{
  code: 'EG',
  name: 'Egypt',
  capital: 'Cairo',
  region: 'Africa',
  currency: 'EGP',
  rateToUSD: 48.5,
  image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=600&q=80',
  mapUrl: 'https://maps.google.com/maps?q=Egypt&t=&z=6&ie=UTF8&iwloc=&output=embed',
  taxi: [
    { name: 'Uber', desc: 'Qohira va yirik shaharlarda eng qulay taksi', link: 'https://www.uber.com' },
    { name: 'InDrive', desc: 'Narxni kelishib yuriladigan mashhur taksi', link: 'https://indrive.com' },
    { name: 'DiDi', desc: 'Hamyonbop taksi xizmati', link: 'https://web.didiglobal.com' }
  ],
  foodApps: [
    { name: 'Talabat', desc: 'Misrdagi eng yirik taom va mahsulot yetkazish ilovasi', link: 'https://www.talabat.com/egypt' },
    { name: 'elmenus', desc: 'Restoranlar va taom buyurtma qilish xizmati', link: 'https://www.elmenus.com' },
    { name: 'Breadfast', desc: 'Non mahsulotlari va oziq-ovqat yetkazib berish', link: 'https://www.breadfast.com' }
  ],
  dishes: [
    { name: 'Koshary', img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80', status: 'Halol (Vegetarian)', desc: 'Makaron, guruch, yasmiq va poytaxtcha tomat sousli milliy taom.' },
    { name: 'Ful Medames', img: 'https://i.pinimg.com/736x/8d/1a/82/8d1a8282e627be557abbbd722b71592a.jpg', status: 'Halol', desc: 'Pishirilgan loviya va ziravorli an\'anaviy nonushta taomi.' }
  ],
  emergency: { police: '122', ambulance: '123', fire: '180' },
  laws: ['Tarixiy obidalar va harbiy binolarni ruxsatsiz suratga olish taqiqlangan. Taksida savdolashish odatiy hol.']
},
{
  code: 'SD',
  name: 'Sudan',
  capital: 'Khartoum',
  region: 'Africa',
  currency: 'SDG',
  rateToUSD: 600,
  image: 'https://i.pinimg.com/736x/67/77/ed/6777edf60c9bbba65e52c610a2b3ba25.jpg',
  mapUrl: 'https://maps.google.com/maps?q=Sudan&t=&z=5&ie=UTF8&iwloc=&output=embed',
  taxi: [
    { name: 'Tirhal', desc: 'Sudandagi eng ommabop mahalliy taksi ilovasi', link: 'https://tirhal.net' },
    { name: 'Mishwar', desc: 'Tezkor va qulay taksi xizmati', link: 'https://mishwar.app' }
  ],
  foodApps: [
    { name: 'Yallafood', desc: 'Taom va mahsulot yetkazib berish xizmati', link: 'https://yallafood.net' },
    { name: 'Tirhal Delivery', desc: 'Tirhal servisining ovqat yetkazish bo\'limi', link: 'https://tirhal.net' }
  ],
  dishes: [
    { name: 'Ful Medames (Sudan style)', img: 'https://images.unsplash.com/photo-1541518763669-27fef04b14da?auto=format&fit=crop&w=600&q=80', status: 'Halol', desc: 'Pishirilgan loviya, kunjut yog\'i va pishloqli milliy taom.' },
    { name: 'Kisra', img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80', status: 'Halol', desc: "Jo'xori unidan tayyorlanadigan yupqa an\'anaviy non." },

  ],
  emergency: { police: '999', ambulance: '999', fire: '999' },
  laws: ['Harbiy va davlat obyektlarini suratga olish qat\'iyan taqiqlangan. Mahalliy urf-odatlarga rioya qiling.']
},
{
  code: 'NG',
  name: 'Nigeria',
  capital: 'Abuja',
  region: 'Africa',
  currency: 'NGN',
  rateToUSD: 1650,
  image: 'https://i.pinimg.com/736x/b0/56/49/b05649bf2ed3b6f3fdef3a14652d2ead.jpg',
  mapUrl: 'https://maps.google.com/maps?q=Nigeria&t=&z=6&ie=UTF8&iwloc=&output=embed',
  taxi: [
    { name: 'Bolt', desc: 'Nigeriyadagi eng mashhur va keng tarqalgan taksi', link: 'https://bolt.eu' },
    { name: 'Uber', desc: 'Lagos va Abujada qulay va xavfsiz taksi xizmati', link: 'https://www.uber.com' },
    { name: 'InDrive', desc: 'Narxni kelishib yuriladigan mashhur servis', link: 'https://indrive.com' }
  ],
  foodApps: [
    { name: 'Chowdeck', desc: 'Nigeriyadagi eng tezkor taom yetkazib berish ilovasi', link: 'https://chowdeck.com' },
    { name: 'Glovo', desc: 'Ovqat va xarid mahsulotlarini tezkor yetkazish', link: 'https://glovoapp.com' },
    { name: 'Jumia Food', desc: 'Keng tarqalgan restoran taomlari dostavkasi', link: 'https://food.jumia.com.ng' }
  ],
  dishes: [
    { name: 'Jollof Rice', img: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&w=600&q=80', status: 'Halol (Tovuq/Mol go\'shti)', desc: 'Tomat va ziravorlar bilan pishirilgan mashhur guruchli taom.' },
    { name: 'Suya', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80', status: 'Halol (Musulmon qassoblardan oling)', desc: 'Achchiq ziravorli strits-fud go\'sht shashligi.' }
  ],
  emergency: { police: '112', ambulance: '112', fire: '112' },
  laws: ['Favqulodda raqam — 112. Yirik shaharlarda tun ko\'chada yolg\'iz yurmaslik tavsiya etiladi.']
},
{
  code: 'SO',
  name: 'Somalia',
  capital: 'Mogadishu',
  region: 'Africa',
  currency: 'SOS',
  rateToUSD: 570,
  image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=600&q=80',
  mapUrl: 'https://maps.google.com/maps?q=Somalia&t=&z=6&ie=UTF8&iwloc=&output=embed',
  taxi: [
    { name: 'Dhaweeye', desc: 'Mogadishoda eng ommabop va keng tarqalgan taksi ilovasi', link: 'https://dhaweeye.com' },
    { name: 'Raha Taxi', desc: 'Qulay va xavfsiz mahalliy taksi xizmati', link: 'https://raha.so' }
  ],
  foodApps: [
    { name: 'Dhaweeye Delivery', desc: 'Taom va oziq-ovqat mahsulotlarini yetkazib berish', link: 'https://dhaweeye.com' },
    { name: 'SooMaal', desc: 'Mogadisho bo\'ylab online xarid va yetkazish xizmati', link: 'https://soomaal.com' }
  ],
  dishes: [
    { name: 'Bariis Iskukaris', img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80', status: 'Halol', desc: 'Ziravorlar va qo\'y yoki tuya go\'shti bilan pishirilgan milliy guruchli taom.' },
    { name: 'Suqaar', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80', status: 'Halol', desc: 'Mayda to\'g\'ralgan go\'sht va sabzavotli qovurma taom.' }
  ],
  emergency: { police: '888', ambulance: '999', fire: '555' },
  laws: ['Davlat va harbiy obyektlarni suratga olish taqiqlangan. Mahalliy urf-odat va islomiy qoidalarga rioya qiling.']
},
{
  code: 'CA',
  name: 'Canada',
  capital: 'Ottawa',
  region: 'Americas',
  currency: 'CAD',
  rateToUSD: 1.42,
  image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=600&q=80',
  mapUrl: 'https://maps.google.com/maps?q=Canada&t=&z=4&ie=UTF8&iwloc=&output=embed',
  taxi: [
    { name: 'Uber', desc: 'Kanadada eng keng tarqalgan taksi xizmati', link: 'https://www.uber.com' },
    { name: 'Lyft', desc: 'Yirik shaharlarda ommabop va qulay taksi', link: 'https://www.lyft.com' }
  ],
  foodApps: [
    { name: 'SkipTheDishes', desc: 'Kanadaning eng ommabop mahalliy taom yetkazish ilovasi', link: 'https://www.skipthedishes.com' },
    { name: 'DoorDash', desc: 'Katta shaharlarda tezkor ovqat va mahsulot yetkazish', link: 'https://www.doordash.com' },
    { name: 'Uber Eats', desc: 'Restoran taomlarini yetkazib berish', link: 'https://www.ubereats.com' }
  ],
  dishes: [
    { name: 'Poutine', img: 'https://i.pinimg.com/736x/33/6c/1a/336c1a2f5a612eed6227f60ce22934e0.jpg', status: 'Tarkibini surishtiring (Sous/Go\'sht)', desc: 'Kartoshka fri, pishloq bo\'laklari va issiq sousli milliy taom.' },
    { name: 'Maple Butter Tarts', img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80', status: 'Halol (Shirinlik)', desc: 'Zarang siropi (Maple syrup) qo\'shib tayyorlanadigan an\'anaviy shirinlik.' }
  ],
  emergency: { police: '911', ambulance: '911', fire: '911' },
  laws: ['Favqulodda yordam raqami — 911. Jamoat joylarida tamaki chekish va axlat tashlash qat\'iyan taqiqlangan.']
},
{
  code: 'MX',
  name: 'Mexico',
  capital: 'Mexico City',
  region: 'Americas',
  currency: 'MXN',
  rateToUSD: 19.5,
  image: 'https://images.unsplash.com/photo-1512813195386-6cf811ad3542?auto=format&fit=crop&w=600&q=80',
  mapUrl: 'https://maps.google.com/maps?q=Mexico&t=&z=5&ie=UTF8&iwloc=&output=embed',
  taxi: [
    { name: 'Uber', desc: 'Mexiko va yirik shaharlarda eng xavfsiz va ommabop taksi', link: 'https://www.uber.com' },
    { name: 'DiDi', desc: 'Arzon va tezkor taksi xizmati', link: 'https://web.didiglobal.com' },
    { name: 'Cabify', desc: 'Qulay va ishonchli shahar taksisi', link: 'https://cabify.com' }
  ],
  foodApps: [
    { name: 'Rappi', desc: 'Meksikadagi eng ommabop taom va mahsulot yetkazish ilovasi', link: 'https://www.rappi.com.mx' },
    { name: 'Uber Eats', desc: 'Restoran va fastfud taomlarini yetkazish', link: 'https://www.ubereats.com' },
    { name: 'DiDi Food', desc: 'Hamyonbop taom yetkazib berish xizmati', link: 'https://www.didi-food.com' }
  ],
  dishes: [
    { name: 'Tacos', img: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=600&q=80', status: 'Tarkibini surishtiring (To\'ng\'iz/Go\'sht)', desc: 'Jo\'xori noni (Tortilya), go\'sht, sabzavot va sousli mashhur milliy taom.' },
    { name: 'Guacamole & Chips', img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80', status: 'Halol (Vegetarian)', desc: 'Avokado, limon va ziravorlardan tayyorlanadigan sous hamda chiplar.' }
  ],
  emergency: { police: '911', ambulance: '911', fire: '911' },
  laws: ['Favqulodda yordam raqami — 911. Ko\'chada taksi to\'xtatish o\'rniga Uber yoki DiDi ilovalaridan foydalanish xavfsizroq.']
},
{
  code: 'IN',
  name: 'India',
  capital: 'New Delhi',
  region: 'Asia',
  currency: 'INR',
  rateToUSD: 83.5,
  image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80',
  mapUrl: 'https://maps.google.com/maps?q=India&t=&z=5&ie=UTF8&iwloc=&output=embed',
  taxi: [
    { name: 'Ola', desc: 'Hindistondagi eng mashhur mahalliy taksi xizmati', link: 'https://www.olacabs.com' },
    { name: 'Uber', desc: 'Yirik shaharlarda qulay va xavfsiz taksi', link: 'https://www.uber.com' },
    { name: 'Rapido', desc: 'Arzon va tezkor mototaksi hamda riksha xizmati', link: 'https://www.rapido.bike' }
  ],
  foodApps: [
    { name: 'Zomato', desc: 'Hindistonning eng yirik taom yetkazish ilovasi', link: 'https://www.zomato.com' },
    { name: 'Swiggy', desc: 'Tezkor ovqat va oziq-ovqat mahsulotlari dostavkasi', link: 'https://www.swiggy.com' },
    { name: 'Blinkit', desc: '10 daqiqada mahsulotlarni yetkazib berish xizmati', link: 'https://blinkit.com' }
  ],
  dishes: [
    { name: 'Biryani', img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80', status: 'Halol (Tovuq/Qo\'y go\'shti)', desc: 'Xushbo\'y ziravorlar, basmati guruchi va go\'shtli milliy palov.' },
    { name: 'Butter Chicken', img: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80', status: 'Halol', desc: 'Sariyog\'li va qaymoqli tomat sousida pishirilgan yumshoq tovuq go\'shti.' }
  ],
  emergency: { police: '112', ambulance: '102', fire: '101' },
  laws: ['Favqulodda umumiy yordam raqami — 112. Hindistonda qoramol go\'shti (mol go\'shti) ko\'plab shtatlarda qonunan taqiqlangan.']
},
{
  code: 'RU',
  name: 'Russia',
  capital: 'Moscow',
  region: 'Europe',
  currency: 'RUB',
  rateToUSD: 92.5,
  image: 'https://i.pinimg.com/1200x/dc/81/39/dc8139a381182c77c44f52c331553835.jpg',
  mapUrl: 'https://maps.google.com/maps?q=Russia&t=&z=4&ie=UTF8&iwloc=&output=embed',
  taxi: [
    { name: 'Yandex Go', desc: 'Rossiyadagi eng ommabop va yirik taksi xizmati', link: 'https://taxi.yandex.ru' },
    { name: 'Citymobil', desc: 'Qulay va hamyonbop shahar taksi servisi', link: 'https://city-mobil.ru' },
    { name: 'InDrive', desc: 'Narxni kelishib yuriladigan mashhur taksi ilovasi', link: 'https://indrive.com' }
  ],
  foodApps: [
    { name: 'Yandex Eats', desc: 'Restoran taomlari va oziq-ovqatlarni tezkor yetkazib berish', link: 'https://eda.yandex.ru' },
    { name: 'Delivery Club (Market Delivery)', desc: 'Keng tarqalgan taom va mahsulot dostavka xizmati', link: 'https://market-delivery.yandex.ru' },
    { name: 'Samokat', desc: '15 daqiqada uyga oziq-ovqat yetkazish ilovasi', link: 'https://samokat.ru' }
  ],
  dishes: [
    { name: 'Borsch', img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80', status: 'Tarkibini surishtiring (Mol/Cho\'chqa go\'shti)', desc: "Lavlagi, sabzavotlar va go\'shtdan tayyorlanadigan quyuq sho'rva." },
    { name: 'Pelmeni', img: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80', status: 'Halol sertifikatlisini so\'rang (Halol chuchvara)', desc: 'Qiymali hamir taom (chuchvaraga o\'xshash).' }
  ],
  emergency: { police: '102', ambulance: '103', fire: '101' },
  laws: ['Yagona favqulodda raqam — 112. Jamoat joylarida alkogol ichish va tamaki chekish taqiqlangan. Xorijiy fuqarolar uchun migratsiya hisobiga turish majburiy.']
},
{
  code: 'CN',
  name: 'China',
  capital: 'Beijing',
  region: 'Asia',
  currency: 'CNY',
  rateToUSD: 7.05,
  image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=600&q=80',
  mapUrl: 'https://maps.google.com/maps?q=China&t=&z=4&ie=UTF8&iwloc=&output=embed',
  taxi: [
    { name: 'DiDi Chuxing', desc: 'Xitoydagi eng yirik va asosiy taksi chaqirish ilovasi', link: 'https://www.didiglobal.com' },
    { name: 'Amap (Gaode Maps)', desc: 'Xaritalar va taksi xizmatlarini birlashtirgan universal ilova', link: 'https://www.amap.com' },
    { name: 'T3 Transit', desc: 'Qulay va sifatli shahar taksi servisi', link: 'https://www.t3go.cn' }
  ],
  foodApps: [
    { name: 'Meituan', desc: 'Xitoydagi eng ommabop taom va mahsulot yetkazish platformasi', link: 'https://www.meituan.com' },
    { name: 'Ele.me', desc: 'Alibaba guruhiga tegishli tezkor ovqat yetkazish ilovasi', link: 'https://www.ele.me' }
  ],
  dishes: [
    { name: 'Peking Duck', img: 'https://images.unsplash.com/photo-1518492104633-130d0cc84637?auto=format&fit=crop&w=600&q=80', status: "Halol sertifikatlisini so\'rang', desc: 'Maxsus pishirilgan qisir terili Pekin o'rdak go'shti." },
    { name: 'Lanzhou Lamian', img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80', status: 'Halol (Dungan/Musulmon oshxonasi)', desc: "Qo\'lda cho\'zilgan xurmon va mol go\'shtli sho'rva."}
  ],
  emergency: { police: '110', ambulance: '120', fire: '119' },
  laws: ['Naqd pul deyarli ishlatilmaydi; to\'lovlar WeChat Pay va Alipay orqali amalga oshiriladi. Tarmoqlardan foydalanish uchun VPN kerak bo\'lishi mumkin.']
},
{
  code: 'MN',
  name: 'Mongolia',
  capital: 'Ulaanbaatar',
  region: 'Asia',
  currency: 'MNT',
  rateToUSD: 3400,
  image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=600&q=80',
  mapUrl: 'https://maps.google.com/maps?q=Mongolia&t=&z=5&ie=UTF8&iwloc=&output=embed',
  taxi: [
    { name: 'UBCab', desc: 'Ulan-Batordagi eng ommabop va asosiy taksi chaqirish ilovasi', link: 'https://ubcab.mn' },
    { name: 'Amap Taxi', desc: 'Qulay shahar taksi va harakatlanish servisi', link: 'https://www.amap.com' }
  ],
  foodApps: [
    { name: 'TokTok', desc: 'Mongoliyadagi eng yirik taom va mahsulot yetkazish ilovasi', link: 'https://toktok.mn' },
    { name: 'SiDi Food', desc: 'Restoran taomlarini tezkor yetkazib berish xizmati', link: 'https://sidi.mn' }
  ],
  dishes: [
    { name: 'Buuz', img: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80', status: 'Tarkibini surishtiring (Qo\'y/Mol go\'shti)', desc: 'Bug\'da pishiriladigan mongolcha qiymali manti.' },
    { name: 'Khuushuur', img: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80', status: 'Halol sertifikatlisini so\'rang', desc: 'Yog\'da qovurilgan go\'shtli pishiriq (cheburekka o\'xshash).' }
  ],
  emergency: { police: '102', ambulance: '103', fire: '101' },
  laws: ["Favqulodda xizmatlar raqamlari: Politsiya - 102, Tez yordam - 103, Yong\'in xavfsizligi - 101. Tabiat qo'ynida chiqindilarni qoldirish qat\'iyan taqiqlangan."]
},
{
  code: 'IR',
  name: 'Iran',
  capital: 'Tehran',
  region: 'Asia',
  currency: 'IRR',
  rateToUSD: 42000,
  image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=600&q=80',
  mapUrl: 'https://maps.google.com/maps?q=Iran&t=&z=5&ie=UTF8&iwloc=&output=embed',
  taxi: [
    { name: 'Snapp!', desc: 'Erondagi eng yirik va ommabop taksi xizmati (Uber muqobili)', link: 'https://snapp.ir' },
    { name: 'Tapsi', desc: 'Tehron va boshqa yirik shaharlardagi qulay taksi ilovasi', link: 'https://tapsi.ir' }
  ],
  foodApps: [
    { name: 'SnappFood', desc: 'Erondagi eng yirik restoran va oziq-ovqat yetkazish platformasi', link: 'https://snappfood.ir' },
    { name: 'Alopeyk', desc: 'Tezkor kurerlik va buyurtmalarni yetkazib berish ilovasi', link: 'https://alopeyk.com' }
  ],
  dishes: [
    { name: 'Ghormeh Sabzi', img: 'https://i.pinimg.com/1200x/cc/ed/13/cced134ff6309e73f61010672a1a3a1b.jpg', status: 'Halol', desc: 'O\'tlar, loviya va qo\'y go\'shti bilan pishiriladigan milliy dimlama taom.' },
    { name: 'Kebab Koobideh', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80', status: 'Halol', desc: 'Saffronli guruch bilan tortiladigan an\'anaviy qiyma kabob.' }
  ],
  emergency: { police: '110', ambulance: '115', fire: '125' },
  laws: ['Jamoat joylarida kiyinish qoidalariga (Hijob/Dress code) rioya qilish majburiy. Xalqaro bank kartalari (Visa/Mastercard) ishlamaydi, naqd pul yoki mahalliy kartalar kerak.']
},
{
  code: 'BR',
  name: 'Brazil',
  capital: 'Brasília',
  region: 'Americas',
  currency: 'BRL',
  rateToUSD: 5.45,
  image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=600&q=80',
  mapUrl: 'https://maps.google.com/maps?q=Brazil&t=&z=4&ie=UTF8&iwloc=&output=embed',
  taxi: [
    { name: 'Uber', desc: 'Braziliyadagi eng keng tarqalgan va xavfsiz taksi xizmati', link: 'https://www.uber.com' },
    { name: '99 (99Taxis)', desc: 'Braziliyaning eng ommabop mahalliy taksi ilovasi', link: 'https://99app.com' },
    { name: 'InDrive', desc: 'Narxni kelishib yuriladigan mashhur servis', link: 'https://indrive.com' }
  ],
  foodApps: [
    { name: 'iFood', desc: 'Braziliyadagi eng yirik taom va mahsulot yetkazib berish platformasi', link: 'https://www.ifood.com.br' },
    { name: 'Rappi', desc: 'Tezkor ovqat va supermarket mahsulotlari dostavkasi', link: 'https://www.rappi.com.br' }
  ],
  dishes: [
    { name: 'Feijoada', img: 'https://i.pinimg.com/736x/51/c6/88/51c688d0a66e8a465fc1f1c286a723fa.jpg', status: 'Tarkibini surishtiring (Ko\'pincha cho\'chqa go\'shti qo\'shiladi)', desc: 'Qora loviya va go\'shtdan tayyorlanadigan mashhur milliy dimlama.' },
    { name: 'Pão de Queijo', img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80', status: 'Halol (Pishloqli non)', desc: 'Tapioka unidan tayyorlanadigan an\'anaviy pishloqli kichik ponchiklar.' }
  ],
  emergency: { police: '190', ambulance: '192', fire: '193' },
  laws: ['Favqulodda raqamlar: Politsiya - 190, Tez yordam - 192. Yirik shaharlarda tun ko\'chada qimmatbaho buyumlarni ochiq olib yurmaslik tavsiya etiladi.']
},
{
  code: 'AR',
  name: 'Argentina',
  capital: 'Buenos Aires',
  region: 'Americas',
  currency: 'ARS',
  rateToUSD: 960,
  image: 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=600&q=80',
  mapUrl: 'https://maps.google.com/maps?q=Argentina&t=&z=4&ie=UTF8&iwloc=&output=embed',
  taxi: [
    { name: 'Uber', desc: 'Buenos-Ayres va yirik shaharlarda eng ommabop taksi xizmati', link: 'https://www.uber.com' },
    { name: 'Cabify', desc: 'Xavfsiz va qulay shahar taksi ilovasi', link: 'https://cabify.com' },
    { name: 'InDrive', desc: 'Narxni kelishib yuriladigan mashhur servis', link: 'https://indrive.com' }
  ],
  foodApps: [
    { name: 'Rappi', desc: 'Argentinada eng keng tarqalgan taom va mahsulot yetkazish ilovasi', link: 'https://www.rappi.com.ar' },
    { name: 'PedidosYa', desc: 'Restoran taomlari va supermarket mahsulotlari dostavkasi', link: 'https://www.pedidosya.com.ar' }
  ],
  dishes: [
    { name: 'Asado', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80', status: 'Halol sertifikatlisini so\'rang', desc: 'Ochiq olovda pishiriladigan mashhur argentinacha lahm go\'sht kabobi.' },
    { name: 'Empanadas', img: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80', status: 'Tarkibini surishtiring (Mol/Cho\'chqa go\'shti)', desc: "Go\'sht yoki pishloq bilan to\'ldirilgan do'mboq pishiriq (somsaga o\'xshash).'" }
  ],
  emergency: { police: '911', ambulance: '107', fire: '100' },
  laws: ['Favqulodda yordam raqami — 911 (tez yordam uchun 107). Ko\'chada qimmatbaho texnikalarni ochiq ushlab yurmaslik tavsiya etiladi.']
},
{
  code: 'PG',
  name: 'Papua New Guinea',
  capital: 'Port Moresby',
  region: 'Oceania',
  currency: 'PGK',
  rateToUSD: 3.95,
  image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80',
  mapUrl: 'https://maps.google.com/maps?q=Papua%20New%20Guinea&t=&z=5&ie=UTF8&iwloc=&output=embed',
  taxi: [
    { name: 'ODrivert', desc: 'Port-Morsbida xavfsiz va qulay taksi chaqirish ilovasi', link: 'https://odrivert.com' },
    { name: 'LPM Taxi', desc: 'Mahalliy rasmiy va ishonchli taksi xizmati', link: 'https://www.facebook.com' }
  ],
  foodApps: [
    { name: 'GoFood PNG', desc: 'Port-Morsbi bo\'ylab taom va oziq-ovqat yetkazish xizmati', link: 'https://www.gofoodpng.com' },
    { name: 'Tingg Delivery', desc: 'Restoran taomlari va mahsulotlarni tezkor yetkazib berish', link: 'https://tingg.com' }
  ],
  dishes: [
    { name: 'Mumu', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80', status: 'Tarkibini surishtiring (Tovuq/Mol/Cho\'chqa go\'shti)', desc: 'Yer osti pechida, banan barglariga o\'rab pishiriladigan an\'anaviy go\'sht va sabzavotli taom.' },
    { name: 'Sago Mansi', img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80', status: 'Halol (Vegetarian)', desc: 'Sago palmasi unidan tayyorlanadigan milliy pishiriq.' }
  ],
  emergency: { police: '112', ambulance: '111', fire: '110' },
  laws: ['Favqulodda raqamlar: Politsiya - 112, Tez yordam - 111. Shaharlarda tungi vaqtda xavfsizlik choralariga qat\'iy rioya qiling.']
},
{
  code: 'ID',
  name: 'Indonesia',
  capital: 'Jakarta',
  region: 'Asia',
  currency: 'IDR',
  rateToUSD: 15500,
  image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80',
  mapUrl: 'https://maps.google.com/maps?q=Indonesia&t=&z=5&ie=UTF8&iwloc=&output=embed',
  taxi: [
    { name: 'Gojek', desc: 'Indoneziyadagi eng mashhur mototaksi va taksi ilovasi', link: 'https://www.gojek.com' },
    { name: 'Grab', desc: 'Janubiy-Sharqiy Osiyoda keng tarqalgan universal taksi servisi', link: 'https://www.grab.com' },
    { name: 'Bluebird', desc: 'Rasmiy va xavfsiz an\'anaviy shahar taksi xizmati', link: 'https://www.bluebirdgroup.com' }
  ],
  foodApps: [
    { name: 'GoFood', desc: 'Gojek ilovasi ichidagi taom va mahsulot yetkazib berish xizmati', link: 'https://www.gojek.com/gofood' },
    { name: 'GrabFood', desc: 'Restoranlar va tezkor taomlarni yetkazish servisi', link: 'https://food.grab.com' }
  ],
  dishes: [
    { name: 'Nasi Goreng', img: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80', status: 'Halol', desc: 'Sabzavotlar, tuxum va go\'sht bo\'laklari bilan qovurilgan milliy guruch taomi.' },
    { name: 'Rendang', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80', status: 'Halol', desc: 'Kakos sutida ziravorlar bilan uzoq vaqt dimlab pishirilgan yumshoq mol go\'shti.' }
  ],
  emergency: { police: '110', ambulance: '118', fire: '113' },
  laws: ['Favqulodda yordam raqami — 112 (umumiy). Indoneziya aholisining aksariyati musulmonlar bo\'lib, halol taomlar keng tarqalgan. Plajlardan tashqari joylarda ochiq kiyimda yurmaslik tavsiya etiladi.']
},
{
  code: 'CO',
  name: 'Colombia',
  capital: 'Bogotá',
  region: 'Americas',
  currency: 'COP',
  rateToUSD: 4180,
  image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80',
  mapUrl: 'https://maps.google.com/maps?q=Colombia&t=&z=5&ie=UTF8&iwloc=&output=embed',
  taxi: [
    { name: 'Uber', desc: 'Bogota va yirik shaharlarda eng mashhur taksi servisi', link: 'https://www.uber.com' },
    { name: 'DiDi', desc: 'Hamyonbop va tezkor shahar taksi ilovasi', link: 'https://web.didiglobal.com' },
    { name: 'Cabify', desc: 'Xavfsiz va qulay taksi xizmati', link: 'https://cabify.com' },
    { name: 'InDrive', desc: 'Narxni kelishib yuriladigan mashhur servis', link: 'https://indrive.com' }
  ],
  foodApps: [
    { name: 'Rappi', desc: 'Kolumbiyada paydo bo\'lgan eng yirik taom va mahsulot yetkazish ilovasi', link: 'https://www.rappi.com.co' },
    { name: 'DiDi Food', desc: 'Restoran taomlarini hamyonbop narxda yetkazish', link: 'https://www.didi-food.com' },
    { name: 'Uber Eats', desc: 'Tayyor taom va ovqatlarni tezkor yetkazib berish', link: 'https://www.ubereats.com' }
  ],
  dishes: [
    { name: 'Bandeja Paisa', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80', status: 'Tarkibini surishtiring (Mol/Cho\'chqa go\'shti)', desc: "Guruch, loviya, qiymali go\'sht, qovurilgan tuxum va avokadoli to'q milliy taom." },
    { name: 'Arepas', img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80', status: 'Halol (Pishloqli/Vegetarian)', desc: "Jo'xori unidan tayyorlangan, ichiga pishloq yoki go'sht solinadigan pishiriq."}
  ],
  emergency: { police: '123', ambulance: '125', fire: '119' },
  laws: ['Yagona favqulodda raqam — 123. Gavjum joylarda va ko\'chada qimmatbaho buyumlarni ochik ushlab yurmaslik tavsiya etiladi.']
},
{
  code: 'CU',
  name: 'Cuba',
  capital: 'Havana',
  region: 'Americas',
  currency: 'CUP',
  rateToUSD: 24,
  image: 'https://images.unsplash.com/photo-1500759285222-a95626b934cb?auto=format&fit=crop&w=600&q=80',
  mapUrl: 'https://maps.google.com/maps?q=Cuba&t=&z=6&ie=UTF8&iwloc=&output=embed',
  taxi: [
    { name: 'LaNave', desc: 'Kubadagi asosiy va ommabop taksi chaqirish ilovasi (Uber muqobili)', link: 'https://lanave.app' },
    { name: 'CubaTaxi', desc: 'Davlatga qarashli rasmiy va an\'anaviy shahar taksi xizmati', link: 'https://www.cubataxi.cu' }
  ],
  foodApps: [
    { name: 'Mandao', desc: 'Gavanaliklar va sayyohlar uchun eng mashhur taom yetkazish ilovasi', link: 'https://mandaoweb.com' },
    { name: 'AlaMesa', desc: 'Restoranlar katalogi va taom buyurtma qilish servisi', link: 'https://www.alamesacuba.com' }
  ],
  dishes: [
    { name: 'Ropa Vieja', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80', status: 'Halol (Mol go\'shti)', desc: 'Tomat va sabzavotli sousda sekin pishirilgan yumshoq titilgan mol go\'shti.' },
    { name: 'Congrí (Moros y Cristianos)', img: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80', status: 'Halol (Vegetarian)', desc: 'Qora loviya va ziravorlar bilan birga pishiriladigan milliy guruch taomi.' }
  ],
  emergency: { police: '106', ambulance: '104', fire: '105' },
  laws: ['Favqulodda raqamlar: Politsiya - 106, Tez yordam - 104, Yong\'in xavfsizligi - 105. Internet tezligi cheklangan bo\'lishi mumkin, naqd pul (USD/EUR) olib yurish tavsiya etiladi.']
},
{
  code: 'TH',
  name: 'Thailand',
  capital: 'Bangkok',
  region: 'Asia',
  currency: 'THB',
  rateToUSD: 36.5,
  image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=600&q=80',
  mapUrl: 'https://maps.google.com/maps?q=Thailand&t=&z=5&ie=UTF8&iwloc=&output=embed',
  taxi: [
    { name: 'Grab', desc: 'Tailandda eng keng tarqalgan va xavfsiz taksi xizmati', link: 'https://www.grab.com' },
    { name: 'Bolt', desc: 'Hamyonbop shahar taksi va mototaksi ilovasi', link: 'https://bolt.eu' },
    { name: 'InDrive', desc: 'Narxni kelishib yuriladigan mashhur servis', link: 'https://indrive.com' }
  ],
  foodApps: [
    { name: 'GrabFood', desc: 'Restoranlar va ko\'cha taomlarini yetkazib berish servisi', link: 'https://food.grab.com' },
    { name: 'Foodpanda', desc: 'Tayyor taom va mahsulotlarni tezkor yetkazish ilovasi', link: 'https://www.foodpanda.co.th' },
    { name: 'LINE MAN', desc: 'Tailandda ommabop mahalliy yetkazib berish xizmati', link: 'https://lineman.line.me' }
  ],
  dishes: [
    { name: 'Pad Thai', img: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=600&q=80', status: 'Halol (Dengiz mahsulotlari/Vegetarian)', desc: 'Tuxum, yong\'oq va kreveta bilan qovurilgan milliy guruch ugra.' },
    { name: 'Tom Yum Goong', img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80', status: 'Halol (Dengiz mahsulotlari)', desc: 'Kreveta va ziravorlar bilan pishiriladigan mashhur achchiq-nordon sho\'rva.' }
  ],
  emergency: { police: '191', ambulance: '1669', fire: '199' },
  laws: ['Favqulodda raqamlar: Politsiya - 191, Turistik politsiya - 1155. Qirollik oilasi va ibodatxonalarni hurmat qilish qat\'iy talab etiladi. E-tsigaretalardan foydalanish taqiqlangan.']
},
{
  code: 'IT',
  name: 'Italy',
  capital: 'Rome',
  region: 'Europe',
  currency: 'EUR',
  rateToUSD: 0.92,
  image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80',
  mapUrl: 'https://maps.google.com/maps?q=Italy&t=&z=5&ie=UTF8&iwloc=&output=embed',
  taxi: [
    { name: 'Free Now', desc: 'Italiyadagi eng mashhur rasmiy taksi chaqirish ilovasi', link: 'https://www.free-now.com' },
    { name: 'Uber', desc: 'Rim va Milan kabi yirik shaharlarda ishlaydigan taksi servisi', link: 'https://www.uber.com' },
    { name: 'itTaxi', desc: 'Italiya taksichilar uyushmasining rasmiy servisi', link: 'https://www.ittaxi.it' }
  ],
  foodApps: [
    { name: 'Glovo', desc: 'Italiyada eng keng tarqalgan taom va mahsulot yetkazish ilovasi', link: 'https://glovoapp.com' },
    { name: 'Just Eat', desc: 'Restoran taomlarini buyurtma qilish uchun ommabop servis', link: 'https://www.justeat.it' },
    { name: 'Deliveroo', desc: 'Yevropada mashhur tezkor taom yetkazib berish xizmati', link: 'https://deliveroo.it' }
  ],
  dishes: [
    { name: 'Pizza Margherita', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80', status: 'Halol (Vegetarian)', desc: 'Mozzarella pishlog\'i, pomidor va rayhon bilan pishiriladigan klassik italyancha pitsa.' },
    { name: 'Risotto ai Funghi', img: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=600&q=80', status: 'Halol (Vegetarian)', desc: 'Qo\'ziqorinlar va maxsus guruchdan krem ko\'rinishida pishiriladigan milliy taom.' }
  ],
  emergency: { police: '112', ambulance: '118', fire: '115' },
  laws: ['Yevropa Ittifoqining umumiy favqulodda raqami — 112 (tez yordam — 118). Tarixiy obidalarda va favvoralarda cho\'milish hamda ularga zarar yetkazish uchun yuqori jarimalar belgilangan.']
},
{
  code: 'FR',
  name: 'France',
  capital: 'Paris',
  region: 'Europe',
  currency: 'EUR',
  rateToUSD: 0.92,
  image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80',
  mapUrl: 'https://maps.google.com/maps?q=France&t=&z=5&ie=UTF8&iwloc=&output=embed',
  taxi: [
    { name: 'Uber', desc: 'Fransiyada eng mashhur va keng tarqalgan taksi xizmati', link: 'https://www.uber.com' },
    { name: 'G7', desc: 'Parijdagi eng yirik rasmiy taksi xizmati va mobil ilovasi', link: 'https://www.g7.fr' },
    { name: 'Bolt', desc: 'Hamyonbop va qulay shahar taksi servisi', link: 'https://bolt.eu' }
  ],
  foodApps: [
    { name: 'Uber Eats', desc: 'Restoranlar va kafelardan tezkor taom yetkazib berish', link: 'https://www.ubereats.com' },
    { name: 'Deliveroo', desc: 'Fransiyaning yirik shaharlarida mashhur yetkazib berish xizmati', link: 'https://deliveroo.fr' },
    { name: 'Just Eat', desc: 'Onlayn taom buyurtma qilish uchun ommabop platforma', link: 'https://www.justeat.fr' }
  ],
  dishes: [
    { name: 'Ratatouille', img: 'https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?auto=format&fit=crop&w=600&q=80', status: 'Halol (Vegetarian)', desc: 'Baqlajon, qovoqcha va pomidordan pishiriladigan an\'anaviy sabzavotli fransuz taomi.' },
    { name: 'Croissant', img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80', status: 'Halol (Vegetarian)', desc: 'Sariyog\'li va qat-qat xamirdan tayyorlanadigan mashhur pishiriq.' }
  ],
  emergency: { police: '17', ambulance: '15', fire: '18' },
  laws: ['Yevropa Ittifoqining umumiy favqulodda raqami — 112. Jamoat joylarida va transportda tamaki chekish taqiqlangan. Barcha jamoat transportida chiptalarni kompostlash (tasdiqlash) shart.']
},
{
  code: 'CH',
  name: 'Switzerland',
  capital: 'Bern',
  region: 'Europe',
  currency: 'CHF',
  rateToUSD: 0.88,
  image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=600&q=80',
  mapUrl: 'https://maps.google.com/maps?q=Switzerland&t=&z=5&ie=UTF8&iwloc=&output=embed',
  taxi: [
    { name: 'Uber', desc: 'Sürix, Jeneva va Bazelda keng tarqalgan taksi xizmati', link: 'https://www.uber.com' },
    { name: 'Vertt', desc: 'Shveytsariyaning mahalliy va ekologik taksi ilovasi', link: 'https://vertt.ch' },
    { name: 'Taxi.eu', desc: 'Yevropa bo\'ylab va Shveytsariya shaharlarida taksi chaqirish ilovasi', link: 'https://www.taxi.eu' }
  ],
  foodApps: [
    { name: 'Just Eat CH', desc: 'Shveytsariyada eng mashhur taom yetkazib berish ilovasi', link: 'https://www.just-eat.ch' },
    { name: 'Uber Eats', desc: 'Yirik shaharlardagi restoranlardan tayyor taom yetkazish', link: 'https://www.ubereats.com' },
    { name: 'Eat.ch', desc: 'Mahalliy kafelar va restoranlar tarmog\'i servisi', link: 'https://www.eat.ch' }
  ],
  dishes: [
    { name: 'Swiss Fondue', img: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=600&q=80', status: 'Tarkibini surishtirish tavsiya etiladi (Pishloqli)', desc: 'Eritilgan pishloqqa non bo\'laklarini botirib yeyiladigan milliy taom.' },
    { name: 'Rösti', img: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80', status: 'Halol (Vegetarian)', desc: "Qirg'ichdan o'tkazilib, qizartirib qovurilgan kartoshkali an\'anaviy taom."}
  ],
  emergency: { police: '117', ambulance: '144', fire: '118' },
  laws: ['Yevropa umumiy favqulodda raqami — 112. Yakshanba kunlari va soat 22:00 dan keyin shovqin solish taqiqlangan. Jamoat transporti chiptalarini oldindan sotib olish va tasdiqlash shart.']
},
{
  code: 'MC',
  name: 'Monaco',
  capital: 'Monaco',
  region: 'Europe',
  currency: 'EUR',
  rateToUSD: 0.92,
  image: 'https://i.pinimg.com/736x/cc/31/b3/cc31b30f9ae02b00945a06ff217993d4.jpg',
  mapUrl: 'https://maps.google.com/maps?q=Monaco&t=&z=13&ie=UTF8&iwloc=&output=embed',
  taxi: [
    { name: 'Uber', desc: 'Monako va unga tutash Fransiya hududlarida xizmat ko\'rsatadi', link: 'https://www.uber.com' },
    { name: 'Monaco Taxi', desc: 'Monako knyazligining rasmiy taksi xizmati', link: 'https://www.taximonaco.com' },
    { name: 'Bolt', desc: 'Kot-d\'Azur mintaqasida ommabop taksi ilovasi', link: 'https://bolt.eu' }
  ],
  foodApps: [
    { name: 'Carlo', desc: 'Monakoning mahalliy to\'lov va keshbek ilovasi (restoranlar uchun)', link: 'https://carloapp.com' },
    { name: 'Uber Eats', desc: 'Poytaxt va atrofidagi restoranlardan taom yetkazib berish', link: 'https://www.ubereats.com' },
    { name: 'Deliveroo', desc: 'Yevropadagi mashhur taom yetkazish servisi', link: 'https://deliveroo.fr' }
  ],
  dishes: [
    { name: 'Barbagiuan', desc: 'Rikotta pishlog\'i va ismaloq solib qovurilgan milliy pishiriq.', status: 'Halol (Vegetarian)', img: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=600&q=80' },
    { name: 'Socca', desc: 'Noxot unidan tayyorlanadigan yupqa noxotli quymoq.', status: 'Halol (Vegetarian)', img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80' }
  ],
  emergency: { police: '17', ambulance: '18', fire: '18' },
  laws: ['Yevropa umumiy favqulodda raqami — 112. Jamoat joylarida va ko\'chalarda yalang\'och yoki faqat suzish kiyimida yurish qat\'iyan taqiqlangan hamda jarimaga sabab bo\'ladi.']
},
{
  code: 'ES',
  name: 'Spain',
  capital: 'Madrid',
  region: 'Europe',
  currency: 'EUR',
  rateToUSD: 0.92,
  image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80',
  mapUrl: 'https://maps.google.com/maps?q=Spain&t=&z=5&ie=UTF8&iwloc=&output=embed',
  taxi: [
    { name: 'Free Now', desc: 'Ispaniyada eng mashhur rasmiy taksi chaqirish ilovasi', link: 'https://www.free-now.com' },
    { name: 'Cabify', desc: 'Madrid va Barselonada keng tarqalgan taksi servisi', link: 'https://cabify.com' },
    { name: 'Uber', desc: 'Yirik shaharlarda ishlaydigan xalqaro taksi xizmati', link: 'https://www.uber.com' }
  ],
  foodApps: [
    { name: 'Glovo', desc: 'Ispaniyada eng mashhur taom va mahsulot yetkazib berish xizmati', link: 'https://glovoapp.com' },
    { name: 'Just Eat ES', desc: 'Restoran taomlarini onlayn buyurtma qilish ilovasi', link: 'https://www.just-eat.es' },
    { name: 'Uber Eats', desc: 'Tezkor taom yetkazib berish xalqaro servisi', link: 'https://www.ubereats.com' }
  ],
  dishes: [
    { name: 'Paella de Mariscos', desc: 'Dengiz mahsulotlari va za\'faron bilan pishiriladigan milliy guruch taomi.', status: 'Halol (Dengiz mahsulotlari)', img: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=600&q=80' },
    { name: 'Gazpacho', desc: 'Pomidor va sabzavotlardan tayyorlanadigan sovuq ispan sho\'rvasi.', status: 'Halol (Vegetarian)', img: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=600&q=80' }
  ],
  emergency: { police: '091', ambulance: '061', fire: '080' },
  laws: ['Yevropa umumiy favqulodda raqami — 112. Barselona va Madrid ko\'chalarida va sohillardan tashqarida cho\'milish kiyimida yurish taqiqlangan hamda jarimaga sabab bo\'ladi.']
},
{
  code: 'PT',
  name: 'Portugal',
  capital: 'Lisbon',
  region: 'Europe',
  currency: 'EUR',
  rateToUSD: 0.92,
  image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=600&q=80',
  mapUrl: 'https://maps.google.com/maps?q=Portugal&t=&z=5&ie=UTF8&iwloc=&output=embed',
  taxi: [
    { name: 'Bolt', desc: 'Portuqaliyada eng mashhur va arzon taksi xizmati', link: 'https://bolt.eu' },
    { name: 'Uber', desc: 'Lissabon va Portuda keng tarqalgan xalqaro xizmat', link: 'https://www.uber.com' },
    { name: 'Free Now', desc: 'Shaharlarda rasmiy taksilarni chaqirish ilovasi', link: 'https://www.free-now.com' }
  ],
  foodApps: [
    { name: 'Glovo', desc: 'Portuqaliyada eng ommabop taom va mahsulot yetkazish ilovasi', link: 'https://glovoapp.com' },
    { name: 'Uber Eats', desc: 'Restoran taomlarini tezkor yetkazib berish servisi', link: 'https://www.ubereats.com' },
    { name: 'Bolt Food', desc: 'Hamyonbop va qulay taom yetkazib berish xizmati', link: 'https://food.bolt.eu' }
  ],
  dishes: [
    { name: 'Bacalhau à Brás', desc: 'Treska balig\'i, kartoshka va tuxumdan tayyorlanadigan milliy taom.', status: 'Halol (Dengiz mahsulotlari)', img: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=600&q=80' },
    { name: 'Pastel de Nata', desc: 'Krem bilan pishiriladigan mashhur an\'anaviy shotlandcha/portugalcha shirinlik.', status: 'Halol (Vegetarian)', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80' }
  ],
  emergency: { police: '112', ambulance: '112', fire: '112' },
  laws: ['Yevropa umumiy favqulodda raqami — 112. Jamoat joylarida va plyajlarda spirtli ichimliklar ichish hamda chiqindi tashlash uchun yuqori jarimalar mavjud.']
},
{
  code: 'BE',
  name: 'Belgium',
  capital: 'Brussels',
  region: 'Europe',
  currency: 'EUR',
  rateToUSD: 0.92,
  image: 'https://i.pinimg.com/1200x/28/4d/59/284d596b8356c01bef549a3a6f94df8d.jpg',
  mapUrl: 'https://maps.google.com/maps?q=Belgium&t=&z=6&ie=UTF8&iwloc=&output=embed',
  taxi: [
    { name: 'Uber', desc: 'Bryussel va yirik shaharlarda eng ommabop taksi xizmati', link: 'https://www.uber.com' },
    { name: 'Bolt', desc: 'Arzon va qulay shahar taksi servisi', link: 'https://bolt.eu' },
    { name: 'Taxi.eu', desc: 'Belgiya va Yevropada rasmiy taksi chaqirish ilovasi', link: 'https://www.taxi.eu' }
  ],
  foodApps: [
    { name: 'Takeaway.com', desc: 'Belgiyada eng keng tarqalgan taom buyurtma qilish ilovasi', link: 'https://www.takeaway.com' },
    { name: 'Uber Eats', desc: 'Restoran taomlarini tezkor yetkazib berish xizmati', link: 'https://www.ubereats.com' },
    { name: 'Deliveroo', desc: 'Yevropada mashhur taom yetkazish servisi', link: 'https://deliveroo.be' }
  ],
  dishes: [
    { name: 'Belgian Waffles', desc: 'Shokolad, mevalar va krem bilan tortiladigan mashhur vafli.', status: 'Halol (Vegetarian)', img: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80' },
    { name: 'Moules-Frites', desc: 'Middiyalar (dengiz mahsulotlari) va kartoshka fri bilan tortiladigan an\'anaviy taom.', status: 'Halol (Dengiz mahsulotlari)', img: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=600&q=80' }
  ],
  emergency: { police: '101', ambulance: '112', fire: '112' },
  laws: ['Yevropa umumiy favqulodda raqami — 112 (Politsiya — 101). Jamoat joylarida yuzni to\'liq to\'sib turuvchi kiyimlar kiyish qonunan taqiqlangan. Jamoat transporti chiptalarini tasdiqlash shart.']
},
{
  code: 'NL',
  name: 'Netherlands',
  capital: 'Amsterdam',
  region: 'Europe',
  currency: 'EUR',
  rateToUSD: 0.92,
  image: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=600&q=80',
  mapUrl: 'https://maps.google.com/maps?q=Netherlands&t=&z=6&ie=UTF8&iwloc=&output=embed',
  taxi: [
    { name: 'Uber', desc: 'Amsterdam va yirik shaharlarda eng ommabop taksi xizmati', link: 'https://www.uber.com' },
    { name: 'Bolt', desc: 'Hamyonbop va qulay shahar taksi servisi', link: 'https://bolt.eu' },
    { name: 'Taxi.eu', desc: 'Rasmiy shaharlararo va mahalliy taksi chaqirish ilovasi', link: 'https://www.taxi.eu' }
  ],
  foodApps: [
    { name: 'Thuisbezorgd.nl', desc: 'Niderlandiyada eng yirik va mashhur taom yetkazib berish ilovasi', link: 'https://www.thuisbezorgd.nl' },
    { name: 'Uber Eats', desc: 'Restoran taomlarini tezkor yetkazish xizmati', link: 'https://www.ubereats.com' },
    { name: 'Deliveroo', desc: 'Yevropada mashhur taom va mahsulot yetkazish servisi', link: 'https://deliveroo.nl' }
  ],
  dishes: [
    { name: 'Stroopwafel', desc: 'Ikki yupqa vafli orasiga karamel qiyomi surtilgan mashhur milliy shirinlik.', status: 'Halol (Vegetarian)', img: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=600&q=80' },
    { name: 'Poffertjes', desc: 'Sariyog\' va shakar kukuni bilan tortiladigan kichik va yumshoq oladylar.', status: 'Halol (Vegetarian)', img: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80' }
  ],
  emergency: { police: '112', ambulance: '112', fire: '112' },
  laws: ['Yevropa umumiy favqulodda raqami — 112 (Shoshilinch bo\'lmagan politsiya: 0900-8844). Velosiped yo\'laklarida piyoda yurish taqiqlangan. Jamoat transportida chiptani kirish va chiqishda (check-in / check-out) tasdiqlash shart.']
},
{
  code: 'AT',
  name: 'Austria',
  capital: 'Vienna',
  region: 'Europe',
  currency: 'EUR',
  rateToUSD: 0.92,
  image: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=600&q=80',
  mapUrl: 'https://maps.google.com/maps?q=Austria&t=&z=6&ie=UTF8&iwloc=&output=embed',
  taxi: [
    { name: 'Uber', desc: 'Vena va boshqa yirik shaharlarda keng tarqalgan taksi xizmati', link: 'https://www.uber.com' },
    { name: 'Bolt', desc: 'Arzon va qulay shahar taksi servisi', link: 'https://bolt.eu' },
    { name: 'Taxi 31300', desc: 'Venadagi eng yirik rasmiy mahalliy taksi xizmati', link: 'https://www.taxi31300.at' }
  ],
  foodApps: [
    { name: 'Lieferando.at', desc: 'Avstriyada eng mashhur taom yetkazib berish ilovasi', link: 'https://www.lieferando.at' },
    { name: 'Foodora', desc: 'Restoran taomlari va mahsulotlarni tezkor yetkazish servisi', link: 'https://www.foodora.at' },
    { name: 'Uber Eats', desc: 'Poytaxt va yirik shaharlardagi yetkazib berish xizmati', link: 'https://www.ubereats.com' }
  ],
  dishes: [
    { name: 'Apfelstrudel', desc: 'Olma, dolchin va yong\'oq bilan pishiriladigan an\'anaviy avstriya ruleti.', status: 'Halol (Vegetarian)', img: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=600&q=80' },
    { name: 'Kaiserschmarrn', desc: "Shakar kukuni va mevali sous bilan tortiladigan to\'g'ralgan shirin quymoq.', status: 'Halol (Vegetarian)', img: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80" }
  ],
  emergency: { police: '133', ambulance: '144', fire: '122' },
  laws: ['Yevropa umumiy favqulodda raqami — 112. Jamoat transportida chiptasiz yurish uchun yuqori jarima belgilangan. Yakshanba kunlari deyarli barcha do\'konlar yopiq bo\'ladi.']
},
{
  code: 'PL',
  name: 'Poland',
  capital: 'Warsaw',
  region: 'Europe',
  currency: 'PLN',
  rateToUSD: 3.85,
  image: 'https://i.pinimg.com/1200x/64/4a/48/644a489b50cb0f40f35422ba5d46e750.jpg',
  mapUrl: 'https://maps.google.com/maps?q=Poland&t=&z=6&ie=UTF8&iwloc=&output=embed',
  taxi: [
    { name: 'Bolt', desc: 'Polshada eng mashhur va arzon taksi xizmati', link: 'https://bolt.eu' },
    { name: 'Uber', desc: 'Varshava va yirik shaharlarda keng tarqalgan taksi servisi', link: 'https://www.uber.com' },
    { name: 'Free Now', desc: 'Shaharlarda rasmiy taksilarni chaqirish ilovasi', link: 'https://www.free-now.com' }
  ],
  foodApps: [
    { name: 'Pyszne.pl', desc: 'Polshada eng yirik va mashhur taom yetkazib berish ilovasi', link: 'https://www.pyszne.pl' },
    { name: 'Uber Eats', desc: 'Restoran taomlarini tezkor yetkazib berish xizmati', link: 'https://www.ubereats.com' },
    { name: 'Glovo', desc: 'Taom va do\'kon mahsulotlarini yetkazish ilovasi', link: 'https://glovoapp.com' }
  ],
  dishes: [
    { name: 'Pierogi (Ruskie / Z warzywami)', desc: 'Kartoshka va pishloq yoki sabzavotlar bilan to\'ldirilgan an\'anaviy polsha chuchvarasi.', status: 'Halol (Vegetarian)', img: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=600&q=80' },
    { name: 'Barszcz Czerwony', desc: 'Chet tildagilarga mos keluvchi lavlagidan tayyorlanadigan qizil sho\'rva.', status: 'Halol (Vegetarian)', img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80' }
  ],
  emergency: { police: '997', ambulance: '999', fire: '998' },
  laws: ['Yevropa umumiy favqulodda raqami — 112. Jamoat joylarida va ko\'chalarda spirtli ichimliklar ichish qat\'iyan taqiqlangan. Piyodalar o\'tish joyidan tashqarida yo\'lni kesib o\'tish jarimaga sabab bo\'ladi.']
},
{
  code: 'CZ',
  name: 'Czechia',
  capital: 'Prague',
  region: 'Europe',
  currency: 'CZK',
  rateToUSD: 22.5,
  image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=600&q=80',
  mapUrl: 'https://maps.google.com/maps?q=Czechia&t=&z=6&ie=UTF8&iwloc=&output=embed',
  taxi: [
    { name: 'Bolt', desc: 'Chexiyada eng mashhur va arzon taksi xizmati', link: 'https://bolt.eu' },
    { name: 'Uber', desc: 'Praga va yirik shaharlarda keng tarqalgan xizmat', link: 'https://www.uber.com' },
    { name: 'Liftago', desc: 'Sifatli va rasmiy taksilarni tanlash imkonini beruvchi mahalliy ilova', link: 'https://www.liftago.cz' }
  ],
  foodApps: [
    { name: 'Foodora CZ', desc: 'Chexiyada eng mashhur taom yetkazib berish ilovasi', link: 'https://www.foodora.cz' },
    { name: 'Wolt', desc: 'Restoranlar va do\'konlardan tezkor yetkazib berish servisi', link: 'https://wolt.com' },
    { name: 'Bolt Food', desc: 'Hamyonbop va qulay taom yetkazish ilovasi', link: 'https://food.bolt.eu' }
  ],
  dishes: [
    { name: 'Trdelník', desc: 'Shakar va dolchin bilan qoplangan, olovda pishiriladigan an\'anaviy shirinlik.', status: 'Halol (Vegetarian)', img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80' },
    { name: 'Smažený Sýr', desc: 'Suxarida qovurilgan va fri kartoshkasi bilan tortiladigan pishloq.', status: 'Halol (Vegetarian)', img: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80' }
  ],
  emergency: { police: '158', ambulance: '155', fire: '150' },
  laws: ['Yevropa umumiy favqulodda raqami — 112. Jamoat transporti chiptalarini minishdan oldin bekatda yoki transport ichida tasdiqlash (kompost qilish) shart.']
},
{
  code: 'SK',
  name: 'Slovakia',
  capital: 'Bratislava',
  region: 'Europe',
  currency: 'EUR',
  rateToUSD: 0.92,
  image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=600&q=80',
  mapUrl: 'https://maps.google.com/maps?q=Slovakia&t=&z=7&ie=UTF8&iwloc=&output=embed',
  taxi: [
    { name: 'Bolt', desc: 'Slovakiyada eng mashhur va arzon taksi xizmati', link: 'https://bolt.eu' },
    { name: 'Hopin', desc: 'Bratislavadagi mahalliy ommabop taksi ilovasi', link: 'https://hopintaxi.com' },
    { name: 'UBER', desc: 'Poytaxt va yirik shaharlarda ishlaydigan taksi servisi', link: 'https://www.uber.com' }
  ],
  foodApps: [
    { name: 'Wolt', desc: 'Slovakiyada eng keng tarqalgan taom yetkazib berish ilovasi', link: 'https://wolt.com' },
    { name: 'Bistro.sk', desc: 'Mahalliy restoranlardan taom buyurtma qilish platformasi', link: 'https://www.bistro.sk' },
    { name: 'Bolt Food', desc: 'Tezkor va hamyonbop taom yetkazish servisi', link: 'https://food.bolt.eu' }
  ],
  dishes: [
    { name: 'Bryndzové Halušky', desc: 'Qoy pishlog\'i (bryndza) va kartoshkali xamirdan tayyorlanadigan milliy taom.', status: 'Halol (Vegetarian - go\'shtsiz varianti)', img: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=600&q=80' },
    { name: 'Zemiakové Placky', desc: 'Sarmsoq va ziravorlar bilan qovurilgan kartoshkali quymoq.', status: 'Halol (Vegetarian)', img: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80' }
  ],
  emergency: { police: '158', ambulance: '155', fire: '150' },
  laws: ['Yevropa umumiy favqulodda raqami — 112. Jamoat transportiga chiqishdan oldin bekatda chiptani sotib olish va transport ichida darhol tasdiqlash (kompost qilish) shart.']
}];z

function App() {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('All');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [activeTab, setActiveTab] = useState('taxi');

  // Valyuta kalkulyatori uchun holatlar
  const [amount, setAmount] = useState(100);
  const [convertDirection, setConvertDirection] = useState('UZS_TO_LOCAL'); // UZS_TO_LOCAL yoki LOCAL_TO_UZS

  const filteredCountries = COUNTRIES_LIST.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase());
    const matchesRegion = region === 'All' || c.region === region;
    return matchesSearch && matchesRegion;
  });

  // Valyutani hisoblash funksiyasi
  const calculateCurrency = (country) => {
    if (!country) return 0;
    const uzsRate = 12800; // 1 USD = 12800 UZS
    const localRate = country.rateToUSD; // 1 USD = localRate

    if (country.currency === 'UZS') {
      return (amount / uzsRate).toFixed(2) + ' USD';
    }

    if (convertDirection === 'UZS_TO_LOCAL') {
      // UZS -> Mahalliy valyuta
      const inUSD = amount / uzsRate;
      const converted = inUSD * localRate;
      return `${converted.toFixed(2)} ${country.currency}`;
    } else {
      // Mahalliy valyuta -> UZS
      const inUSD = amount / localRate;
      const converted = inUSD * uzsRate;
      return `${Math.round(converted).toLocaleString('uz-UZ')} UZS`;
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>🌏 Global Traveler Guide</h1>
        <p>Dunyo davlatlari, valyuta konvertori, taksi va dostavka ilovalari</p>
      </header>

      <div className="search-section">
        <input
          type="text"
          className="search-input"
          placeholder="Davlat nomini yozing..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="region-buttons">
          {['All', 'Asia', 'Europe', 'Americas', 'Africa', 'Oceania'].map((r) => (
            <button
              key={r}
              className={`region-btn ${region === r ? 'active' : ''}`}
              onClick={() => setRegion(r)}
            >
              {r === 'All' ? 'Barchasi (50+)' : r}
            </button>
          ))}
        </div>
      </div>

      {/* IXCHAM CARDLAR GRIDI */}
      <div className="countries-grid">
        {filteredCountries.map((country) => (
          <div
            key={country.code}
            className="country-card-compact"
            onClick={() => setSelectedCountry(country)}
          >
            <img
              src={country.image}
              alt={country.name}
              className="compact-flag"
            />
            <div className="compact-info">
              <h3>{country.name}</h3>
              <p className="currency-text">💱 Valyuta: <b>{country.currency}</b></p>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL OYNASI */}
      {selectedCountry && (
        <div className="modal-overlay" onClick={() => setSelectedCountry(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedCountry(null)}>✕</button>

            <div className="modal-header">
              <img src={selectedCountry.image} alt="Country" className="modal-flag" />
              <div>
                <h2>{selectedCountry.name}</h2>
                <p><b>Poytaxt:</b> {selectedCountry.capital} | <b>Valyuta:</b> {selectedCountry.currency}</p>
              </div>
            </div>

            {/* VALYUTA KALKULYATORI WIDGETI */}
            <div className="currency-converter-box">
              <h4>💱 Valyuta Konvertori</h4>
              <div className="converter-inputs">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="currency-input"
                  min="1"
                />
                <button
                  className="switch-btn"
                  onClick={() => setConvertDirection(convertDirection === 'UZS_TO_LOCAL' ? 'LOCAL_TO_UZS' : 'UZS_TO_LOCAL')}
                >
                  🔄 Almashtirish
                </button>
              </div>
              <div className="converter-result">
                <span>
                  {convertDirection === 'UZS_TO_LOCAL'
                    ? `${amount.toLocaleString('uz-UZ')} UZS = `
                    : `${amount.toLocaleString()} ${selectedCountry.currency} = `}
                </span>
                <strong>{calculateCurrency(selectedCountry)}</strong>
              </div>
            </div>

            <div className="tabs">
              <button className={`tab-btn ${activeTab === 'taxi' ? 'active' : ''}`} onClick={() => setActiveTab('taxi')}>🚖 Taksi & Dostavka</button>
              <button className={`tab-btn ${activeTab === 'food' ? 'active' : ''}`} onClick={() => setActiveTab('food')}>🍲 Milliy Taomlar</button>
              <button className={`tab-btn ${activeTab === 'map' ? 'active' : ''}`} onClick={() => setActiveTab('map')}>🗺️ Xarita</button>
              <button className={`tab-btn ${activeTab === 'info' ? 'active' : ''}`} onClick={() => setActiveTab('info')}>🚨 Qonunlar & Yordam</button>
            </div>

            {activeTab === 'taxi' && (
              <div>
                <h4 style={{ marginBottom: '12px' }}>🚖 Taksi Ilovalari:</h4>
                <div className="apps-list">
                  {selectedCountry.taxi.map((app, idx) => (
                    <div key={idx} className="app-item-card">
                      <div className="app-item-info">
                        <h4>🚖 {app.name}</h4>
                        <p>{app.desc}</p>
                      </div>
                      <a
                        href={app.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="app-download-btn taxi-btn"
                      >
                        Ilovaga o'tish / Yuklash 📲
                      </a>
                    </div>
                  ))}
                </div>

                <h4 style={{ marginBottom: '12px', marginTop: '20px' }}>🛵 Ovqat Yetkazish Ilovalari:</h4>
                <div className="apps-list">
                  {selectedCountry.foodApps.map((app, idx) => (
                    <div key={idx} className="app-item-card">
                      <div className="app-item-info">
                        <h4>🛵 {app.name}</h4>
                        <p>{app.desc}</p>
                      </div>
                      <a
                        href={app.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="app-download-btn food-btn"
                      >
                        Ilovaga o'tish / Yuklash 📲
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'food' && (
              <div>
                <h4 style={{ marginBottom: '12px' }}>Mahalliy Taomlar & Halol Statusi:</h4>
                <div className="food-grid">
                  {selectedCountry.dishes.map((dish, idx) => (
                    <div key={idx} className="food-card">
                      <img src={dish.img} alt={dish.name} className="food-img" />
                      <div className="food-details">
                        <h4>{dish.name}</h4>
                        <span className={`food-status ${dish.status.includes('Halol') ? 'status-halol' : 'status-caution'}`}>
                          {dish.status}
                        </span>
                        <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '6px' }}>{dish.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'map' && (
              <div>
                <h4 style={{ marginBottom: '10px' }}>Geografik Xarita:</h4>
                <iframe
                  title="Country Map"
                  className="map-frame"
                  src={selectedCountry.mapUrl}
                  loading="lazy"
                ></iframe>
              </div>
            )}

            {activeTab === 'info' && (
              <div>
                <div className="emergency-box">
                  <h4>🚨 Favqulodda Raqamlar:</h4>
                  <p>Politsiya: <b>{selectedCountry.emergency.police}</b></p>
                  <p>Tez yordam: <b>{selectedCountry.emergency.ambulance}</b></p>
                  <p>O't o'chirish: <b>{selectedCountry.emergency.fire}</b></p>
                </div>

                <div className="info-card">
                  <h4>⚖️ Muhim Qonun va Tartiblar:</h4>
                  <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
                    {selectedCountry.laws.map((law, idx) => (
                      <li key={idx} style={{ marginBottom: '6px', fontSize: '0.95rem' }}>{law}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
  {/* Kodingizdagi boshqa elementlardan keyin, eng pastki qismiga: */}
      <footer style={{ marginTop: '40px', textAlign: 'center' }}>
        <button
          onClick={() => {
            const isDark = document.body.style.backgroundColor === 'rgb(15, 23, 42)';
            document.body.style.backgroundColor = isDark ? '#ffffff' : '#0f172a';
            document.body.style.color = isDark ? '#0f172a' : '#ffffff';
          }}
          style={{
            padding: '10px 20px',
            fontSize: '14px',
            borderRadius: '8px',
            cursor: 'pointer',
            border: '1px solid #ccc'
          }}
        >
          🌙 / ☀️ Rejimni almashtirish
        </button>
      </footer>
   
  
}

{/* 835-qatordan oldin, return ichining eng pastiga qo'shing: */}
      <div style={{ marginTop: '40px', paddingBottom: '20px', textAlign: 'center' }}>
        <button
          onClick={() => {
            const isDark = document.body.style.backgroundColor === 'rgb(15, 23, 42)';
            document.body.style.backgroundColor = isDark ? '#ffffff' : '#0f172a';
            document.body.style.color = isDark ? '#0f172a' : '#ffffff';
          }}
  style={{
            padding: '10px 20px',
            borderRadius: '8px',
            cursor: 'pointer',
            border: '1px solid #ccc',
            fontWeight: 'bold'
          }}
        >
          🌙 / ☀️ Rejimni almashtirish
        </button>
      </div>



// Eng oxirgi qator (shunday qoladi):
export default App;
