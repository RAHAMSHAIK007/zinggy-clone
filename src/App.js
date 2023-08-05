import {BrowserRouter as Routers ,Routes,Route} from 'react-router-dom';
import './App.css';
import Aboutzinggy from './components/About/About';
import Bestseller from './components/BestSeller';
import Categories from './components/Categories/Categories';
import Below199 from './components/Categories/Rs199orlower/Rs';
import Zinggyadd from './components/Categories/Zinggyadd/Zinggyadd';
import Combos from './components/Combos/Combos';
import BonelessFood from './components/Delicious/Delicious';
import FreshatLicious from './components/FreshatLicious';
import Header from './components/Header/Header';
import Sliders from './components/Sliders/Sliders';
import Top from './components/Top/Top';
import Chicken from './components/Chicken/Chicken';
import BannerSlider from './components/Carsouel/Carsouel';
import FreshZinggy from './components/FreshZinggy/FreshZinggy';
import MrngBreakfastitems from './components/FreshZinggy/FreshZinggy';
import Freshfood from './components/FreshZinggy/FreshZinggy';
import MbFresh from './components/MBfast/Mb';
import Breakfast from './components/BreakFastSpecials/BFS';
import BFS from './components/BreakFastSpecials/BFS';
import Fish from './components/FishVariants/Fish';







const TodayDetails=[
  {
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-Category%2Fe8259b77-ca4c-8829-31e8-810c69b19678%2Foriginal%2FTodays_Deal_1.png&w=96&q=75",
    name:"All"
  },
  {
    image:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d654ce6f-3b1a-efb1-ce66-64b3a4afb655/original/Chicken_(1)_(1).png",
    name:"Chicken"
  },
  {
    image:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/52ed9676-ec28-711e-dd8a-55d4ea17c324/original/Fish_(1)_(1)_(1).png",
    name:"Fish&Sea Food"
  },
  {
    image:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/2119874c-38a6-df8c-22f1-5cd8a2eb4d80/original/Mutton_(1)_(1).png",
    name:"Mutton"
  },
  {
    image:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/cbcb49fd-0d91-0eaf-a23a-d78202b5c9db/original/All-Cat-Icon-Images_(1).png",
    name:"Ready to cook"
  },
  {
    image:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/82b8b842-3d62-955f-6076-c57ca8fdb4c5/original/Prawns.png",
    name:"Shrimp"
  },
  {
    image:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/544bddc9-5775-cd44-511c-8e7e78f75a10/original/Eggs.png",
    name:"Eggs"
  },
  {
    image:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/2ecb2ebd-114c-7a9b-25eb-ece9dec68d2c/original/Coldcuts.png",
    name:"Cold Cuts"
  },
  {
    image:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/c36cb4a6-1751-bcff-81e6-1e2b5a0d0520/original/Kebabs_(1).png",
    name:"Kebab&Biryani"
  },
  {
    image:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/94f02fac-266b-f1e6-b6af-4ba19dade1c9/original/spreads-transparent_(5).png",
    name:"Spreads"
  },
  // {
  //   image:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/dfcc622c-de6a-7ad7-7329-23239fbab0af/original/Combo_(1).png",
  //   name:"Combos"
  // },
  // {
  //   image:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/4ad0a144-8830-a4b5-90ee-216753328bbd/original/Masala_1.png",
  //   name:"Masala"
  // }
]

