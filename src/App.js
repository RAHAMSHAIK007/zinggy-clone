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
import FishType from './components/FishTypes/FishTypes';
import Fheader from './components/FXTheader/FT';
import Readytocook from './components/Readytocook/Readytocook';
import FishSubCat from './components/FishSubCat/FishSubCat';
import FishCurry from './components/FXTheader/FT';
import TypesOfFishes from './components/TypesOf Fishes/TOF';
import ShrimpCat from './components/ShrimpCatagoregy/ShrimpCat';
import Login from './components/Loginform/Loginpage';
import Loginpage from './components/Loginform/Loginpage';
import RegisterPage from './components/RegisterPge/Register';
import OpenPopup from './components/OpenPopup/OpenPopup';
import Formfile from './components/Form/Form';
import CartContext from './context/context';
import { useEffect, useState } from 'react';
import CartListView from './components/CartListView/CartListView';
import Scroll from './components/ScrollBar-Con/Scroll'; 







const TodayDetails=[
  {
    id:"1",
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-Category%2Fe8259b77-ca4c-8829-31e8-810c69b19678%2Foriginal%2FTodays_Deal_1.png&w=96&q=75",
    name:"All"
  },
  {
    id:"2",
    image:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d654ce6f-3b1a-efb1-ce66-64b3a4afb655/original/Chicken_(1)_(1).png",
    name:"Chicken"
  },
  {
    id:"3",
    image:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/52ed9676-ec28-711e-dd8a-55d4ea17c324/original/Fish_(1)_(1)_(1).png",
    name:"Fish&Sea Food"
  },
  {
    id:"4",
    image:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/2119874c-38a6-df8c-22f1-5cd8a2eb4d80/original/Mutton_(1)_(1).png",
    name:"Mutton"
  },
  {
    id:"5",
    image:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/cbcb49fd-0d91-0eaf-a23a-d78202b5c9db/original/All-Cat-Icon-Images_(1).png",
    name:"Ready to cook"
  },
  {
    id:"6",
    image:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/82b8b842-3d62-955f-6076-c57ca8fdb4c5/original/Prawns.png",
    name:"Shrimp"
  },
  {
    id:"7",
    image:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/dfcc622c-de6a-7ad7-7329-23239fbab0af/original/Combo_(1).png",
    name:"Combo"
  },
  {
    id:"8",
    image:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/2ecb2ebd-114c-7a9b-25eb-ece9dec68d2c/original/Coldcuts.png",
    name:"Cold Cuts"
  },
  {
    id:"9",
    image:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/c36cb4a6-1751-bcff-81e6-1e2b5a0d0520/original/Kebabs_(1).png",
    name:"Kebab&Biryani"
  },
  {
    id:"10",
    image:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/544bddc9-5775-cd44-511c-8e7e78f75a10/original/Eggs.png",
    name:"Eggs"
  },
]

const Bestsellers = [
  {
    id : "bs-001",
    image : "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F9a13c92a-91d8-4c29-02e2-e873eeb81a6a%2Foriginal%2FPDP_9._Chicken_Curry_Cut_Small_-_Large_Pack_HYD_(2).jpg%3Fformat%3Dwebp&w=1200&q=75",
    name : "Chicken Curry Cut - Small Pieces (Large Pack)",
    weight : "1000gms",
    offerPrice:"₹345",
    originalPrice : "₹500",
    deliverTime : "Today in 90 min"
  },
  {
    id : "bs-002",
    image:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/df5b6e61-5de5-c32a-93ad-d780ec0ae8ed/original/PDP_2._Classic_Eggs_-_Pack_of_12_(1).jpg",
    name:"Farm Fresh Classic Eggs - Pack of 12",
    weight:"12P",
    offerPrice:"₹126",
    originalPrice:"₹150",
    deliverTime:"Today in 90 min"
  },
  {
    id : "bs-003",
    image:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/aa8ca387-bf76-692b-d4d8-46de983100e0/original/UCOOKED.jpg",
    name:"Afghani Murgh Seekh Kebab",
    weight:"4p",
    offerPrice:"₹269",
    originalPrice:"₹500",
    deliverTime:"Topday in 90 Min"
  },
  {
    id : "bs-004",
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F309fd63d-1554-cdfb-f41a-7089ee2039b1%2Foriginal%2FPDP_2._Chicken_Breast_470_X_320_PDP.jpg%3Fformat%3Dwebp&w=1200&q=75",
    name:"Chicken Breast - Boneless",
    weight:"450gms",
    offerPrice:"₹289.00",
    originalPrice:"$₹500",
    deliverTime:"Topday in 90 Min"
  },
  {
    id : "bs-005",
    image:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/feedc98d-42e1-0e0a-7da0-0072fa84977c/original/p2_tile_images_6th_folder-09_(1).jpg",
    name:"Rohu (Seelavathi) Medium - Bengali Cut, No Head",
    weight:"1000gms",
    offerPrice:"₹279.00",
    originalPrice:"₹348.00",
    deliverTime:"Topday in 90 Min"
  },
  {
    id : "bs-006",
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F03c1dcb0-78db-66a0-68d9-1c6528dd07a9%2Foriginal%2FPDP_6.Chicken_Mini_Bites_(Boneless)-08.jpg&w=384&q=75",
    name:"Chicken Boneless - Mini Bites",
    weight:"500gms",
    offerPrice:"₹197.00",
    originalPrice:"₹297.00",
    deliverTime:"Topday in 90 Min"
  },
 

]
const fishSellers = [
  {
    id : "bs-007",
    image : "https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F9a13c92a-91d8-4c29-02e2-e873eeb81a6a%2Foriginal%2FPDP_9._Chicken_Curry_Cut_Small_-_Large_Pack_HYD_(2).jpg%3Fformat%3Dwebp&w=1200&q=75",
    name : "Chicken Curry Cut - Small Pieces (Large Pack)",
    weight : "1000gms",
    offerPrice:"₹345",
    originalPrice : "₹500",
    deliverTime : "Today in 90 min"
  },
  {
    id : "bs-008",
    image:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/df5b6e61-5de5-c32a-93ad-d780ec0ae8ed/original/PDP_2._Classic_Eggs_-_Pack_of_12_(1).jpg",
    name:"Farm Fresh Classic Eggs - Pack of 12",
    weight:"12P",
    offerPrice:"₹126",
    originalPrice:"₹150",
    deliverTime:"Today in 90 min"
  },
  {
    id : "bs-009",
    image:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/aa8ca387-bf76-692b-d4d8-46de983100e0/original/UCOOKED.jpg",
    name:"Afghani Murgh Seekh Kebab",
    weight:"4p",
    offerPrice:"₹269",
    originalPrice:"₹500",
    deliverTime:"Topday in 90 Min"
  },
  {
    id : "bs-010",
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F309fd63d-1554-cdfb-f41a-7089ee2039b1%2Foriginal%2FPDP_2._Chicken_Breast_470_X_320_PDP.jpg%3Fformat%3Dwebp&w=1200&q=75",
    name:"Chicken Breast - Boneless",
    weight:"450gms",
    offerPrice:"₹289.00",
    originalPrice:"$₹500",
    deliverTime:"Topday in 90 Min"
  },
  {
    id : "bs-011",
    image:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/feedc98d-42e1-0e0a-7da0-0072fa84977c/original/p2_tile_images_6th_folder-09_(1).jpg",
    name:"Rohu (Seelavathi) Medium - Bengali Cut, No Head",
    weight:"1000gms",
    offerPrice:"₹279.00",
    originalPrice:"₹348.00",
    deliverTime:"Topday in 90 Min"
  },
  {
    id : "bs-012",
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
    id : "bs-013",
    img:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/dbabf9ae-8709-56f6-965f-f3f40b2cba42/original/Goat---Mince.jpg",
    name:"Goat Mince - Combo",
    weight:"900gms",
    offerPrice:"₹1030.00",
    originalPrice:"₹1200.00",
    deliverTime:"Today in 90 Min"
  },
  {
    id : "bs-014",
    img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FProductMerchantdising%2F60f91ea4-e9c9-9ac0-9825-3ce4cb507515%2Foriginal%2F1598881046.5939--2020-08-3119_07_26--472.jpeg%3Fformat%3Dwebp&w=1200&q=75",
    name:"Chicken Curry Cut(Small Pcs)- 500 gms and Chicken",
    weight:"",
    offerPrice:"₹418.00",
    originalPrice:"₹418.00",
    deliverTime:"Today in 90 Min"
  },
  {
    id : "bs-015",
    img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fd2407na1z3fc0t.cloudfront.net%2FprodDev%2Fpr_15ckn5pzo5x%2F2%2Fprod_display_image%2F1634616925.3013--2021-10-1909%3A45%3A25--1818&w=1200&q=75",
    name:"Assorted Kebab Platter | Ready to Cook",
    weight:"400gms",
    offerPrice:"₹418.00",
    originalPrice:"₹418.00",
    deliverTime:"Today in 90 Min"
  },
  {
    id : "bs-016",
    img:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/d4cf9c23-4e91-ed4e-4045-5a57a7b98abb/original/combo.jpg",
    name:"Chicken Kebab & Biryani Combo",
    weight:"500gms",
    offerPrice:"₹412.00",
    originalPrice:"₹468.00",
    deliverTime:"Today in 90 Min"
  },
  {
    id : "bs-017",
    img:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ba791a9e-337e-d705-9fb2-21acd06a4a5e/original/hot_chuncky@3x.jpg",
    name:"Hot & Chunky Chicken Combo",
    weight:"500gms",
    offerPrice:"₹418.00",
    originalPrice:"₹418.00",
    deliverTime:"Today in 90 Min"
  },
  {
    id : "bs-018",
    img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F3e084025-b3c6-cb2f-35c4-23de01cc87c1%2Foriginal%2FPDP_3._Classic_Eggs_-_Pack_of_24.jpg&w=384&q=75",
    name:"Classic Eggs - Pack of 24 ( Combo )",
    weight:"24p",
    offerPrice:"₹264.00",
    originalPrice:"₹368.00",
    deliverTime:"Today in 90 Min"
  },
  {
    id : "bs-019",
    img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F1516e356-b25a-0f9a-ea32-de8d2514cead%2Foriginal%2FRTC-mini-COMBO-tricolor.jpg&w=384&q=75",
    name:"Tandoori Trio Combo",
    weight:"600gms",
    offerPrice:"₹418.00",
    originalPrice:"₹418.00",
    deliverTime:"Today in 90 Min"
  },
  {
    id : "bs-020",
    img:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/d536e716-18ab-5ba4-672e-e75964fa4cb3/original/fish.jpg",
    name:"Fish Fiesta Combo",
    weight:"450gms",
    offerPrice:"₹418.00",
    originalPrice:"₹418.00",
    deliverTime:"Today in 90 Min"
  },
  {
    id : "bs-021",
    img:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/dbabf9ae-8709-56f6-965f-f3f40b2cba42/original/Goat---Mince.jpg",
    name:"Goat Mince - Combo",
    weight:"900gms",
    offerPrice:"₹1030.00",
    originalPrice:"₹1200.00",
    deliverTime:"Today in 90 Min"
  },
  {
    id : "bs-022",
    img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FProductMerchantdising%2F60f91ea4-e9c9-9ac0-9825-3ce4cb507515%2Foriginal%2F1598881046.5939--2020-08-3119_07_26--472.jpeg%3Fformat%3Dwebp&w=1200&q=75",
    name:"Chicken Curry Cut(Small Pcs)- 500 gms and Chicken",
    weight:"",
    offerPrice:"₹418.00",
    originalPrice:"₹418.00",
    deliverTime:"Today in 90 Min"
  }
]
const Rs199orLower=[{
  id : "bs-023",
  image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Fc46e9458-cf56-01bc-eff8-1dd37ff0c233%2Foriginal%2FPDP_16._Chicken_Curry_Cut_(Small_-_13_to_16_Pieces)_hyd_cut_(2).jpg&w=1200&q=75",
  name:"Chicken Curry Cut - Small Pieces",
  offerPrice:"₹159.00",
  originalPrice:"₹179.00",
  deliverTime:"Today in 90 Min"
  },
{
  id : "bs-024",
  image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Fff5ec9b4-3122-7176-2f45-0c687c48c157%2Foriginal%2FPDP_3.Chicken_Curry_Cut_Large_470_X_320_PDP.jpg&w=1200&q=75",
  name:"Assorted Kebab Platter | Ready to Cook",
  weight:"500gms",
  offerPrice:"₹70",
  originalPrice:"₹89",
  deliverTime:"Today in 90 Min"
  },
  {
    id : "bs-026",
    image:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/02d4caea-480b-5793-38f6-6b031dc2f437/original/PDP_3.Chicken_Curry_Cut_Large_470_X_320_PDP.jpg",
    name:"Chicken Curry Cut - Large Pieces",
    weight:"500gms",
    offerPrice:"₹65",
    originalPrice:"₹75",
    deliverTime:"Today in 90 Min"
    },
    {
      id : "bs-027",
      image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Fdfa45749-e90a-f4ca-1686-0ae44b9d22e0%2Foriginal%2FPDP_15._Chicken_Liver__(2).jpg&w=1200&q=75",
      name:"Chicken Liver",
      weight:"500gms",
      offerPrice:"₹189",
      originalPrice:"₹199",
      deliverTime:"Today in 90 Min"
      },
      {
        id : "bs-028",
        image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F28a8d413-20ec-af99-7334-0f473c76ac40%2Foriginal%2FPDP_5._Country_Eggs_-_Pack_of_6_(1).jpg&w=1200&q=75",
        name:"Cage Free Country Eggs - Pack of 6",
        weight:"12p",
        offerPrice:"₹95",
        originalPrice:"₹1054",
        deliverTime:"Today in 90 Min"
        },
        {
          id : "bs-029",
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
    id : "bs-030",
    img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F9ba686d4-fcca-842b-a2a6-d28ed2c9cf94%2Foriginal%2FPDP_6.Chicken_Mini_Bites_(Boneless)-08.jpg%3Fformat%3Dwebp&w=1200&q=75",
  name:"Chicken Boneless - Mini Bites",
  weight:"500gms",
  offerPrice:"₹179",
  originalPrice:"₹279",
  deliverTime:"Today in 90 Min"
},
{
  id : "bs-031",
  img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F233fa0d5-e6d8-fb39-85b5-959871c2f2c6%2Foriginal%2Fp0_tile_images-07_(1).jpg%3Fformat%3Dwebp&w=1200&q=75",
  name:"Basa (Pungus) - Boneless Cubes",
  weight:"500gms",
  offerPrice:"₹476",
  originalPrice:"₹576",
  deliverTime:"Today in 90 Min"
},
{
  id : "bs-032",
  img:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/b607cfcc-0289-aa71-a4a6-c46b06191aac/original/PDP_19._Goat_Boneless-04_(1).jpg",
  name:"Goat Boneless",
  weight:"5000gms",
  offerPrice:"₹769",
  originalPrice:"₹816",
  deliverTime:"Today in 90 Min"
},
{
  id : "bs-033",
  img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F309fd63d-1554-cdfb-f41a-7089ee2039b1%2Foriginal%2FPDP_2._Chicken_Breast_470_X_320_PDP.jpg%3Fformat%3Dwebp&w=1200&q=75",
  name:"Chicken Breast - Boneless",
  weight:"500gms",
  offerPrice:"₹289",
  originalPrice:"₹349",
  deliverTime:"Today in 90 Min"
},
{
  id : "bs-034",
  img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FProductMerchantdising%2Fb934c222-75c7-4046-d914-914ca668b37d%2Foriginal%2F1596201422.7072--2020-07-3118_47_02--738.jpeg%3Fformat%3Dwebp&w=1200&q=75",
  name:"Tilapia (Jalebi) Small - Fillet",
  weight:"500gms",
  offerPrice:"₹205",
  originalPrice:"₹269",
  deliverTime:"Today in 90 Min"
},
{
  id : "bs-035",
  img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Ff731ec4f-b1a2-82cd-0836-4c1010b681c2%2Foriginal%2FPDP_29._Chicken_Tenders-.jpg&w=384&q=75",
  name:"Chicken Tenders Boneless",
  weight:"500gms",
  offerPrice:"₹279",
  originalPrice:"₹349",
  deliverTime:"Today in 90 Min"
},
{
  id : "bs-036",
  img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Ff688172e-f06a-1f93-b8a9-ace5b7748776%2Foriginal%2FPDP_28._Lamb_Leg_(Boneless)_(1).jpg&w=384&q=75",
  name:"Lamb Leg Boneless",
  weight:"500gms",
  offerPrice:"₹750",
  originalPrice:"₹789",
  deliverTime:"Today in 90 Min"
}
]
const TopRated=[
  {
    id : "bs-037",
    img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F8b47bf8c-db98-978d-bc0e-7f542547c028%2Foriginal%2FPDP_11._Chicken_Breast_Boneless_-_Large_Pack-01_(1).jpg%3Fformat%3Dwebp&w=1200&q=75",
    name:"Chicken Breast Boneless (Large Pack)",
    weight:"900gms",
    offerPrice:"₹565",
    originalPrice:"₹656",
    deliverTime:"Today in 90 Min"
},
{
  id : "bs-038",
  img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F9ba686d4-fcca-842b-a2a6-d28ed2c9cf94%2Foriginal%2FPDP_6.Chicken_Mini_Bites_(Boneless)-08.jpg%3Fformat%3Dwebp&w=1200&q=75",
  name:"Chicken Boneless - Mini Bites",
  weight:"500gms",
  offerPrice:"₹320",
  originalPrice:"₹349",
  deliverTime:"Today in 90 Min"
},
{
  id : "bs-039",
  img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Fdfa45749-e90a-f4ca-1686-0ae44b9d22e0%2Foriginal%2FPDP_15._Chicken_Liver__(2).jpg%3Fformat%3Dwebp&w=1200&q=75",
  name:"Chicken Liver",
  weight:"500gms",
  offerPrice:"₹220",
  originalPrice:"₹260",
  deliverTime:"Today in 90 Min"
},
{
  id : "bs-040",
  img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F018d4866-6252-8f4d-84c7-dee09b295691%2Foriginal%2FUCOOKED_(1).jpg%3Fformat%3Dwebp&w=1200&q=75",
  name:"Afghani Murgh Seekh Kebab",
  weight:"500gms",
  offerPrice:"₹263",
  originalPrice:"₹286",
  deliverTime:"Today in 90 Min"
},
{
  id : "bs-041",
  img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F6f8f5b3d-deea-49e2-8e34-3b87afea6093%2Foriginal%2FPDP_4.Chicken_Thigh_(Boneless)_(1).jpg%3Fformat%3Dwebp&w=1200&q=75",
  name:"Premium Chicken Thigh Boneless",
  weight:"450gms",
  offerPrice:"₹359",
  originalPrice:"₹449",
  deliverTime:"Today in 90 Min"
},
{
  id : "bs-042",
  img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F378dd4b0-b65c-6f79-b747-f4860eaa6d54%2Foriginal%2FPDP_2._Classic_Eggs_-_Pack_of_12_(1).jpg%3Fformat%3Dwebp&w=1200&q=75",
  name:"Farm Fresh Classic Eggs - Pack of 12",
  weight:"10P",
  offerPrice:"₹126",
  originalPrice:"₹146",
  deliverTime:"Today in 90 Min"
},
{
  id : "bs-043",
  img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F0c927437-9cc4-7a3d-a795-f2caf0a96f81%2Foriginal%2FPDP_4.Chicken_Thigh_(Boneless)_(1).jpg&w=384&q=75",
  name:"Premium Chicken Thigh Boneless",
  weight:"500gms",
  offerPrice:"₹359",
  originalPrice:"₹395",
  deliverTime:"Today in 90 Min"
},
{
  id : "bs-044",
  img:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/8983103d-a89e-3e63-711a-aa9fa75e28ae/original/cooked_(21).jpg",
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
    id : "bs-045",
    img:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/f9a64569-86b4-62f2-f02c-7418feccda82/original/Freshwater-Prawns-medium2.jpeg",
    name:"Freshwater/White Prawns (Royyala) Medium - Cleaned & Deveined (Large Pack)",
    weight:"500gms",
    Offerprice:"₹620.00",
    originalprice:"₹729.00",
    deliverytime:"Today in 90 min"
  },
  {
    id : "bs-046",
    img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F233fa0d5-e6d8-fb39-85b5-959871c2f2c6%2Foriginal%2Fp0_tile_images-07_(1).jpg&w=384&q=75",
    name:"Basa (Pungus) - Boneless Cubes",
    weight:"500gms",
    Offerprice:"₹470.00",
    originalprice:"₹540.00",
    deliverytime:"Today in 90 min"
  },
  {
    id : "bs-047",
    img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Ffeedc98d-42e1-0e0a-7da0-0072fa84977c%2Foriginal%2Fp2_tile_images_6th_folder-09_(1).jpg&w=384&q=75",
    name:"Rohu (Seelavathi) Medium - Bengali Cut, No Head",
    weight:"500gms",
    Offerprice:"₹300.00",
    originalprice:"₹320.00",
    deliverytime:"Today in 90 min"
  },
  {
    id : "bs-048",
    img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Fdd012514-79d1-057b-ab6d-e2b548c46e43%2Foriginal%2Fp0_tile_images-05.jpg&w=384&q=75",
    name:"Basa (Pungus) - Finger Cut",
    weight:"500gms",
    Offerprice:"₹650.00",
    originalprice:"₹670.00",
    deliverytime:"Today in 90 min"
  },
  {
    id : "bs-049",
    img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Ffeedc98d-42e1-0e0a-7da0-0072fa84977c%2Foriginal%2Fp2_tile_images_6th_folder-09_(1).jpg&w=384&q=75",
    name:"Roopchand (Chanduva) - Steaks",
    weight:"500gms",
    Offerprice:"₹220.00",
    originalprice:"₹520.00",
    deliverytime:"Today in 90 min"
  },
  {
    id : "bs-050",
    img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F66e96bfe-5abc-2cd8-18a7-01a9eceb2bfa%2Foriginal%2FWhatsApp_Image_2022-04-13_at_2.16.31_PM.jpeg&w=384&q=75",
    name:"Basa (Pungus) - Fry Cut",
    weight:"500gms",
    Offerprice:"₹230.00",
    originalprice:"₹250.00",
    deliverytime:"Today in 90 min"
  },
  {
    id : "bs-051",
    img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F3c67f22b-274d-d54f-800e-5c3fdb168dc4%2Foriginal%2Fp2_tile_images_6th_folder-08.jpg&w=384&q=75",
    name:"Rohu (Seelavathi) Small - Bengali Cut, No Head",
    weight:"500gms",
    Offerprice:"₹620.00",
    originalprice:"₹640.00",
    deliverytime:"Today in 90 min"
  },
  {
    id : "bs-052",
    img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fd2407na1z3fc0t.cloudfront.net%2FprodDev%2Fpr_gi9kauyla8l%2F1%2Fprod_display_image%2F1623211757.2848--2021-06-0909%3A39%3A17--738&w=384&q=75",
    name:"Tilapia (Koyya Pippali) Medium - Bengali Cut, No",
    weight:"500gms",
    Offerprice:"₹407.00",
    originalprice:"₹430.00",
    deliverytime:"Today in 90 min"
  },
  {
    id : "bs-053",
    img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F1ea5ff1f-52f3-c7aa-953a-a4d287e40247%2Foriginal%2Fp0_tile_images-15_(2).jpg&w=384&q=75",
    name:"Sea Bass (Barramundi/Bhetki)",
    weight:"500gms",
    Offerprice:"₹237.00",
    originalprice:"₹279.00",
    deliverytime:"Today in 90 min"
  }
]
 const BreakfastSpecialitems=[
  {
    id : "bs-054",
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Fde0b1caa-ed49-c834-0f0f-31bbf51bac16%2Foriginal%2Fspread-%2B-salami_(1).jpg&w=384&q=75",
    name:"Chicken Sub Combo",
    weight:"350gms",
    offerPrice:"₹334.00",
    originalprice:"₹418.00",
    deliverytime:"Today in 90 min"
  },
  {
    id : "bs-055",
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F9b02751f-73b9-4f17-aca5-82693f62fe64%2Foriginal%2F-_Class_chicken_Nuremberg.jpg&w=384&q=75",
    name:"Classic Chicken Nuremberger",
    weight:"350gms",
    offerPrice:"₹334.00",
    originalprice:"₹418.00",
    deliverytime:"Today in 90 min"
  },
  {
    id : "bs-056",
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F7d2ee491-935f-30d4-6d78-d33ee50cd331%2Foriginal%2F-_Classic_Chicken_Lyoner_-_Jalapeno_and_Cheese_-_cooked_(1).jpg&w=384&q=75",
    name:"Chicken Lynoer",
    weight:"350gms",
    offerPrice:"₹334.00",
    originalprice:"₹418.00",
    deliverytime:"Today in 90 min"
  },
  {
    id : "bs-057",
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Fa56a646b-f3a6-74b6-febe-5cde288990d5%2Foriginal%2FPDP_4._Classic_Eggs_-_Pack_of_30_(2).jpg&w=384&q=75",
    name:"Farm fish classic eggs",
    weight:"350gms",
    offerPrice:"₹334.00",
    originalprice:"₹418.00",
    deliverytime:"Today in 90 min"
  },
  {
    id : "bs-058",
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F788d3416-efa7-4297-4ab8-fc33c8a26409%2Foriginal%2FPDP_5._Country_Eggs_-_Pack_of_6_(1).jpg&w=384&q=75",
    name:"Cage Free Contry Eggs",
    weight:"350gms",
    offerPrice:"₹334.00",
    originalprice:"₹418.00",
    deliverytime:"Today in 90 min"
  },
  {
    id : "bs-059",
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Fdf5b6e61-5de5-c32a-93ad-d780ec0ae8ed%2Foriginal%2FPDP_2._Classic_Eggs_-_Pack_of_12_(1).jpg&w=384&q=75",
    name:"Farm Fresh",
    weight:"350gms",
    offerPrice:"₹334.00",
    originalprice:"₹418.00",
    deliverytime:"Today in 90 min"
  },
  {
    
    id : "bs-060",
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F4c4eca9c-85ae-7f30-81c4-836b12005140%2Foriginal%2Fhero_(6).jpg&w=384&q=75",
    name:"Chunky Butter Chicken Spread",
    weight:"350gms",
    offerPrice:"₹334.00",
    originalprice:"₹418.00",
    deliverytime:"Today in 90 min"
  },
  {
    id : "bs-061",
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F3a6abba7-175a-6f35-5b80-e6c2f62ad393%2Foriginal%2Fhero_(8).jpg&w=384&q=75",
    name:"Chunkey Continential chicken Spread",
    weight:"350gms",
    offerPrice:"₹334.00",
    originalprice:"₹418.00",
    deliverytime:"Today in 90 min"
  },
  {
    id : "bs-062",
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F2d0a6e00-b241-e7b5-ec43-162587af8306%2Foriginal%2F-_Pepper_chicken_salami-large_(2).jpg&w=384&q=75",
    name:"Peppery Chicken Salami",
    weight:"350gms",
    offerPrice:"₹334.00",
    originalprice:"₹418.00",
    deliverytime:"Today in 90 min"
  },
  {
    id : "bs-063",
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Fb3b43e0a-f0d1-1434-0a0d-3b6cec54c71e%2Foriginal%2F-_Classic_smoked_chicken_frank_(classic_hot_dog).jpg&w=384&q=75",
    name:"Chicken Sub Combo",
    weight:"350gms",
    offerPrice:"₹334.00",
    originalprice:"₹418.00",
    deliverytime:"Today in 90 min"
  },
  {
    id : "bs-064",
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F60900ebd-3383-b444-0de2-fd26475d31b6%2Foriginal%2F-_Chicken_Sausage_Thyme_and_Cheese_-_Raw.jpg&w=384&q=75",
    name:"Chicken Sub Combo",
    weight:"350gms",
    offerPrice:"₹334.00",
    originalprice:"₹418.00",
    deliverytime:"Today in 90 min"
  },
  {
    id : "bs-065",
    image:"",
    name:"Chicken Sub Combo",
    weight:"350gms",
    offerPrice:"₹334.00",
    originalprice:"₹418.00",
    deliverytime:"Today in 90 min"
  },
  {
    id : "bs-066",
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F228746b5-fdb2-6e6a-461b-aac8a0029941%2Foriginal%2FPDP_8._Brown_Eggs_-_Pack_of_12_(1).jpg&w=384&q=75",
    name:"Chicken Sub Combo",
    weight:"350gms",
    offerPrice:"₹334.00",
    originalprice:"₹418.00",
    deliverytime:"Today in 90 min"
  },
  {
    id : "bs-067",
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F372f4006-8bcd-3956-6e28-72ee2e3d48be%2Foriginal%2F-_Chicken_Sausage_Pimento_and_Cheese_-_Raw_(1).jpg&w=384&q=75",
    name:"Chicken Sub Combo",
    weight:"350gms",
    offerPrice:"₹334.00",
    originalprice:"₹418.00",
    deliverytime:"Today in 90 min"
  }
 ]
 const chickencurry=[
  {
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
  {
    id : "bs-068",
    img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/b/i/big_eye_snapper_5.jpg",
    name:"Whole",
    perkgprice: 55.00,
    grosswt:"0.69Kg",
    Netwt:"0.5Kg"
  },
  {
    id : "bs-069",
    img:'https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/b/i/big_eye_snapper_whole_cleaned_with_skin.jpg',
    name:"Whole Cleaned (With Skin)",
    perkgprice:304.00,
    grosswt:"0.69 Kg",
    Netwt:"0.5 Kg"
  },
  {
    id : "bs-070",
    img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/b/i/big_eye_snapper_whole_cleaned_with_outskin.jpg",
    name:'Whole Cleaned (Skinless)',
    perkgprice:810.00,
    grosswt:"1.85Kg",
    Netwt:"1 Kg"
  },
  {
    id : "bs-071",
    img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/b/i/big_eye_snapper_7.jpg",
    name:"Whole Cleaned Skinless (480g to 500g Pack)",
    perkgprice:900.00,
    grosswt:"1.95 Kg",
    Netwt:"1kg"

  }

]
const Fishtypes=[
  {
    id : "bs-072",
    img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F233fa0d5-e6d8-fb39-85b5-959871c2f2c6%2Foriginal%2Fp0_tile_images-07_(1).jpg&w=384&q=75",
    name:"Basa (Pungus) - Boneless Cubes",
    variants:"400gms|15-20 Pieces|Serves 4",
    price:"₹407.00",
    strike:"₹470.00",
    offer:"15%",
    deliverTime:"Today in 90 Min"

  },
  {
    id : "bs-073",
    img:'https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FProductMerchantdising%2Fb934c222-75c7-4046-d914-914ca668b37d%2Foriginal%2F1596201422.7072--2020-07-3118_47_02--738.jpeg&w=384&q=75',
    name:'Tilapia (Jalebi) Small - Fillet',
    variants:"250gms|6-10 Pieces|Serves 3-4",
    price:"₹407",
    strike:"₹470.00",
    offer:"15%",
    deliverTime:"Today in 90 Min"
  },
  {
    id : "bs-074",
    img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Fdd012514-79d1-057b-ab6d-e2b548c46e43%2Foriginal%2Fp0_tile_images-05.jpg&w=384&q=75",
    name:'Basa (Pangus)-Finger Cut',
    variants:"250gms|11-12 Pieces|Serves 2-3",
    price:"₹407",
    strike:"₹470.00",
    offer:"15%",
    deliverTime:"Today in 90 Min"
  },
  {
    id : "bs-075",
    img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Fff1b9a28-7414-3cc0-dbd0-5a52b64e5d5e%2Foriginal%2Fp1_tile_images-36.jpg&w=384&q=75",
    name:'Roopchand (Chanduva) - Steaks',
    variants:"500gms|8-12 Pieces|Serves 4",
    price:"₹237",
    strike:"₹279.00",
    offer:"15%",
    deliverTime:"Today in 90 Min"
  },
  {
    id : "bs-076",
    img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Fb75c086a-ab89-32fa-d2c2-4dd247599c2b%2Foriginal%2Fp2_tile_images_6th_folder-01_(2).jpg&w=384&q=75",
    name:'Wild caught Murrel (Kuchumeen/Korameenu) - Steaks',
    variants:"250gms|6-10 Pieces|Serves 3-4",
    price:"₹407",
    strike:"₹470.00",
    offer:"15%",
    deliverTime:"Today in 90 Min"
  },  
  {
    id : "bs-077",
    img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Fdd012514-79d1-057b-ab6d-e2b548c46e43%2Foriginal%2Fp0_tile_images-05.jpg&w=384&q=75",
    name:'Basa (Pangus)-Finger Cut',
    variants:"250gms|6-10 Pieces|Serves 3-4",
    price:"₹407",
    strike:"₹470.00",
    offer:"15%",
    deliverTime:"Today in 90 Min"
  }

]
const Fshxstypes=[
  {
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-Category%2F5a65f863-b451-fb98-83ae-4f7d1a8d41c6%2Foriginal%2FSeer_Large_Steaks_264x204_(1).png&w=96&q=75",
    name:"All"
  },
  {
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-Category%2Ff11acf37-fd7f-59f4-a1d6-b1d5a5adb481%2Foriginal%2FFreshwater_Rohu_Medium_264x204_(1).png&w=96&q=75",
    name:"Freshwater"
  },
  {
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-Category%2F5a65f863-b451-fb98-83ae-4f7d1a8d41c6%2Foriginal%2FSeer_Large_Steaks_264x204_(1).png&w=96&q=75",
    name:"Seawater"
  },
  {
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-Category%2F069e9830-02c2-6ac6-9af9-bea620888909%2Foriginal%2FBlue_Crab_264x204.png&w=96&q=75",
    name:"Crab"
  }
]
const RTCFshxstypes=[
  {
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-Category%2F7970e430-5da3-490c-1256-a8fe9a5c4252%2Foriginal%2FCrispy_Prawns_264x204.png&w=96&q=75",
    name:"Crispy Snaks"
  },
  {
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-Category%2F7f9d36ae-7bc4-18f2-d1a7-2746f756dc09%2Foriginal%2Fnilgiri-kebabs_(1).png&w=96&q=75",
    name:"Freshwater"
  },
  {
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-Category%2F12dc6a41-1152-3cc0-31e4-053408e8ec71%2Foriginal%2FAfghani_Seekh_264x204.png&w=96&q=75",
    name:"Seawater"
  },
  {
    image:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-Category%2F069e9830-02c2-6ac6-9af9-bea620888909%2Foriginal%2FBlue_Crab_264x204.png&w=96&q=75",
    name:"Crab"
  }
]
const RTCook=[
  {
  id : "bs-078",
  img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F2df22fa8-07fe-66ba-e64c-8d3caa7b659f%2Foriginal%2FCOOKED_(28).jpg&w=384&q=75",
  name:"Crispy Prawn",
  Des:"Crispy, juicy, nutty prawns, perfect for all cravings",
  weight:"200g",
  pieces:"10-12 Pieces",
  price:'₹297',
  strike:"₹340",
  offer:"15%",
  deliverTime:"Today in 90 Min"
},
{
  id : "bs-079",
  img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F5ceed13b-edf7-9511-8991-3f231600cf01%2Foriginal%2Fcooked_(46).jpg&w=384&q=75",
  name:"Fish Tikka",
  Des:"Crispy, juicy, nutty prawns, perfect for all cravings",
  weight:"350g",
  pieces:"10-12 Pieces",
  price:'₹322',
  strike:"₹369",
  offer:"10%",
  deliverTime:"Today in 90 Min"

},
{
  id : "bs-080",
  img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F02fcc006-71be-8e1e-782c-4b1f06993675%2Foriginal%2Fcooked_(34).jpg&w=384&q=75",
  name:"Nilgiri Fish Tikka",
  Des:"Crispy, juicy, nutty prawns, perfect for all cravings",
  weight:"350g",
  pieces:"10-12 Pieces",
  price:'₹322',
  strike:"₹369",
  offer:"10%",
  deliverTime:"Today in 90 Min"
  
},
{
  id : "bs-081",
  img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F5300a9ce-315d-77a3-1fdc-3eeb5fd5e775%2Foriginal%2Fpdp_fish_fingers.jpg&w=384&q=75",
  name:' Crispy Fish Fingers',
  Des:"Crispy, juicy, nutty prawns, perfect for all cravings",
  weight:"350g",
  pieces:"10-12 Pieces",
  price:'₹322',
  strike:"₹369",
  offer:"10%",
  deliverTime:"Today in 90 Min"
},
{
  id : "bs-082",
  img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Fcd5d58ec-9195-5016-73d6-2f49ae58f776%2Foriginal%2FCrispy-Snacks-.jpg&w=384&q=75",
  name:"Crispy Snacks Combo",
  Des:"Crispy, juicy, nutty prawns, perfect for all cravings",
  weight:"725g",
  pieces:"10-12 Pieces",
  price:'₹533',
  strike:"₹627",
  offer:"15% ",
  deliverTime:"Today in 90 Min"

},
{
  id : "bs-083",
  img:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/48ca2d83-74c0-992b-c8cc-19842a7d1475/original/cooked_(65).jpg",
  name:"Prawns Zaffrani",
  Des:"Crispy, juicy, nutty prawns, perfect for all cravings",
  weight:"725g",
  pieces:"10-12 Pieces",
  price:'₹343',
  strike:"₹427",
  offer:"15% ",
  deliverTime:"Today in 90 Min"

}
]
const catagoryitems=[
  
  {
    // fishes
    id : "3",
    img : [{
      id : "bs-084",
          img:"https://godavaricuts.com/cdn/shop/files/Rupchanda_940x.jpg?v=1682675111",
          name:"Roopchand / Chanduva - Steaks - With Head",
          des:"Freshwater prawns. De-shelled, cleaned, deveined",
          weight:"500 g",
          pieces:"32-72 Pieces",
          serve:"3-4",
          price:"₹729.00",
          cost:"₹349.00",
          offer:"15%",
          deliverytime:"Today in 90 Min"
    },
    {
      id : "bs-085",
      img:"https://godavaricuts.com/cdn/shop/files/DSC04253_940x.jpg?v=1682674782",
      name:"Rohu / Rui / సీలావతి చేప -Live Curry Cut - With Head",
      des:"Freshwater prawns. De-shelled, cleaned, deveined",
      weight:"500 g",
      pieces:"32-72 Pieces",
      serve:"3-4",
      price:"₹729.00",
      cost:"₹349.00",
      offer:"15%",
      deliverytime:"Today in 90 Min"
  
    },
    {
      id : "bs-087",
      img:"https://godavaricuts.com/cdn/shop/files/DSC08319_940x.jpg?v=1682935922",
      name:"Murrel (Korameenu) / కోరమీను - Live - Curry Cut - Skinless",
      des:"Freshwater prawns. De-shelled, cleaned, deveined",
        weight:"500 g",
        pieces:"32-72 Pieces",
        serve:"3-4",
        price:"₹729.00",
        cost:"₹349.00",
        offer:"15%",
        deliverytime:"Today in 90 Min"
    },
    {
      id : "bs-088",
      img:"https://godavaricuts.com/cdn/shop/files/Catla_940x.jpg?v=1682408746",
      name:"Catla / బోట్చీ - Live - Bengali Cut -With Head",
      des:"Freshwater prawns. De-shelled, cleaned, deveined",
      weight:"500 g",
      pieces:"32-72 Pieces",
      serve:"3-4",
      price:"₹729.00",
      cost:"₹349.00",
      offer:"15%",
      deliverytime:"Today in 90 Min"
    },
    {
      id : "bs-089",
      img:"https://godavaricuts.com/cdn/shop/files/Sea-Bass-450x450_1.jpg?v=1682947592",
      name:"Sea Bass (Pandugappa) - Curry Cut With Head",
      des:"Freshwater prawns. De-shelled, cleaned, deveined",
        weight:"500 g",
        pieces:"32-72 Pieces",
        serve:"3-4",
        price:"₹729.00",
        cost:"₹349.00",
        offer:"15%",
        deliverytime:"Today in 90 Min"
    },
    {
      id : "bs-090",
      img:"https://godavaricuts.com/cdn/shop/files/Tilapia_940x.jpg?v=1682674586",
      name:"Tilapia Whole Fish - Without Head",
      des:"Freshwater prawns. De-shelled, cleaned, deveined",
        weight:"500 g",
        pieces:"32-72 Pieces",
        serve:"3-4",
        price:"₹729.00",
        cost:"₹349.00",
        offer:"15%",
        deliverytime:"Today in 90 Min"
    },
    {
      id : "bs-091",
      img:"https://godavaricuts.com/cdn/shop/files/img_2919_534x.jpg?v=1691068350",
      name:"Tilapia Fillets - Fillet - Bone Less",
        des:"Freshwater prawns. De-shelled, cleaned, deveined",
        weight:"500 g",
        pieces:"32-72 Pieces",
        serve:"3-4",
        price:"₹729.00",
        cost:"₹349.00",
        offer:"15%",
        deliverytime:"Today in 90 Min"
    },
    {
      id : "bs-092",
      img:"https://godavaricuts.com/cdn/shop/files/basa-pangus-bonless-cubes_1_940x.jpg?v=1682945726",
      name:" Basa / Pangus - Cubes - Bone Less",
        des:"Freshwater prawns. De-shelled, cleaned, deveined",
        weight:"500 g",
        pieces:"32-72 Pieces",
        serve:"3-4",
        price:"₹729.00",
        cost:"₹349.00",
        offer:"15%",
        deliverytime:"Today in 90 Min"
    },
    {
      id : "bs-093",
      img:"https://godavaricuts.com/cdn/shop/files/DSC04120_940x.jpg?v=1682403131",
      name:"Basa / Pangus - Fillet - Bone Less",
      des:"Freshwater prawns. De-shelled, cleaned, deveined",
      weight:"250 g",
      pieces:"16-40 Pieces",
      serve:"2-3",
      price:"₹375.00",
      cost:"₹349.00",
      offer:"15%",
      deliverytime:"Today in 90 Min"
    }
    ]  
  },

   {
    // Shrimp
    id :"6",
    img : [
      {
        id : "20",
        img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F66e96bfe-5abc-2cd8-18a7-01a9eceb2bfa%2Foriginal%2FWhatsApp_Image_2022-04-13_at_2.16.31_PM.jpeg&w=384&q=75",
        name:"Freshwater/ White Prawns/ Royyalu (Medium) - Cleaned & Deveined ",
        des:"Freshwater prawns. De-shelled, cleaned, deveined",
        weight:"250 g",
        pieces:"16-40 Pieces",
        serve:"2-3",
        price:"₹375.00",
        cost:"₹349.00",
        offer:"15%",
        deliverytime:"Today in 90 Min"
      },
      {
        id : "21",
        img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Ff9a64569-86b4-62f2-f02c-7418feccda82%2Foriginal%2FFreshwater-Prawns-medium2.jpeg&w=384&q=75",
        name:"Freshwater/ White Prawns/ Royyalu (Medium) - Cleaned & Deveined ",
        des:"Freshwater prawns. De-shelled, cleaned, deveined",
        weight:"500 g",
        pieces:"32-72 Pieces",
        serve:"3-4",
        price:"₹729.00",
        cost:"₹349.00",
        offer:"15%",
        deliverytime:"Today in 90 Min" 
      },
      {
        id : "22",
        img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fd2407na1z3fc0t.cloudfront.net%2FprodDev%2Fpr_gi9kauyla8l%2F1%2Fprod_display_image%2F1623211757.2848--2021-06-0909%3A39%3A17--738&w=384&q=75",
        name:"Freshwater/ White Prawns/ Royyalu (Medium) - Cleaned & Deveined ",
        des:"Freshwater prawns. De-shelled, cleaned, deveined",
        weight:"500 g",
        pieces:"32-72 Pieces",
        serve:"3-4",
        price:"₹729.00",
        cost:"₹349.00",
        offer:"15%",
        deliverytime:"Today in 90 Min" 
      },
      {
        id : "23",
        img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fd2407na1z3fc0t.cloudfront.net%2FprodDev%2Fpr_gi9kauyla8l%2F1%2Fprod_display_image%2F1623211757.2848--2021-06-0909%3A39%3A17--738&w=384&q=75",
        name:"Freshwater/ White Prawns/ Royyalu (Small) - Cleaned & Deveined ",
        des:"Freshwater prawns. De-shelled, cleaned, deveined",
        weight:"500 g",
        pieces:"32-72 Pieces",
        serve:"3-4",
        price:"₹729.00",
        cost:"₹349.00",
        offer:"15%",
        deliverytime:"Today in 90 Min" 
      }, {
        id : "24",
        img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F7f4bdc51-123a-4854-075c-0762953faa4c%2Foriginal%2Funnamed.jpg&w=384&q=75",
        name:"Freshwater/ White Prawns/ Royyalu (Medium-Sized) - Cleaned & Deveined ",
        des:"Freshwater prawns. De-shelled, cleaned, deveined",
        weight:"500 g",
        pieces:"32-72 Pieces",
        serve:"3-4",
        price:"₹729.00",
        cost:"₹349.00",
        offer:"15%",
        deliverytime:"Today in 90 Min" 
      },
      {
        id : "25",
        img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F85d6826b-6f2e-259c-358d-86844cf5aad5%2Foriginal%2F1626790290.jpg&w=384&q=75",
        name:"Tiger Prawn/Seegadi (Large) - Cleaned & Deveined ",
        des:"Freshwater prawns. De-shelled, cleaned, deveined",
        weight:"250 g",
        pieces:"9-15 Pieces",
        serve:"3-4",
        price:"₹599.00",
        cost:"₹349.00",
        offer:"15%",
        
        deliverytime:"Today in 90 Min" 
      },
      {
        id : "26",
        img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F85d6826b-6f2e-259c-358d-86844cf5aad5%2Foriginal%2F1626790290.jpg&w=384&q=75",
        name:"Tiger Prawn/Seegadi (Large) - Cleaned & Deveined ",
        des:"Freshwater prawns. De-shelled, cleaned, deveined",
        weight:"500 g",
        pieces:"15-25 Pieces",
        serve:"3-4",
        price:"₹1099.00",
        cost:"₹349.00",
        offer:"15%",
        deliverytime:"Today in 90 Min" 
      }
    ]
  },
  {
    //Ready to cook
    id:"5",
    img:[
      {
        id:"bs-152",
        img:'https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F2df22fa8-07fe-66ba-e64c-8d3caa7b659f%2Foriginal%2FCOOKED_(28).jpg&w=384&q=75',
        name:"Crispy Prawn",
        des:"Crispy, juicy, nutty prawns, perfect for all cravings",
        weight:"200 g",
        pieces:"10-20 Pieces",
        serve:"2-3",
        price:"₹332.00",
        cost:"₹349.00",
        offer:'12%',
        deliverytime:"Today in 90 Min"
      },
      {
        id:"bs-153",
        img:'https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F2df22fa8-07fe-66ba-e64c-8d3caa7b659f%2Foriginal%2FCOOKED_(28).jpg&w=384&q=75',
        name:"Crispy Prawn",
        des:"Crispy, juicy, nutty prawns, perfect for all cravings",
        weight:"200 g",
        pieces:"10-20 Pieces",
        serve:"2-3",
        price:"₹332.00",
        cost:"₹349.00",
        offer:'12%',
        deliverytime:"Today in 90 Min"
      },
      {
        id:"bs-154",
        img:'https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F2df22fa8-07fe-66ba-e64c-8d3caa7b659f%2Foriginal%2FCOOKED_(28).jpg&w=384&q=75',
        name:"Crispy Prawn",
        des:"Crispy, juicy, nutty prawns, perfect for all cravings",
        weight:"200 g",
        pieces:"10-20 Pieces",
        serve:"2-3",
        price:"₹332.00",
        cost:"₹349.00",
        offer:'12%',
        deliverytime:"Today in 90 Min"
      },
      {
        id:"bs-155",
        img:'https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F2df22fa8-07fe-66ba-e64c-8d3caa7b659f%2Foriginal%2FCOOKED_(28).jpg&w=384&q=75',
        name:"Crispy Prawn",
        des:"Crispy, juicy, nutty prawns, perfect for all cravings",
        weight:"200 g",
        pieces:"10-20 Pieces",
        serve:"2-3",
        price:"₹332.00",
        cost:"₹349.00",
        offer:'12%',
        deliverytime:"Today in 90 Min"
      }
    ]
  },
  {
    //combo
    id:"7",
    img:[
      {
        id:"bs-156",
        img:'https://zinggy.in/image/images/qYgSKJbNm2L1gIRB8gO7WsQex11FB1UmoIQws7dM.jpeg?p=large',
        name:"White Prawns Medium + Rohu Large Bengali Cut-No Head-Prawns250Gms + Rohu Large 500Gms",
        des:"White Prawns Medium 250Gms + Rohu Large Bengali Cut-No Head 500Gms",
        weight:"200 g",
        pieces:"10-20 Pieces",
        serve:"2-3",
        price:"₹370.00",
        cost:"₹470.00",
        offer:'10%',
        deliverytime:"Today in 90 Min" 
      },
      {
        id:"bs-157",
        img:'https://zinggy.in/image/images/5TJIunqO1Cl9K0bMAYI5ShRQzBku7GcUo3EfcmM2.jpeg?p=large',
        name:"Fish Fingers (200gms) + Shrimp Tempura (200gms)",
        des:"Kolkata classic - Crispy Fish Fingers + Boneless basa pieces marinated",
        weight:"400 g",
        pieces:"10-20 Pieces",
        serve:"2-3",
        price:"₹449.00",
        cost:"₹649.00",
        offer:'10%',
        deliverytime:"Today in 90 Min" 
      }
    ]
  },
  {
    //Ready to eat
    id:"9",
    img:[
      {
        id:"bs-158",
        img:"https://cdn-dlopd.nitrocdn.com/WvjGxjzkqpCRBAFiAQBxkifGOZsxmrbF/assets/static/optimized/rev-3cf5128/wp-content/uploads/2021/09/Masala-Fish-Curry-Recipe-min-scaled.jpg",
        name:"Fish curry",
        des:"Kolkata classic - Crispy Fish Fingers + Boneless basa pieces marinated",
        weight:"400 g",
        pieces:"10-20 Pieces",
        serve:"2-3",
        price:"₹449.00",
        cost:"₹649.00",
        offer:'10%',
        deliverytime:"Today in 90 Min"
        
      },
      {
        id:"bs-159",
        img:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/b0944f99-05d7-d195-a0f9-6ce877e0611d/original/cooked-1.jpg",
        name:"Homestyle Chicken Curry",
        des:"Fragrant & Mildly Spicy",
        weight:"400 g",
        pieces:"10-20 Pieces",
        serve:"2-3",
        price:"₹249.00",
        cost:"₹349.00",
        offer:'10%',
        deliverytime:"Today in 90 Min"
        
      }
    ]

  }
]

const FishVariantCatagoery=[
  {
    //fish variants
    id : "bs-084",
    fish:
      {
        head:"RoopChand",
        img:"https://static.freshtohome.com/media/catalog/product/cache/1/image/400x267/18ae109e34f485bd0b0c075abec96b2e/r/u/rupchanda_whole_1_1_.jpg",
        mainname:"Whole",
        costprice:"₹175.00",
        sellingprice:"₹119.00",
        weight:"/500g",
        aboutfish:"Fish with good meat quality & great taste found commonly across almost all parts of India. Inspite of being a commoner, the Roopchand is a model when it comes to looks and taste.",
        storageprecautions:"Store under refrigeration at 4°C or below, in hygienic conditions",
        marketedBy:"Call Us : +91 6300599999 Email Us: support@zinggy.in Registered Address: Floor no.4, h no 7-1-621/259, sahithi arcade, Sanjeeva reddy nagar, beside sr nagar Traffic police station, hyderabad, hyderabad, Telangana, 500038.",
        fishname:"Rupchanda / Roopchand / River Pomfret (1kg to 1.8kg)",
       innerArray:[
        {
          id:"bs-101",
          img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/r/u/rupchanda_whole_1_1__1.jpg",
          name:"Whole",
          Grossweight:"0.69",
          netweight:"0.5",
          price:"₹159.00",
          weight:"500gms"
        },
       {
        id:"bs-102",
          img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/r/u/rupchanda_whole_cleaned_1.1kg.jpg",
          name:"Whole Cleaned (With Skin)",
          Grossweight:"0.69",
          netweight:"0.5",
          price:"₹159.00",
          weight:"500gms"
       },
        {
          id:"bs-103",
          img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/r/o/roopchand_curry_cut_1_1.jpg",
          name:"Curry Cut (may include head pieces, 480g to 500g Pack)",
          Grossweight:"0.69",
          netweight:"0.5",
          price:"₹159.00",
          weight:"500gms"
        },
        {
          id:"bs-104",
          img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/r/o/roopchand_steaks_1.jpg",
          name:"Steaks (480g to 500g Pack)",
          Grossweight:"0.69",
          netweight:"0.5",
          price:"₹159.00",
          weight:"500gms"
        }
       ]

      }  
  },
  {
//Rohu
id : "bs-085",

fish:
  {
    head:"Rohu/Seelavathi",
    img:"https://static.freshtohome.com/media/catalog/product/cache/1/image/400x267/18ae109e34f485bd0b0c075abec96b2e/r/o/rohu_whole_650to900g_1_2.jpg",
    mainname:"Whole",
    costprice:"₹219.00",
    sellingprice:"₹159.00",
    weight:"/500g",
    aboutfish:"Rohu, oh my Rohu - How Humble Thy Visage - as the Poet said. The Rohu maintains a very low profile in spite of being the king of Carps in India. Don't be fooled by its humble exterior - explore a bit deeper and you will realise that this is one of the most nutritious fish in our collection, rich in Vitamin C and equally rich in taste. Among the most commonly eaten fish in the country",
    storageprecautions:"Store under refrigeration at 4°C or below, in hygienic conditions",
    marketedBy:"Call Us : +91 6300599999 Email Us: support@zinggy.in Registered Address: Floor no.4, h no 7-1-621/259, sahithi arcade, Sanjeeva reddy nagar, beside sr nagar Traffic police station, hyderabad, hyderabad, Telangana, 500038.",
    fishname:"Rohu / Seelavathi(1.5kg to 2kg)",
    innerArray:[
      {
        id:"bs-105",
        img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/r/o/rohu-bengali-cut_without-head_02_2__3.jpg",
      name:"Bengali Cut (Headless)",
      Grossweight:"0.69",
      netweight:"0.5",
      price:"₹159.00",
      weight:"500gms"
      },
    {
      id:"bs-106",
      img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/r/o/rohu-bengali-cut-with-head.jpg",
      name:"Bengali Cut (with head)",
      Grossweight:"0.69",
      netweight:"0.5",
      price:"₹159.00",
      weight:"500gms"
    },
    {
      id:"bs-107",
      img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/r/o/rohu-slices.jpg",
      name:"Steaks",
      Grossweight:"0.69",
      netweight:"0.5",
      price:"₹159.00",
      weight:"500gms"
    },
    {
      id:"bs-108",
      img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/r/o/rohu_round_cut_4.jpg",
      name:"Steaks (480g to 500g Pack)",
      Grossweight:"0.69",
      netweight:"0.5",
      price:"₹159.00",
      weight:"500gms"
    }
    ]
  }

  },
  {
    id : "bs-087",
  fish:
  //murrel
  {
    head:"Murrel/Korameenu",
    img:"https://static.freshtohome.com/media/catalog/product/cache/1/image/400x267/18ae109e34f485bd0b0c075abec96b2e/s/n/snakehead_whole_.jpg",
    mainname:"Whole",
    costprice:"₹325.00",
    sellingprice:"₹299.00",
    weight:"/500g",
    aboutfish:"Fresh water fish having elongated round body and possess meat with good flavor",
    storageprecautions:"Store under refrigeration at 4°C or below, in hygienic conditions",
    marketedBy:"Call Us : +91 6300599999 Email Us: support@zinggy.in Registered Address: Floor no.4, h no 7-1-621/259, sahithi arcade, Sanjeeva reddy nagar, beside sr nagar Traffic police station, hyderabad, hyderabad, Telangana, 500038.",
    fishname:"Snake Head Fish / Varaal / Murrel (500g to 800g)",
    innerArray:[
      {
        id:"bs-109",
        img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/r/o/rohu-bengali-cut_without-head_02_2__3.jpg",
        name:"Curry Cut (May include head pieces) (480g to 500g Pack)",
        Grossweight:"0.69",
        netweight:"0.5",
        price:"₹159.00",
        weight:"500gms"
      },
      {
        id:"bs-110",
        img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/s/n/snake_head_whole.jpg",
        name:"Whole",
        Grossweight:"0.69",
        netweight:"0.5",
        price:"₹159.00",
        weight:"500gms"
      },
      {
        id:"bs-111",
        img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/s/n/snakehead_whole_cleaned.jpg",
        name:"Whole cleaned",
        Grossweight:"0.69",
        netweight:"0.5",
        price:"₹159.00",
        weight:"500gms"
      },
      {
        id:"bs-112",
        img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/s/n/snake_head_curry_cut.jpg",
      name:"Steaks (480g to 500g Pack)",
      Grossweight:"0.69",
      netweight:"0.5",
      price:"₹159.00",
      weight:"500gms"
      }
    
    ]
  }

},
{
  //Catla
  
  id : "bs-088",
fish:
{
  head:"Catla",
  img:"https://static.freshtohome.com/media/catalog/product/cache/1/image/400x267/18ae109e34f485bd0b0c075abec96b2e/k/a/katla_whole_1__1_1.jpg",
  mainname:"Whole",
  costprice:"₹175.00",
  sellingprice:"₹119.00",
  weight:"/500g",
  aboutfish:"The common man's fish - meaty and tasty, yet sought after by the kings and philosophers. It is said that a certain grey bearded Bengali philosopher understood the meaning of life after eating this fish.",
  storageprecautions:"Store under refrigeration at 4°C or below, in hygienic conditions",
  marketedBy:"Call Us : +91 6300599999 Email Us: support@zinggy.in Registered Address: Floor no.4, h no 7-1-621/259, sahithi arcade, Sanjeeva reddy nagar, beside sr nagar Traffic police station, hyderabad, hyderabad, Telangana, 500038.",
  fishname:"Catla  (1kg to 2kg)",
  innerArray:[
    {
      id:"bs-113",
      img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/c/a/catla_bengali_cut_1_2.jpg",
      name:"Bengali Cut Headless (480g to 500g Pack)",
      Grossweight:"0.69",
      netweight:"0.5",
      price:"₹159.00",
      weight:"500gms"
    },
   {
    id:"bs-114",
      img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/c/a/catla_bengali_cut_head_pieces_1_.jpg",
      name:"Bengali Cut with Head (480g to 500g Pack)",
      Grossweight:"0.69",
      netweight:"0.5",
      price:"₹159.00",
      weight:"500gms"
   },
    {
      id:"bs-115",
      img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/c/a/catla_whole_cleaned_2_1.jpg",
      name:"Whole Cleaned (Descaled,Cleaned, Not Cut In Pieces)",
      Grossweight:"0.69",
      netweight:"0.5",
      price:"₹159.00",
      weight:"500gms"
    },

    {
      id:"bs-116",
      img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/c/a/catla_bengali_cut_head_pieces__2.jpg",
      name:"Bengali Cut (include head piece)",
      Grossweight:"0.69",
      netweight:"0.5",
      price:"₹159.00",
      weight:"500gms"
    }
  ]
}
},
{
  //seabass
  
  id : "bs-089",
  fish:
  {
    head:"Seabass/ Pandugappa",
    img:"https://static.freshtohome.com/media/catalog/product/cache/1/image/400x267/18ae109e34f485bd0b0c075abec96b2e/b/h/bhetki_1.jpg",
    mainname:"Whole",
    costprice:"₹499.00",
    sellingprice:"₹489.00",
    weight:"/500g",
    aboutfish:"A fresh water fish with numerous names depending on where its caught from. This large fish is at the top of the fresh water fish food chain except for the Hilsa. Curry it, grill it or fry it but you can't find a fault with it",
    storageprecautions:"Store under refrigeration at 4°C or below, in hygienic conditions",
    marketedBy:"Call Us : +91 6300599999 Email Us: support@zinggy.in Registered Address: Floor no.4, h no 7-1-621/259, sahithi arcade, Sanjeeva reddy nagar, beside sr nagar Traffic police station, hyderabad, hyderabad, Telangana, 500038.",
    fishname:"Seabass(1.2kg to 2kg)",
    innerArray : [
      {
        id:"bs-117",
      img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/b/a/baramundi-asian-sea-bass-bengali-curry-cut_1.jpg",
      name:"Bengali Curry Cut (330 to 350g Pack)",
      Grossweight:"0.69",
      netweight:"0.5",
      price:"₹159.00",
      weight:"500gms"
    },
    {
      id:"bs-118",
      img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/b/h/bhekthi_asian_sea_bass_bengali_cut.jpg",
      name:"Bengali Cut (May include head piece)",
      Grossweight:"0.69",
      netweight:"0.5",
      price:"₹159.00",
      weight:"500gms"
    },
    {
      id:"bs-119",
      img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/b/h/bhethi_barramundi_curry_cut_head_pieces.jpg",
      name:"Curry Cut (May include head pieces)",
      Grossweight:"0.69",
      netweight:"0.5",
      price:"₹159.00",
      weight:"500gms"
    },
    {
      id:"bs-120",
      img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/b/h/bhatki_seabass_steaks_1.jpg",
      name:"Steaks",
      Grossweight:"0.69",
      netweight:"0.5",
      price:"₹159.00",
      weight:"500gms"
    }
      
      
    
    ]
  }
  
},
{
  //tilapia
  id : "bs-090",
 
  fish:
  {
    head:"Tilapia",
    img:"https://static.freshtohome.com/media/catalog/product/cache/1/image/400x267/18ae109e34f485bd0b0c075abec96b2e/t/i/tilapia_jalebi_fish_large_whole_1.jpg",
    mainname:"Whole",
    costprice:"₹169.00",
    sellingprice:"₹119.00",
    weight:"/500g",
    aboutfish:"Tilapia is a fish with such a rich history that the Egyptians considered it as a symbol of rebirth and all mummies used to be packed with the Tilapia symbol. In modern times, its taste is so rich that a couple of re-births are worth the Tilapia. Almost all Tilapia available in India are farmed in natural ponds & lakes",
    storageprecautions:"Store under refrigeration at 4°C or below, in hygienic conditions",
    marketedBy:"Call Us : +91 6300599999 Email Us: support@zinggy.in Registered Address: Floor no.4, h no 7-1-621/259, sahithi arcade, Sanjeeva reddy nagar, beside sr nagar Traffic police station, hyderabad, hyderabad, Telangana, 500038.",
    fishname:"Tilapia / Jalebi Fish (Large) (250g to 490g)",
    innerArray : [ {
      img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/t/i/tilapia_large_curry_cut.jpg",
      name:"Curry Cut (480g to 500g Pack) (May include head piece)",
      Grossweight:"0.69",
      netweight:"0.5",
      price:"₹159.00"
    },
    {

      id:"bs-121",
      img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/t/i/tilapia_large_fillet__1.jpg",
      name:"Fresh Fillets (250g to 270g Pack)",
      Grossweight:"0.69",
      netweight:"0.5",
      price:"₹159.00",
      weight:"500gms"
    },
    {
      id:"bs-122",
      img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/t/i/tilapia_fillet_1.jpg",
      name:"Boneless Fillet (480g to 500g Pack)",
      Grossweight:"0.69",
      netweight:"0.5",
      price:"₹159.00",
      weight:"500gms"
    },
    {
      id:"bs-123",
      img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/t/i/tilapia_jalebi_fish_large_whole_clean_1.jpg",
      name:"Whole Cleaned (480g to 580g Pack) ",
      Grossweight:"0.69",
      netweight:"0.5",
      price:"₹159.00",
      weight:"500gms"
    }
    ]
  }
  
},

{
  id : "20",
  fish:
  {
    head:" Vannamei ",
    img:"https://static.freshtohome.com/media/catalog/product/cache/1/image/400x267/18ae109e34f485bd0b0c075abec96b2e/s/m/small_cleaned_prawns.jpg",
    mainname:"Whole",
    costprice:"₹499.00",
    sellingprice:"₹279.00",
    weight:"/500g",
    aboutfish:"Everyone's favourite and staple food of all prawn lovers. Comes in a variety of colours and is savoured as curries, fried dishes or even with fried rice. Ever notice how hard it is to say it without smiling",
    storageprecautions:"Store under refrigeration at 4°C or below, in hygienic conditions",
    marketedBy:"Call Us : +91 6300599999 Email Us: support@zinggy.in Registered Address: Floor no.4, h no 7-1-621/259, sahithi arcade, Sanjeeva reddy nagar, beside sr nagar Traffic police station, hyderabad, hyderabad, Telangana, 500038.",
    fishname:"Small Cleaned Prawns",
    innerArray:[
      {
        id:"bs-124",
        img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/s/m/small_cleaned_prawns_2.jpg",
        name:"250g to 260g Pack",
        price:"₹159.00",
        weight:"500gms"
        // Grossweight:"0.69",
        // netweight:"0.5",
      },
     {
      id:"bs-125",
        img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/c/a/catalogue_small-cleaned-prawns_2_2.jpg",
        name:"Peeled, Cleaned but not deveined (PUD) (480g to 500g Pack",
        price:"₹159.00",
        weight:"500gms"
        // Grossweight:"0.69",
        // netweight:"0.5",
     },
      {
        id:"bs-126",
        img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/s/m/small_cleaned_prawns.jpeg",
        name:"950g to 1000g",
        price:"₹159.00",
        weight:"500gms"
        // Grossweight:"0.69",
        // netweight:"0.5",
      },
      {
        id:"bs-127",
        img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/s/m/small_cleaned_prawns.jpeg",
        name:"Marinated Small Shrimp Meat / Kucho Chingdi For Deep Fry (250g pack)",
        price:"₹159.00",
        weight:"500gms"
        // Grossweight:"0.69",
        // netweight:"0.5"
      }
    ]
  }

},
{
  id : "21",
  fish:
  {
    head:" Vannamei ",
    img:"https://static.freshtohome.com/media/catalog/product/cache/1/image/400x267/18ae109e34f485bd0b0c075abec96b2e/s/m/small_cleaned_prawns.jpg",
    mainname:"Whole",
    costprice:"₹499.00",
    sellingprice:"₹279.00",
    weight:"/500g",
    aboutfish:"Everyone's favourite and staple food of all prawn lovers. Comes in a variety of colours and is savoured as curries, fried dishes or even with fried rice. Ever notice how hard it is to say it without smiling",
    storageprecautions:"Store under refrigeration at 4°C or below, in hygienic conditions",
    marketedBy:"Call Us : +91 6300599999 Email Us: support@zinggy.in Registered Address: Floor no.4, h no 7-1-621/259, sahithi arcade, Sanjeeva reddy nagar, beside sr nagar Traffic police station, hyderabad, hyderabad, Telangana, 500038.",
    fishname:"Small Cleaned Prawns",
    innerArray:[
      {
        id:"bs-128",
        img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/s/m/small_cleaned_prawns_2.jpg",
        name:"250g to 260g Pack",
        price:"₹159.00",
        weight:"500gms"
        // Grossweight:"0.69",
        // netweight:"0.5",
      },
     {
      id:"bs-129",
        img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/c/a/catalogue_small-cleaned-prawns_2_2.jpg",
        name:"Peeled, Cleaned but not deveined (PUD) (480g to 500g Pack",
        price:"₹159.00",
        weight:"500gms"
        // Grossweight:"0.69",
        // netweight:"0.5",
     },
      {
        id:"bs-130",
        img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/s/m/small_cleaned_prawns.jpeg",
        name:"950g to 1000g",
        price:"₹159.00",
        weight:"500gms"
        // Grossweight:"0.69",
        // netweight:"0.5",
      },
      {
        id:"bs-131",
        img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/s/m/small_cleaned_prawns.jpeg",
        name:"Marinated Small Shrimp Meat / Kucho Chingdi For Deep Fry (250g pack)",
        price:"₹159.00",
        weight:"500gms"
        // Grossweight:"0.69",
        // netweight:"0.5"
      }
    ]
  }

},
{
  id : "22",
  fish:
  {
    head:" Vannamei ",
    img:"https://static.freshtohome.com/media/catalog/product/cache/1/image/400x267/18ae109e34f485bd0b0c075abec96b2e/s/m/small_cleaned_prawns.jpg",
    mainname:"Whole",
    costprice:"₹499.00",
    sellingprice:"₹279.00",
    weight:"/500g",
    aboutfish:"Everyone's favourite and staple food of all prawn lovers. Comes in a variety of colours and is savoured as curries, fried dishes or even with fried rice. Ever notice how hard it is to say it without smiling",
    storageprecautions:"Store under refrigeration at 4°C or below, in hygienic conditions",
    marketedBy:"Call Us : +91 6300599999 Email Us: support@zinggy.in Registered Address: Floor no.4, h no 7-1-621/259, sahithi arcade, Sanjeeva reddy nagar, beside sr nagar Traffic police station, hyderabad, hyderabad, Telangana, 500038.",
    fishname:"Small Cleaned Prawns",
    innerArray:[
      {
        id:"bs-132",
        img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/s/m/small_cleaned_prawns_2.jpg",
        name:"250g to 260g Pack",
        price:"₹159.00"
        ,weight:"500gms"
        // Grossweight:"0.69",
        // netweight:"0.5",
      },
     {
      id:"bs-133",
        img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/c/a/catalogue_small-cleaned-prawns_2_2.jpg",
        name:"Peeled, Cleaned but not deveined (PUD) (480g to 500g Pack",
        price:"₹159.00",
        weight:"500gms"
        // Grossweight:"0.69",
        // netweight:"0.5",
     },
      {
        id:"bs-134",
        img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/s/m/small_cleaned_prawns.jpeg",
        name:"950g to 1000g",
        price:"₹159.00",
        weight:"500gms"
        // Grossweight:"0.69",
        // netweight:"0.5",
      },
      {
        id:"bs-135",
        img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/s/m/small_cleaned_prawns.jpeg",
        name:"Marinated Small Shrimp Meat / Kucho Chingdi For Deep Fry (250g pack)",
        price:"₹159.00",
        weight:"500gms"
        // Grossweight:"0.69",
        // netweight:"0.5"
      }
    ]
  }

},
{
  id : "23",
  fish:
  {
    head:" Vannamei ",
    img:"https://static.freshtohome.com/media/catalog/product/cache/1/image/400x267/18ae109e34f485bd0b0c075abec96b2e/s/m/small_cleaned_prawns.jpg",
    mainname:"Whole",
    costprice:"₹499.00",
    sellingprice:"₹279.00",
    weight:"/500g",
    aboutfish:"Everyone's favourite and staple food of all prawn lovers. Comes in a variety of colours and is savoured as curries, fried dishes or even with fried rice. Ever notice how hard it is to say it without smiling",
    storageprecautions:"Store under refrigeration at 4°C or below, in hygienic conditions",
    marketedBy:"Call Us : +91 6300599999 Email Us: support@zinggy.in Registered Address: Floor no.4, h no 7-1-621/259, sahithi arcade, Sanjeeva reddy nagar, beside sr nagar Traffic police station, hyderabad, hyderabad, Telangana, 500038.",
    fishname:"Small Cleaned Prawns",
    innerArray:[
      {
        id:"bs-136",
        img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/s/m/small_cleaned_prawns_2.jpg",
        name:"250g to 260g Pack",
        price:"₹159.00"
        ,weight:"500gms"
        // Grossweight:"0.69",
        // netweight:"0.5",
      },
     {
      id:"bs-137",
        img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/c/a/catalogue_small-cleaned-prawns_2_2.jpg",
        name:"Peeled, Cleaned but not deveined (PUD) (480g to 500g Pack",
        price:"₹159.00",
        weight:"500gms"
        // Grossweight:"0.69",
        // netweight:"0.5",
     },
      {
        id:"bs-138",
        img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/s/m/small_cleaned_prawns.jpeg",
        name:"950g to 1000g",
        price:"₹159.00",
        weight:"500gms"
        // Grossweight:"0.69",
        // netweight:"0.5",
      },
      {
        id:"bs-139",
        img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/s/m/small_cleaned_prawns.jpeg",
        name:"Marinated Small Shrimp Meat / Kucho Chingdi For Deep Fry (250g pack)",
        price:"₹159.00",
        weight:"500gms"
        // Grossweight:"0.69",
        // netweight:"0.5"
      }
    ]
  }

},
{
  id : "24",
  fish:
  {
    head:" Vannamei ",
    img:"https://static.freshtohome.com/media/catalog/product/cache/1/image/400x267/18ae109e34f485bd0b0c075abec96b2e/s/m/small_cleaned_prawns.jpg",
    mainname:"Whole",
    costprice:"₹499.00",
    sellingprice:"₹279.00",
    weight:"/500g",
    aboutfish:"Everyone's favourite and staple food of all prawn lovers. Comes in a variety of colours and is savoured as curries, fried dishes or even with fried rice. Ever notice how hard it is to say it without smiling",
    storageprecautions:"Store under refrigeration at 4°C or below, in hygienic conditions",
    marketedBy:"Call Us : +91 6300599999 Email Us: support@zinggy.in Registered Address: Floor no.4, h no 7-1-621/259, sahithi arcade, Sanjeeva reddy nagar, beside sr nagar Traffic police station, hyderabad, hyderabad, Telangana, 500038.",
    fishname:"Small Cleaned Prawns",
    innerArray:[
      {
        id:"bs-140",
        img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/s/m/small_cleaned_prawns_2.jpg",
        name:"250g to 260g Pack",
        price:"₹159.00",
        weight:"500gms"
        // Grossweight:"0.69",
        // netweight:"0.5",
      },
     {
      id:"bs-141",
        img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/c/a/catalogue_small-cleaned-prawns_2_2.jpg",
        name:"Peeled, Cleaned but not deveined (PUD) (480g to 500g Pack",
        price:"₹159.00",
        weight:"500gms"
        // Grossweight:"0.69",
        // netweight:"0.5",
     },
      {
        id:"bs-142",
        img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/s/m/small_cleaned_prawns.jpeg",
        name:"950g to 1000g",
        price:"₹159.00",
        weight:"500gms"
        // Grossweight:"0.69",
        // netweight:"0.5",
      },
      {
        id:"bs-143",
        img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/s/m/small_cleaned_prawns.jpeg",
        name:"Marinated Small Shrimp Meat / Kucho Chingdi For Deep Fry (250g pack)",
        price:"₹159.00",
        weight:"500gms"
        // Grossweight:"0.69",
        // netweight:"0.5"
      }
    ]
  }

},
{
  id : "25",
  fish:
    {
      head:" Vannamei ",
      img:"https://static.freshtohome.com/media/catalog/product/cache/1/image/400x267/18ae109e34f485bd0b0c075abec96b2e/s/m/small_cleaned_prawns.jpg",
      mainname:"Whole",
      costprice:"₹499.00",
      sellingprice:"₹279.00",
      weight:"/500g",
      aboutfish:"Everyone's favourite and staple food of all prawn lovers. Comes in a variety of colours and is savoured as curries, fried dishes or even with fried rice. Ever notice how hard it is to say it without smiling",
      storageprecautions:"Store under refrigeration at 4°C or below, in hygienic conditions",
      marketedBy:"Call Us : +91 6300599999 Email Us: support@zinggy.in Registered Address: Floor no.4, h no 7-1-621/259, sahithi arcade, Sanjeeva reddy nagar, beside sr nagar Traffic police station, hyderabad, hyderabad, Telangana, 500038.",
      fishname:"Small Cleaned Prawns",
      innerArray:[
        {
          id:"bs-144",
          img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/i/n/indian_prawns_venami_70_count_headless.jpg",
          name:"Headless (No Head, Rest with shell, tail) (480g to 500g Pack)",
          price:"₹159.00",
          weight:"500gms"
          // Grossweight:"0.69",
          // netweight:"0.5",
        },
       {
        id:"bs-145",
          img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/i/n/indian_prawn_venami_60_count_tail_on.jpg",
          name:"Tail On (240g to 260g Pack)",
          price:"₹159.00",
          weight:"500gms"
          // Grossweight:"0.69",
          // netweight:"0.5",
       },
        {
          id:"bs-146",
          img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/i/n/indian_prawns_venami_70_count_headless_1__1_1.jpg",
          name:"Headless (No Head, Rest with shell, tail)",
          price:"₹159.00",
          weight:"500gms"
          // Grossweight:"0.69",
          // netweight:"0.5",
        },
        {
          id:"bs-147",
          img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/i/n/indian_prawns_tail_on_3.jpg",
          name:"Tail on (Peeled, Undeveined, With tail)",
          price:"₹159.00",
          weight:"500gms"
          // Grossweight:"0.69",
          // netweight:"0.5"
        }
      ]
    }
    
  
},
{
  id : "26",
  fish:
    {
      head:" Vannamei ",
      img:"https://static.freshtohome.com/media/catalog/product/cache/1/image/400x267/18ae109e34f485bd0b0c075abec96b2e/s/m/small_cleaned_prawns.jpg",
      mainname:"Whole",
      costprice:"₹499.00",
      sellingprice:"₹279.00",
      weight:"/500g",
      aboutfish:"Everyone's favourite and staple food of all prawn lovers. Comes in a variety of colours and is savoured as curries, fried dishes or even with fried rice. Ever notice how hard it is to say it without smiling",
      storageprecautions:"Store under refrigeration at 4°C or below, in hygienic conditions",
      marketedBy:"Call Us : +91 6300599999 Email Us: support@zinggy.in Registered Address: Floor no.4, h no 7-1-621/259, sahithi arcade, Sanjeeva reddy nagar, beside sr nagar Traffic police station, hyderabad, hyderabad, Telangana, 500038.",
      fishname:"Small Cleaned Prawns",
      innerArray:[
        {
          id:"bs-148",
          img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/i/n/indian_prawns_venami_70_count_headless.jpg",
          name:"Headless (No Head, Rest with shell, tail) (480g to 500g Pack)",
          price:"₹159.00",
          weight:"500gms"
          // Grossweight:"0.69",
          // netweight:"0.5",
        },
       {
        id:"bs-149",
          img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/i/n/indian_prawn_venami_60_count_tail_on.jpg",
          name:"Tail On (240g to 260g Pack)",
          price:"₹159.00",
          weight:"500gms"
          // Grossweight:"0.69",
          // netweight:"0.5",
       },
        {
          id:"bs-150",
          img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/i/n/indian_prawns_venami_70_count_headless_1__1_1.jpg",
          name:"Headless (No Head, Rest with shell, tail)",
          price:"₹159.00",
          weight:"500gms"
          // Grossweight:"0.69",
          // netweight:"0.5",
        },
        {
          id:"bs-151",
          img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/i/n/indian_prawns_tail_on_3.jpg",
          name:"Tail on (Peeled, Undeveined, With tail)",
          price:"₹159.00",
          weight:"500gms"
          // Grossweight:"0.69",
          // netweight:"0.5"
        }
      ]
    }
    
  
}

] 


const shrimpdata=[
  {
      img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F66e96bfe-5abc-2cd8-18a7-01a9eceb2bfa%2Foriginal%2FWhatsApp_Image_2022-04-13_at_2.16.31_PM.jpeg&w=384&q=75",
      name:"Freshwater/ White Prawns/ Royyalu (Medium) - Cleaned & Deveined ",
      des:"Freshwater prawns. De-shelled, cleaned, deveined",
      weight:"250 g",
      pieces:"16-40 Pieces",
      serve:"2-3",
      price:"₹375.00",
      cost:"₹349.00",
      offer:"15%",
      deliverytime:"Today in 90 Min"
    },
    {
      img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Ff9a64569-86b4-62f2-f02c-7418feccda82%2Foriginal%2FFreshwater-Prawns-medium2.jpeg&w=384&q=75",
      name:"Freshwater/ White Prawns/ Royyalu (Medium) - Cleaned & Deveined ",
      des:"Freshwater prawns. De-shelled, cleaned, deveined",
      weight:"500 g",
      pieces:"32-72 Pieces",
      serve:"3-4",
      price:"₹729.00",
      cost:"₹349.00",
      offer:"15%",
      deliverytime:"Today in 90 Min" 
    },
    {
      img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fd2407na1z3fc0t.cloudfront.net%2FprodDev%2Fpr_gi9kauyla8l%2F1%2Fprod_display_image%2F1623211757.2848--2021-06-0909%3A39%3A17--738&w=384&q=75",
      name:"Freshwater/ White Prawns/ Royyalu (Medium) - Cleaned & Deveined ",
      des:"Freshwater prawns. De-shelled, cleaned, deveined",
      weight:"500 g",
      pieces:"32-72 Pieces",
      serve:"3-4",
      price:"₹729.00",
      cost:"₹349.00",
      offer:"15%",
      deliverytime:"Today in 90 Min" 
    },
    {
      img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fd2407na1z3fc0t.cloudfront.net%2FprodDev%2Fpr_gi9kauyla8l%2F1%2Fprod_display_image%2F1623211757.2848--2021-06-0909%3A39%3A17--738&w=384&q=75",
      name:"Freshwater/ White Prawns/ Royyalu (Small) - Cleaned & Deveined ",
      des:"Freshwater prawns. De-shelled, cleaned, deveined",
      weight:"500 g",
      pieces:"32-72 Pieces",
      serve:"3-4",
      price:"₹729.00",
      cost:"₹349.00",
      offer:"15%",
      deliverytime:"Today in 90 Min" 
    }, {
      img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F7f4bdc51-123a-4854-075c-0762953faa4c%2Foriginal%2Funnamed.jpg&w=384&q=75",
      name:"Freshwater/ White Prawns/ Royyalu (Medium-Sized) - Cleaned & Deveined ",
      des:"Freshwater prawns. De-shelled, cleaned, deveined",
      weight:"500 g",
      pieces:"32-72 Pieces",
      serve:"3-4",
      price:"₹729.00",
      cost:"₹349.00",
      offer:"15%",
      deliverytime:"Today in 90 Min" 
    },
    {
      img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F85d6826b-6f2e-259c-358d-86844cf5aad5%2Foriginal%2F1626790290.jpg&w=384&q=75",
      name:"Tiger Prawn/Seegadi (Large) - Cleaned & Deveined ",
      des:"Freshwater prawns. De-shelled, cleaned, deveined",
      weight:"250 g",
      pieces:"9-15 Pieces",
      serve:"3-4",
      price:"₹599.00",
      cost:"₹349.00",
      offer:"15%",
      deliverytime:"Today in 90 Min" 
    },
    {
      img:"https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F85d6826b-6f2e-259c-358d-86844cf5aad5%2Foriginal%2F1626790290.jpg&w=384&q=75",
      name:"Tiger Prawn/Seegadi (Large) - Cleaned & Deveined ",
      des:"Freshwater prawns. De-shelled, cleaned, deveined",
      weight:"500 g",
      pieces:"15-25 Pieces",
      serve:"3-4",
      price:"₹1099.00",
      cost:"₹349.00",
      offer:"15%",
      deliverytime:"Today in 90 Min" 
    }
  
  ]

const Shrimptypes=[
  {
    id:"1",
  prawn:[
    {
      head:" Vannamei ",
      img:"https://static.freshtohome.com/media/catalog/product/cache/1/image/400x267/18ae109e34f485bd0b0c075abec96b2e/s/m/small_cleaned_prawns.jpg",
      mainname:"Whole",
      costprice:"₹499.00",
      sellingprice:"₹279.00",
      weight:"/500g",
      aboutfish:"Everyone's favourite and staple food of all prawn lovers. Comes in a variety of colours and is savoured as curries, fried dishes or even with fried rice. Ever notice how hard it is to say it without smiling",
      storageprecautions:"Store under refrigeration at 4°C or below, in hygienic conditions",
      marketedBy:"Call Us : +91 6300599999 Email Us: support@zinggy.in Registered Address: Floor no.4, h no 7-1-621/259, sahithi arcade, Sanjeeva reddy nagar, beside sr nagar Traffic police station, hyderabad, hyderabad, Telangana, 500038.",
      fishname:"Small Cleaned Prawns",
      innerArray:[
        {
          img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/s/m/small_cleaned_prawns_2.jpg",
          name:"250g to 260g Pack",
          // Grossweight:"0.69",
          // netweight:"0.5",
        },
       {
          img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/c/a/catalogue_small-cleaned-prawns_2_2.jpg",
          Catname:"Peeled, Cleaned but not deveined (PUD) (480g to 500g Pack",
          // Grossweight:"0.69",
          // netweight:"0.5",
       },
        {
          img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/s/m/small_cleaned_prawns.jpeg",
          Catname:"950g to 1000g",
          // Grossweight:"0.69",
          // netweight:"0.5",
        },
        {
          img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/r/o/roopchand_steaks_1.jpg",
          Catname:"Marinated Small Shrimp Meat / Kucho Chingdi For Deep Fry (250g pack)",
          // Grossweight:"0.69",
          // netweight:"0.5"
        }
      ]
    }
  ]
  },
  {
    id:'6',
    prawn:[
      {
        head:" Vannamei ",
        img:"https://static.freshtohome.com/media/catalog/product/cache/1/image/400x267/18ae109e34f485bd0b0c075abec96b2e/s/m/small_cleaned_prawns.jpg",
        mainname:"Whole",
        costprice:"₹499.00",
        sellingprice:"₹279.00",
        weight:"/500g",
        aboutfish:"Everyone's favourite and staple food of all prawn lovers. Comes in a variety of colours and is savoured as curries, fried dishes or even with fried rice. Ever notice how hard it is to say it without smiling",
        storageprecautions:"Store under refrigeration at 4°C or below, in hygienic conditions",
        marketedBy:"Call Us : +91 6300599999 Email Us: support@zinggy.in Registered Address: Floor no.4, h no 7-1-621/259, sahithi arcade, Sanjeeva reddy nagar, beside sr nagar Traffic police station, hyderabad, hyderabad, Telangana, 500038.",
        fishname:"Small Cleaned Prawns",
        innerArray:[
          {
            img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/i/n/indian_prawns_venami_70_count_headless.jpg",
            Catname:"Headless (No Head, Rest with shell, tail) (480g to 500g Pack)",
            // Grossweight:"0.69",
            // netweight:"0.5",
          },
         {
            img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/i/n/indian_prawn_venami_60_count_tail_on.jpg",
            Catname:"Tail On (240g to 260g Pack)",
            // Grossweight:"0.69",
            // netweight:"0.5",
         },
          {
            img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/i/n/indian_prawns_venami_70_count_headless_1__1_1.jpg",
            Catname:"Headless (No Head, Rest with shell, tail)",
            // Grossweight:"0.69",
            // netweight:"0.5",
          },
          {
            img:"https://static.freshtohome.com/media/catalog/product/cache/1/small_image/250x167/fcd3bd6c3efbd120e0394bcc9203d80f/i/n/indian_prawns_tail_on_3.jpg",
            Catname:"Tail on (Peeled, Undeveined, With tail)",
            // Grossweight:"0.69",
            // netweight:"0.5"
          }
        ]
      }
      
    ]
  }
]
function App() {
  // const [cartList, setCartList] = useState([])

  // const addCartItem = (event) => {
  //    setCartList([...cartList, event])
  //    console.log(event)
  // }

  // const removeCartItem = () => {}
  const [cartList,setCartList]=useState([])

  useEffect(() => {
    let storageData = JSON.parse(localStorage.getItem("card"))
    console.log(storageData)
    if(storageData?.length !== 0){
      setCartList(storageData)
    }
  
  }, [])
  // console.log(cartList)



  const addCartItem=(event)=>{

    // let aa = Array(cartList)
   
    setCartList([...cartList, event])
    localStorage.setItem("card", JSON.stringify(cartList))
    console.log(event)
  }


//remove from cart
  const removeCartItem =(item) => {
    console.log(item.id)
    let filterData = cartList.filter(each => each.id !== item.id);
    localStorage.setItem("card", JSON.stringify(filterData))
    console.log(filterData)
    setCartList(filterData)
   // console.log(item)
  }

  return (
    <div className="App">
      <Routers>
       <CartContext.Provider  value={{
        cartList,
        addcartItem:addCartItem,
        removecartItem:removeCartItem,
       }}>
      <Header />
     
      <div className='mainnn'>
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
          {/* <Fheader Fshxstypes={Fshxstypes} /> */}
          {/* <Freshfood /> */}
          {/* <Breakfast BFS={BFS}/> */}
          {/* <Fish fishes={fishes}/> */}
          {/* <FishType Fishtypes={Fishtypes}/> */} 
          <Readytocook RTCFshxstypes={RTCFshxstypes}/>
         {/* <FishCurry/> */}
         {/* <TypesOfFishes/> */}
         {/* <Formfile/> */}

         {/* <ShrimpCat shrimpdata={shrimpdata}/> */}
         {/* <OpenPopup/> */}
         <Scroll/>
          

       </> } /> 
       <Route path='/loginlink' element={<Loginpage/>}/>
       <Route path='/registerlink' element={< RegisterPage/>}/>

       <Route path='/tof/:id' element={<Fish FishVariantCatagoery={FishVariantCatagoery}/>}/>
       <Route path='/signup'  element={<RegisterPage/>}/>
          <Route path='/login'element={<Loginpage/>}/> 
           <Route path='/ftypes' element={<Fish fishes={fishes}/>}/>
          {/* <Route path='/fishes' element={<FishType Fishtypes={Fishtypes} />}/> */}
          <Route path='/recipe' element={<MbFresh About={About}/>}/>
         <Route path='/bestseller' element={<Chicken About={About} />} />
         <Route path="/fresh-zinggy" element ={<FreshZinggy />} />
         <Route path='/differentfish/:id' element={<TypesOfFishes catagoryitems={catagoryitems} />} />
         <Route path='/tops' element={<Fish fishes={fishes} /> }/>
         <Route path ="/card" element={<CartListView />} />
      </Routes>

     
      </div>
      </CartContext.Provider>
      </Routers > 
    </div>
  );
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

export default App;