const Bestsellers = [
  {
    image : "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F9a13c92a-91d8-4c29-02e2-e873eeb81a6a%2Foriginal%2FPDP_9._Chicken_Curry_Cut_Small_-_Large_Pack_HYD_(2).jpg%3Fformat%3Dwebp&w=1200&q=75",
    name : "Chicken Curry Cut - Small Pieces (Large Pack)",
    weight : "1000gms",
    offerPrice:"₹345",
    originalPrice : "₹500",
    deliverTime : "Today in 90 min"
  },
  {
    image:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/df5b6e61-5de5-c32a-93ad-d780ec0ae8ed/original/PDP_2._Classic_Eggs_-_Pack_of_12_(1).jpg",
    name:"Farm Fresh Classic Eggs - Pack of 12",
    weight:"12P",
    offerPrice:"₹126",
    originalPrice:"₹150",
    deliverTime:"Today in 90 min"
  },
  {
    image:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/aa8ca387-bf76-692b-d4d8-46de983100e0/original/UCOOKED.jpg",
    name:"Afghani Murgh Seekh Kebab",
    weight:"4p",
    offerPrice:"₹269",
    originalPrice:"₹500",
    deliverTime:"Topday in 90 Min"
  },
  {
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F309fd63d-1554-cdfb-f41a-7089ee2039b1%2Foriginal%2FPDP_2._Chicken_Breast_470_X_320_PDP.jpg%3Fformat%3Dwebp&w=1200&q=75",
    name:"Chicken Breast - Boneless",
    weight:"450gms",
    offerPrice:"₹289.00",
    originalPrice:"$₹500",
    deliverTime:"Topday in 90 Min"
  },
  {
    image:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/feedc98d-42e1-0e0a-7da0-0072fa84977c/original/p2_tile_images_6th_folder-09_(1).jpg",
    name:"Rohu (Seelavathi) Medium - Bengali Cut, No Head",
    weight:"1000gms",
    offerPrice:"₹279.00",
    originalPrice:"₹348.00",
    deliverTime:"Topday in 90 Min"
  },
  {
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F03c1dcb0-78db-66a0-68d9-1c6528dd07a9%2Foriginal%2FPDP_6.Chicken_Mini_Bites_(Boneless)-08.jpg&w=384&q=75",
    name:"Chicken Boneless - Mini Bites",
    weight:"500gms",
    offerPrice:"₹197.00",
    originalPrice:"₹297.00",
    deliverTime:"Topday in 90 Min"
  },
 

]

const FreshAtLicious =
[{
  image:"https://dao54xqhg9jfa.cloudfront.net/oms/59e300a5-cc3d-438c-96c9-d5d5aba677c1/original/16.jpeg"
},
{
image:"https://dao54xqhg9jfa.cloudfront.net/oms/9ddaf61c-4596-eaa1-4ea8-f580b65ad2d5/original/Meaty_Bites_copy.jpeg"
},
{
  image:"https://dao54xqhg9jfa.cloudfront.net/oms/715b7636-a178-576e-02fe-a5e9612bd87c/original/Daily_Fish_Delights_copy_2-3.jpeg"
},
{
  image:"https://dao54xqhg9jfa.cloudfront.net/oms/21c18bb7-9960-1d85-2083-8d651c62557c/original/Perfect_Match.jpeg",
}
]
const CombosForYou=[
  {
    image:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/dbabf9ae-8709-56f6-965f-f3f40b2cba42/original/Goat---Mince.jpg",
    name:"Goat Mince - Combo",
    weight:"900gms",
    offerPrice:"₹1030.00",
    originalPrice:"₹1200.00",
    deliverTime:"Today in 90 Min"
  },
  {
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FProductMerchantdising%2F60f91ea4-e9c9-9ac0-9825-3ce4cb507515%2Foriginal%2F1598881046.5939--2020-08-3119_07_26--472.jpeg%3Fformat%3Dwebp&w=1200&q=75",
    name:"Chicken Curry Cut(Small Pcs)- 500 gms and Chicken",
    weight:"",
    offerPrice:"₹418.00",
    originalPrice:"₹418.00",
    deliverTime:"Today in 90 Min"
  },
  {
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fd2407na1z3fc0t.cloudfront.net%2FprodDev%2Fpr_15ckn5pzo5x%2F2%2Fprod_display_image%2F1634616925.3013--2021-10-1909%3A45%3A25--1818&w=1200&q=75",
    name:"Assorted Kebab Platter | Ready to Cook",
    weight:"400gms",
    offerPrice:"₹418.00",
    originalPrice:"₹418.00",
    deliverTime:"Today in 90 Min"
  },
  {
    image:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/d4cf9c23-4e91-ed4e-4045-5a57a7b98abb/original/combo.jpg",
    name:"Chicken Kebab & Biryani Combo",
    weight:"500gms",
    offerPrice:"₹412.00",
    originalPrice:"₹468.00",
    deliverTime:"Today in 90 Min"
  },
  {
    image:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ba791a9e-337e-d705-9fb2-21acd06a4a5e/original/hot_chuncky@3x.jpg",
    name:"Hot & Chunky Chicken Combo",
    weight:"500gms",
    offerPrice:"₹418.00",
    originalPrice:"₹418.00",
    deliverTime:"Today in 90 Min"
  },
  {
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F3e084025-b3c6-cb2f-35c4-23de01cc87c1%2Foriginal%2FPDP_3._Classic_Eggs_-_Pack_of_24.jpg&w=384&q=75",
    name:"Classic Eggs - Pack of 24 ( Combo )",
    weight:"24p",
    offerPrice:"₹264.00",
    originalPrice:"₹368.00",
    deliverTime:"Today in 90 Min"
  },
  {
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F1516e356-b25a-0f9a-ea32-de8d2514cead%2Foriginal%2FRTC-mini-COMBO-tricolor.jpg&w=384&q=75",
    name:"Tandoori Trio Combo",
    weight:"600gms",
    offerPrice:"₹418.00",
    originalPrice:"₹418.00",
    deliverTime:"Today in 90 Min"
  },
  {
    image:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/d536e716-18ab-5ba4-672e-e75964fa4cb3/original/fish.jpg",
    name:"Fish Fiesta Combo",
    weight:"450gms",
    offerPrice:"₹418.00",
    originalPrice:"₹418.00",
    deliverTime:"Today in 90 Min"
  },
  {
    image:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/dbabf9ae-8709-56f6-965f-f3f40b2cba42/original/Goat---Mince.jpg",
    name:"Goat Mince - Combo",
    weight:"900gms",
    offerPrice:"₹1030.00",
    originalPrice:"₹1200.00",
    deliverTime:"Today in 90 Min"
  },
  {
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FProductMerchantdising%2F60f91ea4-e9c9-9ac0-9825-3ce4cb507515%2Foriginal%2F1598881046.5939--2020-08-3119_07_26--472.jpeg%3Fformat%3Dwebp&w=1200&q=75",
    name:"Chicken Curry Cut(Small Pcs)- 500 gms and Chicken",
    weight:"",
    offerPrice:"₹418.00",
    originalPrice:"₹418.00",
    deliverTime:"Today in 90 Min"
  }
]
const Rs199orLower=[{
image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Fc46e9458-cf56-01bc-eff8-1dd37ff0c233%2Foriginal%2FPDP_16._Chicken_Curry_Cut_(Small_-_13_to_16_Pieces)_hyd_cut_(2).jpg&w=1200&q=75",
name:"Chicken Curry Cut - Small Pieces",
offerPrice:"₹159.00",
originalPrice:"₹179.00",
deliverTime:"Today in 90 Min"
},
{
  image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Fff5ec9b4-3122-7176-2f45-0c687c48c157%2Foriginal%2FPDP_3.Chicken_Curry_Cut_Large_470_X_320_PDP.jpg&w=1200&q=75",
  name:"Assorted Kebab Platter | Ready to Cook",
 weight:"500gms",
  offerPrice:"₹70",
  originalPrice:"₹89",
  deliverTime:"Today in 90 Min"
  },
  {
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F1f7e9e0b-741a-311b-b896-59e11532924f%2Foriginal%2FPDP_1._Classic_Eggs_-_Pack_of_6_(1).jpg&w=1200&q=75",
    name:"Farm Fresh Classic Eggs - Pack of 6",
    weight:"500gms",
    offerPrice:"₹65",
    originalPrice:"₹75",
    deliverTime:"Today in 90 Min"
  },
  {
    image:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/02d4caea-480b-5793-38f6-6b031dc2f437/original/PDP_3.Chicken_Curry_Cut_Large_470_X_320_PDP.jpg",
    name:"Chicken Curry Cut - Large Pieces",
    weight:"500gms",
    offerPrice:"₹65",
    originalPrice:"₹75",
    deliverTime:"Today in 90 Min"
    },
    {
      image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Fdfa45749-e90a-f4ca-1686-0ae44b9d22e0%2Foriginal%2FPDP_15._Chicken_Liver__(2).jpg&w=1200&q=75",
      name:"Chicken Liver",
      weight:"500gms",
      offerPrice:"₹189",
      originalPrice:"₹199",
      deliverTime:"Today in 90 Min"
      },
      {
        image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F28a8d413-20ec-af99-7334-0f473c76ac40%2Foriginal%2FPDP_5._Country_Eggs_-_Pack_of_6_(1).jpg&w=1200&q=75",
        name:"Cage Free Country Eggs - Pack of 6",
        weight:"12p",
        offerPrice:"₹95",
        originalPrice:"₹1054",
        deliverTime:"Today in 90 Min"
        },
        {
          image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F3efed226-29c1-08b8-f8c3-2d5f4ed550a0%2Foriginal%2Fcooked_(42).jpg&w=384&q=75",
          name:"Classic Chicken Burger Patty",
          weight:"500gms",
          offerPrice:"₹189",
          originalPrice:"₹199",
          deliverTime:"Today in 90 Min"
          }
]
const DeliciousBonelessCuts=[
  {
  image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F9ba686d4-fcca-842b-a2a6-d28ed2c9cf94%2Foriginal%2FPDP_6.Chicken_Mini_Bites_(Boneless)-08.jpg%3Fformat%3Dwebp&w=1200&q=75",
  name:"Chicken Boneless - Mini Bites",
  weight:"500gms",
  offerPrice:"₹179",
  originalPrice:"₹279",
  deliverTime:"Today in 90 Min"
},
{
  image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F233fa0d5-e6d8-fb39-85b5-959871c2f2c6%2Foriginal%2Fp0_tile_images-07_(1).jpg%3Fformat%3Dwebp&w=1200&q=75",
  name:"Basa (Pungus) - Boneless Cubes",
  weight:"500gms",
  offerPrice:"₹476",
  originalPrice:"₹576",
  deliverTime:"Today in 90 Min"
},
{
  image:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/b607cfcc-0289-aa71-a4a6-c46b06191aac/original/PDP_19._Goat_Boneless-04_(1).jpg",
  name:"Goat Boneless",
  weight:"5000gms",
  offerPrice:"₹769",
  originalPrice:"₹816",
  deliverTime:"Today in 90 Min"
},
{
  image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F309fd63d-1554-cdfb-f41a-7089ee2039b1%2Foriginal%2FPDP_2._Chicken_Breast_470_X_320_PDP.jpg%3Fformat%3Dwebp&w=1200&q=75",
  name:"Chicken Breast - Boneless",
  weight:"500gms",
  offerPrice:"₹289",
  originalPrice:"₹349",
  deliverTime:"Today in 90 Min"
},
{
  image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FProductMerchantdising%2Fb934c222-75c7-4046-d914-914ca668b37d%2Foriginal%2F1596201422.7072--2020-07-3118_47_02--738.jpeg%3Fformat%3Dwebp&w=1200&q=75",
  name:"Tilapia (Jalebi) Small - Fillet",
  weight:"500gms",
  offerPrice:"₹205",
  originalPrice:"₹269",
  deliverTime:"Today in 90 Min"
},
{
  image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Ff731ec4f-b1a2-82cd-0836-4c1010b681c2%2Foriginal%2FPDP_29._Chicken_Tenders-.jpg&w=384&q=75",
  name:"Chicken Tenders Boneless",
  weight:"500gms",
  offerPrice:"₹279",
  originalPrice:"₹349",
  deliverTime:"Today in 90 Min"
},
{
  image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Ff688172e-f06a-1f93-b8a9-ace5b7748776%2Foriginal%2FPDP_28._Lamb_Leg_(Boneless)_(1).jpg&w=384&q=75",
  name:"Lamb Leg Boneless",
  weight:"500gms",
  offerPrice:"₹750",
  originalPrice:"₹789",
  deliverTime:"Today in 90 Min"
}
]
const TopRated=[
  {
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F8b47bf8c-db98-978d-bc0e-7f542547c028%2Foriginal%2FPDP_11._Chicken_Breast_Boneless_-_Large_Pack-01_(1).jpg%3Fformat%3Dwebp&w=1200&q=75",
    name:"Chicken Breast Boneless (Large Pack)",
    weight:"900gms",
    offerPrice:"₹565",
    originalPrice:"₹656",
    deliverTime:"Today in 90 Min"
},
{
  image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F9ba686d4-fcca-842b-a2a6-d28ed2c9cf94%2Foriginal%2FPDP_6.Chicken_Mini_Bites_(Boneless)-08.jpg%3Fformat%3Dwebp&w=1200&q=75",
  name:"Chicken Boneless - Mini Bites",
  weight:"500gms",
  offerPrice:"₹320",
  originalPrice:"₹349",
  deliverTime:"Today in 90 Min"
},
{
  image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Fdfa45749-e90a-f4ca-1686-0ae44b9d22e0%2Foriginal%2FPDP_15._Chicken_Liver__(2).jpg%3Fformat%3Dwebp&w=1200&q=75",
  name:"Chicken Liver",
  weight:"500gms",
  offerPrice:"₹220",
  originalPrice:"₹260",
  deliverTime:"Today in 90 Min"
},
{
  image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F018d4866-6252-8f4d-84c7-dee09b295691%2Foriginal%2FUCOOKED_(1).jpg%3Fformat%3Dwebp&w=1200&q=75",
  name:"Afghani Murgh Seekh Kebab",
  weight:"500gms",
  offerPrice:"₹263",
  originalPrice:"₹286",
  deliverTime:"Today in 90 Min"
},
{
  image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F6f8f5b3d-deea-49e2-8e34-3b87afea6093%2Foriginal%2FPDP_4.Chicken_Thigh_(Boneless)_(1).jpg%3Fformat%3Dwebp&w=1200&q=75",
  name:"Premium Chicken Thigh Boneless",
  weight:"450gms",
  offerPrice:"₹359",
  originalPrice:"₹449",
  deliverTime:"Today in 90 Min"
},
{
  image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F378dd4b0-b65c-6f79-b747-f4860eaa6d54%2Foriginal%2FPDP_2._Classic_Eggs_-_Pack_of_12_(1).jpg%3Fformat%3Dwebp&w=1200&q=75",
  name:"Farm Fresh Classic Eggs - Pack of 12",
  weight:"10P",
  offerPrice:"₹126",
  originalPrice:"₹146",
  deliverTime:"Today in 90 Min"
},
{
  image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F0c927437-9cc4-7a3d-a795-f2caf0a96f81%2Foriginal%2FPDP_4.Chicken_Thigh_(Boneless)_(1).jpg&w=384&q=75",
  name:"Premium Chicken Thigh Boneless",
  weight:"500gms",
  offerPrice:"₹359",
  originalPrice:"₹395",
  deliverTime:"Today in 90 Min"
},
{
  image:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/8983103d-a89e-3e63-711a-aa9fa75e28ae/original/cooked_(21).jpg",
  name:"Amritsari Achari Murgh",
  weight:"500gms", 
  offerPrice:"₹349",
  originalPrice:"₹394",
  deliverTime:"Today in 90 Min"
}
]

const About=[
  {
    main:"We will sell only the meat that we would eat ourselves.",
    Description:"At Licious, we’re big meat-lovers. And by big, we mean huge. So when it comes to the meat we put on your plate, we’re extremely picky. Every single product is handpicked by a team with years of experience."
  },
  {
    main:"If it’s not fresh, we won’t sell it.",
    Description:"For meat to stay fresh and retain its natural juices, it needs to be stored at a temperature between 0° and 4°C. We maintain this temperature from the time we procure the product to cleaning, cutting and storing it, until it leaves for delivery. And even when it’s out for delivery, we keep it chilled right up to your doorstep.Did we mention that we’re obsessed?."
  },
  {
    main:"We will charge only for what you buy",
    Description:"Doesn’t everyone do this? Not really. Most other places first weigh the meat, then cut up the pieces, and throw out the parts which aren’t fit to eat, such as offal, gizzard, wingtips, etc. But you still pay based on the original weight even though what you finally get is 10% to 30% less."
  }
]
const Fishseafood=[
  {
    image:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/f9a64569-86b4-62f2-f02c-7418feccda82/original/Freshwater-Prawns-medium2.jpeg",
    name:"Freshwater/White Prawns (Royyala) Medium - Cleaned & Deveined (Large Pack)",
    weight:"500gms",
    Offerprice:"₹620.00",
    originalprice:"₹729.00",
    deliverytime:"Today in 90 min"
  },
  {
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F233fa0d5-e6d8-fb39-85b5-959871c2f2c6%2Foriginal%2Fp0_tile_images-07_(1).jpg&w=384&q=75",
    name:"Basa (Pungus) - Boneless Cubes",
    weight:"500gms",
    Offerprice:"₹470.00",
    originalprice:"₹540.00",
    deliverytime:"Today in 90 min"
  },
  {
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Ffeedc98d-42e1-0e0a-7da0-0072fa84977c%2Foriginal%2Fp2_tile_images_6th_folder-09_(1).jpg&w=384&q=75",
    name:"Rohu (Seelavathi) Medium - Bengali Cut, No Head",
    weight:"500gms",
    Offerprice:"₹300.00",
    originalprice:"₹320.00",
    deliverytime:"Today in 90 min"
  },
  {
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Fdd012514-79d1-057b-ab6d-e2b548c46e43%2Foriginal%2Fp0_tile_images-05.jpg&w=384&q=75",
    name:"Basa (Pungus) - Finger Cut",
    weight:"500gms",
    Offerprice:"₹650.00",
    originalprice:"₹670.00",
    deliverytime:"Today in 90 min"
  },
  {
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Ffeedc98d-42e1-0e0a-7da0-0072fa84977c%2Foriginal%2Fp2_tile_images_6th_folder-09_(1).jpg&w=384&q=75",
    name:"Roopchand (Chanduva) - Steaks",
    weight:"500gms",
    Offerprice:"₹220.00",
    originalprice:"₹520.00",
    deliverytime:"Today in 90 min"
  },
  {
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F66e96bfe-5abc-2cd8-18a7-01a9eceb2bfa%2Foriginal%2FWhatsApp_Image_2022-04-13_at_2.16.31_PM.jpeg&w=384&q=75",
    name:"Basa (Pungus) - Fry Cut",
    weight:"500gms",
    Offerprice:"₹230.00",
    originalprice:"₹250.00",
    deliverytime:"Today in 90 min"
  },
  {
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F3c67f22b-274d-d54f-800e-5c3fdb168dc4%2Foriginal%2Fp2_tile_images_6th_folder-08.jpg&w=384&q=75",
    name:"Rohu (Seelavathi) Small - Bengali Cut, No Head",
    weight:"500gms",
    Offerprice:"₹620.00",
    originalprice:"₹640.00",
    deliverytime:"Today in 90 min"
  },
  {
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fd2407na1z3fc0t.cloudfront.net%2FprodDev%2Fpr_gi9kauyla8l%2F1%2Fprod_display_image%2F1623211757.2848--2021-06-0909%3A39%3A17--738&w=384&q=75",
    name:"Tilapia (Koyya Pippali) Medium - Bengali Cut, No",
    weight:"500gms",
    Offerprice:"₹407.00",
    originalprice:"₹430.00",
    deliverytime:"Today in 90 min"
  },
  {
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F1ea5ff1f-52f3-c7aa-953a-a4d287e40247%2Foriginal%2Fp0_tile_images-15_(2).jpg&w=384&q=75",
    name:"Sea Bass (Barramundi/Bhetki)",
    weight:"500gms",
    Offerprice:"₹237.00",
    originalprice:"₹279.00",
    deliverytime:"Today in 90 min"
  }
]
 const BreakfastSpecialitems=[
  {
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Fde0b1caa-ed49-c834-0f0f-31bbf51bac16%2Foriginal%2Fspread-%2B-salami_(1).jpg&w=384&q=75",
    name:"Chicken Sub Combo",
    weight:"350gms",
    offerPrice:"₹334.00",
    originalprice:"₹418.00",
    deliverytime:"Today in 90 min"
  },
  {
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F9b02751f-73b9-4f17-aca5-82693f62fe64%2Foriginal%2F-_Class_chicken_Nuremberg.jpg&w=384&q=75",
    name:"Classic Chicken Nuremberger",
    weight:"350gms",
    offerPrice:"₹334.00",
    originalprice:"₹418.00",
    deliverytime:"Today in 90 min"
  },
  {
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F7d2ee491-935f-30d4-6d78-d33ee50cd331%2Foriginal%2F-_Classic_Chicken_Lyoner_-_Jalapeno_and_Cheese_-_cooked_(1).jpg&w=384&q=75",
    name:"Chicken Lynoer",
    weight:"350gms",
    offerPrice:"₹334.00",
    originalprice:"₹418.00",
    deliverytime:"Today in 90 min"
  },
  {
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Fa56a646b-f3a6-74b6-febe-5cde288990d5%2Foriginal%2FPDP_4._Classic_Eggs_-_Pack_of_30_(2).jpg&w=384&q=75",
    name:"Farm fish classic eggs",
    weight:"350gms",
    offerPrice:"₹334.00",
    originalprice:"₹418.00",
    deliverytime:"Today in 90 min"
  },
  {
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F788d3416-efa7-4297-4ab8-fc33c8a26409%2Foriginal%2FPDP_5._Country_Eggs_-_Pack_of_6_(1).jpg&w=384&q=75",
    name:"Cage Free Contry Eggs",
    weight:"350gms",
    offerPrice:"₹334.00",
    originalprice:"₹418.00",
    deliverytime:"Today in 90 min"
  },
  {
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Fdf5b6e61-5de5-c32a-93ad-d780ec0ae8ed%2Foriginal%2FPDP_2._Classic_Eggs_-_Pack_of_12_(1).jpg&w=384&q=75",
    name:"Farm Fresh",
    weight:"350gms",
    offerPrice:"₹334.00",
    originalprice:"₹418.00",
    deliverytime:"Today in 90 min"
  },
  {
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F4c4eca9c-85ae-7f30-81c4-836b12005140%2Foriginal%2Fhero_(6).jpg&w=384&q=75",
    name:"Chunky Butter Chicken Spread",
    weight:"350gms",
    offerPrice:"₹334.00",
    originalprice:"₹418.00",
    deliverytime:"Today in 90 min"
  },
  {
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F3a6abba7-175a-6f35-5b80-e6c2f62ad393%2Foriginal%2Fhero_(8).jpg&w=384&q=75",
    name:"Chunkey Continential chicken Spread",
    weight:"350gms",
    offerPrice:"₹334.00",
    originalprice:"₹418.00",
    deliverytime:"Today in 90 min"
  },
  {
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F2d0a6e00-b241-e7b5-ec43-162587af8306%2Foriginal%2F-_Pepper_chicken_salami-large_(2).jpg&w=384&q=75",
    name:"Peppery Chicken Salami",
    weight:"350gms",
    offerPrice:"₹334.00",
    originalprice:"₹418.00",
    deliverytime:"Today in 90 min"
  },
  {
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Fb3b43e0a-f0d1-1434-0a0d-3b6cec54c71e%2Foriginal%2F-_Classic_smoked_chicken_frank_(classic_hot_dog).jpg&w=384&q=75",
    name:"Chicken Sub Combo",
    weight:"350gms",
    offerPrice:"₹334.00",
    originalprice:"₹418.00",
    deliverytime:"Today in 90 min"
  },
  {
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F60900ebd-3383-b444-0de2-fd26475d31b6%2Foriginal%2F-_Chicken_Sausage_Thyme_and_Cheese_-_Raw.jpg&w=384&q=75",
    name:"Chicken Sub Combo",
    weight:"350gms",
    offerPrice:"₹334.00",
    originalprice:"₹418.00",
    deliverytime:"Today in 90 min"
  },
  {
    image:"",
    name:"Chicken Sub Combo",
    weight:"350gms",
    offerPrice:"₹334.00",
    originalprice:"₹418.00",
    deliverytime:"Today in 90 min"
  },
  {
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F228746b5-fdb2-6e6a-461b-aac8a0029941%2Foriginal%2FPDP_8._Brown_Eggs_-_Pack_of_12_(1).jpg&w=384&q=75",
    name:"Chicken Sub Combo",
    weight:"350gms",
    offerPrice:"₹334.00",
    originalprice:"₹418.00",
    deliverytime:"Today in 90 min"
  },
  {
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F372f4006-8bcd-3956-6e28-72ee2e3d48be%2Foriginal%2F-_Chicken_Sausage_Pimento_and_Cheese_-_Raw_(1).jpg&w=384&q=75",
    name:"Chicken Sub Combo",
    weight:"350gms",
    offerPrice:"₹334.00",
    originalprice:"₹418.00",
    deliverytime:"Today in 90 min"
  }
 ]
 const chickencurry=[{
  image:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/c6611e27-fff4-7144-5f5d-af1666b60d9a/original/PDP_9._Chicken_Curry_Cut_Small_-_Large_Pack_HYD_(2).jpg",
  name:"Chicken Curry Cut - Small Pieces (Large Pack)",
  description:"Bone-In | Small Cuts | Curry Cut",
  vedio:"https://youtu.be/qtLF2_Th0u8",
  weight:"1000g",
  serve:"24-36 Pieces",
  cook:"Serves 6",
  matter:"Chicken Curry Cut is a premium cut that includes the leg, breast & wings.This smaller, tender cut has equal-sized pieces for uniform cooking and the juiciest bites.Our meaty, juicy Chicken Curry Cut is perfect for a large meal",
 Nutritionalnformation: "(Approx Values per 100 g)",
  TotalEnergy: "127 Kcal",
  Carbohydrate: "0 g",
  Fat: "4.5 g",
  Protein: "21.6 g",
  data:"Zinggy meats are chilled between 0-4°C to maintain freshness. Do not freeze.",
}]
const bfss=[
  {
      images:  [
        "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/60900ebd-3383-b444-0de2-fd26475d31b6/original/-_Chicken_Sausage_Thyme_and_Cheese_-_Raw.jpg",
        "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/069b55e8-08d8-b7c7-5304-5bc3f9842818/original/-_Chicken_Sausage_Thyme_and_Cheese_-_Raw-uc.jpg",
        "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/b43e7268-48c6-7509-2bcb-efd94d408242/original/cooking_instruction-_nuremburger_(5).jpg",
        "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/dc561377-65b1-ac04-517f-245f62af534b/original/Chicken-Sausage_Bengaluru-1_(1).jpg"  
      ],

      name:"Classic Chicken Nuremberger",
      varity:"Chicken | Sausage | Marjoram",
      weight:"200gms",
      offerPrice:"₹299.00",
      originalPrice:"₹349.00",
      deliverytime:"Today in 90 min"
  },
  {
    images:  [
      "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Fde0b1caa-ed49-c834-0f0f-31bbf51bac16%2Foriginal%2Fspread-%2B-salami_(1).jpg&w=384&q=75",
      "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/b43e7268-48c6-7509-2bcb-efd94d408242/original/cooking_instruction-_nuremburger_(5).jpg",
      "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/dc561377-65b1-ac04-517f-245f62af534b/original/Chicken-Sausage_Bengaluru-1_(1).jpg"  
    ],

    name:"Chicken Sub Combo",
    varity:"Chicken | Sausage | Marjoram",
    weight:"200gms",
    offerPrice:"₹299.00",
    originalPrice:"₹349.00",
    deliverytime:"Today in 90 min"
},
{
  images:  [
    "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Fde0b1caa-ed49-c834-0f0f-31bbf51bac16%2Foriginal%2Fspread-%2B-salami_(1).jpg&w=384&q=75",
    "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/b43e7268-48c6-7509-2bcb-efd94d408242/original/cooking_instruction-_nuremburger_(5).jpg",
    "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/dc561377-65b1-ac04-517f-245f62af534b/original/Chicken-Sausage_Bengaluru-1_(1).jpg"  
  ],

  name:"Chicken Sub Combo",
  varity:"Chicken | Sausage | Marjoram",
  weight:"200gms",
  offerPrice:"₹299.00",
  originalPrice:"₹349.00",
  deliverytime:"Today in 90 min"
},
{
  images:  [
    "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Fde0b1caa-ed49-c834-0f0f-31bbf51bac16%2Foriginal%2Fspread-%2B-salami_(1).jpg&w=384&q=75",
    "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/b43e7268-48c6-7509-2bcb-efd94d408242/original/cooking_instruction-_nuremburger_(5).jpg",
    "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/dc561377-65b1-ac04-517f-245f62af534b/original/Chicken-Sausage_Bengaluru-1_(1).jpg"  
  ],

  name:"Chicken Sub Combo",
  varity:"Chicken | Sausage | Marjoram",
  weight:"200gms",
  offerPrice:"₹299.00",
  originalPrice:"₹349.00",
  deliverytime:"Today in 90 min"
}
  
]

const fishes=[
  // {
  //   image:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/b/i/big_eye_snapper_5.jpg",
  //   name:"Whole",
  //   perkgprice: 25,

  // },
  {
    image:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/b/i/big_eye_snapper_5.jpg",
    name:"Whole",
    perkgprice: 55.00,
    grosswt:"0.69Kg",
    Netwt:"0.5Kg"
  },
  {
    image:'https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/b/i/big_eye_snapper_whole_cleaned_with_skin.jpg',
    name:"Whole Cleaned (With Skin)",
    perkgprice:304.00,
    grosswt:"0.69 Kg",
    Netwt:"0.5 Kg"
  },
  {
    image:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/b/i/big_eye_snapper_whole_cleaned_with_outskin.jpg",
    name:'Whole Cleaned (Skinless)',
    perkgprice:810.00,
    grosswt:"1.85Kg",
    Netwt:"1 Kg"
  },
  {
    image:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/b/i/big_eye_snapper_7.jpg",
    name:"Whole Cleaned Skinless (480g to 500g Pack)",
    perkgprice:900.00,
    grosswt:"1.95 Kg",
    Netwt:"1kg"

  }

]

function App() {
  return (
    <div className="App">
      <Routers>
      <Header />
     
      <div style={{
        margin:"30px 60px",
        // border:"1px solid red"
      }}>
         {/* <Sliders /> */}
        
     
      

     
   
     

      
     
      <Routes>
        <Route path='/' element={<>
          <BannerSlider/>
          <Categories TodayDetails={TodayDetails} />
          <Bestseller Bestsellers={Bestsellers} />
          <FreshatLicious FreshAtLicious={FreshAtLicious} About={About} />
          <Combos CombosForYou={CombosForYou} About={About}/>
          <Below199 Rs199orLower={Rs199orLower}/>
          <BonelessFood DeliciousBonelessCuts={DeliciousBonelessCuts}/>
          <Top TopRated={TopRated}/>
          <Aboutzinggy About={About}/>
          <Zinggyadd/>
          {/* <Freshfood /> */}
          {/* <Breakfast BFS={BFS}/> */}
          {/* <Fish fishes={fishes}/> */}
          
          

       </> } />

          <Route path='/fishes' element={<Fish fishes={fishes} />}/>
          <Route path='/recipe' element={<MbFresh About={About}/>}/>
         <Route path='/bestseller' element={<Chicken About={About} />} />
         <Route path="/fresh-zinggy" element ={<FreshZinggy />} />
      </Routes>

     
      </div>
      </Routers > 
    </div>
  );
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

export default App;
